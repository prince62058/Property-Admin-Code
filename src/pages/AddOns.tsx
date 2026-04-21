import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import { setPageTitle } from '../store/themeConfigSlice';
import { apiCall } from '../utils/api';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import IconEdit from '../components/Icon/IconEdit';
import IconX from '../components/Icon/IconX';
import Swal from 'sweetalert2';
import { BASE_URL } from '../config';
import TableHeaderActions from '../components/TableHeaderActions';

type AddonItem = {
    _id: string;
    key: string;
    title: string;
    price: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    description?: string;
};

type AddonsApiResponse = {
    success: boolean;
    message?: string;
    data: AddonItem[];
};

type AddonMutationResponse = {
    success: boolean;
    message?: string;
    data?: AddonItem;
};

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    showCloseButton: true,
});

const AddOns = () => {
    const dispatch = useDispatch();

    const [addons, setAddons] = useState<AddonItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [togglingAddonIds, setTogglingAddonIds] = useState<Record<string, boolean>>({});

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
    const [editingAddonId, setEditingAddonId] = useState<string | null>(null);
    const [key, setKey] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState<string>('');
    const [description, setDescription] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [saving, setSaving] = useState(false);

    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        dispatch(setPageTitle('AddOns'));
    }, [dispatch]);

    const filteredAddons = addons.filter((a) => {
        const query = searchQuery.trim().toLowerCase();

        if (!query) return true;

        const key = a.key?.toLowerCase() || "";
        const title = a.title?.toLowerCase() || "";
        const desc = a.description?.toLowerCase() || "";
        const price = String(a.price || "");

        return (
            key.includes(query) ||
            title.includes(query) ||
            desc.includes(query) ||
            price.includes(query)
        );
    });

    const openCreateForm = () => {
        setFormMode('create');
        setEditingAddonId(null);
        setKey('');
        setTitle('');
        setPrice('');
        setDescription('');
        setIsActive(true);
        setError(null);
        setIsFormOpen(true);
    };

    const openEditForm = (addon: AddonItem) => {
        setFormMode('edit');
        setEditingAddonId(addon._id);
        setKey(addon.key);
        setTitle(addon.title);
        setPrice(String(addon.price));
        setDescription(addon.description || '');
        setIsActive(Boolean(addon.isActive));
        setError(null);
        setIsFormOpen(true);
    };

    const closeForm = () => {
        if (saving) return;
        setIsFormOpen(false);
    };

    const onToggleIsActive = async (addon: AddonItem) => {

        const nextStatus = !addon.isActive;

        setTogglingAddonIds(prev => ({
            ...prev,
            [addon._id]: true
        }));

        // optimistic UI update
        setAddons(prev =>
            prev.map(a =>
                a._id === addon._id ? { ...a, isActive: nextStatus } : a
            )
        );

        try {

            const token = localStorage.getItem("token");

            const url = `${BASE_URL}/addon/update/${addon._id}`;

            const res = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify({
                    key: addon.key,
                    title: addon.title,
                    price: addon.price,
                    description: addon.description,
                    isActive: nextStatus
                })
            });

            if (!res.ok) {
                throw new Error("Failed to update addon");
            }

            const data = await res.json();

            if (!data.success) {
                throw new Error(data.message || "Update failed");
            }

            toast.fire({
                icon: "success",
                title: nextStatus
                    ? "Addon enabled successfully"
                    : "Addon disabled successfully"
            });

        } catch (error) {

            // revert UI if failed
            setAddons(prev =>
                prev.map(a =>
                    a._id === addon._id ? { ...a, isActive: addon.isActive } : a
                )
            );

            toast.fire({
                icon: "error",
                title: "Failed to update addon status"
            });

        } finally {

            setTogglingAddonIds(prev => {
                const copy = { ...prev };
                delete copy[addon._id];
                return copy;
            });

        }
    };

    const onSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedKey = key.trim();
        if (!trimmedKey) {
            setError('Key is required');
            return;
        }

        const trimmedTitle = title.trim();
        if (!trimmedTitle) {
            setError('Title is required');
            return;
        }

        const parsedPrice = Number(price);
        if (!Number.isFinite(parsedPrice) || parsedPrice < 0) {
            setError('Valid price is required');
            return;
        }

        setSaving(true);
        setError(null);
        try {
            let url = `${BASE_URL}/addon/create`;
            let method: 'POST' | 'PUT' = 'POST';
            if (formMode === 'edit') {
                if (!editingAddonId) throw new Error('Missing addon id');
                url = `${BASE_URL}/addon/update/${editingAddonId}`;
                method = 'PUT';
            }

            const payload = {
                key: trimmedKey,
                title: trimmedTitle,
                price: parsedPrice,
                description: description.trim(),
                isActive,
            };

            const res = await apiCall(url, {
                method,
                body: JSON.stringify(payload),
            });

            const json = (await res.json()) as AddonMutationResponse;
            if (!json?.success) {
                throw new Error(json?.message || 'Failed to save addon');
            }

            const savedAddon = json?.data;
            if (savedAddon?._id) {
                if (formMode === 'create') {
                    setAddons((prev) => [savedAddon, ...prev]);
                } else {
                    setAddons((prev) => prev.map((a) => (a._id === savedAddon._id ? savedAddon : a)));
                }
            }

            toast.fire({
                icon: 'success',
                title: formMode === 'create' ? 'Addon created successfully!' : 'Addon updated successfully!',
            });

            closeForm();
        } catch (err) {
            setError((err as Error)?.message || 'Failed to save addon');
        } finally {
            setSaving(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();

        const fetchAddons = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = new URL(`${BASE_URL}/addon/getAll`);
                url.searchParams.set('page', String(page));
                url.searchParams.set('limit', String(limit));

                const res = await apiCall(url.toString(), {
                    method: 'GET',
                    signal: controller.signal,
                });

                const json = (await res.json()) as AddonsApiResponse;
                if (!json?.success) {
                    throw new Error(json?.message || 'Failed to fetch addons');
                }

                console.log('Addons API response:', json);
                setAddons(Array.isArray(json?.data) ? json.data : []);
                // Assuming the API returns total and totalPages, but since not specified, set to data length for now
                setTotal(json.data.length);
                setTotalPages(Math.ceil(json.data.length / limit));
            } catch (err) {
                if ((err as Error)?.name !== 'AbortError') {
                    setError((err as Error)?.message || 'Failed to fetch addons');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchAddons();

        return () => controller.abort();
    }, [page, limit]);


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

            a.download = `addons_${new Date().getTime()}.${extension}`;
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
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">AddOns</h5>


                    <div className="relative flex items-center gap-3 w-full sm:w-auto">
                        <TableHeaderActions
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            onDownload={handleDownload}
                            pdfEndpoint="addon/exportPDF"
                            excelEndpoint="addon/exportExcel"
                            // csvEndpoint="export-csv"
                            placeholder="Search addons..."
                        />
                        <button type="button" className="btn btn-primary" onClick={openCreateForm}>
                            Create AddOn
                        </button>
                    </div>
                </div>

                {error && <div className="text-danger mb-4">{error}</div>}

                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Key</th>
                                <th>Title</th>
                                <th className="w-[80px]">Price</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={8} className="text-center py-8">
                                        <div className="flex justify-center items-center">
                                            <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredAddons.length === 0 ? (
                                <tr>
                                    <td colSpan={8} className="text-center py-8">
                                        No addons found
                                    </td>
                                </tr>
                            ) : (
                                filteredAddons.map((a, index) => (
                                    <tr key={a._id}>
                                        <td>{(page - 1) * limit + index + 1}</td>
                                        <td>
                                            <div className="whitespace-nowrap">{a.key}</div>
                                        </td>
                                        <td>
                                            <div className="whitespace-nowrap">{a.title}</div>
                                        </td>
                                        <td className="w-[80px]">{`₹ ${a.price}`}</td>
                                        <td>
                                            <div className="max-w-[340px]">{a.description || '-'}</div>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${a.isActive ? 'bg-green-500' : 'bg-red-500'
                                                    } ${Boolean(togglingAddonIds[a._id]) ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                                                onClick={() => onToggleIsActive(a)}
                                                disabled={Boolean(togglingAddonIds[a._id])}
                                                aria-pressed={Boolean(a.isActive)}
                                            >
                                                <span
                                                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${a.isActive ? 'translate-x-5' : 'translate-x-0.5'
                                                        }`}
                                                />
                                            </button>
                                        </td>
                                        <td>
                                            {a.createdAt ? (
                                                <div className="whitespace-nowrap">
                                                    {new Date(a.createdAt).toLocaleString('en-IN', {
                                                        day: '2-digit',
                                                        month: 'short',
                                                        year: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                        hour12: true,
                                                    })}
                                                </div>
                                            ) : '-'}
                                        </td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => openEditForm(a)}>
                                                <IconEdit />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-between mt-5">
                    <div className="text-white-dark text-sm">
                        Showing {addons.length} of {total} addons
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            disabled={page <= 1 || loading}
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                        >
                            Prev
                        </button>

                        <div className="flex items-center gap-1">
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                let pageNum;
                                if (totalPages <= 5) {
                                    pageNum = i + 1;
                                } else if (page <= 3) {
                                    pageNum = i + 1;
                                } else if (page >= totalPages - 2) {
                                    pageNum = totalPages - 4 + i;
                                } else {
                                    pageNum = page - 2 + i;
                                }

                                return (
                                    <button
                                        key={pageNum}
                                        type="button"
                                        className={`btn btn-sm ${page === pageNum ? 'btn-primary' : 'btn-outline-primary'
                                            }`}
                                        onClick={() => setPage(pageNum)}
                                        disabled={loading}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            disabled={page >= totalPages || loading}
                            onClick={() => setPage((p) => p + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <Transition appear show={isFormOpen} as={Fragment}>
                <Dialog as="div" open={isFormOpen} onClose={closeForm}>
                    <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0" />
                    </TransitionChild>

                    <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                        <div className="flex min-h-screen items-start justify-center px-4">
                            <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <DialogPanel as="div" className="panel my-8 w-full max-w-xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                        <div className="text-lg font-bold">{formMode === 'create' ? 'Create AddOn' : 'Edit AddOn'}</div>
                                        <button type="button" className="text-white-dark hover:text-dark" onClick={closeForm} disabled={saving}>
                                            <IconX />
                                        </button>
                                    </div>

                                    <form className="p-5 space-y-4" onSubmit={onSubmitForm}>

                                        <div>
                                            <label className="text-white-dark text-xs">Key</label>

                                            <select
                                                className="form-input"
                                                value={key}
                                                onChange={(e) => setKey(e.target.value)}
                                                required
                                            >
                                                <option value="">Select Key</option>
                                                <option value="PREMIUM">Premium</option>
                                                <option value="FURNISHED">Fursnished</option>
                                                <option value="URGENT_SALE">Urgent Sale </option>
                                                <option value="MARKET_FEATURE">Call Marketing Feature </option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="text-white-dark text-xs">Title</label>
                                            <input className="form-input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" required />
                                        </div>

                                        <div>
                                            <label className="text-white-dark text-xs">Price</label>
                                            <input className="form-input" value={price} onChange={(e) => setPrice(e.target.value)} type="number" min={0} step="1" required />
                                        </div>

                                        <div>
                                            <label className="text-white-dark text-xs">Description</label>
                                            <textarea className="form-textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <input id="addon-active" type="checkbox" className="form-checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
                                            <label htmlFor="addon-active" className="text-white-dark text-sm">
                                                Active
                                            </label>
                                        </div>

                                        {error && <div className="text-danger">{error}</div>}

                                        <div className="mt-6 flex items-center justify-end gap-2">
                                            <button type="button" className="btn btn-outline-danger" onClick={closeForm} disabled={saving}>
                                                Cancel
                                            </button>
                                            <button type="submit" className="btn btn-primary" disabled={saving}>
                                                {saving ? 'Saving...' : 'Save'}
                                            </button>
                                        </div>
                                    </form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default AddOns;
