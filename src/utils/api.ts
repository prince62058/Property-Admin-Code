import { useNavigate } from 'react-router-dom';

export const apiCall = async (url: string, options: RequestInit = {}) => {
    const token = localStorage.getItem('token') || 
                  localStorage.getItem('token') || 
                  localStorage.getItem('accessToken');

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
    };

    try {
        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('token');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('adminId');
            window.location.href = '/admin-login';
            throw new Error('Token expired. Please login again.');
        }

        return response;
    } catch (error) {
        if (error instanceof Error && error.message.includes('Token expired')) {
            throw error;
        }
        throw error;
    }
};
