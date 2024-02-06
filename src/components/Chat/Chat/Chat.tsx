import { type FormEvent, useState, forwardRef } from 'react';
import { ChatList } from '../ChatList/ChatList';
import ChatBar from '../ChatBar/ChatBar';

interface Message {
    message: string
    id: string
    user: string
    timestamp: string
}

const Chat = forwardRef<HTMLFormElement, { isOn: boolean, height: number }>((props, ref) => {
    const [message, setMessage] = useState('');
    const [listMessages, setListMessages] = useState<Message[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);

    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        if (message !== '') {
            const id = editingId ?? new Date().getTime().toString();
            const user = props.isOn ? 'other' : 'user';
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
            setMessage(messageToEdit.message);
            setEditingId(id);
        } else {
            console.error(`No message found with id ${id}`);
        }
    }
    console.log('Chat');

    function handleDelete(id: string): void {
        setListMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
    }

    return (
        <form className='w-full overflow-y-auto' style={{ height: `${props.height}px` }} onSubmit={handleSubmit}>
            <ChatList list={listMessages} onEdit={handleEdit} onDelete={handleDelete} />
            <ChatBar ref={ref} onEmojiSelect={onChange} placeholder='Message' value={message} name={`message from ${props.isOn ? 'other' : 'user'}`} onChange={onChange} />
        </form>
    );
});

Chat.displayName = 'Chat';
export default Chat;
