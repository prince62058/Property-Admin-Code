import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import IconEdit from '../components/Icon/IconEdit';
import IconTrashLines from '../components/Icon/IconTrashLines';
import IconX from '../components/Icon/IconX';
import Swal from 'sweetalert2';
import { BASE_URL } from '../config';
import TableHeaderActions from '../components/TableHeaderActions';
import Select, { components } from 'react-select';

type Partner = {
    _id: string;
    PartnerName: string;
    PartnerImage?: string;
    city?: {
        _id: string;
        name?: string;
        slug?: string;
        lat?: number;
        lng?: number;
        pincode?: string;
        state?: string;
        country?: string;
    };
    cityId?: string;
    cities?: string[];
    disable: boolean;
    createdAt: string;
    updatedAt: string;
};

type PartnersResponse = {
    success: boolean;
    message?: string;
    data?: Partner[];
    pagination?: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
};

type PartnerMutationResponse = {
    success: boolean;
    message?: string;
    data?: Partner;
};

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    showCloseButton: true,
});

const PartnersList = () => {
    const dispatch = useDispatch();

    const [partners, setPartners] = useState<Partner[]>([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [togglingPartnerIds, setTogglingPartnerIds] = useState<Record<string, boolean>>({});

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
    const [editingPartnerId, setEditingPartnerId] = useState<string | null>(null);
    const [partnerName, setPartnerName] = useState('');
    const [partnerImage, setPartnerImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [saving, setSaving] = useState(false);
    const [citySearch, setCitySearch] = useState("");
    const [showTags, setShowTags] = useState(true);
    const [refreshKey, setRefreshKey] = useState(0);

    const [cityOptions, setCityOptions] = useState<any[]>([]);
    const [selectedCities, setSelectedCities] = useState<any[]>([]);

    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        dispatch(setPageTitle('Partners'));
    }, [dispatch]);

    const handleSelectAllCities = () => {
        setSelectedCities(cityOptions);
    };

    const handleDeselectAllCities = () => {
        setSelectedCities([]);
    };

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch(`${BASE_URL}/city?limit=10000`);
                const data = await response.json();
                if (data.success) {
                    const citiesArr = (data.data && data.data.cities) || data.cities || [];
                    const options = citiesArr.map((city: any) => ({
                        value: city._id,
                        label: city.name,
                        pincodes: Array.isArray(city.pincode) ? city.pincode.join(', ') : (city.pincode || '')
                    }));
                    setCityOptions(options);
                }
            } catch (error) {
                console.error("Error fetching cities", error);
            }
        };
        fetchCities();
    }, []);

    const openCreateForm = () => {
        setFormMode('create');
        setEditingPartnerId(null);
        setPartnerName('');
        setPartnerImage(null);
        setImagePreview('');
        setIsDisabled(false);
        setSelectedCities([]);
        setIsFormOpen(true);
    };

    const openEditForm = (partner: Partner) => {
        console.log('[PartnersList] Opening edit form for:', partner);
        setFormMode('edit');
        setEditingPartnerId(partner._id);
        setPartnerName(partner.PartnerName || '');
        setImagePreview(partner.PartnerImage || '');
        setPartnerImage(null);
        setIsDisabled(Boolean(partner.disable));

        if (partner.cities && Array.isArray(partner.cities)) {
            setSelectedCities(
                partner.cities.map((city: any) => {
                    // Handle both string IDs and populated objects
                    const cityId = typeof city === 'string' ? city : city?._id;
                    const cityName = typeof city === 'string' ? city : (city?.name || city?._id || 'Unknown City');

                    const found = cityOptions.find((opt) => opt.value === cityId);
                    return found || { value: cityId, label: String(cityName) };
                })
            );
        } else {
            const legacyCityId = partner?.cityId || (typeof partner.city === 'object' ? partner.city?._id : partner.city) || null;
            if (legacyCityId) {
                const cityName = (typeof partner.city === 'object' ? partner.city?.name : null) || legacyCityId;
                const found = cityOptions.find((opt) => opt.value === legacyCityId);
                setSelectedCities([found || { value: legacyCityId, label: String(cityName) }]);
            } else {
                setSelectedCities([]);
            }
        }
        setIsFormOpen(true);
    };

    const closeForm = () => {
        if (saving) return;
        setIsFormOpen(false);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPartnerImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setPartnerImage(null);
        setImagePreview('');
    };

    const onToggleDisable = async (partner: Partner) => {
        const nextDisable = !Boolean(partner.disable);

        console.log('[Partners] toggle', { id: partner._id, from: partner.disable, to: nextDisable });

        setError(null);
        setTogglingPartnerIds((prev) => ({ ...prev, [partner._id]: true }));

        setPartners((prev) => prev.map((p) => (p._id === partner._id ? { ...p, disable: nextDisable } : p)));

        try {
            const token = localStorage.getItem('token');
            const url = `${BASE_URL}/togglePartnerStatus/${partner._id}`;

            const res = await fetch(url, {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
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
                throw new Error(`Failed to update partner status (${res.status})${suffix}`);
            }

            const json = (await res.json()) as PartnerMutationResponse;
            if (!json?.success) {
                throw new Error(json?.message || 'Failed to update partner status');
            }

            const updatedPartner = json?.data;
            if (updatedPartner?._id) {
                setPartners((prev) => prev.map((p) => (p._id === updatedPartner._id ? updatedPartner : p)));
            }

            // Show success toast message
            toast.fire({
                icon: 'success',
                title: nextDisable ? 'Partner disabled successfully' : 'Partner enabled successfully'
            });
        } catch (err) {
            setPartners((prev) => prev.map((p) => (p._id === partner._id ? { ...p, disable: Boolean(partner.disable) } : p)));
            setError((err as Error)?.message || 'Failed to update partner status');

            // Show error toast message
            toast.fire({
                icon: 'error',
                title: (err as Error)?.message || 'Failed to update partner status'
            });
        } finally {
            setTogglingPartnerIds((prev) => {
                const next = { ...prev };
                delete next[partner._id];
                return next;
            });
        }
    };

    const onSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedName = partnerName.trim();
        if (!trimmedName) {
            setError('Partner name is required');
            return;
        }

        setSaving(true);
        setError(null);
        try {
            const token = localStorage.getItem('token');

            const payload: any = {
                PartnerName: trimmedName,
                disable: isDisabled,
            };

            if (selectedCities.length > 0) {
                payload.cities = selectedCities.map((c: any) => c.value);
            }

            // Add image to payload if selected
            if (partnerImage) {
                const formData = new FormData();
                formData.append('PartnerName', trimmedName);
                formData.append('disable', String(isDisabled));
                formData.append('PartnerImage', partnerImage);

                if (selectedCities.length > 0) {
                    formData.append('cities', JSON.stringify(selectedCities.map((c: any) => c.value)));
                }

                let url = `${BASE_URL}/createPartner`;
                let method: 'POST' | 'PUT' = 'POST';
                if (formMode === 'edit') {
                    if (!editingPartnerId) throw new Error('Missing partner id');
                    url = `${BASE_URL}/updatePartner/${editingPartnerId}`;
                    method = 'PUT';
                }

                console.log('[Partners] submit', { formMode, editingPartnerId, url, hasImage: !!partnerImage });

                const res = await fetch(url, {
                    method,
                    headers: {
                        Accept: 'application/json',
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                    body: formData,
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
                    throw new Error(`Failed to save partner (${res.status})${suffix}`);
                }

                const json = (await res.json()) as PartnerMutationResponse;
                if (!json?.success) {
                    throw new Error(json?.message || 'Failed to save partner');
                }

                const savedPartner = json?.data;
                if (savedPartner?._id) {
                    if (formMode === 'create') {
                        setPartners((prev) => [savedPartner, ...prev]);
                    } else {
                        setPartners((prev) => prev.map((p) => (p._id === savedPartner._id ? savedPartner : p)));
                    }
                }

                toast.fire({ icon: 'success', title: formMode === 'create' ? 'Partner created successfully' : 'Partner updated successfully' });
                setIsFormOpen(false);
                // Ensure UI reflects server response by re-fetching list
                setRefreshKey((k) => k + 1);
            } else {
                if (selectedCities.length > 0) {
                    // Update payload with cities array for JSON submission
                    payload.cities = selectedCities.map((c: any) => c.value);
                }
                // No image selected - send JSON data
                let url = `${BASE_URL}/createPartner`;
                let method: 'POST' | 'PUT' = 'POST';
                if (formMode === 'edit') {
                    if (!editingPartnerId) throw new Error('Missing partner id');
                    url = `${BASE_URL}/updatePartner/${editingPartnerId}`;
                    method = 'PUT';
                }

                console.log('[Partners] submit', { formMode, editingPartnerId, url, hasImage: false });

                const res = await fetch(url, {
                    method,
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
                    throw new Error(`Failed to save partner (${res.status})${suffix}`);
                }

                const json = (await res.json()) as PartnerMutationResponse;
                if (!json?.success) {
                    throw new Error(json?.message || 'Failed to save partner');
                }

                const savedPartner = json?.data;
                if (savedPartner?._id) {
                    if (formMode === 'create') {
                        setPartners((prev) => [savedPartner, ...prev]);
                    } else {
                        setPartners((prev) => prev.map((p) => (p._id === savedPartner._id ? savedPartner : p)));
                    }
                }

                toast.fire({ icon: 'success', title: formMode === 'create' ? 'Partner created successfully' : 'Partner updated successfully' });
                setIsFormOpen(false);
                // Ensure UI reflects server response by re-fetching list
                setRefreshKey((k) => k + 1);
            }
        } catch (err) {
            console.error('[Partners] submit failed', err);
            setError((err as Error)?.message || 'Failed to save partner');
        } finally {
            setSaving(false);
        }
    };

    const onDeletePartner = async (partner: Partner) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const token = localStorage.getItem('token');
                    const res = await fetch(`${BASE_URL}/deletePartner/${partner._id}`, {
                        method: 'DELETE',
                        headers: {
                            Accept: 'application/json',
                            ...(token ? { Authorization: `Bearer ${token}` } : {}),
                        },
                    });

                    if (!res.ok) throw new Error('Failed to delete partner');

                    const json = await res.json();
                    if (json.success) {
                        toast.fire({
                            icon: 'success',
                            title: 'Partner Deleted Successfully'
                        });
                        setRefreshKey(k => k + 1);
                    } else {
                        throw new Error(json.message || 'Failed to delete partner');
                    }
                } catch (err) {
                    toast.fire({
                        icon: 'error',
                        title: (err as Error).message || 'Failed to delete partner'
                    });
                }
            }
        });
    };

    useEffect(() => {
        const controller = new AbortController();

        const fetchPartners = async () => {
            setLoading(true);
            setError(null);
            try {
                const token = localStorage.getItem('token');
                const url = new URL(`${BASE_URL}/getAllPartner`);
                url.searchParams.set('page', String(page));
                url.searchParams.set('limit', String(limit));
                url.searchParams.set('sortBy', 'createdAt');
                url.searchParams.set('sortOrder', 'desc');
                if (searchQuery.trim()) {
                    url.searchParams.set('search', searchQuery.trim());
                }

                const res = await fetch(url.toString(), {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                    signal: controller.signal,
                });

                if (!res.ok) {
                    let details = '';
                    try {
                        details = await res.text();
                    } catch {
                        details = '';
                    }
                    const suffix = details ? `: ${details}` : '';
                    throw new Error(`Failed to fetch partners (${res.status})${suffix}`);
                }

                const json = (await res.json()) as PartnersResponse;
                if (!json?.success) {
                    throw new Error(json?.message || 'Failed to fetch partners');
                }

                setPartners(Array.isArray(json?.data) ? json.data : []);
                setTotalPages(json?.pagination?.totalPages || 1);
            } catch (err) {
                if ((err as Error)?.name !== 'AbortError') {
                    setError((err as Error)?.message || 'Failed to fetch partners');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPartners();

        return () => {
            controller.abort();
        };
    }, [page, limit, refreshKey, searchQuery]); // ✅ Added searchQuery to dependencies

    // Reset to page 1 on search
    useEffect(() => {
        setPage(1);
    }, [searchQuery]);

    const displayedPartners = partners;

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
            a.download = `partners_${new Date().getTime()}.${extension}`;
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
                    <h5 className="font-semibold text-lg dark:text-white-light ">Partners</h5>
                    <div className="relative flex items-center gap-3 w-full sm:w-auto">
                        <TableHeaderActions
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            onDownload={handleDownload}
                            pdfEndpoint="exportPartnersPDF"
                            excelEndpoint="exportPartnersExcel"
                            placeholder="Search partners..."
                        />
                        <button type="button" className="btn btn-primary" onClick={openCreateForm}>
                            Create Partner
                        </button>
                    </div>
                </div>

                {error && <div className="text-danger mb-4">{error}</div>}

                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Image</th>
                                <th>Partner Name</th>
                                <th>Created At</th>
                                <th>Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="text-center py-8">
                                        <div className="flex justify-center items-center">
                                            <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                                        </div>
                                    </td>
                                </tr>
                            ) : displayedPartners.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="text-center py-8 text-gray-500">
                                        No partners found
                                    </td>
                                </tr>
                            ) : (
                                displayedPartners.map((row, index) => (
                                    <tr key={row._id}>
                                        <td>{(page - 1) * limit + index + 1}</td>
                                        <td>
                                            {row.PartnerImage ? (
                                                <img
                                                    src={row.PartnerImage}
                                                    alt={row.PartnerName}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = "/assets/images/user-profile.png";
                                                    }}
                                                />
                                            ) : (
                                                <img
                                                    src="/assets/images/user-profile.png"
                                                    alt={row.PartnerName}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                            )}
                                        </td>
                                        <td>
                                            <div className="whitespace-nowrap">{row.PartnerName}</div>
                                        </td>
                                        <td>
                                            <div className="whitespace-nowrap">
                                                {row.createdAt
                                                    ? new Date(row.createdAt).toLocaleString('en-IN', {
                                                        day: '2-digit',
                                                        month: 'short',
                                                        year: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                        hour12: true,
                                                    })
                                                    : '-'}
                                            </div>
                                        </td>

                                        <td>
                                            <button
                                                type="button"
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${row.disable ? 'bg-red-500' : 'bg-green-500'
                                                    } ${Boolean(togglingPartnerIds[row._id]) ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                                                onClick={() => onToggleDisable(row)}
                                                disabled={Boolean(togglingPartnerIds[row._id])}
                                                aria-pressed={!row.disable}
                                            >
                                                <span
                                                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${row.disable ? 'translate-x-0.5' : 'translate-x-5'
                                                        }`}
                                                />
                                            </button>
                                        </td>
                                        <td className="text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => openEditForm(row)}>
                                                    <IconEdit />
                                                </button>
                                                <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => onDeletePartner(row)}>
                                                    <IconTrashLines />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

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

            <Transition appear show={isFormOpen} as={Fragment}>
                <Dialog as="div" open={isFormOpen} onClose={closeForm}>
                    <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0" />
                    </TransitionChild>

                    <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                        <div className="flex min-h-screen items-start justify-center px-4">
                            <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <DialogPanel as="div" className="panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                        <div className="text-lg font-bold">{formMode === 'create' ? 'Create Partner' : 'Edit Partner'}</div>
                                        <button type="button" className="text-white-dark hover:text-dark" onClick={closeForm} disabled={saving}>
                                            <IconX />
                                        </button>
                                    </div>

                                    <form className="p-5 space-y-4" onSubmit={onSubmitForm}>


                                        <div>
                                            <label className="text-white-dark text-xs text-center block">Partner Image</label>
                                            <div className=" flex flex-col justify-center items-center space-y-2 text-center">
                                                {imagePreview && (
                                                    <div className="relative inline-block">
                                                        <img
                                                            src={imagePreview}
                                                            alt="Partner preview"
                                                            className="w-20 h-20 rounded-full object-cover border"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).src = "/assets/images/user-profile.png";
                                                            }}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('partner-image-input')?.click()}
                                                            className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-primary/90 border-2 border-white dark:border-gray-800"
                                                        >
                                                            <IconEdit className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                )}
                                                {!imagePreview && (
                                                    <button
                                                        type="button"
                                                        onClick={() => document.getElementById('partner-image-input')?.click()}
                                                        className="btn btn-sm btn-outline-primary inline-flex items-center gap-2 rounded-full h-25 w-25"
                                                    >
                                                        <IconEdit />
                                                        Add Image
                                                    </button>
                                                )}
                                                <input
                                                    id="partner-image-input"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-white-dark text-xs">Partner Name</label>
                                            <input className="form-input" value={partnerName} onChange={(e) => setPartnerName(e.target.value)} type="text" required />
                                        </div>

                                        <div className="bg-gray-50 dark:bg-gray-800/50 p-2 rounded border border-gray-200 dark:border-gray-700">
                                            <div className="flex flex-col gap-1.5">
                                                <div className="flex items-center justify-between">
                                                    <label className="text-white-dark text-xs font-semibold">Cities ({selectedCities.length})</label>
                                                    <div className="flex gap-2">
                                                        <button 
                                                            type="button" 
                                                            onClick={handleSelectAllCities} 
                                                            className="text-[10px] text-primary hover:underline font-bold"
                                                        >
                                                            Select All
                                                        </button>
                                                        <span className="text-gray-300">|</span>
                                                        <button 
                                                            type="button" 
                                                            onClick={handleDeselectAllCities} 
                                                            className="text-[10px] text-danger hover:underline font-bold"
                                                        >
                                                            Clear All
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="relative flex-1">
                                                        <input 
                                                            type="text" 
                                                            className="form-input form-input-sm pr-8" 
                                                            placeholder="Search in selected cities..." 
                                                            value={citySearch}
                                                            onChange={(e) => {
                                                                setCitySearch(e.target.value);
                                                                if (!showTags) setShowTags(true);
                                                            }}
                                                        />
                                                        {citySearch && (
                                                            <button 
                                                                type="button" 
                                                                onClick={() => setCitySearch("")}
                                                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                            >
                                                                <IconX className="w-3 h-3" />
                                                            </button>
                                                        )}
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowTags(!showTags)}
                                                        className={`btn btn-xs ${showTags ? 'btn-primary' : 'btn-outline-primary'} whitespace-nowrap`}
                                                    >
                                                        {showTags ? 'Hide Tags' : 'Show Tags'}
                                                    </button>
                                                </div>

                                                <Select
                                                    isMulti
                                                    options={cityOptions}
                                                    value={selectedCities}
                                                    onChange={(selected) => setSelectedCities(selected as any[])}
                                                    className="text-black dark:text-black"
                                                    placeholder="Search to add cities..."
                                                    components={{
                                                        MultiValue: (props: any) => {
                                                            if (!showTags) return null;
                                                            const search = citySearch.toLowerCase();
                                                            const label = props.data.label.toLowerCase();
                                                            const pincodes = (props.data.pincodes || '').toLowerCase();
                                                            
                                                            if (citySearch && !label.includes(search) && !pincodes.includes(search)) {
                                                                return null;
                                                            }
                                                            // Limit visible tags when not searching to 50 for performance
                                                            if (!citySearch && selectedCities.indexOf(props.data) > 50) {
                                                                if (selectedCities.indexOf(props.data) === 51) {
                                                                    return <div className="text-[10px] p-1 text-gray-500">...and {selectedCities.length - 50} more</div>;
                                                                }
                                                                return null;
                                                            }
                                                            return <components.MultiValue {...props} />;
                                                        }
                                                    }}
                                                />
                                                {selectedCities.length > 100 && !citySearch && showTags && (
                                                    <div className="text-[10px] text-gray-500 italic mt-1 text-right">
                                                        Showing first 100 cities. Use search to find specific cities.
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* <div className="flex items-center gap-2">
                                            <input id="partner-disabled" type="checkbox" className="form-checkbox" checked={isDisabled} onChange={(e) => setIsDisabled(e.target.checked)} />
                                            <label htmlFor="partner-disabled" className="text-white-dark text-sm">
                                                Disabled
                                            </label>
                                        </div> */}

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

export default PartnersList;
