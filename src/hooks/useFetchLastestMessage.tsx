import { useEffect, useState } from 'react';
import { useChatContext } from '../context/ChatContext';
import { baseUrl, getRequest } from '../utils/services';
import { type Chat, type Message } from '../context/ChatContextProps';

export const useFetchLastestMessage = (chat: Chat): { lastestMessage: Message | null } => {
    const { newMessage, notifications } = useChatContext(['newMessage', 'notifications']);
    const [lastestMessage, setLastestMessage] = useState<Message | null>(null);

    useEffect(() => {
        const getMessages = async (): Promise<void> => {
            const response = await getRequest(`${baseUrl}/messages/${chat?._id}`);
            if (response.error !== undefined) {
                console.log(response.error); return;
            }
            const lastMessage = response[response?.length - 1];
            setLastestMessage(lastMessage as Message);
        };
        void getMessages();
    }, [newMessage, notifications]);

    return { lastestMessage };
};
