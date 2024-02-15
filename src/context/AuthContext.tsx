import { type ReactElement, createContext, useState, useCallback, type SetStateAction } from 'react';
import { type PostRequestResponse, baseUrl, postRequest } from '../utils/services';

interface User {
    username: string
    email: string
    password: string
}

interface RegisterInfo {
    username: string
    email: string
    password: string
}

interface AuthContextInterface {
    user: User | null
    registerInfo: RegisterInfo
    updateRegisterInfo: (info: SetStateAction<RegisterInfo>) => void
    registerUser: () => Promise<void>
    registerError: string | null
    isRegisterLoading: boolean
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactElement }): JSX.Element => {
    const [user, setUser] = useState<User | null>(null);
    const [registerError, setRegisterError] = useState<string | null>(null);
    const [isRegisterLoading, setRegisterLoading] = useState<boolean>(false);
    const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({
        username: '',
        email: '',
        password: '',
    });

    const updateRegisterInfo = useCallback((info: SetStateAction<RegisterInfo>) => {
        setRegisterInfo(info);
    }, []);

    const registerUser = useCallback(async () => {
        setRegisterLoading(true);
        setRegisterError(null);

        const response: PostRequestResponse = await postRequest(
            `${baseUrl}/users/register`,
            JSON.stringify(registerInfo),
        );

        setRegisterLoading(false);

        if (response.error !== null) {
            setRegisterError(response.message ?? null);
            return;
        }

        const newUser: User = {
            username: response.username,
            email: response.email,
            password: response.password,
        };

        localStorage.setItem('User', JSON.stringify(newUser));
        setUser(newUser);
    }, [registerInfo]);

    return (
        <AuthContext.Provider value={{ user, registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
