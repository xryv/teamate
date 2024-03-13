import { useEffect, useState } from 'react';
import { useChatContext } from '../context/ChatContext';
import { baseUrl, getRequest } from '../utils/services';
import { type ChatContextProps } from '../context/ChatContextProps';

export const useFetchLastestMessage = (chat) => {
    const { newMessage, notifications } = useChatContext(['newMessage', 'notifications']);
    const [lastestMessage, setLastestMessage] = useState<ChatContextProps | null>(null);

    useEffect(() => {
        const getMessages = async () => {
            const response = await getRequest(`${baseUrl}/messages/${chat?._id}`);
            if (response.error !== undefined) {
                console.log(response.error); return;
            }
            const lastMessage = response[response?.length - 1];
            setLastestMessage(lastMessage);
        };
        void getMessages();
    }, [newMessage, notifications]);

    return { lastestMessage };
};
