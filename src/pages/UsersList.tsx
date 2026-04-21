import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import Swal from 'sweetalert2';
import { BASE_URL } from '../config';
import TableHeaderActions from '../components/TableHeaderActions';

type UserItem = {
    _id: string;
    phoneNumber?: string;
    email?: string;
    role?: string;
    name?: string;
    isOnline?: boolean;
    disable?: boolean;
    favoriteProperty?: string[];
    userImage?: string;
    updatedAt?: string;
};

type UsersApiResponse = {
    success: boolean;
    message?: string;
    total?: number;
    page?: number;
    limit?: number;
    totalPages?: number;
    data?: UserItem[];
};

type UserMutationResponse = {
    success: boolean;
    message?: string;
    data?: UserItem;
};

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    showCloseButton: true,
});

const handleDownload = async (endpoint: string, fileType: "pdf" | "excel" | "csv") => {
    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'GET',
            headers: {
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            }
        });
        if (!res.ok) {
            throw new Error(`Failed to download ${fileType}`);
        }
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        let extension = "pdf";
        if (fileType === "excel") extension = "xlsx";
        if (fileType === "csv") extension = "csv";

        a.download = `cities_${new Date().getTime()}.${extension}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        toast.fire({ icon: 'success', title: 'Downloaded successfully' });
    } catch (error) {
        console.error(error);
        toast.fire({ icon: 'error', title: `Failed to download ${fileType}` });
    }
};

const UsersList = () => {
    const dispatch = useDispatch();

    const [users, setUsers] = useState<UserItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const [togglingUserIds, setTogglingUserIds] = useState<Record<string, boolean>>({});

    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    console.log('UsersList rendered');

    useEffect(() => {
        dispatch(setPageTitle('User'));
        console.log('useEffect called');
    }, [dispatch]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchQuery);
            if (searchQuery !== debouncedSearch) {
                setPage(1);
            }
        }, 500);

        return () => clearTimeout(handler);
    }, [searchQuery, debouncedSearch]);

    useEffect(() => {
        const controller = new AbortController();
        fetchUsers(controller.signal);
        return () => controller.abort();
    }, [page, limit, debouncedSearch]);



    const fetchUsers = async (signal: AbortSignal): Promise<void> => {
        console.log('fetchUsers called');

        try {
            setLoading(true);

            const token =
                localStorage.getItem('token') ||
                localStorage.getItem('accessToken') || '';


            console.log('Token:', token);

            const url = new URL(`${BASE_URL}/getAllUser`);
            url.searchParams.set('page', String(page));
            url.searchParams.set('limit', String(limit));
            url.searchParams.set('sortBy', 'updatedAt');
            url.searchParams.set('sortOrder', 'desc');
            if (debouncedSearch.trim()) {
                url.searchParams.set('search', debouncedSearch.trim());
            }

            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                },
                signal,
            });

            console.log('Response status:', response.status);

            if (!response.ok) {
                let detailsText = '';
                try {
                    detailsText = await response.text();
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
                throw new Error(`API failed: ${response.status}${suffix}`);
            }

            const data: UsersApiResponse = await response.json();
            console.log('API DATA:', data);

            if (!data?.success) {
                throw new Error(data?.message || 'API failed');
            }

            setUsers(Array.isArray(data?.data) ? data.data : []);
            setTotalPages(data?.totalPages || 1);
        } catch (err) {
            if ((err as Error).name !== 'AbortError') {
                console.error('API ERROR:', err);
                setError((err as Error)?.message || 'Failed to load data');
            }
        } finally {
            setLoading(false);
        }
    };

    const onToggleDisable = async (user: UserItem) => {
        console.log(user);
        const nextDisable = !Boolean(user.disable);

        setError('');
        setTogglingUserIds((prev) => ({ ...prev, [user._id]: true }));
        setUsers((prev) => prev.map((u) => (u._id === user._id ? { ...u, disable: nextDisable } : u)));

        try {
            const token =
                localStorage.getItem('token') ||
                localStorage.getItem('accessToken') || '';


            const url = `${BASE_URL}/toggleUserStatus/${user._id}`;
            const payload = { disable: nextDisable };

            const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify(payload),
            });

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
                throw new Error(`Failed to update status (${res.status})${suffix}`);
            }

            const json = (await res.json()) as UserMutationResponse;
            if (!json?.success) {
                throw new Error(json?.message || 'Failed to update status');
            }

            const updatedUser = json?.data;
            if (updatedUser?._id) {
                setUsers((prev) => prev.map((u) => (u._id === updatedUser._id ? updatedUser : u)));
            }

            // Show success toast message
            toast.fire({
                icon: 'success',
                title: nextDisable ? 'User disabled successfully' : 'User enabled successfully'
            });
        } catch (err) {
            setUsers((prev) => prev.map((u) => (u._id === user._id ? { ...u, disable: Boolean(user.disable) } : u)));
            setError((err as Error)?.message || 'Failed to update status');

            // Show error toast message
            toast.fire({
                icon: 'error',
                title: (err as Error)?.message || 'Failed to update user status'
            });
        } finally {
            setTogglingUserIds((prev) => {
                const next = { ...prev };
                delete next[user._id];
                return next;
            });
        }
    };




    const handleDownload = async (endpoint: string, fileType: "pdf" | "excel" | "csv") => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${BASE_URL}/${endpoint}`, {
                method: 'GET',
                headers: {
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                }
            });
            if (!res.ok) {
                throw new Error(`Failed to download ${fileType}`);
            }
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            let extension = "pdf";
            if (fileType === "excel") extension = "xlsx";
            if (fileType === "csv") extension = "csv";

            a.download = `users_${new Date().getTime()}.${extension}`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            toast.fire({ icon: 'success', title: 'Downloaded successfully' });
        } catch (error) {
            console.error(error);
            toast.fire({ icon: 'error', title: `Failed to download ${fileType}` });
        }
    };




    return (
        <div>
            <div className="panel">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-5 gap-4">
                    <h5 className="font-semibold text-lg">
                        Users
                    </h5>

                    <TableHeaderActions
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        onDownload={handleDownload}
                        pdfEndpoint="exportUsersPDF"
                        excelEndpoint="exportUsersExcel"
                        placeholder="Search users..."
                    />
                </div>
                {loading && (
                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                    </div>
                )}
                {error && <p className="text-danger">{error}</p>}

                {!loading && users.length > 0 && (
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    {/* <th>Role</th> */}
                                    {/* <th>Online</th> */}
                                    <th>Status</th>
                                    {/* <th>Favorites</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((u, index) => (
                                    <tr key={u._id}>
                                        <td>{(page - 1) * limit + index + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                {u.userImage && <img src={u.userImage} className="w-8 h-8 rounded-full object-cover" />}
                                                <div className="whitespace-nowrap">{u.name || '-'}</div>
                                            </div>
                                        </td>
                                        <td>{u.phoneNumber || '-'}</td>
                                        <td>{u.email || '-'}</td>
                                        {/* <td>{u.role || '-'}</td> */}
                                        {/* <td>
                                            <span className={u.isOnline ? 'text-success' : 'text-white-dark'}>{u.isOnline ? 'Online' : 'Offline'}</span>
                                        </td> */}
                                        <td>
                                            <button
                                                type="button"
                                                disabled={Boolean(togglingUserIds[u._id])}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
    ${u.disable ? 'bg-red-500' : 'bg-green-500'}
    ${Boolean(togglingUserIds[u._id]) ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
  `}
                                                onClick={() => onToggleDisable(u)}
                                            >
                                                <span
                                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${u.disable ? 'translate-x-6' : 'translate-x-1'
                                                        }`}
                                                />
                                            </button>

                                        </td>
                                        {/* <td>{Array.isArray(u.favoriteProperty) ? u.favoriteProperty.length : 0}</td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {!loading && users.length === 0 && !error && (
                    <p>No data found</p>
                )}

                <div className="flex items-center justify-end gap-2 mt-5">
                    <button type="button" className="btn btn-outline-primary" disabled={page <= 1 || loading} onClick={() => setPage((p) => Math.max(1, p - 1))}>
                        Prev
                    </button>
                    <div className="text-white-dark text-sm">
                        Page {page} of {totalPages}
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        disabled={page >= totalPages || loading}
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UsersList;
