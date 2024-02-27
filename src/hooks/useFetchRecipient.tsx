import { useEffect, useState } from 'react';
import { baseUrl, getRequest } from '../utils/services';

interface Chat {
    members: string[]
}

interface User {
    _id: string
    // Ajoutez d'autres propriétés si nécessaire
}

export const useFetchRecipientUser = (chat: Chat, user: User) => {
    const [recipientUser, setRecipientUser] = useState<any>(null);
    const [error, setError] = useState<string | null | any>(null);

    const recipientId = chat?.members?.find((id: string) => id !== user?._id);

    useEffect(() => {
        const getUser = async (): Promise<any> => {
            if (!recipientId) return null;

            const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);

            if (response.error) {
                setError(response);
                return;
            }
            setRecipientUser(response);
        };
        getUser();
    }, []);

    return { recipientUser };
};
