import { type FormEvent, useState, type MouseEventHandler, type ChangeEvent, type SetStateAction, useEffect } from 'react';
import { ChatList } from '../ChatList/ChatList';
import { ChatBar } from '../ChatBar/ChatBar';
import { ToggleUser } from '../ToggleUser/ToggleUser';
// import { io } from 'socket.io-client';

interface Message {
    message?: string | undefined
    id: string
    user: boolean
    timestamp: string
}
// const socket = io('http://localhost:3001');

export function Chat(): JSX.Element {
    const [message, setMessage] = useState<string | undefined>('');
    const [, setImage] = useState<string | null>(null);
    const [listMessages, setListMessages] = useState<Message[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [toggleUser, setToggleUser] = useState<boolean>(false);
    // const [messageReceive, setMessageReceive] = useState<string>('');

    // fonction qui génère un nouvel id, un nouvel utilisateur et un nouveau timestamp
    function generateNewMessageMetadata(): { id: string, user: boolean, timestamp: string } {
        const id = new Date().getTime().toString();
        const user = !toggleUser;
        const timestamp = new Date().toLocaleTimeString().slice(0, 5);
        return { id, user, timestamp };
    }

    // fonction qui gère la soumission du formulaire et l'ajout d'un message dans la liste des messages
    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        const { id, user, timestamp } = generateNewMessageMetadata();
        setListMessages((prevMessages) => {
            if (message !== '') {
                // parcourir listMessages pour trouver le message à éditer et le remplacer par le nouveau message édité ou ajouter un nouveau message si aucun message n'est en cours d'édition
                return prevMessages.map((msg) => (msg.id === editingId ? { ...msg, message, timestamp } : msg)).concat(editingId === null ? [{ message, id, user, timestamp }] : []);
            }
            // si le message est vide, ne rien faire
            return prevMessages;
        });
        setMessage('');
        setEditingId(null);
    }
    // fonction qui gère le changement de fichier et l'ajout d'un message avec une image dans la liste des messages
    function handleFileChange(file: File): void {
        const reader = new FileReader();
        reader.onloadend = () => {
            let image: SetStateAction<string | null> = null;
            if (typeof reader.result === 'string') {
                image = reader.result;
            }
            setImage(image);
            const { id, user, timestamp } = generateNewMessageMetadata();
            // ajouter un nouveau message avec une image dans la liste des messages
            const newListMessages = [...listMessages, { id, user, timestamp, image }];
            setListMessages(newListMessages);
        };
        reader.readAsDataURL(file);
    }

    // fonction qui gère le changement de l'input texte et l'ajout d'un message dans la liste des messages
    function handleChange(e: ChangeEvent<HTMLInputElement> | { native: string }): void {
        // si l'événement est un changement de fichier, appeler handleFileChange
        if ('target' in e) {
            const file = e.target.files?.[0];
            // si un fichier est sélectionné, appeler handleFileChange
            if (file !== undefined) {
                handleFileChange(file);
            // si l'événement est un changement de texte, mettre à jour le message
            } else if (e.target.value !== undefined) {
                setMessage(e.target.value);
            }
        // si l'événement est un changement de texte, mettre à jour le message
        } else if (typeof e.native === 'string') {
            setMessage((prevMessage) => prevMessage + e.native);
        }
    }

    // fonction qui renvoie le message à éditer dans le input texte
    function handleEdit(id: string): void {
        const messageToEdit = listMessages.find(msg => msg.id === id);
        if (messageToEdit !== undefined) {
            console.log('edit');
            setMessage(messageToEdit.message);
            setEditingId(id);
        } else {
            console.error(`No message found with id : ${id}`);
        }
    }
    // fonction qui supprime un message de la liste des messages en fonction de son id
    function handleDelete(id: string): void {
        setListMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
    }

    // fonction qui gère le changement de l'utilisateur
    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
        setToggleUser(!toggleUser);
    };

    const sendMessage = (): void => {
        socket.emit('send-message', { message });
    };

    // useEffect(() => {
    //     socket.emit('send-message',{user: })
    // }, [socket]);

    // useEffect(() => {
    //     socket.on('receive_message', (msg: { message: string }) => {
    //         setMessageReceive(msg.message);
    //     });
    // }, [socket]);

    return (
        <>
            <ToggleUser toggleUser={toggleUser} onClick={handleClick} />
            <ChatList list={listMessages} onEdit={handleEdit} onDelete={handleDelete} />
            <ChatBar onClick={sendMessage} onsubmit={handleSubmit} onEmojiSelect={handleChange} placeholder='Message' value={message} name={`message from ${toggleUser ? 'other' : 'user'}`} onChange={handleChange} />
        </>
    );
}
