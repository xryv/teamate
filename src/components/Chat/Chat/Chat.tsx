import { type FormEvent, useState, type ChangeEvent, useEffect } from 'react';
import { ChatList } from '../ChatList/ChatList';
import { ChatBar } from '../ChatBar/ChatBar';
import { useFetchRecipientUser } from '../../../hooks/useFetchRecipient';
import { useChatContext } from '../../../context/ChatContext';
import { useAuthContext } from '../../../context/AuthContext';
// import { ToggleUser } from '../ToggleUser/ToggleUser';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5001');

export function Chat(): JSX.Element {
    const { user } = useAuthContext(['user']);
    const { currentChat, messages, isMessagesLoading, sendTextMessage, editMessage, deleteMessage } = useChatContext(['currentChat', 'messages', 'isMessagesLoading', 'sendTextMessage', 'editMessage', 'deleteMessage']);
    const recipientUser = useFetchRecipientUser({ chat: currentChat, user });
    const [message, setMessage] = useState<string>('');
    const [editId, setEditId] = useState<string>('');

    // console.log('message', message);
    // console.log('editId', editId);

    // useEffect(() => {
    //     if (editId !== '') {
    //         const recipientId = currentChat?.members.find((id) => id !== user?._id);
    //         const editedMessage = { messageId: editId, newText: message, recipientId };
    //         console.log(editedMessage); // Ajout du console.log ici
    //         socket.emit('editMessage', editedMessage);
    //     }
    // }, [editId, message]);

    // fonction qui gère la soumission du formulaire et l'ajout d'un message dans la liste des messages

    function handleClick(): void {
        if (editId !== '' && message.length > 0) {
            if (editMessage != null) {
                void editMessage(editId, message);
                const recipientId = currentChat?.members.find((idForEdit) => idForEdit !== user?._id);
                const editedMessage = { messageId: editId, newText: message, recipientId };
                socket.emit('editMessage', editedMessage);
            }
            setEditId('');
        } else if (editId === '' && message.length > 0) {
            if (sendTextMessage != null) void sendTextMessage(message, user, currentChat?._id, setMessage);
        }
        setMessage('');
    }
    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        handleClick();
    }

    // fonction qui gère le changement de l'input texte et l'ajout d'un message dans la liste des messages
    function handleChange(e: ChangeEvent<HTMLInputElement> | { native: string }): void {
        // si l'événement est un changement de texte, mettre à jour le message
        if ('target' in e) {
            setMessage(e.target.value);
        } else if ('native' in e) {
            setMessage((prevMessage) => prevMessage + e.native);
        }
    }

    // fonction qui renvoie le message à éditer dans le input texte
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

    return (
        <>
            <ChatList list={messages} user={user} onEdit={handleEdit} recipientUser={recipientUser} isMessagesLoading={isMessagesLoading} onDelete={onDelete} />
            <ChatBar onClick={handleClick} onsubmit={handleSubmit} onEmojiSelect={handleChange} placeholder='Message' value={message} name={`message from  ${user?.username}`} onChange={handleChange} />        </>
    );
}
