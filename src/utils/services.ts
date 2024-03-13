export const baseUrl = 'http://192.168.1.103:5000/api';

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

export const getRequest = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        let message: string = 'An error occurred';
        if (data?.message !== undefined) {
            message = data.message;
        }
        return { error: true, message };
    }
    return data;
};

export const deleteRequest = async (url: string, body?: any, headers?: any): Promise<PostRequestResponse> => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers,
        body: body ? JSON.stringify(body) : null,
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

export const putRequest = async (url: string, body: any): Promise<PostRequestResponse> => {
    const response = await fetch(url, {
        method: 'PUT',
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

export const patchRequest = async (url: string, body: any): Promise<PostRequestResponse> => {
    const response = await fetch(url, {
        method: 'PATCH',
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
