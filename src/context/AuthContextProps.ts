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
    loginInfo: LoginInfo
    updateLoginInfo: (info: SetStateAction<LoginInfo>) => void
    loginUser: () => Promise<void>
    loginError: string | null
    isLoginLoading: boolean
}

export interface LoginInfo {
    username: string
    email: string
    password: string
}
