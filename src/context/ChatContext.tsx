import { createContext, useContext, useEffect, useState } from 'react';
import { baseUrl, getRequest, postRequest } from '../utils/services';
import { type ChatContextProviderProps, type ChatContextProps, type Chat, type User } from './ChatContextProps';

export const ChatContext = createContext<ChatContextProps | null>(null);

export function useChatContext(keys: Array<keyof ChatContextProps> = []): Partial<ChatContextProps> {
    const chatContext = useContext(ChatContext);
    if (chatContext === null) {
        throw new Error('AuthContext is not provided');
    }

    if (keys.length === 0) {
        return chatContext; // return all objects if no keys are provided
    }

    const result: { [K in keyof ChatContextProps]?: any } = {};
    for (const key of keys) {
        result[key] = chatContext[key];
    }
    return result;
}

export const ChatContextProvider = ({ children, user }: ChatContextProviderProps): JSX.Element => {
    const [userChats, setUserChats] = useState<Chat[] | null>(null);
    const [isUserChatsLoading, setUserChatsLoading] = useState<boolean>(false);
    const [userChatsError, setUserChatsError] = useState<string | null>(null);
    const [potentialChats, setPotentialChats] = useState<User[]>([]);
    const [potentialChatsLoading, setPotentialChatsLoading] = useState<boolean>(false);

    useEffect(() => {
        const getUsers = async (): Promise<void> => {
            setPotentialChatsLoading(true);
            const response = await getRequest(`${baseUrl}/users`);
            setPotentialChatsLoading(false);

            if (response.error === true) {
                console.log('Error fetching users', response);
                return;
            }
            const pChats = response.filter((u: User) => {
                let isChatCreated = false;
                if (user?._id === u._id) return false;
                if (userChats !== null) {
                    isChatCreated = userChats?.some((chat) => {
                        return chat.members[0] === u._id || chat.members[1] === u._id;
                    });
                }
                return !isChatCreated;
            });
            setPotentialChats(pChats as User[]);
        };
        void getUsers();
    }, [userChats]);

    useEffect(() => {
        const getUserChats = async (): Promise<void> => {
            if (user?._id !== undefined) {
                setUserChatsLoading(true);
                setUserChatsError(null);

                const response = await getRequest(`${baseUrl}/chats/${user?._id}`);

                setUserChatsLoading(false);

                if (response.error === true) {
                    setUserChatsError(response as string);
                    console.log('response', response);
                    return;
                }
                setUserChats(response as Chat[]);
            }
        };
        void getUserChats();
    }, [user]);

    return (
        <ChatContext.Provider value={{ userChats, isUserChatsLoading, userChatsError, potentialChats, potentialChatsLoading }}>
            {children}
        </ChatContext.Provider>

    );
};
