import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import IconX from '../components/Icon/IconX';
import IconEdit from '../components/Icon/IconEdit';
import { apiCall } from '../utils/api';
import { BASE_URL } from '../config';
import Swal from 'sweetalert2';
import TableHeaderActions from '../components/TableHeaderActions';

type SubadminItem = {
    _id: string;
    name?: string;
    email?: string;
    phoneNumber?: string;
    role?: string;
    permissions?: string[];
    status?: 'active' | 'inactive';
    disable?: boolean;
    createdAt?: string;
    updatedAt?: string;
};

type CreateSubadminData = {
    name: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    permissions?: string[];
};

type EditSubadminData = {
    _id: string;
    name: string;
    email: string;
    phoneNumber?: string;
    permissions?: string[];
    password?: string;
};

type SubadminApiResponse = {
    success: boolean;
    message?: string;
    total?: number;
    page?: number;
    limit?: number;
    totalPages?: number;
    data?: SubadminItem[];
    pagination?: {
        page: number;
        limit: number;
        total: number;
        pages: number;
    };
};

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    showCloseButton: true,
});

const Subadmin = () => {
    const dispatch = useDispatch();

    const [subadmins, setSubadmins] = useState<SubadminItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [createLoading, setCreateLoading] = useState(false);
    const [editLoading, setEditLoading] = useState(false);
    const [createError, setCreateError] = useState('');
    const [editError, setEditError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    // Available permissions list
    const availablePermissions = [
        'Dashboard',
        'Users',
        'Properties',
        'Partners',
        'Top Broker',
        'Sliders',
        'Packages',
        'Company',
        'Categories',
        'Requirements',
        'Purchase History',
        'Cities',
        'Coupons',
        'Subadmin',
        'AddOns',
        'send_notification'

    ];

    const [formData, setFormData] = useState<CreateSubadminData>({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        permissions: []
    });

    const [editFormData, setEditFormData] = useState<EditSubadminData>({
        _id: '',
        name: '',
        email: '',
        phoneNumber: '',
        permissions: [],
        password: '',
    });

    useEffect(() => {
        dispatch(setPageTitle('Subadmin'));
        fetchSubadmins();
    }, [dispatch, page]);

    const filteredSubadmins = subadmins.filter((s) => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return true;

        return (
            (s.name || "").toLowerCase().includes(q) ||
            (s.email || "").toLowerCase().includes(q) ||
            (s.phoneNumber || "").includes(q) ||
            (s.role || "").toLowerCase().includes(q)
        );
    });

    const fetchSubadmins = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await apiCall(`${BASE_URL}/getAllUsersWithRoles?role=SUBADMIN&page=${page}&limit=${limit}`, {
                method: 'GET',
            });

            const data: SubadminApiResponse = await response.json();

            if (data.success && data.data && data.data.length > 0) {
                setSubadmins(data.data);
                if (data.pagination?.pages) {
                    setTotalPages(data.pagination.pages);
                } else {
                    setTotalPages(1);
                }
            } else if (data.success && (!data.data || data.data.length === 0)) {
                setSubadmins([]);
                setTotalPages(1);
                setError('No subadmins found');
            } else {
                setError(data.message || 'Failed to fetch subadmins');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setError('Error fetching subadmins: ' + (error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    const handleToggleStatus = async (subadminId: string, currentStatus: string) => {
        try {
            // Toggle the status: if active, disable it; if inactive, enable it
            const newDisable = currentStatus === 'active' ? true : false;
            const response = await apiCall(`${BASE_URL}/toggleUserStatus/${subadminId}`, {
                
                method: 'PUT',
                body: JSON.stringify({ disable: newDisable }),
            });

            const result = await response.json();
            if (result.success) {
                toast.fire({ icon: 'success', title: result.message || 'Status updated successfully!' });
                fetchSubadmins();
            } else {
                setError(result.message || 'Failed to update status');
            }
        } catch (error) {
            setError('Error updating status');
        }
    };


    const resetCreateForm = () => {
        setFormData({
            name: '',
            email: '',
            password: '',
            phoneNumber: '',
            permissions: []
        });
        setCreateError('');
        setSuccessMessage('');
    };

    const handleCreateSubadmin = async (e: React.FormEvent) => {
        e.preventDefault();
        setCreateLoading(true);
        setCreateError('');
        setSuccessMessage('');

        try {
            const requestData: any = {
                name: formData.name,
                phoneNumber: formData.phoneNumber,
                // permission: formData.permissions,
                permissions: formData.permissions,
                role: 'SUBADMIN'
            };

            // Only include email and password if they have values
            if (formData.email && formData.email.trim() !== '') {
                requestData.email = formData.email;
            }
            if (formData.password && formData.password.trim() !== '') {
                requestData.password = formData.password;
            }

            const response = await apiCall(`${BASE_URL}/createSubAdmin`, {
                method: 'POST',
                body: JSON.stringify(requestData),
            });

            const result = await response.json();
            console.log('Create API response:', result);

            if (result.success) {
                toast.fire({ icon: 'success', title: 'Subadmin created successfully!' });
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    phoneNumber: '',
                    permissions: []
                });
                setIsCreateModalOpen(false);
                fetchSubadmins();
            } else {
                const errorMessage = result.message || 'Failed to create subadmin';
                setCreateError(errorMessage);
                toast.fire({ icon: 'error', title: errorMessage });
            }
        } catch (error) {
            console.error('Create error:', error);
            const errorMsg = 'Error creating subadmin';
            setCreateError(errorMsg);
            toast.fire({ icon: 'error', title: errorMsg });
        } finally {
            setCreateLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
        setFormData(prev => ({
            ...prev,
            phoneNumber: value
        }));
    };

    const handleEditPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
        setEditFormData(prev => ({
            ...prev,
            phoneNumber: value
        }));
    };

    const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEditFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePermissionToggle = (permission: string, isEdit: boolean = false) => {
        if (isEdit) {
            setEditFormData(prev => ({
                ...prev,
                permissions: prev.permissions?.includes(permission)
                    ? prev.permissions.filter(p => p !== permission)
                    : [...(prev.permissions || []), permission]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                permissions: prev.permissions?.includes(permission)
                    ? prev.permissions.filter(p => p !== permission)
                    : [...(prev.permissions || []), permission]
            }));
        }
    };

    const handleEdit = (subadmin: SubadminItem) => {
        setEditFormData({
            _id: subadmin._id,
            name: subadmin.name || '',
            email: subadmin.email || '',
            phoneNumber: subadmin.phoneNumber || '',
            permissions: subadmin.permissions || [],
            password: ''
        });
        setEditError('');
        setIsEditModalOpen(true);
    };

    const handleUpdateSubadmin = async (e: React.FormEvent) => {
        e.preventDefault();
        setEditLoading(true);
        setEditError('');
        setSuccessMessage('');

        try {
            const response = await apiCall(`${BASE_URL}/updateAdmin/${editFormData._id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    name: editFormData.name,
                    email: editFormData.email,
                    phoneNumber: editFormData.phoneNumber,
                    permissions: editFormData.permissions,
                    password: editFormData.password
                }),
            });

            const result = await response.json();

            if (result.success) {
                toast.fire({ icon: 'success', title: 'Subadmin updated successfully!' });
                setIsEditModalOpen(false);
                fetchSubadmins();
            } else {
                // Handle specific access denied error
                let errorMessage = '';
                if (result.message === 'Access denied. Not an ADMIN account') {
                    errorMessage = 'You do not have permission to update subadmins. Only ADMIN users can perform this action.';
                } else {
                    errorMessage = result.message || 'Failed to update subadmin';
                }
                setEditError(errorMessage);
                toast.fire({ icon: 'error', title: errorMessage });
            }
        } catch (error) {
            console.error('Update error:', error);
            const errorMsg = 'Error updating subadmin';
            setEditError(errorMsg);
            toast.fire({ icon: 'error', title: errorMsg });
        } finally {
            setEditLoading(false);
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

            a.download = `subadmin_${new Date().getTime()}.${extension}`;
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
        <>
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Sub Admin Management</h2>
                    {/* <button
                        className="btn btn-primary"
                        onClick={() => {
                            resetCreateForm();
                            setIsCreateModalOpen(true);
                        }}
                    >
                        Add Sub Admin
                    </button> */}

                    <div className="relative flex items-center gap-3 w-full sm:w-auto">
                        <TableHeaderActions
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            onDownload={handleDownload}
                            pdfEndpoint="downlodPDF/userRole"
                            excelEndpoint="downlodExcel/userRole"
                            csvEndpoint="downlodCSV/userRole"
                            placeholder="Search subadmin..."
                        />
                        <button type="button" className="btn btn-primary" onClick={() => {
                            resetCreateForm();
                            setIsCreateModalOpen(true);
                        }}>
                            Add Sub Admin
                        </button>
                    </div>
                </div>

                {successMessage && (
                    <div className="alert alert-success mb-4">
                        {successMessage}
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger mb-4">
                        {error}
                    </div>
                )}

                <div className="panel">
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Created At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={7} className="text-center py-8">
                                            <div className="flex justify-center items-center">
                                                <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                                            </div>
                                        </td>
                                    </tr>
                                ) : filteredSubadmins.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="text-center py-8">
                                            No sub Admins found
                                        </td>
                                    </tr>
                                ) : (
                                    filteredSubadmins.map((subadmin, index) => (
                                        <tr key={subadmin._id}>
                                            <td>{(page - 1) * limit + index + 1}</td>
                                            <td>{subadmin.name || 'N/A'}</td>
                                            <td>{subadmin.email || 'N/A'}</td>
                                            <td>{subadmin.phoneNumber || 'N/A'}</td>
                                            <td>{subadmin.role || 'N/A'}</td>
                                            <td>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="sr-only peer"
                                                        checked={subadmin.status === "active" || subadmin.disable === false}
                                                        onChange={() => {
                                                            const isActive = subadmin.status === "active" || subadmin.disable === false;
                                                            handleToggleStatus(subadmin._id, isActive ? "active" : "inactive");
                                                        }}
                                                    />

                                                    <div
                                                        className="
                w-11 h-6 rounded-full
                bg-red-500
                peer-focus:outline-none
                peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800
                peer-checked:bg-green-500
                after:content-['']
                after:absolute after:top-[2px] after:left-[2px]
                after:bg-white after:border-gray-300 after:rounded-full
                after:h-5 after:w-5 after:transition-all
                after:shadow-sm
                peer-checked:after:translate-x-full peer-checked:after:border-white
            "
                                                    ></div>
                                                </label>
                                            </td>

                                            <td>
                                                {subadmin.createdAt
                                                    ? new Date(subadmin.createdAt).toLocaleDateString('en-GB')
                                                    : 'N/A'
                                                }
                                            </td>
                                            <td className="text-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-primary"
                                                    onClick={() => handleEdit(subadmin)}
                                                >
                                                    <IconEdit />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-end gap-2 mt-5">
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            disabled={page <= 1 || loading}
                            onClick={() => setPage(prev => Math.max(1, prev - 1))}
                        >
                            Prev
                        </button>
                        <div className="text-white-dark text-sm">
                            Page {page} of {totalPages}
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            disabled={page >= totalPages || loading}
                            onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Create Subadmin Modal */}
            <Transition appear show={isCreateModalOpen} as="div">
                <Dialog as="div" className="relative z-50" open={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)}>
                    <TransitionChild
                        as="div"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </TransitionChild>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                as="div"
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="w-full max-w-lg transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Sub Admin</h3>
                                        <button
                                            type="button"
                                            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                                            onClick={() => setIsCreateModalOpen(false)}
                                        >
                                            <IconX className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {createError && (
                                        <div className="alert alert-danger mb-4">
                                            {createError}
                                        </div>
                                    )}

                                    <form key={isCreateModalOpen ? 'create-open' : 'create-closed'} onSubmit={handleCreateSubadmin}>
                                        <div className="space-y-4 ">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                                    placeholder="Enter full name"
                                                    required
                                                    autoComplete="off"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                                    placeholder="Enter email address (optional)"
                                                    autoComplete="off"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phoneNumber"
                                                    value={formData.phoneNumber}
                                                    onChange={handlePhoneChange}
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                                    placeholder="Enter 10-digit phone number"
                                                    maxLength={10}
                                                    pattern="[0-9]{10}"
                                                    title="Please enter exactly 10 digits"
                                                    autoComplete="off"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                                    placeholder="Enter password (optional)"
                                                    autoComplete="new-password"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Permissions</label>
                                                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-4 h-32 overflow-y-auto bg-gray-50 dark:bg-gray-700 shadow-inner">
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {availablePermissions.map((permission) => (
                                                            <label key={permission} className="flex items-center cursor-pointer hover:bg-white dark:hover:bg-gray-600 p-2 rounded-lg transition-colors">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
                                                                    checked={formData.permissions?.includes(permission) || false}
                                                                    onChange={() => handlePermissionToggle(permission, false)}
                                                                />
                                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{permission}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                                {formData.permissions && formData.permissions.length > 0 && (
                                                    <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                                                        <p className="text-xs font-semibold text-blue-800 dark:text-blue-200 mb-2">Selected Permissions:</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {formData.permissions.map((permission) => (
                                                                <span
                                                                    key={permission}
                                                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                                                                >
                                                                    {permission}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                            <button
                                                type="button"
                                                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                                                onClick={() => setIsCreateModalOpen(false)}
                                                disabled={createLoading}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={createLoading}
                                            >
                                                {createLoading ? 'Creating...' : 'Create Subadmin'}
                                            </button>
                                        </div>
                                    </form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Edit Subadmin Modal */}
            <Transition appear show={isEditModalOpen} as="div">
                <Dialog as="div" className="relative z-[9999]" open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
                    <TransitionChild
                        as="div"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </TransitionChild>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                as="div"
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-2xl border border-gray-100 dark:border-gray-700 transition-all">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Sub Admin</h3>
                                        <button
                                            type="button"
                                            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                                            onClick={() => setIsEditModalOpen(false)}
                                        >
                                            <IconX className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {editError && (
                                        <div className="alert alert-danger mb-4">
                                            {editError}
                                        </div>
                                    )}

                                    <form onSubmit={handleUpdateSubadmin}>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={editFormData.name}
                                                    onChange={handleEditInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                                    placeholder="Enter full name"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={editFormData.email}
                                                    onChange={handleEditInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                                    placeholder="Enter email address"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phoneNumber"
                                                    value={editFormData.phoneNumber}
                                                    onChange={handleEditPhoneChange}
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                                    placeholder="Enter 10-digit phone number"
                                                    maxLength={10}
                                                    pattern="[0-9]{10}"
                                                    title="Please enter exactly 10 digits"
                                                />
                                            </div>


                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                    Password
                                                </label>

                                                <div className="relative">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        name="password"
                                                        value={editFormData.password || ""}
                                                        onChange={handleEditInputChange}
                                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                                        placeholder="Enter new password"
                                                    />

                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
                                                    >
                                                        {showPassword ? "Hide" : "Show"}
                                                    </button>
                                                </div>
                                            </div>


                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Permissions</label>
                                                <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-4 h-32 overflow-y-auto bg-gray-50 dark:bg-gray-700 shadow-inner">
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {availablePermissions.map((permission) => (
                                                            <label key={permission} className="flex items-center cursor-pointer hover:bg-white dark:hover:bg-gray-600 p-2 rounded-lg transition-colors">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
                                                                    checked={editFormData.permissions?.includes(permission) || false}
                                                                    onChange={() => handlePermissionToggle(permission, true)}
                                                                />
                                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{permission}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                                {editFormData.permissions && editFormData.permissions.length > 0 && (
                                                    <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                                                        <p className="text-xs font-semibold text-blue-800 dark:text-blue-200 mb-2">Selected Permissions:</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {editFormData.permissions.map((permission) => (
                                                                <span
                                                                    key={permission}
                                                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                                                                >
                                                                    {permission}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                            <button
                                                type="button"
                                                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                                                onClick={() => setIsEditModalOpen(false)}
                                                disabled={editLoading}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={editLoading}
                                            >
                                                {editLoading ? 'Updating...' : 'Update Subadmin'}
                                            </button>
                                        </div>
                                    </form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Subadmin;
