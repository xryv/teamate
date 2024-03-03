import { type ReactNode } from 'react';

export interface ChatContextProps {
    userChats: Chat[] | null
    isUserChatsLoading: boolean
    userChatsError: string | null
    potentialChats: User[]
    potentialChatsLoading: boolean
    createChat: (firstId: number, secondId: number) => Promise<void>
    currentChat: Chat
    updateCurrentChat: (chat: Chat) => void
    messages: Message[] | null
    isMessagesLoading: boolean
    messagesError: string | null
    sendTextMessageError: string | null
    sendTextMessage: SendTextMessageFunction
    onlineUsers: User[] | null
    editMessage: (messageId: string, newText: string) => Promise<void>
    editMessageError: string | null
    // deleteChat: (chatId: string) => Promise<void>
}
export interface ChatContextProviderProps {
    children: ReactNode
    user: User | null

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
    image?: string
    // Ajoutez d'autres propriétés du message ici
}

export interface SendTextMessageProps {
    textMessage: string | undefined
    sender: User
    currentChatId: string
    setTextMessage: React.Dispatch<React.SetStateAction<string>>
}

export type SendTextMessageFunction = (textMessage: string, sender: User | null | undefined, currentChatId: Chat | string | undefined, setTextMessage: React.Dispatch<React.SetStateAction<string>>) => Promise<void>;
