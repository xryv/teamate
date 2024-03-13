import { type ReactNode } from 'react';

export interface ChatContextProps {
    userChats: Chat[] | null
    isUserChatsLoading: boolean
    userChatsError: string | null
    potentialChats: User[]
    potentialChatsLoading: boolean
    createChat: (firstId: number, secondId: number) => Promise<void>
    currentChat: Chat | null
    updateCurrentChat: (chat: Chat) => void
    messages: Message[] | null
    isMessagesLoading: boolean
    messagesError: string | null
    sendTextMessageError: string | null
    sendTextMessage: SendTextMessageFunction
    onlineUsers: User[] | null
    editMessage: (messageId: string, newText: string) => Promise<void>
    editMessageError: string | null
    deleteMessage: (messageId: string) => Promise<void>
    isMessageLoading: boolean
    deleteImageUrl: (messageId: string, imageUrl: string) => Promise<void>
    notifications: Notification[] | null
    allUsers: User[]
    markAllNotificationsAsRead: (notif: Notification[] | null | undefined) => void
    markNotificationAsRead: MarkNotificationAsReadType
    markThisUserNotificationsAsRead: MarkThisUserNotificationsAsReadType

    newMessage: Message | null
}
export interface ChatContextProviderProps {
    children: ReactNode
    user: User | null | undefined

}
export interface User {
    _id: string
    username: string // Assurez-vous que ceci est inclus
    email: string
    password: string
    token: string
}

export interface Chat {
    members: string[]
    _id: string

    // Ajoutez d'autres propriétés du chat ici
}

export interface Message {
    _id: string
    chatId: string
    senderId: string
    text: string
    createdAt: string
    updatedAt: string
    imageUrls?: string[]
    // Ajoutez d'autres propriétés du message ici
}

export interface Notification {
    _id: string
    senderId: string
    recipientId: string
    chatId: string
    text: string
    createdAt: string
    updatedAt: string
    isRead: boolean
    date: string | Date
    // Ajoutez d'autres propriétés de la notification ici
}

export interface SendTextMessageProps {
    textMessage: string | undefined
    sender: User
    currentChatId: string
    setTextMessage: React.Dispatch<React.SetStateAction<string>>
}

export type MarkNotificationAsReadType = (n: Notification, userChats: Chat[] | null | undefined, user: User | null | undefined, notifications: Notification[] | null | undefined) => void;
export type MarkThisUserNotificationsAsReadType = (notif: Notification[] | null | undefined, notif2: Notification[] | null | undefined) => void;
export type SendTextMessageFunction = (textMessage: string, sender: User | null | undefined, currentChatId: Chat | string | undefined, setTextMessage: React.Dispatch<React.SetStateAction<string>>, selectedImages: string[]) => Promise<void>;
