import { type SetStateAction } from 'react';

export interface User {
    username: string
    email: string
    password: string
}

export interface RegisterInfo {
    username: string
    email: string
    password: string
}

export interface AuthContextInterface {
    user: User | null
    registerInfo: RegisterInfo
    updateRegisterInfo: (info: SetStateAction<RegisterInfo>) => void
    registerUser: () => Promise<void>
    registerError: string | null
    isRegisterLoading: boolean
    logoutUser: () => void
}
