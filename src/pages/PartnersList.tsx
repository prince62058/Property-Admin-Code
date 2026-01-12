import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import IconEdit from '../components/Icon/IconEdit';
import IconX from '../components/Icon/IconX';
import Swal from 'sweetalert2';
import { BASE_URL } from '../config';

type Partner = {
    _id: string;
    PartnerName: string;
    PartnerImage?: string;
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

    useEffect(() => {
        dispatch(setPageTitle('Partners'));
    }, [dispatch]);

    const openCreateForm = () => {
        setFormMode('create');
        setEditingPartnerId(null);
        setPartnerName('');
        setPartnerImage(null);
        setImagePreview('');
        setIsDisabled(false);
        setIsFormOpen(true);
    };

    const openEditForm = (partner: Partner) => {
        setFormMode('edit');
        setEditingPartnerId(partner._id);
        setPartnerName(partner.PartnerName || '');
        setImagePreview(partner.PartnerImage || '');
        setPartnerImage(null);
        setIsDisabled(Boolean(partner.disable));
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
            
            // Add image to payload if selected
            if (partnerImage) {
                const formData = new FormData();
                formData.append('PartnerName', trimmedName);
                formData.append('disable', String(isDisabled));
                formData.append('PartnerImage', partnerImage);
                
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
            } else {
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
            }
        } catch (err) {
            console.error('[Partners] submit failed', err);
            setError((err as Error)?.message || 'Failed to save partner');
        } finally {
            setSaving(false);
        }
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
    }, [page, limit]);

    return (
        <div>
            <div className="panel">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Partners</h5>
                    <button type="button" className="btn btn-primary" onClick={openCreateForm}>
                        Create Partner
                    </button>
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
                            ) : partners.length === 0 ? (
                                <tr>
                                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                    </div>
                                </tr>
                            ) : (
                                partners.map((row, index) => (
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
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                                    row.disable ? 'bg-red-500' : 'bg-green-500'
                                                } ${Boolean(togglingPartnerIds[row._id]) ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                                                onClick={() => onToggleDisable(row)}
                                                disabled={Boolean(togglingPartnerIds[row._id])}
                                                aria-pressed={!row.disable}
                                            >
                                                <span
                                                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                                                        row.disable ? 'translate-x-0.5' : 'translate-x-5'
                                                    }`}
                                                />
                                            </button>
                                        </td>
                                        <td className="text-center">
                                            <div className="flex items-center justify-center">
                                                <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => openEditForm(row)}>
                                                    <IconEdit />
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
                                            <div className="space-y-2 text-center">
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
                                                        className="btn btn-sm btn-outline-primary inline-flex items-center gap-2"
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
