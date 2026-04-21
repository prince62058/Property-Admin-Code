import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('favoritesAuthToken') || 
                     localStorage.getItem('token') || 
                     localStorage.getItem('accessToken');
        
        if (!token) {
            navigate('/auth/boxed-signin');
        }
    }, [navigate]);

    const token = localStorage.getItem('favoritesAuthToken') || 
                 localStorage.getItem('token') || 
                 localStorage.getItem('accessToken');
    
    if (!token) {
        return null;
    }

    return <>{children}</>;
};

export default AuthGuard;
