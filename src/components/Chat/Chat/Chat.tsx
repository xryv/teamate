import { type FormEvent, useState } from 'react';
import { ChatBar } from '../ChatBar/ChatBar';
import { ChatList } from '../ChatList/ChatList';

export function Chat({ isOn }: { isOn: boolean }): JSX.Element {
    const [message, setMessage] = useState('');
    const [listMessages, setListMessages] = useState<Array<{ message: string, id: string, user: string, timestamp: string }>>([]);
    const [editingId, setEditingId] = useState<string | null>(null);

    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        if (message !== '') {
            const id = editingId ?? new Date().getTime().toString();
            const user = isOn ? 'other' : 'user';
            const timestamp = new Date().toLocaleTimeString().slice(0, 5);
            const newListMessages = listMessages.map(msg => msg.id === id ? { message, id, user, timestamp } : msg);
            if (editingId === null) {
                newListMessages.push({ message, id, user, timestamp });
            }
            setListMessages(newListMessages);
            setMessage('');
            setEditingId(null);
        }
    }
    function onChange(e: React.ChangeEvent<HTMLInputElement> | { native: string }): void {
        if ('target' in e) {
            setMessage(e.target.value);
        } else {
            setMessage((prevMessage) => prevMessage + e.native);
        }
    }

    function handleEdit(id: string): void {
        const messageToEdit = listMessages.find(msg => msg.id === id);
        if (messageToEdit !== undefined) {
            console.log(messageToEdit.message);
            setMessage(messageToEdit.message);
            setEditingId(id);
        }
    }

    function handleDelete(id: string): void {
        setListMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
    }

    return (
        <form onSubmit={handleSubmit}>
            <ChatList list={listMessages} onEdit={handleEdit} onDelete={handleDelete} />
            <ChatBar onEmojiSelect={onChange} placeholder='Message' value={message} name={`message from ${isOn ? 'other' : 'user'}`} onChange={onChange} />
        </form>
    );
}
