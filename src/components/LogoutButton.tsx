import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear all authentication tokens
        localStorage.removeItem('token');
        localStorage.removeItem('token');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('adminId');

        // Navigate to login page
        navigate('/auth/boxed-signin');
    };

    return (
        <button 
            onClick={handleLogout}
            className="btn btn-outline-danger"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
