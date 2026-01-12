import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { CouponsService, Coupon } from '../services/couponsService';
import IconEdit from '../components/Icon/IconEdit';
import IconTrashLines from '../components/Icon/IconTrashLines';
import IconPlus from '../components/Icon/IconPlus';
import IconTag from '../components/Icon/IconTag';
import CouponForm from '../components/CouponForm';
import Swal from 'sweetalert2';
import { BASE_URL } from '../config';

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    showCloseButton: true,
});

const CouponsList = () => {
    const dispatch = useDispatch();

    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null);

    useEffect(() => {
        dispatch(setPageTitle('Coupons'));
    }, [dispatch]);

    useEffect(() => {
        fetchCoupons();
    }, []);

    const fetchCoupons = async () => {
        setLoading(true);
        setError(null);
        try {
            console.log('Fetching coupons...');
            const response = await CouponsService.getCoupons();
            console.log('API Response:', response);
            if (response.success) {
                console.log('Coupons data:', response.data);
                setCoupons(response.data);
            } else {
                console.log('API returned success=false');
                setError('Failed to fetch coupons');
            }
        } catch (error) {
            console.error('Error in fetchCoupons:', error);
            setError('Error fetching coupons');
        } finally {
            setLoading(false);
        }
    };

   

    const handleToggleStatus = async (coupon: Coupon) => {
        const nextStatus = !coupon.isActive;
        
        // Optimistic update
        setCoupons(coupons.map(c => 
            c._id === coupon._id ? { ...c, isActive: nextStatus } : c
        ));
        
        try {
            const token = localStorage.getItem('token') || localStorage.getItem('accessToken') || '';
            const response = await fetch(`${BASE_URL}/coupon/${coupon._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
            });
            
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
                throw new Error(`Failed to update coupon status (${response.status})${suffix}`);
            }
            
            const data = await response.json();
            
            if (data.success) {
                // Show success toast message
                toast.fire({ 
                    icon: 'success', 
                    title: nextStatus ? 'Coupon enabled successfully' : 'Coupon disabled successfully' 
                });
                
                // Update with server response if available
                if (data.data) {
                    setCoupons(coupons.map(c => 
                        c._id === data.data._id ? data.data : c
                    ));
                }
            } else {
                throw new Error(data.message || 'Failed to update coupon status');
            }
        } catch (error) {
            // Revert optimistic update on error
            setCoupons(coupons.map(c => 
                c._id === coupon._id ? { ...c, isActive: coupon.isActive } : c
            ));
            
            // Show error toast message
            toast.fire({ 
                icon: 'error', 
                title: (error as Error)?.message || 'Failed to update coupon status' 
            });
        }
    };

    const handleAddCoupon = () => {
        setEditingCoupon(null);
        setIsFormOpen(true);
    };

    const handleEditCoupon = (coupon: Coupon) => {
        setEditingCoupon(coupon);
        setIsFormOpen(true);
    };

    const handleFormClose = () => {
        setIsFormOpen(false);
        setEditingCoupon(null);
    };

    const handleFormSuccess = () => {
        fetchCoupons();
    };

  
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(amount);
    };

    const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Coupons Management</h2>
                <button 
                    onClick={handleAddCoupon}
                    className="btn btn-primary flex items-center gap-2"
                >
                    <IconPlus className="w-4 h-4" />
                    Add New Coupon
                </button>
            </div>

            {error && (
                <div className="alert alert-danger mb-4">
                    {error}
                </div>
            )}

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className="panel">
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Discount Type</th>
                                    <th>Discount Value</th>
                                    <th>Min Order Value</th>
                                    <th>Max Discount</th>
                                    <th>Usage Limit</th>
                                    <th>Status</th>
                                    <th>Created Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coupons.length === 0 ? (
                                    <tr>
                                        <td colSpan={9} className="text-center py-8">
                                        <div className="flex justify-center items-center">
                                            <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                                        </div>
                                    </td>
                                    </tr>
                                ) : (
                                    coupons.map((coupon) => (
                                        <tr key={coupon._id}>
                                            <td>
                                                <span className="font-semibold text-primary">
                                                    {coupon.code}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`badge ${coupon.discountType === 'FLAT' ? 'bg-info' : 'bg-warning'}`}>
                                                    {coupon.discountType}
                                                </span>
                                            </td>
                                            <td>
                                                {coupon.discountType === 'FLAT' 
                                                    ? formatCurrency(coupon.discountValue)
                                                    : `${coupon.discountValue}%`
                                                }
                                            </td>
                                            <td>{formatCurrency(coupon.minOrderValue)}</td>
                                            <td>
                                                {coupon.maxDiscount ? formatCurrency(coupon.maxDiscount) : '-'}
                                            </td>
                                            <td>{coupon.usageLimit}</td>
                                            <td>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={coupon.isActive}
                                                        onChange={() => handleToggleStatus(coupon)}
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-red-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                                    <span className={`ml-3 text-sm font-medium ${
                                                        coupon.isActive 
                                                            ? 'text-green-600 dark:text-green-400' 
                                                            : 'text-red-600 dark:text-red-400'
                                                    }`}>
                                                    
                                                    </span>
                                                </label>
                                            </td>
                                           <td>{formatDate(coupon.createdAt)}</td>

                                            <td>
                                                <div className="flex gap-2">
                                                    <button 
                                                        onClick={() => handleEditCoupon(coupon)}
                                                        className="btn btn-sm btn-primary"
                                                    >
                                                        <IconEdit className="w-4 h-4" />
                                                    </button>
                                                   
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <CouponForm
                isOpen={isFormOpen}
                onClose={handleFormClose}
                onSuccess={handleFormSuccess}
                coupon={editingCoupon}
            />
        </div>
    );
};

export default CouponsList;
