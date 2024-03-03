import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { baseUrl, getRequest, postRequest } from '../utils/services';
import { type ChatContextProviderProps, type ChatContextProps, type Chat, type User, type Message } from './ChatContextProps';
import { io } from 'socket.io-client';
import { type Socket } from 'socket.io';

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
    const [currentChat, setCurrentChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isMessagesLoading, setIsMessagesLoading] = useState<boolean>(false);
    const [messagesError, setMessagesError] = useState<string | null>(null);
    const [sendTextMessageError, setSendTextMessageError] = useState<string | null>(null);
    const [newMessage, setNewMessage] = useState<Message | null>(null);
    const [socket, setSocket] = useState<Socket | null>(null);
    const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
    const [editMessageError, setEditMessageError] = useState<string | null>(null);

    console.log('onlineUsers', onlineUsers);

    useEffect(() => {
        const newSocket = io('http://localhost:5001');
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        };
    }, [user]);

    // Add new user to online users list
    useEffect(() => {
        if (socket != null) {
            socket.emit('addNewUser', user?._id);
            socket.on('getOnlineUsers', (res: User[]) => {
                setOnlineUsers(res);
            });
        }
    }, [socket]);

    // Add new message to chat
    useEffect(() => {
        if (socket != null) {
            const recipientId = currentChat?.members.find((id) => id !== user?._id);
            socket.emit('sendMessage', { ...newMessage, recipientId });
        }
    }, [newMessage]);

    // receive new message
    useEffect(() => {
        if (socket != null) {
            const messageListener = (res: Message): void => {
                if (res.chatId === currentChat?._id) {
                    setMessages((prev) => [...(prev ?? []), res]);
                }
            };

            socket.on('getMessage', messageListener);

            return () => {
                socket.off('getMessage', messageListener);
            };
        }
    }, [socket, currentChat]);

    // Fetch potential chats
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

    // Fetch user chats
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

    // Fetch messages
    useEffect(() => {
        const getMessages = async (): Promise<void> => {
            setIsMessagesLoading(true);
            setMessagesError(null);

            if (currentChat?._id !== undefined) {
                const response = await getRequest(`${baseUrl}/messages/${currentChat?._id}`);
                setIsMessagesLoading(false);

                if (response.error === true) {
                    setMessagesError(response as string);
                    console.log('response', response);
                    return;
                }
                setMessages(response as Message[]);
            }
        };

        void getMessages();
    }, [currentChat]);

    // Send text message
    const sendTextMessage = useCallback(async (textMessage: string, sender, currentChatId, setTextMessage) => {
        if (textMessage == null) return;
        if (currentChatId !== undefined) {
            console.log('re');
            const response = await postRequest(
                `${baseUrl}/messages`,
                JSON.stringify({
                    chatId: currentChatId,
                    senderId: sender?._id,
                    text: textMessage,
                }),
            );
            if (response.error === true) {
                console.log('Error sending message', response);
                setSendTextMessageError(response as unknown as string);
                return;
            }
            setNewMessage(response as Message);
            setMessages((prev) => [...(prev ?? []), response as Message]);
            setTextMessage('');
        }
    }, []);

    // Update current chat
    const updateCurrentChat = useCallback((chat: Chat) => {
        setCurrentChat(chat);
    }, []);

    // Edit Message
    const editMessage = useCallback(async (messageId: string, newText: string) => {
        const response = await postRequest(
            `${baseUrl}/messages/${messageId}`,
            JSON.stringify({
                text: newText,
            }),
        );
        if (response.error === true) {
            console.log('Error editing message', response);
            setEditMessageError(response as unknown as string);
            return;
        }
        setMessages((prev) => {
            if (prev === null) return prev;
            return prev.map((message) => message._id === messageId ? { ...message, text: newText } : message);
        });
    }, []);

    // Create chat
    const createChat = useCallback(async (firstId, secondId) => {
        const response = await postRequest(
            `${baseUrl}/chats`,
            JSON.stringify({
                firstId, secondId,
            }),
        );
        if (response.error === true) {
            console.log('Error creating chat', response);
        }
        setUserChats((prev) => [...(prev ?? []), response as Chat]);
    }, []);

    // delete chat

    return (
        <ChatContext.Provider value={{ userChats, isUserChatsLoading, userChatsError, potentialChats, potentialChatsLoading, createChat, currentChat, updateCurrentChat, messages, isMessagesLoading, messagesError, sendTextMessageError, editMessageError, sendTextMessage, onlineUsers, editMessage }}>
            {children}
        </ChatContext.Provider>

    );
};
