import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { baseUrl, getRequest, postRequest, deleteRequest } from '../utils/services';
import { type ChatContextProviderProps, type ChatContextProps, type Chat, type User, type Message, type Notification, type MarkNotificationAsReadType } from './ChatContextProps';
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
    const [isMessageLoading, setIsMessageLoading] = useState<boolean>(false);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [allUsers, setAllUsers] = useState<User[]>([]);

    // console.log('notifications', notications);

    useEffect(() => {
        const newSocket = io('http://localhost:5001');
        setSocket(newSocket as unknown as Socket);
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

    // Listen for message edits
    useEffect(() => {
        if (socket == null) return;

        const handleEditMessage = (editedMessage: { messageId: string, newText: string }): void => {
            setMessages((prevMessages) =>
                prevMessages.map((message) =>
                    message._id === editedMessage.messageId ? { ...message, text: editedMessage.newText } : message,
                ),
            );
        };

        socket.on('messageEdited', handleEditMessage);

        return () => {
            socket.off('messageEdited', handleEditMessage);
        };
    }, [socket, messages]);

    // Listen for message deletions
    useEffect(() => {
        if (socket == null) return;

        const handleDeleteMessage = (messageId: string): void => {
            setMessages((prevMessages) => prevMessages.filter((message) => message._id !== messageId));
        };

        socket.on('messageDeleted', handleDeleteMessage);

        return () => {
            socket.off('messageDeleted', handleDeleteMessage);
        };
    }, [socket, messages]);

    // Listen for image url deletions
    useEffect(() => {
        if (socket == null) return;

        const handleDeleteImageUrl = (deletedImageUrl: { messageId: string, imageUrl: string }): void => {
            const { messageId, imageUrl } = deletedImageUrl;
            setMessages((prevMessages) =>
                prevMessages.map((message) =>
                    message._id === messageId ? { ...message, imageUrls: message.imageUrls?.filter((url) => url !== imageUrl) } : message,
                ),
            );
        };

        socket.on('imageUrlDeleted', handleDeleteImageUrl);

        return () => {
            socket.off('imageUrlDeleted', handleDeleteImageUrl);
        };
    }, [socket, messages]);

    // receive new message and notify user
    useEffect(() => {
        if (socket != null) {
            const messageListener = (res: Message): void => {
                if (res.chatId === currentChat?._id) {
                    setMessages((prev) => [res, ...(prev ?? [])]);
                }
            };

            socket.on('getMessage', messageListener);

            socket.on('getNotification', (res: Notification) => {
                const isChatOpen = currentChat?.members.some(id => id === res.senderId);

                if (isChatOpen === true) {
                    setNotifications((prev) => [{ ...res, isRead: true }, ...(prev ?? [])]);
                } else {
                    setNotifications((prev) => [{ ...res, isRead: false }, ...(prev ?? [])]);
                }
            });

            return () => {
                socket.off('getMessage', messageListener);
                socket.off('getNotification', () => {
                    console.log('Notification listener removed');
                },
                );
            };
        }
    }, [socket, currentChat]);

    //

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
            setAllUsers(response as User[]);
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
    }, [user, notifications]);

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
                setMessages((response as Message[]).reverse());
            }
        };

        void getMessages();
    }, [currentChat]);

    // Send text message
    const sendTextMessage = useCallback(async (textMessage: string, sender, currentChatId, setTextMessage, selectedImages: string[]) => {
        setIsMessageLoading(true);
        // Si ni le texte ni les images ne sont fournis, retournez immédiatement
        if ((textMessage === null || textMessage) === '' && (selectedImages === null || selectedImages.length === 0)) return;
        if (currentChatId === null) return;

        const formData = new FormData();
        formData.append('chatId', (currentChatId as unknown as string));
        if (sender?._id !== undefined) {
            formData.append('senderId', (sender._id as unknown as string));
        }

        if (textMessage !== null && textMessage !== '') {
            formData.append('text', textMessage);
        }

        if (selectedImages !== null && selectedImages.length > 0) {
            for (const [index, imageUrl] of selectedImages.entries()) {
                const response = await fetch(imageUrl);
                const imageBlob = await response.blob();
                formData.append('imageFiles', imageBlob, `image${index}`);
            }
        }

        try {
            const response = await fetch(`${baseUrl}/messages`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error sending message');
            }

            const responseData = await response.json();

            setNewMessage(responseData as Message);
            setMessages((prev) => [responseData as Message, ...(prev ?? [])]);
            setTextMessage('');
            setIsMessageLoading(false);
        } catch (error) {
            console.error(error);
            setSendTextMessageError('Error sending message');
        }
    }, []);

    // Update current chat
    const updateCurrentChat = useCallback((chat: Chat) => {
        setCurrentChat(chat);
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

    // Delete Message
    const deleteMessage = useCallback(async (messageId: string) => {
        console.log('messageId', messageId);
        const response = await deleteRequest(`${baseUrl}/messages/${messageId}`);

        if (response.error === true) {
            console.log('Error deleting message', response.message);
            return;
        }
        setMessages((prev) => {
            if (prev === null) return prev;
            return prev.filter((message) => message._id !== messageId);
        });
    }, []);

    const deleteImageUrl = async (messageId: string, url: string): Promise<void> => {
        const response = await deleteRequest(
            `${baseUrl}/messages/${messageId}/imageUrls`,
            { imageUrl: url },
            { 'Content-Type': 'application/json' },
        );

        console.log('url', url);
        console.log('messageId', messageId);

        if (response.error === true) {
            console.log('Error deleting image url', response.message);
            return;
        }

        setMessages((prev) => {
            if (prev === null) return prev;
            return prev.map((message) => message._id === messageId ? { ...message, imageUrls: message.imageUrls?.filter((imageUrl) => imageUrl !== url) } : message);
        });
    };

    const markAllNotificationsAsRead = useCallback((notif: Notification[] | null | undefined): void => {
        const mNotifications = notif?.map((n) => ({ ...n, isRead: true }));
        setNotifications(mNotifications as Notification[]);
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const markNotificationAsRead: MarkNotificationAsReadType = useCallback((n, userChats, user, notications): void => {
        // find chat to open
        const desiredChat = userChats?.find((chat) => {
            const chatMembers = [user?._id, n.senderId];
            const isDesiredChat = chat?.members.every((member) => chatMembers.includes(member));
            return isDesiredChat;
        });
        // mark notification as read
        const mNotifications = notications?.map((el) => {
            if (n.senderId === el.senderId) {
                return { ...n, isRead: true };
            } else {
                return el;
            }
        });

        // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
        updateCurrentChat(desiredChat as Chat);
        // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
        setNotifications(mNotifications as Notification[]);
    }, []);

    const markThisUserNotificationsAsRead = useCallback((thisUserNotifications, notif) => {
        // mark notification as read
        const mNotifications = notif?.map((el: Notification) => {
            let notification = el;
            thisUserNotifications?.forEach((n: Notification) => {
                if (n.senderId === el.senderId) {
                    notification = { ...n, isRead: true };
                }
            });
            return notification;
        });
        setNotifications(mNotifications as Notification[]);
    }, []);

    return (
        <ChatContext.Provider value={{ userChats, isUserChatsLoading, userChatsError, potentialChats, potentialChatsLoading, createChat, currentChat, updateCurrentChat, messages, isMessagesLoading, messagesError, sendTextMessageError, editMessageError, sendTextMessage, onlineUsers, editMessage, deleteMessage, isMessageLoading, deleteImageUrl, notifications, allUsers, markAllNotificationsAsRead, markNotificationAsRead, markThisUserNotificationsAsRead, newMessage }}>
            {children}
        </ChatContext.Provider>

    );
};
