import { type FormEvent, useState, type ChangeEvent } from 'react';
import { ChatList } from '../ChatList/ChatList';
import { ChatBar } from '../ChatBar/ChatBar';
import { useFetchRecipientUser } from '../../../hooks/useFetchRecipient';
import { useChatContext } from '../../../context/ChatContext';
import { useAuthContext } from '../../../context/AuthContext';
// import { ToggleUser } from '../ToggleUser/ToggleUser';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:3001');

export function Chat(): JSX.Element {
    const { user } = useAuthContext(['user']);
    const { currentChat, messages, isMessagesLoading, sendTextMessage } = useChatContext(['currentChat', 'messages', 'isMessagesLoading', 'sendTextMessage']);
    let recipientUser;
    if (currentChat != null) recipientUser = useFetchRecipientUser({ chat: currentChat, user });
    const [message, setMessage] = useState<string>('');

    // fonction qui gère la soumission du formulaire et l'ajout d'un message dans la liste des messages
    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        if (sendTextMessage != null) void sendTextMessage(message, user, currentChat?._id, setMessage);
        setMessage('');
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
        } else {
            console.error(`No message found with id : ${_id}`);
        }
    }

    return (
        <>
            {/* <ToggleUser toggleUser={toggleUser} onClick={handleClick} /> */}
            <ChatList list={messages} user={user} onEdit={handleEdit} recipientUser={recipientUser} isMessagesLoading={isMessagesLoading} />
            <ChatBar onClick={() => { if (sendTextMessage != null) void sendTextMessage(message, user, currentChat?._id, setMessage); }} onsubmit={handleSubmit} onEmojiSelect={handleChange} placeholder='Message' value={message} name={`message from  ${user?.username}`} onChange={handleChange} />        </>
    );
}
