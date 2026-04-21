import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';

type AdminLoginResponse = {
    success: boolean;
    message?: string;
    token?: string;
    admin?: {
        id: string;
        email?: string;
        role?: string;
    };
};

const AdminLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('Admin@123');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        dispatch(setPageTitle('Admin Login'));
    });

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${BASE_URL}/adminLoginRegister`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (!res.ok) {
                let details = '';
                try {
                    details = await res.text();
                } catch {
                    details = '';
                }
                const suffix = details ? `: ${details}` : '';
                throw new Error(`Login failed (${res.status})${suffix}`);
            }

            const json = (await res.json()) as AdminLoginResponse;
            console.log('Login response:', json);
            if (!json?.success || !json?.token || !json?.admin?.id) {
                throw new Error(json?.message || 'Invalid login response');
            }

            localStorage.setItem('token', json.token);
            localStorage.setItem('adminId', json.admin.id);

            navigate('/users');
        } catch (err) {
            setError((err as Error)?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            <div className="panel">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Admin Login</h5>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="text-white-dark text-xs">Email</label>
                        <input className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
                    </div>

                    <div>
                        <label className="text-white-dark text-xs">Password</label>
                        <input className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
                    </div>

                    {error && <div className="text-danger">{error}</div>}

                    <div className="flex items-center gap-2">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => {
                                localStorage.removeItem('token');
                                localStorage.removeItem('adminId');
                            }}
                        >
                            Clear Saved Auth
                        </button>
                    </div>

                    <div className="text-white-dark text-xs">On success we save `favoritesAuthToken` and `adminId` then redirect to Users.</div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
