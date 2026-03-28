import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useEffect, useState, useCallback } from 'react';
import { BASE_URL } from '../../config';
import IconPencilPaper from '../../components/Icon/IconPencilPaper';
import IconCoffee from '../../components/Icon/IconCoffee';
import IconCalendar from '../../components/Icon/IconCalendar';
import IconMapPin from '../../components/Icon/IconMapPin';
import IconMail from '../../components/Icon/IconMail';
import IconPhone from '../../components/Icon/IconPhone';
import IconTwitter from '../../components/Icon/IconTwitter';
import IconDribbble from '../../components/Icon/IconDribbble';
import IconGithub from '../../components/Icon/IconGithub';

const Profile = () => {
    const dispatch = useDispatch();
    const isRtl = useSelector(
        (state: IRootState) => state.themeConfig.rtlClass
    ) === 'rtl';

    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUser = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            // Try all possible keys where admin/user ID might be stored
            const userId =
                localStorage.getItem('adminId') ||
                localStorage.getItem('admin') ||
                localStorage.getItem('userId');
            console.log('USER ID:', userId);

            if (!userId) {
                console.error('No user ID found in localStorage');
                setError('No user ID found. Please login again.');
                setLoading(false);
                return;
            }

            const token = localStorage.getItem('token');
            console.log('TOKEN:', token);

            if (!token) {
                console.error('No token found in localStorage');
                setError('No authentication token found. Please login again.');
                setLoading(false);
                return;
            }

            const res = await fetch(
                `${BASE_URL}/getUserById/${userId}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('RAW RESPONSE:', res);

            if (!res.ok) {
                let detailsText = '';
                try {
                    detailsText = await res.text();
                } catch {
                    detailsText = '';
                }

                let detailsMsg = '';
                try {
                    const maybeJson = detailsText ? (JSON.parse(detailsText) as { message?: string }) : null;
                    detailsMsg = maybeJson?.message || '';
                } catch {
                    detailsMsg = '';
                }

                const suffix = detailsMsg ? `: ${detailsMsg}` : detailsText ? `: ${detailsText}` : '';
                throw new Error(`Failed to fetch user (${res.status})${suffix}`);
            }

            const data = await res.json();
            console.log('API DATA:', data);

            if (data.success && data.data) {
                setUser(data.data);
            } else {
                throw new Error(data?.message || 'Invalid response from server');
            }
        } catch (error) {
            console.error('API ERROR:', error);
            setError(error instanceof Error ? error.message : 'Failed to load user profile');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        dispatch(setPageTitle('Profile'));
        fetchUser();
    }, [dispatch, fetchUser]);

    if (loading) {
        return (
            <div className="min-h-[240px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <div className="text-sm text-white-dark">Loading profile...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <ul className="flex space-x-2 rtl:space-x-reverse text-sm">
                    <li>
                        <Link to="#" className="text-primary hover:underline">
                            Users
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-white-dark">
                        <span>Profile</span>
                    </li>
                </ul>
                <div className="pt-5">
                    <div className="panel bg-white dark:bg-[#0b1220] shadow-md p-6 rounded-lg">
                        <div className="flex flex-col items-center justify-center min-h-[240px] gap-4">
                            <div className="text-danger text-lg font-semibold">Error loading profile</div>
                            <div className="text-white-dark text-sm">{error}</div>
                            <button onClick={fetchUser} className="btn btn-primary mt-2">
                                Retry
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div>
                <ul className="flex space-x-2 rtl:space-x-reverse text-sm">
                    <li>
                        <Link to="#" className="text-primary hover:underline">
                            Users
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-white-dark">
                        <span>Profile</span>
                    </li>
                </ul>
                <div className="pt-5">
                    <div className="panel bg-white dark:bg-[#0b1220] shadow-md p-6 rounded-lg">
                        <div className="flex flex-col items-center justify-center min-h-[240px] gap-4">
                            <div className="text-white-dark text-lg">No user data available</div>
                            <button onClick={fetchUser} className="btn btn-primary mt-2">
                                Reload
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse text-sm">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        Users
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-white-dark">
                    <span>Profile</span>
                </li>
            </ul>

            <div className="pt-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
                    {/* Left column: Avatar + quick info */}
                    <div className="lg:col-span-1 panel bg-white dark:bg-[#0b1220] shadow-md p-6 rounded-lg">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative">
                                <img
                                    src={
                                        user?.userImage || user?.profileImage
                                    }
                                    alt="profile"
                                    className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-[#071126]"
                                />

                            </div>

                            <h3 className="mt-4 text-xl font-semibold text-neutral-900 dark:text-white">
                                {user?.name || user?.fullName || user?.firstName || '—'}
                            </h3>
                            <p className="text-sm text-white-dark mt-1">{user?.role || user?.userRole || 'User'}</p>

                            <div className="mt-4 w-full">
                                <Link to="/users/user-account-settings" className="btn btn-outline w-full">
                                    Edit Profile
                                </Link>
                            </div>


                        </div>


                    </div>

                    {/* Right column: Details */}
                    <div className="lg:col-span-2 panel bg-white dark:bg-[#071126] shadow-md p-6 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="font-semibold text-lg dark:text-white-light">Profile Details</h5>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <IconMail />
                                    <div>
                                        <div className="text-sm text-white-dark">Email</div>
                                        <div className="font-semibold text-neutral-900 dark:text-white">{user?.email || user?.emailAddress || '—'}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <IconPhone />
                                    <div>
                                        <div className="text-sm text-white-dark">Phone</div>
                                        <div className="font-semibold text-neutral-900 dark:text-white">{user?.phoneNumber || user?.phone || user?.contactNumber || '—'}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <IconMapPin />
                                    <div>
                                        <div className="text-sm text-white-dark">Location</div>
                                        <div className="font-semibold text-neutral-900 dark:text-white">{user?.address || user?.location || 'Not provided'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <IconCalendar />
                                    <div>
                                        <div className="text-sm text-white-dark">Last Updated</div>
                                        <div className="font-semibold text-neutral-900 dark:text-white">
                                            {user?.updatedAt ? new Date(user.updatedAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            }) : '—'}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <IconCoffee />
                                    <div>
                                        <div className="text-sm text-white-dark">Role</div>
                                        <div className="font-semibold text-neutral-900 dark:text-white">{user?.role || user?.userRole || '—'}</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
