import { type SetStateAction } from 'react';

export interface User {
    _id: string
    username: string
    email: string
    password: string
    token: string
}

export interface RegisterInfo {
    _id: string
    username: string
    email: string
    password: string
    token: string
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
