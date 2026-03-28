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
import { Download } from 'lucide-react';

type PlanItem = {
    _id: string;
    title?: string;
    price?: number;
    planType?: 'FREE' | 'PREMIUM' | 'SILVER' | 'GOLD';
    validityInDays?: number;
    features?: string[];
    createProperty?: number;
    isActive?: boolean;
    allowedRoles?: string[];
    allowedAddons?: string[];
    createdAt?: string;
};

type AddonItem = {
    _id: string;
    title: string;
    price: number;
    description?: string;
};

type PlansApiResponse = {
    success: boolean;
    message?: string;
    page?: number;
    limit?: number;
    skip?: number;
    total?: number;
    totalPages?: number;
    data?: PlanItem[];
};

type PlanMutationResponse = {
    success: boolean;
    message?: string;
    data?: PlanItem;
};

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    showCloseButton: true,
});

const PackagesList = () => {
    const dispatch = useDispatch();

    const [plans, setPlans] = useState<PlanItem[]>([]);
    const [addons, setAddons] = useState<AddonItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [togglingPlanIds, setTogglingPlanIds] = useState<Record<string, boolean>>({});

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
    const [editingPlanId, setEditingPlanId] = useState<string | null>(null);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState<string>('');
    const [planType, setPlanType] = useState<'FREE' | 'PREMIUM' | 'SILVER' | 'GOLD'>('SILVER');
    const [allowedRoles, setAllowedRoles] = useState<string[]>([]);

    const [validityInDays, setValidityInDays] = useState<string>('');
    const [featuresText, setFeaturesText] = useState('');
    const [createProperty, setCreateProperty] = useState<string>('');
    const [allowedAddons, setAllowedAddons] = useState<string[]>([]);
    const [isActive, setIsActive] = useState(true);
    const [saving, setSaving] = useState(false);

    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            if (debouncedSearch !== searchQuery) {
                setDebouncedSearch(searchQuery);
                setPage(1); // Reset to first page on new search
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery, debouncedSearch]);

    useEffect(() => {
        dispatch(setPageTitle('Packages'));
    }, [dispatch]);

    const openCreateForm = () => {
        setFormMode('create');
        setEditingPlanId(null);
        setTitle('');
        setPrice('');
        setAllowedRoles([]);
        setValidityInDays('');
        setFeaturesText('');
        setCreateProperty('');
        setAllowedAddons([]);
        setIsActive(true);
        setError(null);
        setIsFormOpen(true);
    };

    const openEditForm = (plan: PlanItem) => {
        setFormMode('edit');
        setEditingPlanId(plan._id);
        setTitle(plan.title || '');
        setPrice(typeof plan.price === 'number' ? String(plan.price) : '');
        setAllowedRoles(Array.isArray(plan.allowedRoles) ? plan.allowedRoles : []);
        setValidityInDays(typeof plan.validityInDays === 'number' ? String(plan.validityInDays) : '');
        setFeaturesText(Array.isArray(plan.features) ? plan.features.join('\n') : '');
        setCreateProperty(typeof plan.createProperty === 'number' ? String(plan.createProperty) : '');
        setAllowedAddons(plan.allowedAddons || []);
        setIsActive(Boolean(plan.isActive));
        setError(null);
        setIsFormOpen(true);
    };





    const closeForm = () => {
        if (saving) return;
        setIsFormOpen(false);
    };

    const onToggleIsActive = async (plan: PlanItem) => {
        const nextIsActive = !Boolean(plan.isActive);

        setError(null);
        setTogglingPlanIds((prev) => ({ ...prev, [plan._id]: true }));
        setPlans((prev) => prev.map((p) => (p._id === plan._id ? { ...p, isActive: nextIsActive } : p)));

        try {
            const url = `${BASE_URL}/subscription/updatePlan/${plan._id}`;
            const payload = {
                title: plan.title,
                price: plan.price,
                allowedRoles,
                validityInDays: plan.validityInDays,
                features: plan.features,
                createProperty: plan.createProperty,
                allowedAddons: plan.allowedAddons,
                isActive: nextIsActive,
            };

            const res = await apiCall(url, {
                method: 'PUT',
                body: JSON.stringify(payload),
            });

            const json = (await res.json()) as PlanMutationResponse;
            if (!json?.success) {
                throw new Error(json?.message || 'Failed to update status');
            }

            const updatedPlan = json?.data;
            if (updatedPlan?._id) {
                setPlans((prev) => prev.map((p) => (p._id === updatedPlan._id ? updatedPlan : p)));
            }

            // Show success toast message
            toast.fire({
                icon: 'success',
                title: nextIsActive ? 'Package enabled successfully' : 'Package disabled successfully'
            });
        } catch (err) {
            setPlans((prev) => prev.map((p) => (p._id === plan._id ? { ...p, isActive: Boolean(plan.isActive) } : p)));
            setError((err as Error)?.message || 'Failed to update status');

            // Show error toast message
            toast.fire({
                icon: 'error',
                title: (err as Error)?.message || 'Failed to update package status'
            });
        } finally {
            setTogglingPlanIds((prev) => {
                const next = { ...prev };
                delete next[plan._id];
                return next;
            });
        }
    };

    const onSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();

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

        const parsedValidity = Number(validityInDays);
        if (!Number.isFinite(parsedValidity) || parsedValidity <= 0) {
            setError('Valid validity (days) is required');
            return;
        }

        const parsedCreateProperty = Number(createProperty);
        if (!Number.isFinite(parsedCreateProperty) || parsedCreateProperty < 0) {
            setError('Valid create property count is required');
            return;
        }

        const features = featuresText
            .split(/\r?\n|,/)
            .map((s) => s.trim())
            .filter(Boolean);

        setSaving(true);
        setError(null);
        try {
            let url = `${BASE_URL}/subscription/create`;
            let method: 'POST' | 'PUT' = 'POST';
            if (formMode === 'edit') {
                if (!editingPlanId) throw new Error('Missing plan id');
                url = `${BASE_URL}/subscription/updatePlan/${editingPlanId}`;
                method = 'PUT';
            }

            const payload = {
                title: trimmedTitle,
                price: parsedPrice,
                allowedRoles,
                planType,
                validityInDays: parsedValidity,
                features,
                createProperty: parsedCreateProperty,
                allowedAddons,
                isActive,
            };

            const res = await apiCall(url, {
                method,
                body: JSON.stringify(payload),
            });

            const json = (await res.json()) as PlanMutationResponse;
            if (!json?.success) {
                throw new Error(json?.message || 'Failed to save plan');
            }

            const savedPlan = json?.data;
            if (savedPlan?._id) {
                if (formMode === 'create') {
                    setPlans((prev) => [savedPlan, ...prev]);
                } else {
                    setPlans((prev) => prev.map((p) => (p._id === savedPlan._id ? savedPlan : p)));
                }
            }

            toast.fire({
                icon: 'success',
                title: formMode === 'create' ? 'Plan created successfully!' : 'Plan updated successfully!',
            });

            closeForm();
        } catch (err) {
            setError((err as Error)?.message || 'Failed to save plan');
        } finally {
            setSaving(false);
        }
    };



    useEffect(() => {
        const fetchAddons = async () => {
            try {
                const res = await apiCall(`${BASE_URL}/addon/getAll`, { method: 'GET' });
                const json = await res.json();
                if (json.success) {
                    setAddons(json.data || []);
                }
            } catch (err) {
                console.error('Failed to fetch addons', err);
            }
        };
        fetchAddons();
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        const fetchPlans = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = new URL(`${BASE_URL}/subscription/getPlans`);
                url.searchParams.set('page', String(page));
                url.searchParams.set('limit', String(limit));
                if (debouncedSearch) {
                    url.searchParams.set("search", debouncedSearch);
                }

                const res = await apiCall(url.toString(), {
                    method: 'GET',
                    signal: controller.signal,
                });

                const json = (await res.json()) as PlansApiResponse;
                if (!json?.success) {
                    throw new Error(json?.message || 'Failed to fetch plans');
                }

                console.log('Plans API response:', json);

                const fetchedPlans = Array.isArray(json?.data) ? json.data : [];
                const sortedPlans = fetchedPlans.sort((a, b) => {
                    const aCreated = a.createdAt || "";
                    const bCreated = b.createdAt || "";
                    if (aCreated > bCreated) return -1;
                    if (aCreated < bCreated) return 1;
                    return 0;
                });

                setPlans(sortedPlans);
                setTotal(json?.total || 0);
                setTotalPages(json?.totalPages || Math.ceil((json?.total || 0) / limit));
            } catch (err) {
                if ((err as Error)?.name !== 'AbortError') {
                    setError((err as Error)?.message || 'Failed to fetch plans');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPlans();

        return () => controller.abort();
    }, [page, limit, debouncedSearch]);

    const handleDownload = async (endpoint: string, fileType: "pdf" | "excel") => {
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
            a.download = `packages_${new Date().getTime()}.${fileType === 'excel' ? 'xlsx' : 'pdf'}`;
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
                    <h5 className="font-semibold text-lg dark:text-white-light">Packages</h5>
                    <div className="relative flex items-center gap-3 w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search packages..."
                            className="form-input w-full sm:w-64"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="button" className="btn btn-outline-danger flex items-center gap-2" onClick={() => handleDownload('subscription/export-pdf', 'pdf')}>
                            <Download className="w-4 h-4" /> PDF
                        </button>
                        <button type="button" className="btn btn-outline-success flex items-center gap-2" onClick={() => handleDownload('subscription/export-excel', 'excel')}>
                            <Download className="w-4 h-4" /> Excel
                        </button>
                        <button type="button" className="btn btn-primary" onClick={openCreateForm}>
                            Create Package
                        </button>
                    </div>
                </div>

                {error && <div className="text-danger mb-4">{error}</div>}

                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Title</th>
                                <th>Plan Type</th>
                                <th className="w-[150px] whitespace-nowrap">Price</th>
                                <th>Validity</th>
                                <th>Create Property</th>
                                <th>Features</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={10} className="text-center py-8">
                                        <div className="flex justify-center items-center">
                                            <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                                        </div>
                                    </td>
                                </tr>
                            ) : plans.length === 0 ? (
                                <tr>
                                    <td colSpan={10} className="text-center py-8">
                                        <div className="flex justify-center items-center">
                                            <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                plans.map((p, index) => (
                                    <tr key={p._id}>
                                        <td>{(page - 1) * limit + index + 1}</td>
                                        <td>
                                            <div className="whitespace-nowrap">{p.title || '-'}</div>
                                        </td>
                                        <td>
                                            <div className="whitespace-nowrap">
                                                <span className={`badge ${p.planType === 'PREMIUM' ? 'bg-purple-800 text-purple-800' :
                                                    p.planType === 'GOLD' ? 'bg-yellow-400 text-yellow-800' :
                                                        p.planType === 'SILVER' ? 'bg-warning text-gray-800' :
                                                            'bg-success text-success'
                                                    }`}>
                                                    {p.planType || 'SILVER'}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="w-[150px] whitespace-nowrap">
                                            {typeof p.price === 'number' ? `₹ ${p.price}` : '-'}
                                        </td>
                                        <td>{typeof p.validityInDays === 'number' ? `${p.validityInDays} Days` : '-'}</td>
                                        <td>{typeof p.createProperty === 'number' ? p.createProperty : '-'}</td>
                                        <td>
                                            {Array.isArray(p.features) && p.features.length > 0 ? (
                                                <div className="max-w-[340px]">
                                                    {p.features.join(', ')}
                                                </div>
                                            ) : (
                                                '-'
                                            )}
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${p.isActive ? 'bg-success' : 'bg-red-500'
                                                    } ${Boolean(togglingPlanIds[p._id]) ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                                                onClick={() => onToggleIsActive(p)}
                                                disabled={Boolean(togglingPlanIds[p._id])}
                                                aria-pressed={Boolean(p.isActive)}
                                            >
                                                <span
                                                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${p.isActive ? 'translate-x-5' : 'translate-x-0.5'
                                                        }`}
                                                />
                                            </button>
                                        </td>
                                        <td>
                                            {p.createdAt ? (
                                                <div className="whitespace-nowrap">
                                                    {new Date(p.createdAt).toLocaleString('en-IN', {
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
                                            <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => openEditForm(p)}>
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
                        Showing {plans.length} of {total} plans
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
                                        className={`btn btn-sm ${page === pageNum
                                            ? 'btn-primary'
                                            : 'btn-outline-primary'
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
                                        <div className="text-lg font-bold">{formMode === 'create' ? 'Create Package' : 'Edit Package'}</div>
                                        <button type="button" className="text-white-dark hover:text-dark" onClick={closeForm} disabled={saving}>
                                            <IconX />
                                        </button>
                                    </div>

                                    <form className="p-5 space-y-4" onSubmit={onSubmitForm}>
                                        <div>
                                            <label className="text-white-dark text-xs">Title</label>
                                            <input className="form-input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" required />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-white-dark text-xs">Price</label>
                                                <input className="form-input" value={price} onChange={(e) => setPrice(e.target.value)} type="number" min={0} step="1" required />
                                            </div>
                                            <div>
                                                <label className="text-white-dark text-xs">Validity (Days)</label>
                                                <input className="form-input" value={validityInDays} onChange={(e) => setValidityInDays(e.target.value)} type="number" min={1} step="1" required />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* <div>
                                                <label className="text-white-dark text-xs">Plan Type</label>
                                                <select className="form-select" value={planType} onChange={(e) => setPlanType(e.target.value as 'FREE' | 'PREMIUM' | 'SILVER' | 'GOLD')}>
                                                    <option value="FREE">Free</option>
                                                    <option value="PREMIUM">Premium</option>
                                                    <option value="SILVER">Silver</option>
                                                    <option value="GOLD">Gold</option>
                                                </select>
                                            </div> */}
                                            <div>
                                                <label className="text-white-dark text-xs mb-2 block">Allowed Roles</label>
                                                <div className="border border-white-light dark:border-[#1b2e4b] rounded p-3 space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="role-propertyowner"
                                                            className="form-checkbox"
                                                            checked={allowedRoles.includes('PROPERTYOWNER')}
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    setAllowedRoles((prev) => [...prev, 'PROPERTYOWNER']);
                                                                } else {
                                                                    setAllowedRoles((prev) => prev.filter((role) => role !== 'PROPERTYOWNER'));
                                                                }
                                                            }}
                                                        />
                                                        <label htmlFor="role-propertyowner" className="mb-0 cursor-pointer">
                                                            Property Owner
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="role-broker"
                                                            className="form-checkbox"
                                                            checked={allowedRoles.includes('BROKER')}
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    setAllowedRoles((prev) => [...prev, 'BROKER']);
                                                                } else {
                                                                    setAllowedRoles((prev) => prev.filter((role) => role !== 'BROKER'));
                                                                }
                                                            }}
                                                        />
                                                        <label htmlFor="role-broker" className="mb-0 cursor-pointer">
                                                            Broker
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="role-builder"
                                                            className="form-checkbox"
                                                            checked={allowedRoles.includes('BUILDER')}
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    setAllowedRoles((prev) => [...prev, 'BUILDER']);
                                                                } else {
                                                                    setAllowedRoles((prev) => prev.filter((role) => role !== 'BUILDER'));
                                                                }
                                                            }}
                                                        />
                                                        <label htmlFor="role-builder" className="mb-0 cursor-pointer">
                                                            Builder
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-white-dark text-xs">Create Property Limit</label>
                                                <input className="form-input" value={createProperty} onChange={(e) => setCreateProperty(e.target.value)} type="number" min={0} step="1" required />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-white-dark text-xs">Features (comma or new line separated)</label>
                                            <textarea className="form-textarea" rows={4} value={featuresText} onChange={(e) => setFeaturesText(e.target.value)} />
                                        </div>

                                        <div>
                                            <label className="text-white-dark text-xs mb-2 block">Allowed Addons</label>
                                            <div className="border border-white-light dark:border-[#1b2e4b] rounded p-3 max-h-40 overflow-y-auto">
                                                {addons.length > 0 ? (
                                                    addons.map((addon) => (
                                                        <div key={addon._id} className="flex items-center gap-2 mb-2 last:mb-0">
                                                            <input
                                                                type="checkbox"
                                                                id={`addon-${addon._id}`}
                                                                className="form-checkbox"
                                                                checked={allowedAddons.includes(addon._id)}
                                                                onChange={(e) => {
                                                                    if (e.target.checked) {
                                                                        setAllowedAddons((prev) => [...prev, addon._id]);
                                                                    } else {
                                                                        setAllowedAddons((prev) => prev.filter((id) => id !== addon._id));
                                                                    }
                                                                }}
                                                            />
                                                            <label htmlFor={`addon-${addon._id}`} className="mb-0 cursor-pointer">
                                                                {addon.title} {addon.price ? `(₹${addon.price})` : ''}
                                                            </label>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="text-gray-500 text-sm">No addons available</div>
                                                )}
                                            </div>
                                        </div>

                                        {/* <div className="flex items-center gap-2">
                                            <input id="plan-active" type="checkbox" className="form-checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
                                            <label htmlFor="plan-active" className="text-white-dark text-sm">
                                                Active
                                            </label>
                                        </div> */}

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

export default PackagesList;
