import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import IconEdit from '../components/Icon/IconEdit';
import IconX from '../components/Icon/IconX';
import Swal from 'sweetalert2';
import { BASE_URL } from "../config";


type CategoryItem = {
    _id: string;
    name?: string;
    type?: string;
    categoryImage?: string;
    disable?: boolean;
    createdAt?: string;
    updatedAt?: string;
};

type CategoriesApiResponse = {
    success: boolean;
    message?: string;
    data?: CategoryItem[];
    pagination?: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
};

type CategoryMutationResponse = {
    success: boolean;
    message?: string;
    data?: CategoryItem;
};

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    showCloseButton: true,
});

const CategoriesList = () => {
    const dispatch = useDispatch();

    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [togglingCategoryIds, setTogglingCategoryIds] = useState<Record<string, boolean>>({});

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
    const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [type, setType] = useState<'SALE' | 'RENT' | string>('SALE');
    const [categoryImage, setCategoryImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [disable, setDisable] = useState(false);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        dispatch(setPageTitle('Categories'));
    }, [dispatch]);

    const openCreateForm = () => {
        setFormMode('create');
        setEditingCategoryId(null);
        setName('');
        setType('SALE');
        setCategoryImage(null);
        setImagePreview('');
        setDisable(false);
        setError(null);
        setIsFormOpen(true);
    };

    const openEditForm = (category: CategoryItem) => {
        setFormMode('edit');
        setEditingCategoryId(category._id);
        setName(category.name || '');
        setType(category.type || 'SALE');
        setImagePreview(category.categoryImage || '');
        setCategoryImage(null);
        setDisable(Boolean(category.disable));
        setError(null);
        setIsFormOpen(true);
    };

    const closeForm = () => {
        if (saving) return;
        setIsFormOpen(false);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setCategoryImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setCategoryImage(null);
        setImagePreview('');
    };

    const onToggleDisable = async (category: CategoryItem) => {
        const nextDisable = !Boolean(category.disable);

        setError(null);
        setTogglingCategoryIds((prev) => ({ ...prev, [category._id]: true }));
        setCategories((prev) => prev.map((c) => (c._id === category._id ? { ...c, disable: nextDisable } : c)));

        try {
            const token = localStorage.getItem('token');
            const url = `${BASE_URL}/updateCategory/${category._id}`;
            const payload = {
                name: category.name,
                type: category.type,
                categoryImage: category.categoryImage,
                disable: nextDisable,
            };

            const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
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

            const json = (await res.json()) as CategoryMutationResponse;
            if (!json?.success) {
                throw new Error(json?.message || 'Failed to update status');
            }

            const updatedCategory = json?.data;
            if (updatedCategory?._id) {
                setCategories((prev) => prev.map((c) => (c._id === updatedCategory._id ? updatedCategory : c)));
            }

            // Show success toast message
            toast.fire({ 
                icon: 'success', 
                title: nextDisable ? 'Category disabled successfully' : 'Category enabled successfully' 
            });
        } catch (err) {
            setCategories((prev) => prev.map((c) => (c._id === category._id ? { ...c, disable: Boolean(category.disable) } : c)));
            setError((err as Error)?.message || 'Failed to update status');
            
            // Show error toast message
            toast.fire({ 
                icon: 'error', 
                title: (err as Error)?.message || 'Failed to update category status' 
            });
        } finally {
            setTogglingCategoryIds((prev) => {
                const next = { ...prev };
                delete next[category._id];
                return next;
            });
        }
    };

    const onSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedName = name.trim();
        if (!trimmedName) {
            setError('Name is required');
            return;
        }
        const trimmedType = String(type || '').trim();
        if (!trimmedType) {
            setError('Type is required');
            return;
        }

        setSaving(true);
        setError(null);
        try {
            const token = localStorage.getItem('token');
            
            // Add image to payload if selected
            if (categoryImage) {
                const formData = new FormData();
                formData.append('name', trimmedName);
                formData.append('type', trimmedType);
                formData.append('disable', String(disable));
                formData.append('categoryImage', categoryImage);
                
                let url = `${BASE_URL}/category`;
                let method: 'POST' | 'PUT' = 'POST';
                if (formMode === 'edit') {
                    if (!editingCategoryId) throw new Error('Missing category id');
                    url = `${BASE_URL}/updateCategory/${editingCategoryId}`;
                    method = 'PUT';
                }

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
                    throw new Error(`Failed to save category (${res.status})${suffix}`);
                }

                const json = (await res.json()) as CategoryMutationResponse;
                if (!json?.success) {
                    throw new Error(json?.message || 'Failed to save category');
                }

                const savedCategory = json?.data;
                if (savedCategory?._id) {
                    if (formMode === 'create') {
                        setCategories((prev) => [savedCategory, ...prev]);
                    } else {
                        setCategories((prev) => prev.map((c) => (c._id === savedCategory._id ? savedCategory : c)));
                    }
                }

                toast.fire({ icon: 'success', title: formMode === 'create' ? 'Created successfully' : 'Updated successfully' });
                setIsFormOpen(false);
            } else {
                // No image selected - send JSON data
                let url = `${BASE_URL}/category`;
                let method: 'POST' | 'PUT' = 'POST';
                if (formMode === 'edit') {
                    if (!editingCategoryId) throw new Error('Missing category id');
                    url = `${BASE_URL}/updateCategory/${editingCategoryId}`;
                    method = 'PUT';
                }

                const payload = {
                    name: trimmedName,
                    type: trimmedType,
                    disable,
                };

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
                    throw new Error(`Failed to save category (${res.status})${suffix}`);
                }

                const json = (await res.json()) as CategoryMutationResponse;
                if (!json?.success) {
                    throw new Error(json?.message || 'Failed to save category');
                }

                const savedCategory = json?.data;
                if (savedCategory?._id) {
                    if (formMode === 'create') {
                        setCategories((prev) => [savedCategory, ...prev]);
                    } else {
                        setCategories((prev) => prev.map((c) => (c._id === savedCategory._id ? savedCategory : c)));
                    }
                }

                toast.fire({ icon: 'success', title: formMode === 'create' ? 'Created successfully' : 'Updated successfully' });
                setIsFormOpen(false);
            }
        } catch (err) {
            setError((err as Error)?.message || 'Failed to save category');
        } finally {
            setSaving(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();

        const fetchCategories = async () => {
            setLoading(true);
            setError(null);
            try {
                const token = localStorage.getItem('token');

                const url = new URL(`${BASE_URL}/category/by-type`);
                url.searchParams.set('type', 'SALE');
                url.searchParams.set('page', String(page));
                url.searchParams.set('limit', String(limit));

                const res = await fetch(url.toString(), {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                    signal: controller.signal,
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
                    throw new Error(`Failed to fetch categories (${res.status})${suffix}`);
                }

                const json = (await res.json()) as CategoriesApiResponse;
                if (!json?.success) {
                    throw new Error(json?.message || 'Failed to fetch categories');
                }

                setCategories(Array.isArray(json?.data) ? json.data : []);
                setTotalPages(json?.pagination?.totalPages || 1);
            } catch (err) {
                if ((err as Error)?.name !== 'AbortError') {
                    setError((err as Error)?.message || 'Failed to fetch categories');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();

        return () => controller.abort();
    }, [page, limit]);

    return (
        <div>
            <div className="panel">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Categories</h5>
                    <button type="button" className="btn btn-primary" onClick={openCreateForm}>
                        Add Category
                    </button>
                </div>

                {error && <div className="text-danger mb-4">{error}</div>}

                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={7} className="text-center py-4">
                                        Loading...
                                    </td>
                                </tr>
                            ) : categories.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="text-center py-8">
                                        <div className="flex justify-center items-center">
                                            <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                categories.map((c, index) => (
                                    <tr key={c._id}>
                                        <td>{(page - 1) * limit + index + 1}</td>
                                        <td className="text-center">
                                            {c.categoryImage ? (
                                                <img 
                                                    src={c.categoryImage} 
                                                    alt={c.name}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = "/assets/images/user-profile.png";
                                                    }}
                                                />
                                            ) : (
                                                <img 
                                                    src="/assets/images/user-profile.png" 
                                                    alt={c.name}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                            )}
                                        </td>
                                        <td>
                                            <div className="whitespace-nowrap">{c.name || '-'}</div>
                                        </td>
                                        <td>{c.type || '-'}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${c.disable ? 'bg-red-500' : 'bg-green-500'
                                                    } ${Boolean(togglingCategoryIds[c._id]) ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                                                onClick={() => onToggleDisable(c)}
                                                disabled={Boolean(togglingCategoryIds[c._id])}
                                                aria-pressed={!c.disable}
                                            >
                                                <span
                                                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${c.disable ? 'translate-x-0.5' : 'translate-x-5'
                                                        }`}
                                                />
                                            </button>
                                        </td>
                                       <td>
  {c.createdAt ? (
    <div className="whitespace-nowrap">
      {new Date(c.createdAt).toLocaleString('en-IN', {
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
                                            <div className="flex items-center justify-center">
                                                <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => openEditForm(c)}>
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
                                <DialogPanel as="div" className="panel my-8 w-full max-w-xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                        <div className="text-lg font-bold">{formMode === 'create' ? 'Add Category' : 'Edit Category'}</div>
                                        <button type="button" className="text-white-dark hover:text-dark" onClick={closeForm} disabled={saving}>
                                            <IconX />
                                        </button>
                                    </div>

                                    <form className="p-5 space-y-4" onSubmit={onSubmitForm}>
                                       

                                        <div>
                                            <label className="text-white-dark text-xs text-center block">Category Image</label>
                                            <div className="space-y-2 text-center">
                                                {imagePreview && (
                                                    <div className="relative inline-block">
                                                        <img 
                                                            src={imagePreview} 
                                                            alt="Category preview" 
                                                            className="w-20 h-20 rounded-full object-cover border"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).src = "/assets/images/user-profile.png";
                                                            }}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('category-image-input')?.click()}
                                                            className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-primary/90 border-2 border-white dark:border-gray-800"
                                                        >
                                                            <IconEdit className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                )}
                                                {!imagePreview && (
                                                    <button
                                                        type="button"
                                                        onClick={() => document.getElementById('category-image-input')?.click()}
                                                        className="btn btn-sm btn-outline-primary inline-flex items-center gap-2"
                                                    >
                                                        <IconEdit />
                                                        Add Image
                                                    </button>
                                                )}
                                                <input 
                                                    id="category-image-input"
                                                    type="file" 
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>
                                         <div>
                                            <label className="text-white-dark text-xs">Name</label>
                                            <input className="form-input" value={name} onChange={(e) => setName(e.target.value)} type="text" required />
                                        </div>

                                        <div>
                                            <label className="text-white-dark text-xs">Type</label>
                                            <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
                                                <option value="SALE">SALE</option>
                                                <option value="RENT">RENT</option>
                                                <option value="NEW_PROJECT">New Project</option>
                                            </select>
                                        </div>

                                        {/* <div className="flex items-center gap-2">
                                            <input id="category-disable" type="checkbox" className="form-checkbox" checked={disable} onChange={(e) => setDisable(e.target.checked)} />
                                            <label htmlFor="category-disable" className="text-white-dark text-sm">
                                                Disabled
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

export default CategoriesList;
