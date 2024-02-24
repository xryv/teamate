import { createContext, useEffect, useState } from 'react';
import { baseUrl, getRequest, postRequest } from '../utils/services';

export const ChatContext = createContext<any>(null);

export const ChatContextProvider = ({ children, user }: { children: React.ReactNode, user: any }): JSX.Element => {
    const [userChats, setUserChats] = useState<any>(null);
    const [isUserChatsLoading, setUserChatsLoading] = useState<boolean>(false);
    const [userChatError, setUserChatError] = useState<string | null | any>(null);

    useEffect(() => {
        const getUserChats = async (): Promise<void> => {
            if (user?._id !== undefined) {
                setUserChatsLoading(true);
                setUserChatError(null);

                const response = await getRequest(`${baseUrl}/chats/${user?._id}`);

                setUserChatsLoading(false);

                if (response.error !== undefined) {
                    setUserChatError(response);
                    return;
                }
                setUserChats(response);
            }
        };
        getUserChats();
    }, [user]);

    return (
        <ChatContext.Provider value={{ userChats, isUserChatsLoading, userChatError }}>
            {children}
        </ChatContext.Provider>

    );
};
