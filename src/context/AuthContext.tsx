import { type ReactElement, createContext, useState, useCallback, type SetStateAction, useEffect, useContext } from 'react';
import { type PostRequestResponse, baseUrl, postRequest } from '../utils/services';
import { type User, type AuthContextInterface, type RegisterInfo } from './AuthContextProps';

// JE COMPREND RIEN AUX TYPES DE CETTE FONCTION
// Un hook qui retourne le contexte d'authentification
export const AuthContext = createContext<AuthContextInterface | null>(null);

export function useAuthContext(keys: Array<keyof AuthContextInterface> = []): Partial<AuthContextInterface> {
    const authContext = useContext(AuthContext);
    if (authContext === null) {
        throw new Error('AuthContext is not provided');
    }

    if (keys.length === 0) {
        return authContext; // return all objects if no keys are provided
    }

    const result: { [K in keyof AuthContextInterface]?: any } = {};
    for (const key of keys) {
        result[key] = authContext[key];
    }
    return result;
}

export const AuthContextProvider = ({ children }: { children: ReactElement }): JSX.Element => {
    const [user, setUser] = useState<User | null | any>(null);
    const [registerError, setRegisterError] = useState<string | null>(null);
    const [isRegisterLoading, setRegisterLoading] = useState<boolean>(false);
    const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({
        username: '',
        email: '',
        password: '',
    });

    console.log('user', user);

    useEffect(() => {
        const userItem = localStorage.getItem('User');
        if (userItem !== null) {
            setUser(JSON.parse(userItem));
        }
    }, []);

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

    const logoutUser = useCallback(() => {
        localStorage.removeItem('User');
        setUser(null);
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            registerInfo,
            updateRegisterInfo,
            registerUser,
            registerError,
            isRegisterLoading,
            logoutUser,

        }}>
            {children}
        </AuthContext.Provider>
    );
};
