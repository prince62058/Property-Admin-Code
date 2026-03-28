import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import IconEdit from '../components/Icon/IconEdit';
import IconX from '../components/Icon/IconX';
import IconPlus from '../components/Icon/IconPlus';
import IconTrash from '../components/Icon/IconTrash';
import Swal from 'sweetalert2';
import { BASE_URL } from "../config";
import { Trash, Download } from 'lucide-react';
import TableHeaderActions from '../components/TableHeaderActions';

type DynamicField = {
    title: string;
    key: string;
    fieldType: string;
    options: string[];
    required: boolean;
    icon?: string;  // This will store the URL string
};

type CategoryItem = {
    _id: string;
    name?: string;
    type?: string;
    categoryImage?: string;
    disable?: boolean;
    dynamicFields?: DynamicField[];
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
    const [deletingCategoryId, setDeletingCategoryId] = useState<string | null>(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
    const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [type, setType] = useState<'SALE' | 'RENT' | string>('SALE');
    const [dynamicFields, setDynamicFields] = useState<DynamicField[]>([]);
    const [categoryImage, setCategoryImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [disable, setDisable] = useState(false);
    const [saving, setSaving] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState<CategoryItem | null>(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [selectedTypeFilter, setSelectedTypeFilter] = useState<'ALL' | 'SALE' | 'RENT' | 'NEW_PROJECT'>('ALL');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (debouncedSearch !== searchQuery) {
                setDebouncedSearch(searchQuery);
                setPage(1);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery, debouncedSearch]);

    const handleTypeFilterChange = (filterType: 'ALL' | 'SALE' | 'RENT' | 'NEW_PROJECT') => {
        setSelectedTypeFilter(filterType);
        setPage(1);
    };

    // Track icon upload states for each dynamic field
    const [iconUploading, setIconUploading] = useState<Record<number, boolean>>({});
    const [iconPreview, setIconPreview] = useState<Record<number, string>>({});

    // Helper function to check if field type requires options
    const isSelectField = (fieldType: string) => {
        return ['SINGLE_SELECT', 'MULTI_SELECT', 'DROPDOWN'].includes(fieldType);
    };

    useEffect(() => {
        dispatch(setPageTitle('Categories'));
    }, [dispatch]);

    const openCreateForm = () => {
        setFormMode('create');
        setEditingCategoryId(null);
        setName('');
        setType('SALE');
        setDynamicFields([]);
        setCategoryImage(null);
        setImagePreview('');
        setDisable(false);
        setError(null);
        setIsFormOpen(true);
    };

    const openEditForm = (category: CategoryItem) => {
        console.log(category)
        setFormMode('edit');
        setEditingCategoryId(category._id);
        setName(category.name || '');
        setType(category.type || 'SALE');
        setDynamicFields(category.dynamicFields || []);
        setImagePreview(category.categoryImage || '');
        setCategoryImage(null);
        setDisable(Boolean(category.disable));
        setError(null);

        // Set icon previews from existing URLs
        const initialIconPreviews: Record<number, string> = {};
        category.dynamicFields?.forEach((field, index) => {
            if (field.icon) {
                initialIconPreviews[index] = field.icon;
            }
        });
        setIconPreview(initialIconPreviews);

        setIsFormOpen(true);
    };

    const closeForm = () => {
        if (saving) return;
        setIsFormOpen(false);
        // Reset icon states
        setIconUploading({});
        setIconPreview({});
    };

    const handleDeleteOpen = (category: CategoryItem) => {
        setCategoryToDelete(category);
        setDeleteDialog(true);
    };

    const handleDeleteClose = () => {
        setDeleteDialog(false);
        setCategoryToDelete(null);
    };

    const handleDeleteConfirm = async () => {
        if (!categoryToDelete) return;

        setDeleteLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem('token');
            const url = `${BASE_URL}/deleteCategory/${categoryToDelete._id}`;

            const res = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
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
                throw new Error(`Failed to delete category (${res.status})${suffix}`);
            }

            const json = (await res.json()) as { success: boolean; message?: string };
            if (!json?.success) {
                throw new Error(json?.message || 'Failed to delete category');
            }

            // Remove category from state
            setCategories(prev => prev.filter(c => c._id !== categoryToDelete._id));

            toast.fire({
                icon: 'success',
                title: 'Category deleted successfully'
            });
        } catch (err) {
            setError((err as Error)?.message || 'Failed to delete category');

            toast.fire({
                icon: 'error',
                title: (err as Error)?.message || 'Failed to delete category'
            });
        } finally {
            setDeleteLoading(false);
            handleDeleteClose();
        }
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

    // ============ ICON UPLOAD FUNCTIONALITY ============
    // This is the key function - works exactly like profile image upload
    const handleIconUpload = async (file: File, fieldIndex: number) => {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            toast.fire({
                icon: 'error',
                title: 'Please select a valid image file for icon'
            });
            return;
        }

        // Validate file size (max 2MB for icons)
        if (file.size > 2 * 1024 * 1024) {
            toast.fire({
                icon: 'error',
                title: 'Icon size should be less than 2MB'
            });
            return;
        }

        // Create local preview immediately for better UX
        const localPreviewUrl = URL.createObjectURL(file);
        setIconPreview(prev => ({ ...prev, [fieldIndex]: localPreviewUrl }));

        // Upload to cloud
        try {
            setIconUploading(prev => ({ ...prev, [fieldIndex]: true }));

            toast.fire({
                icon: 'info',
                title: 'Uploading icon...',
                timer: undefined,
                showConfirmButton: false,

            });

            const formData = new FormData();
            formData.append('file', file);

            const token = localStorage.getItem('token');
            const response = await fetch(`${BASE_URL}/single`, {
                method: 'POST',
                headers: {
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            const data = await response.json();

            if (data.success) {
                const cloudIconUrl = data.data.location; // This is the permanent URL

                // Update preview with cloud URL
                setIconPreview(prev => ({ ...prev, [fieldIndex]: cloudIconUrl }));

                // Update the dynamic field with the URL string (not the file!)
                updateDynamicField(fieldIndex, { icon: cloudIconUrl });

                toast.fire({
                    icon: 'success',
                    title: 'Icon uploaded successfully!',
                    timer: 2000
                });
            } else {
                throw new Error('Upload failed');
            }
        } catch (error: any) {
            console.error('Error uploading icon:', error);
            toast.fire({
                icon: 'error',
                title: 'Failed to upload icon. Please try again.'
            });

            // Reset on error
            setIconPreview(prev => {
                const newState = { ...prev };
                delete newState[fieldIndex];
                return newState;
            });
        } finally {
            setIconUploading(prev => ({ ...prev, [fieldIndex]: false }));
        }
    };

    // Handle icon URL input
    const handleIconUrlChange = (url: string, fieldIndex: number) => {
        setIconPreview(prev => ({ ...prev, [fieldIndex]: url }));
        updateDynamicField(fieldIndex, { icon: url });
    };

    // Remove icon
    const handleRemoveIcon = (fieldIndex: number) => {
        setIconPreview(prev => {
            const newState = { ...prev };
            delete newState[fieldIndex];
            return newState;
        });
        updateDynamicField(fieldIndex, { icon: '' });
    };
    // ============ END ICON UPLOAD FUNCTIONALITY ============

    // Dynamic Fields handlers
    const addDynamicField = () => {
        setDynamicFields([...dynamicFields, {
            title: '',
            key: '',
            fieldType: 'TEXT',
            options: [],
            required: false,
            icon: ''
        }]);
    };

    const updateDynamicField = (index: number, field: Partial<DynamicField>) => {
        const updatedFields = [...dynamicFields];
        updatedFields[index] = { ...updatedFields[index], ...field };

        // If field type changes to non-select type, clear options
        if (field.fieldType && !isSelectField(field.fieldType)) {
            updatedFields[index].options = [];
        }

        setDynamicFields(updatedFields);
    };

    const removeDynamicField = (index: number) => {
        const updatedFields = [...dynamicFields];
        updatedFields.splice(index, 1);
        setDynamicFields(updatedFields);

        // Also remove icon preview and upload state
        setIconPreview(prev => {
            const newState = { ...prev };
            delete newState[index];
            return newState;
        });
        setIconUploading(prev => {
            const newState = { ...prev };
            delete newState[index];
            return newState;
        });
    };

    const addOptionToField = (fieldIndex: number) => {
        const updatedFields = [...dynamicFields];
        updatedFields[fieldIndex].options.push('');
        setDynamicFields(updatedFields);
    };

    const updateOption = (fieldIndex: number, optionIndex: number, value: string) => {
        const updatedFields = [...dynamicFields];
        updatedFields[fieldIndex].options[optionIndex] = value;
        setDynamicFields(updatedFields);
    };

    const removeOption = (fieldIndex: number, optionIndex: number) => {
        const updatedFields = [...dynamicFields];
        updatedFields[fieldIndex].options.splice(optionIndex, 1);
        setDynamicFields(updatedFields);
    };

    const onToggleDisable = async (category: CategoryItem) => {

        setTogglingCategoryIds(prev => ({ ...prev, [category._id]: true }));

        try {

            const token = localStorage.getItem("token");

            const res = await fetch(`${BASE_URL}/category/toggle-disable/${category._id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!res.ok) {
                throw new Error("Failed to update category status");
            }

            const data = await res.json();

            if (data.success) {

                const newStatus = data.data.disable;

                setCategories(prev =>
                    prev.map(c =>
                        c._id === category._id
                            ? { ...c, disable: newStatus }
                            : c
                    )
                );

                toast.fire({
                    icon: "success",
                    title: data.message
                });

            }

        } catch (error) {

            toast.fire({
                icon: "error",
                title: "Failed to update category status"
            });

        } finally {

            setTogglingCategoryIds(prev => {
                const next = { ...prev };
                delete next[category._id];
                return next;
            });

        }
    };



    // const onToggleDisable = async (category: CategoryItem) => {
    //     const nextDisable = !Boolean(category.disable);

    //     setTogglingCategoryIds(prev => ({ ...prev, [category._id]: true }));

    //     // Optimistic UI
    //     setCategories(prev =>
    //         prev.map(c =>
    //             c._id === category._id ? { ...c, disable: nextDisable } : c
    //         )
    //     );

    //     try {
    //         const token = localStorage.getItem("token");

    //         const res = await fetch(`${BASE_URL}/updateCategory/${category._id}`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             body: JSON.stringify({
    //                 disable: nextDisable
    //             }),
    //         });

    //         if (!res.ok) throw new Error("Failed to update");

    //         toast.fire({
    //             icon: "success",
    //             title: nextDisable
    //                 ? "Category disabled successfully"
    //                 : "Category enabled successfully",
    //         });

    //     } catch (error) {

    //         // revert if failed
    //         setCategories(prev =>
    //             prev.map(c =>
    //                 c._id === category._id ? { ...c, disable: category.disable } : c
    //             )
    //         );

    //         toast.fire({
    //             icon: "error",
    //             title: "Failed to update status",
    //         });

    //     } finally {
    //         setTogglingCategoryIds(prev => {
    //             const next = { ...prev };
    //             delete next[category._id];
    //             return next;
    //         });
    //     }
    // };

    // const onToggleDisable = async (category: CategoryItem) => {
    //     const nextDisable = !Boolean(category.disable);

    //     setError(null);
    //     setTogglingCategoryIds((prev) => ({ ...prev, [category._id]: true }));
    //     setCategories((prev) => prev.map((c) => (c._id === category._id ? { ...c, disable: nextDisable } : c)));

    //     try {
    //         const token = localStorage.getItem('token');
    //         const url = `${BASE_URL}/updateCategory/${category._id}`;
    //         const payload = {
    //             name: category.name,
    //             type: category.type,
    //             categoryImage: category.categoryImage,
    //             dynamicFields: category.dynamicFields,
    //             disable: nextDisable,
    //         };

    //         const res = await fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Accept: 'application/json',
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             body: JSON.stringify(payload),
    //         });

    //         if (!res.ok) {
    //             let detailsText = '';
    //             try {
    //                 detailsText = await res.text();
    //             } catch {
    //                 detailsText = '';
    //             }

    //             let detailsMsg = '';
    //             try {
    //                 const maybeJson = detailsText ? (JSON.parse(detailsText) as { message?: string }) : null;
    //                 detailsMsg = maybeJson?.message || '';
    //             } catch {
    //                 detailsMsg = '';
    //             }

    //             const suffix = detailsMsg ? `: ${detailsMsg}` : detailsText ? `: ${detailsText}` : '';
    //             throw new Error(`Failed to update status (${res.status})${suffix}`);
    //         }

    //         const json = (await res.json()) as CategoryMutationResponse;
    //         if (!json?.success) {
    //             throw new Error(json?.message || 'Failed to update status');
    //         }

    //         const updatedCategory = json?.data;
    //         if (updatedCategory?._id) {
    //             setCategories((prev) => prev.map((c) => (c._id === updatedCategory._id ? updatedCategory : c)));
    //         }

    //         toast.fire({
    //             icon: 'success',
    //             title: nextDisable ? 'Category disabled successfully' : 'Category enabled successfully'
    //         });
    //     } catch (err) {
    //         setCategories((prev) => prev.map((c) => (c._id === category._id ? { ...c, disable: Boolean(category.disable) } : c)));
    //         setError((err as Error)?.message || 'Failed to update status');

    //         toast.fire({
    //             icon: 'error',
    //             title: (err as Error)?.message || 'Failed to update category status'
    //         });
    //     } finally {
    //         setTogglingCategoryIds((prev) => {
    //             const next = { ...prev };
    //             delete next[category._id];
    //             return next;
    //         });
    //     }
    // };

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


        // updated code to check duplicate keys in dynamic fields
        const keys = dynamicFields.map(f => f.key.trim());
        const duplicateKey = keys.find((key, index) => keys.indexOf(key) !== index);

        if (duplicateKey) {
            setError(`Duplicate key found: "${duplicateKey}". Each field key must be unique.`);
            return;
        }



        // Validate dynamic fields
        for (let i = 0; i < dynamicFields.length; i++) {
            const field = dynamicFields[i];
            if (!field.title.trim()) {
                setError(`Dynamic Field #${i + 1}: Title is required`);
                return;
            }
            if (!field.key.trim()) {
                setError(`Dynamic Field #${i + 1}: Key is required`);
                return;
            }
            if (!/^[a-z][a-z0-9_]*$/.test(field.key)) {
                setError(`Dynamic Field #${i + 1}: Key must be lowercase with underscores only (e.g., parking_slots)`);
                return;
            }
            if (isSelectField(field.fieldType) && field.options.length === 0) {
                setError(`Dynamic Field #${i + 1}: Options are required for select fields`);
                return;
            }
        }

        setSaving(true);
        setError(null);
        try {
            const token = localStorage.getItem('token');

            const formData = new FormData();
            formData.append('name', trimmedName);
            formData.append('type', trimmedType);
            formData.append('disable', String(disable));

            // IMPORTANT: Send the dynamic fields as JSON string
            // The icon field contains the URL string from cloud storage
            formData.append('dynamicFields', JSON.stringify(dynamicFields));

            if (categoryImage) {
                formData.append('categoryImage', categoryImage);
            }

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
            // Reset icon states
            setIconUploading({});
            setIconPreview({});
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

                const url = new URL(`${BASE_URL}/getAllCategory`);
                if (selectedTypeFilter !== 'ALL') {
                    url.searchParams.set('type', selectedTypeFilter);
                }
                url.searchParams.set('page', String(page));
                url.searchParams.set('limit', String(limit));
                if (debouncedSearch) {
                    url.searchParams.set("search", debouncedSearch);
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
    }, [page, limit, debouncedSearch, selectedTypeFilter]);

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

            a.download = `categories_${new Date().getTime()}.${extension}`;
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
                    <h5 className="font-semibold text-lg dark:text-white-light">Categories</h5>
                    {/* <div className="relative flex items-center gap-3 w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search categories..."
                            className="form-input w-full sm:w-64"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="button" className="btn btn-outline-danger flex items-center gap-2" onClick={() => handleDownload('categories/export-pdf', 'pdf')}>
                            <Download className="w-4 h-4" /> PDF
                        </button>
                        <button type="button" className="btn btn-outline-success flex items-center gap-2" onClick={() => handleDownload('categories/export-excel', 'excel')}>
                            <Download className="w-4 h-4" /> Excel
                        </button>
                        <button type="button" className="btn btn-primary" onClick={openCreateForm}>
                            Add Category
                        </button>
                    </div> */}

                    <div className="relative flex items-center gap-3 w-full sm:w-auto">
                        <TableHeaderActions
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            onDownload={handleDownload}
                            pdfEndpoint="categories/export-pdf"
                            excelEndpoint="categories/export-excel"
                            // csvEndpoint='categories/export-csv'
                            placeholder="Search categories..."
                        />
                        {/* Type Filter Dropdown */}
                        <select
                            value={selectedTypeFilter}
                            onChange={(e) => handleTypeFilterChange(e.target.value as 'ALL' | 'SALE' | 'RENT' | 'NEW_PROJECT')}
                            className="form-select  text-white-dark text-sm font-[.5rem]"
                        >
                            <option value="ALL">All</option>
                            <option value="SALE">Sale</option>
                            <option value="RENT">Rent</option>
                            <option value="NEW_PROJECT">New Project</option>
                        </select>
                        <button type="button" className="btn btn-primary" onClick={openCreateForm}>
                            Add Category
                        </button>
                    </div>
                    {/* <TableHeaderActions
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        onDownload={handleDownload}
                        pdfEndpoint="categories/export-pdf"
                        excelEndpoint="categories/export-excel"
                        placeholder="Search categories..."
                    />
                    <button type="button" className="btn btn-primary" onClick={openCreateForm}>
                        Add Category
                    </button> */}
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
                                <th>Dynamic Fields</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={8} className="text-center py-4">
                                        Loading...
                                    </td>
                                </tr>
                            ) : categories.length === 0 ? (
                                <tr>
                                    <td colSpan={8} className="text-center py-8">
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
                                        <td>{c.type === 'NEW_PROJECT' ? 'New Project' : (c.type || '-')}</td>
                                        <td>
                                            <div className="whitespace-nowrap">
                                                {c.dynamicFields?.length || 0} fields
                                            </div>
                                        </td>
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
                                        <td className="flex justify-center gap-4">
                                            <div className="flex items-center justify-center">
                                                <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => openEditForm(c)}>
                                                    <IconEdit />
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleDeleteOpen(c)}
                                                >
                                                    <Trash className='h-4 w-4' />
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

            {/* Delete Confirmation Dialog */}
            <Transition appear show={deleteDialog} as={Fragment}>
                <Dialog as="div" open={deleteDialog} onClose={handleDeleteClose} className="relative z-[999]">
                    <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/60" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 p-6 shadow-xl transition-all">
                                    <div className="text-center">
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                                            <Trash className="h-6 w-6 text-red-600 dark:text-red-400" />
                                        </div>
                                        <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                                            Delete Category
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                            Are you sure you want to delete <span className="font-semibold text-gray-900 dark:text-white">"{categoryToDelete?.name}"</span>? This action cannot be undone.
                                        </p>
                                    </div>

                                    <div className="mt-6 flex justify-end gap-3">
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={handleDeleteClose}
                                            disabled={deleteLoading}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={handleDeleteConfirm}
                                            disabled={deleteLoading}
                                        >
                                            {deleteLoading ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Deleting...
                                                </span>
                                            ) : (
                                                'Delete'
                                            )}
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Edit/Create Form Dialog */}
            <Transition appear show={isFormOpen} as={Fragment}>
                <Dialog as="div" open={isFormOpen} onClose={closeForm}>
                    <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0" />
                    </TransitionChild>

                    <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                        <div className="flex min-h-screen items-start justify-center px-4">
                            <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <DialogPanel as="div" className="panel my-8 w-full max-w-2xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                        <div className="text-lg font-bold">{formMode === 'create' ? 'Add Category' : 'Edit Category'}</div>
                                        <button type="button" className="text-white-dark hover:text-dark" onClick={closeForm} disabled={saving}>
                                            <IconX />
                                        </button>
                                    </div>

                                    <form className="p-5 space-y-4" onSubmit={onSubmitForm}>
                                        <div>
                                            <label className="text-white-dark text-xs text-center block">Category Image</label>
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                {imagePreview && (
                                                    <div className="relative inline-block  ">
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
                                                        className="btn btn-sm btn-outline-primary inline-flex items-center gap-2 rounded-full h-25 w-25"
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

                                        {/* Dynamic Fields Section */}
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <label className="text-white-dark text-xs font-semibold">Dynamic Fields</label>
                                                <button
                                                    type="button"
                                                    onClick={addDynamicField}
                                                    className="btn btn-sm btn-outline-primary inline-flex items-center gap-1"
                                                >
                                                    <IconPlus className="w-3 h-3" />
                                                    Add Field
                                                </button>
                                            </div>

                                            {dynamicFields.map((field, fieldIndex) => (
                                                <div key={fieldIndex} className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 space-y-3">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-sm font-semibold">Field #{fieldIndex + 1}</h4>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeDynamicField(fieldIndex)}
                                                            className="text-danger hover:text-red-700"
                                                        >
                                                            <IconTrash className="w-4 h-4" />
                                                        </button>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        <div>
                                                            <label className="text-white-dark text-xs">Title *</label>
                                                            <input
                                                                className="form-input"
                                                                value={field.title}
                                                                onChange={(e) => updateDynamicField(fieldIndex, { title: e.target.value })}
                                                                type="text"
                                                                placeholder="e.g., Parking"
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="text-white-dark text-xs">Key *</label>
                                                            <input
                                                                className="form-input"
                                                                value={field.key}
                                                                onChange={(e) => updateDynamicField(fieldIndex, { key: e.target.value.toLowerCase().replace(/\s+/g, '_') })}
                                                                type="text"
                                                                placeholder="e.g., parking"
                                                                required
                                                            />
                                                            <div className="text-xs text-gray-500 mt-1">Lowercase with underscores only</div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        <div>
                                                            <label className="text-white-dark text-xs">Field Type</label>
                                                            <select
                                                                className="form-select"
                                                                value={field.fieldType}
                                                                onChange={(e) => updateDynamicField(fieldIndex, { fieldType: e.target.value })}
                                                            >
                                                                <option value="TEXT">Text</option>
                                                                <option value="STRING_INPUT">String Input</option>
                                                                <option value="NUMBER">Number</option>
                                                                <option value="INTEGER_INPUT">Integer Input</option>
                                                                <option value="BOOLEAN">Boolean</option>
                                                                <option value="SINGLE_SELECT">Single Select</option>
                                                                <option value="MULTI_SELECT">Multi Select</option>
                                                                <option value="DROPDOWN">Dropdown</option>
                                                                <option value="AREA_INPUT">Area Input</option>
                                                                <option value="LENGTH_INPUT">Length Input</option>
                                                            </select>
                                                        </div>

                                                        {/* ============ ICON UPLOAD SECTION ============ */}
                                                        <div>
                                                            <label className="text-white-dark text-xs">Icon (optional)</label>

                                                            {/* Icon Preview and Upload UI */}
                                                            <div className="space-y-2">
                                                                {iconPreview[fieldIndex] ? (
                                                                    <div className="relative inline-block">
                                                                        <img
                                                                            src={iconPreview[fieldIndex]}
                                                                            alt="Icon preview"
                                                                            className="w-10 h-10 rounded object-cover border"
                                                                            onError={(e) => {
                                                                                (e.target as HTMLImageElement).src = "/assets/images/default-icon.png";
                                                                            }}
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => handleRemoveIcon(fieldIndex)}
                                                                            className="absolute -top-1 -right-1 bg-danger text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-700 border border-white"
                                                                            title="Remove icon"
                                                                        >
                                                                            ✕
                                                                        </button>
                                                                    </div>
                                                                ) : (
                                                                    <div className="flex items-center gap-2 flex-wrap">
                                                                        {/* Upload button */}
                                                                        <label
                                                                            className={`btn btn-xs ${iconUploading[fieldIndex] ? 'btn-outline-secondary' : 'btn-outline-primary'} inline-flex items-center gap-1 cursor-pointer`}
                                                                            style={{ cursor: iconUploading[fieldIndex] ? 'not-allowed' : 'pointer' }}
                                                                        >
                                                                            {iconUploading[fieldIndex] ? (
                                                                                <>
                                                                                    <span className="animate-spin border-2 border-current border-t-transparent rounded-full w-3 h-3"></span>
                                                                                    Uploading...
                                                                                </>
                                                                            ) : (
                                                                                <>
                                                                                    <IconPlus className="w-3 h-3" />
                                                                                    Upload
                                                                                </>
                                                                            )}
                                                                            <input
                                                                                type="file"
                                                                                accept="image/*"
                                                                                onChange={(e) => {
                                                                                    const file = e.target.files?.[0];
                                                                                    if (file) handleIconUpload(file, fieldIndex);
                                                                                }}
                                                                                style={{ display: "none" }}
                                                                                disabled={iconUploading[fieldIndex]}
                                                                            />
                                                                        </label>

                                                                        {/* Or enter URL */}
                                                                        <span className="text-xs text-gray-500">or</span>

                                                                        <input
                                                                            className="form-input text-sm flex-1"
                                                                            value={field.icon || ''}
                                                                            onChange={(e) => handleIconUrlChange(e.target.value, fieldIndex)}
                                                                            type="url"
                                                                            placeholder="Enter icon URL"
                                                                        />
                                                                    </div>
                                                                )}
                                                                <div className="text-xs text-gray-500">
                                                                    Accepted: JPG, PNG, GIF (Max 2MB)
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* ============ END ICON UPLOAD SECTION ============ */}
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        <input
                                                            id={`field-required-${fieldIndex}`}
                                                            type="checkbox"
                                                            className="form-checkbox"
                                                            checked={field.required}
                                                            onChange={(e) => updateDynamicField(fieldIndex, { required: e.target.checked })}
                                                        />
                                                        <label htmlFor={`field-required-${fieldIndex}`} className="text-white-dark text-sm">
                                                            Required Field
                                                        </label>
                                                    </div>

                                                    {/* Options for select fields */}
                                                    {isSelectField(field.fieldType) && (
                                                        <div className="space-y-2">
                                                            <div className="flex items-center justify-between">
                                                                <label className="text-white-dark text-xs">Options *</label>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => addOptionToField(fieldIndex)}
                                                                    className="btn btn-xs btn-outline-primary"
                                                                >
                                                                    Add Option
                                                                </button>
                                                            </div>
                                                            {field.options.map((option, optionIndex) => (
                                                                <div key={optionIndex} className="flex items-center gap-2">
                                                                    <input
                                                                        className="form-input flex-1"
                                                                        value={option}
                                                                        onChange={(e) => updateOption(fieldIndex, optionIndex, e.target.value)}
                                                                        type="text"
                                                                        placeholder={`Option ${optionIndex + 1}`}
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => removeOption(fieldIndex, optionIndex)}
                                                                        className="text-danger hover:text-red-700"
                                                                        disabled={field.options.length <= 1}
                                                                    >
                                                                        <IconTrash className="w-4 h-4" />
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <input id="category-disable" type="checkbox" className="form-checkbox" checked={disable} onChange={(e) => setDisable(e.target.checked)} />
                                            <label htmlFor="category-disable" className="text-white-dark text-sm">
                                                Disabled
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

export default CategoriesList;