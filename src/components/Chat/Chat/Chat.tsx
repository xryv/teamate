import { type FormEvent, useState } from 'react';
import { ChatList } from '../ChatList/ChatList';
import { ChatBar } from '../ChatBar/ChatBar';

interface Message {
    message?: string | undefined
    id: string
    user: boolean
    timestamp: string
    image?: string | undefined
}

export function Chat({ isOn }: { isOn: boolean }): JSX.Element {
    const [message, setMessage] = useState<string | undefined>('');
    const [, setImage] = useState<string | null>(null);
    const [listMessages, setListMessages] = useState<Message[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);

    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        const id = editingId ?? new Date().getTime().toString();
        const user = !isOn;
        const timestamp = new Date().toLocaleTimeString().slice(0, 5);
        if (message !== '') {
            const newListMessages = listMessages.map(msg => msg.id === id ? { message, id, user, timestamp } : msg);
            if (editingId === null) {
                newListMessages.push({ message, id, user, timestamp });
            }
            setListMessages(newListMessages);
            setMessage('');
        }
        setEditingId(null);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | { native: string }): void {
        if ('target' in e) {
            const file = e.target.files?.[0];
            if (file !== undefined) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const image = reader.result as string;
                    setImage(image);
                    const id = new Date().getTime().toString();
                    const user = !isOn;
                    const timestamp = new Date().toLocaleTimeString().slice(0, 5);
                    const newListMessages = [...listMessages, { id, user, timestamp, image }];
                    setListMessages(newListMessages);
                };
                reader.readAsDataURL(file);
            } else if (e.target.value !== undefined) {
                setMessage(e.target.value);
            }
        } else if (typeof e.native === 'string') {
            setMessage((prevMessage) => prevMessage + e.native);
        }
    }

    function handleEdit(id: string): void {
        const messageToEdit = listMessages.find(msg => msg.id === id);
        if (messageToEdit !== undefined) {
            setMessage(messageToEdit.message);
            setEditingId(id);
        } else {
            console.error(`No message found with id ${id}`);
        }
    }

    function handleDelete(id: string): void {
        setListMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
    }

    return (
        <>
            <ChatList list={listMessages} onEdit={handleEdit} onDelete={handleDelete} />
            <ChatBar onsubmit={handleSubmit} onEmojiSelect={handleChange} placeholder='Message' value={message} name={`message from ${isOn ? 'other' : 'user'}`} onChange={handleChange} />
        </>
    );
}
