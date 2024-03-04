import { useEffect, useState } from 'react';
import { baseUrl, getRequest } from '../utils/services';
import { type User, type Chat } from '../context/ChatContextProps';

export interface UseFetchRecipientUserProps {
    chat: Chat | null | undefined
    user: User | null | undefined
}

export interface UseFetchRecipientUserReturn {
    recipientUser: User | null | undefined
}

export const useFetchRecipientUser = ({ chat, user }: UseFetchRecipientUserProps): UseFetchRecipientUserReturn => {
    const [recipientUser, setRecipientUser] = useState<User | null>(null);
    const [, setError] = useState<string | null>(null);

    const recipientId = chat?.members?.find((id: string) => id !== user?._id);

    useEffect(() => {
        const getUser = async (): Promise<any> => {
            if (recipientId === undefined) return null;

            const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);

            if (response.error === true) {
                setError(response as string);
                return;
            }
            setRecipientUser(response as User);
        };
        if (chat !== undefined) {
            void getUser();
        }
    }, [recipientId, chat]);

    return { recipientUser };
};
