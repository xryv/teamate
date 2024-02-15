export const baseUrl = 'http://localhost:5000/api';

export interface PostRequestResponse {
    error?: boolean
    message?: string
    [key: string]: any // Pour les autres propriétés renvoyées par le serveur
}

export const postRequest = async (url: string, body: any): Promise<PostRequestResponse> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });
    const data = await response.json();

    if (!response.ok) {
        let message: string;
        if (data?.message !== undefined) {
            message = data.message;
        } else {
            message = data;
        }
        return { error: true, message };
    }
    return data;
};
