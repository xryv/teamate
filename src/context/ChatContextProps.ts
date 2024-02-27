import { type ReactNode } from 'react';

export interface ChatContextProps {
    userChats: Chat[] | null
    isUserChatsLoading: boolean
    userChatsError: string | null
    potentialChats: User[]
    potentialChatsLoading: boolean
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
    // Ajoutez d'autres propriétés du chat ici
}
