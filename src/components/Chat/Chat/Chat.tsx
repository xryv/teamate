import { type FormEvent, useState, type ChangeEvent } from 'react';
import { ChatList } from '../ChatList/ChatList';
import { ChatBar } from '../ChatBar/ChatBar';
import { useFetchRecipientUser } from '../../../hooks/useFetchRecipient';
import { useChatContext } from '../../../context/ChatContext';
import { useAuthContext } from '../../../context/AuthContext';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5001');

export function Chat(): JSX.Element {
    const { user } = useAuthContext(['user']);
    const { currentChat, messages, isMessagesLoading, sendTextMessage, editMessage, deleteMessage, deleteImageUrl } = useChatContext(['currentChat', 'messages', 'isMessagesLoading', 'sendTextMessage', 'editMessage', 'deleteMessage', 'deleteImageUrl']);
    const recipientUser = useFetchRecipientUser({ chat: currentChat, user });
    const [message, setMessage] = useState<string>('');
    const [editId, setEditId] = useState<string>('');
    const [uploading, setUploading] = useState<boolean>(false);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [errorImg, setErrorImg] = useState<string | null>(null);
    const imgAllowed = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/svg', 'image/webp'];

    // useEffect(() => {
    //     if (editId !== '') {
    //         const recipientId = currentChat?.members.find((id) => id !== user?._id);
    //         const editedMessage = { messageId: editId, newText: message, recipientId };
    //         socket.emit('editMessage', editedMessage);
    //     }
    // }, [editId, message]);

    function handleClick(): void {
        if (editId !== '' && message.length > 0) {
            if (editMessage != null) {
                void editMessage(editId, message);
                const recipientId = currentChat?.members.find((idForEdit) => idForEdit !== user?._id);
                const editedMessage = { messageId: editId, newText: message, recipientId };
                socket.emit('editMessage', editedMessage);
            }
            setEditId('');
        } else if (editId === '' && user !== undefined && currentChat !== undefined && sendTextMessage != null) {
            if (message.length > 0 || selectedImages.length > 0) {
                void sendTextMessage(message, user, currentChat?._id, setMessage, selectedImages);
            }
        }
        setMessage('');
        setSelectedImages([]);
    }
    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        handleClick();
    }
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files !== null && e.target.files.length > 0) {
            setUploading(true);
            const filesArray = Array.from(e.target.files).filter((file) => {
                // Vérifie si le fichier est une image et si sa taille est inférieure à 4 Mo et si le nombre d'images est inférieur à 4
                if (!imgAllowed.includes(file.type)) {
                    setErrorImg('Seuls les fichiers image de type jpeg, png, jpg, gif, svg et webp sont autorisés.');
                    return false;
                } else if (file.size > 4000000) {
                    setErrorImg('La taille de l\'image ne doit pas dépasser 4 Mo.');
                    return false;
                } else if (selectedImages.length >= 4) {
                    setErrorImg('Vous ne pouvez pas envoyer plus de 4 images à la fois.');
                    return false;
                }
                setErrorImg(null);
                return true;
            }).map((file) =>
                URL.createObjectURL(file),
            );

            setSelectedImages((prevImages) => prevImages.concat(filesArray));

            Array.from(e.target.files).map(
                (file) => {
                    URL.revokeObjectURL(file as unknown as string);
                    return null;
                },
            );
            setUploading(false);
        }
    };

    function handleChange(e: ChangeEvent<HTMLInputElement> | { native: string }): void {
        if ('target' in e) {
            setMessage(e.target.value);
        } else if ('native' in e) {
            setMessage((prevMessage) => prevMessage + e.native);
        }
    }

    function handleEdit(_id: string): void {
        const messageToEdit = messages?.find(msg => msg?._id === _id);
        if (messageToEdit !== undefined) {
            setMessage(messageToEdit.text);
            setEditId(messageToEdit._id);
        } else {
            console.error(`No message found with id : ${_id}`);
        }
    }

    function onDelete(id: string): void {
        if (deleteMessage != null) void deleteMessage(id);
        const recipientId = currentChat?.members.find((idForDelete) => idForDelete !== user?._id);
        const deletedMessage = { messageId: id, recipientId };
        socket.emit('deleteMessage', deletedMessage);
    }

    function onDeleteImg(id: string, url: string): void {
        if (deleteImageUrl != null) void deleteImageUrl(id, url);
        const recipientId = currentChat?.members.find((idForDeleteImg) => idForDeleteImg !== user?._id);
        if (messages != null) {
            messages.forEach((msg) => {
                if (msg.text == null && msg.imageUrls?.length === 1) {
                    onDelete(msg._id);
                }
            });
        }
        const deletedImageUrl = { messageId: id, imageUrl: url, recipientId };
        socket.emit('deleteImageUrl', deletedImageUrl);
    }

    function handleDeleteImage(url: string): void {
        setSelectedImages((prevImages) => prevImages.filter((img) => img !== url));
    }

    // useEffect(() => {
    //     if (messages != null) {
    //         messages.forEach((msg) => {
    //             if (msg.text == null && (msg.imageUrls == null || msg.imageUrls.length === 0)) {
    //                 onDelete(msg._id);
    //             }
    //         });
    //     }
    // }, [messages]);

    return (
        <>
            <ChatList list={messages} user={user} onEdit={handleEdit} recipientUser={recipientUser} isMessagesLoading={isMessagesLoading} onDelete={onDelete} onDeleteImg={onDeleteImg}/>
            <ChatBar onClick={handleClick} onSubmit={handleSubmit} placeholder='Message' value={message} name={`message from  ${user?.username}`} onChange={handleChange} selectedImages={selectedImages} uploading={uploading} onChangeImages={handleImageChange} onClickDeleteImage={handleDeleteImage} error={errorImg} onEmojiSelect={handleChange}/>
        </>
    );
}
