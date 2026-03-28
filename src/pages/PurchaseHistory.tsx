import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { BASE_URL } from '../config';
import TableHeaderActions from '../components/TableHeaderActions';
import Swal from 'sweetalert2';

type AddonItem = {
    _id?: string;
    key?: string;
    price?: number;
};

type CouponInfo = {
    _id?: string;
    code?: string;
    discountType?: string;
    discountValue?: number;
} | null;

type UserInfo = {
    _id?: string;
    name?: string;
    phoneNumber?: string;
    role?: string;
    email?: string;
};

type PlanInfo = {
    _id?: string;
    planType?: string;
    price?: number;
    validityInDays?: number;
};

type OrderItem = {
    _id?: string;
    userId?: UserInfo;
    planId?: PlanInfo;
    razorpayOrderId?: string;
    razorpayPaymentId?: string;
    transactionId?: string | null;
    paymentMethod?: string;
    amount?: number;
    currency?: string;
    status?: string;
    addons?: AddonItem[];
    addonAmount?: number;
    couponId?: CouponInfo;
    discountAmount?: number;
    finalAmount?: number;
    createdAt?: string;
};

type OrdersResponse = {
    success: boolean;
    message?: string;
    total?: number;
    page?: number;
    limit?: number;
    totalPages?: number;
    data?: OrderItem[];
};

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    showCloseButton: true,
});


const PurchaseHistory = () => {
    const dispatch = useDispatch();

    const [orders, setOrders] = useState<OrderItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    
    // Pagination states
    const [page, setPage] = useState(1);
    const [limit] = useState(20);
    const [totalPages, setTotalPages] = useState(1);
    const [totalOrders, setTotalOrders] = useState(0);

    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            if (debouncedSearch !== searchQuery) {
                setDebouncedSearch(searchQuery);
                setPage(1); // Reset to page 1 on search
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery, debouncedSearch]);

    useEffect(() => {
        dispatch(setPageTitle('Purchase History'));
    }, [dispatch]);

    const filteredOrders = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return orders;

        return orders.filter((o) => {
            const user = o.userId;
            const plan = o.planId;

            return (
                (user?.name || "").toLowerCase().includes(q) ||
                (user?.phoneNumber || "").includes(q) ||
                (user?.email || "").toLowerCase().includes(q) ||
                (plan?.planType || "").toLowerCase().includes(q) ||
                (o.status || "").toLowerCase().includes(q) ||
                (o.razorpayPaymentId || "").toLowerCase().includes(q) ||
                (o.transactionId || "").toLowerCase().includes(q)
            );
        });
    }, [orders, searchQuery]);

    const fetchOrders = async (signal?: AbortSignal) => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('token') || localStorage.getItem('accessToken') || '';
            
            const url = new URL(`${BASE_URL}/admin/orders`);
            url.searchParams.set('page', String(page));
            url.searchParams.set('limit', String(limit));
            if (debouncedSearch) {
                // If backend supports search parameter, pass it here
                url.searchParams.set("search", debouncedSearch);
            }

            const res = await fetch(url.toString(), {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                ...(signal ? { signal } : {}),
            });

            if (!res.ok) {
                let detailsMsg = '';
                try {
                    const json = (await res.json()) as { message?: string };
                    detailsMsg = json?.message || '';
                } catch { detailsMsg = ''; }
                throw new Error(`Failed to fetch orders (${res.status})${detailsMsg ? `: ${detailsMsg}` : ''}`);
            }

            const json = (await res.json()) as OrdersResponse;
            if (json?.success === false) throw new Error(json?.message || 'Failed to fetch orders');
            
            const data = json?.data || [];
            setOrders(Array.isArray(data) ? data : []);
            
            setTotalPages(json?.totalPages || 1);
            setTotalOrders(json?.total || 0);

        } catch (err) {
            if ((err as Error)?.name !== 'AbortError') {
                setError((err as Error)?.message || 'Failed to fetch orders');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        fetchOrders(controller.signal);
        return () => controller.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, limit, debouncedSearch]);

    const toggle = (id: string) => setExpandedId(prev => (prev === id ? null : id));

    const getStatusStyle = (status?: string) => {
        const s = (status || '').toLowerCase();
        if (s === 'paid' || s === 'success' || s === 'completed') return 'bg-success text-success';
        if (s === 'pending') return 'bg-warning text-warning';
        if (s === 'failed' || s === 'cancelled') return 'bg-danger text-danger';
        return 'bg-info text-info';
    };

    const getPlanStyle = (planType?: string) => {
        const map: Record<string, string> = {
            FREE: 'bg-gray-400 text-gray-500',
            SILVER: 'bg-slate-400 text-slate-500',
            GOLD: 'bg-yellow-500 text-yellow-600',
            PREMIUM: 'bg-purple-500 text-purple-600',
        };
        return map[planType || ''] || 'bg-info/10 text-info';
    };

    const getRoleStyle = (role?: string) => {
        const map: Record<string, string> = {
            PROPERTYOWNER: 'bg-primary/10 text-primary',
            BUILDER: 'bg-purple-500/10 text-purple-500',
            BROKER: 'bg-orange-500/10 text-orange-500',
        };
        return map[role || ''] || 'bg-gray-200/10 text-gray-500';
    };

    const paidRevenue = useMemo(
        () => orders.filter(o => o.status === 'paid').reduce((acc, o) => acc + (o.finalAmount || 0), 0),
        [orders]
    );


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

            a.download = `purchase_history_${new Date().getTime()}.${extension}`;
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
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                    <div>
                        <h5 className="font-semibold text-lg dark:text-white-light mb-1">Purchase History</h5>
                        <p className="text-sm text-white-dark">All plan orders and payment records. Click a row to expand details.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto">
                        <TableHeaderActions
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            onDownload={handleDownload}
                            pdfEndpoint="download-order/pdf"
                            excelEndpoint="download-order/excel"
                            csvEndpoint="download-order/csv"
                            placeholder="Search purchase..."
                        />

                        <div className="flex items-center gap-3">
                            <div className="badge bg-success text-success px-3 py-1.5 rounded-full text-sm font-semibold">
                                Revenue: ₹{paidRevenue.toLocaleString()}
                            </div>

                            <div className="badge bg-primary text-primary px-3 py-1.5 rounded-full text-sm font-semibold">
                                {orders.length} Orders
                            </div>
                        </div>
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <div className="alert alert-danger mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {error}
                    </div>
                )}

                {/* Loading */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-16">
                        <div className="animate-spin border-2 border-primary border-l-transparent rounded-full w-10 h-10 mb-4"></div>
                        <p className="text-white-dark">Loading orders...</p>
                    </div>
                ) : filteredOrders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-5 mb-4">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <p className="text-white-dark text-lg mb-1">No orders found</p>
                        <p className="text-white-dark text-sm">Order history will appear here once plans are purchased</p>
                    </div>
                ) : (
                    /* ── Table with accordion rows ── */
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] border-separate border-spacing-y-2">
                            <thead>
                                <tr>
                                    <th className="text-left py-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">S.No</th>
                                    <th className="text-left py-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">User</th>
                                    <th className="text-left py-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Plan</th>
                                    <th className="text-left py-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Final Amount</th>
                                    <th className="text-left py-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Status</th>
                                    <th className="text-left py-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Date</th>
                                    <th className="py-2 px-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order, idx) => {
                                    const id = order._id || `${idx}`;
                                    const isOpen = expandedId === id;
                                    const user = order.userId;
                                    const plan = order.planId;
                                    const addons = order.addons || [];
                                    const coupon = order.couponId;
                                    const payId = order.razorpayPaymentId || order.transactionId || order.razorpayOrderId || '—';

                                    return (
                                        <>
                                            {/* ── Summary Row ── */}
                                            <tr
                                                key={`row-${id}`}
                                                onClick={() => toggle(id)}
                                                className={`cursor-pointer transition-all ${isOpen
                                                    ? 'bg-primary/5 dark:bg-primary/10'
                                                    : 'bg-white dark:bg-[#1b2e4b] hover:bg-gray-50 dark:hover:bg-gray-700/30'
                                                    } shadow-sm rounded-lg`}
                                            >
                                                {/* Index */}
                                                <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400 rounded-l-lg font-medium">
                                                    {(page - 1) * limit + idx + 1}
                                                </td>

                                                {/* User */}
                                                <td className="py-3 px-4">
                                                    <p className="font-semibold text-sm text-gray-900 dark:text-white">{user?.name || '—'}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{user?.phoneNumber || ''}</p>
                                                </td>

                                                {/* Plan */}
                                                <td className="py-3 px-4">
                                                    <span className={`badge ${getPlanStyle(plan?.planType)} px-2.5 py-1 rounded-full text-xs font-semibold`}>
                                                        {plan?.planType || '—'}
                                                    </span>
                                                    <p className="text-xs text-gray-400 mt-1">{plan?.validityInDays}d validity</p>
                                                </td>

                                                {/* Final Amount */}
                                                <td className="py-3 px-4">
                                                    <span className="font-bold text-gray-900 dark:text-white text-sm">
                                                        ₹{order.finalAmount ?? 0}
                                                    </span>
                                                    {(order.discountAmount ?? 0) > 0 && (
                                                        <p className="text-xs text-green-500 mt-0.5">-₹{order.discountAmount} off</p>
                                                    )}
                                                </td>

                                                {/* Status */}
                                                <td className="py-3 px-4">
                                                    <span className={`badge ${getStatusStyle(order.status)} px-2.5 py-1 rounded-full text-xs font-semibold capitalize`}>
                                                        {order.status}
                                                    </span>
                                                </td>

                                                {/* Date */}
                                                <td className="py-3 px-4">
                                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                                        {order.createdAt ? new Date(order.createdAt).toLocaleDateString('en-GB') : '—'}
                                                    </p>
                                                    <p className="text-xs text-gray-400">
                                                        {order.createdAt ? new Date(order.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : ''}
                                                    </p>
                                                </td>

                                                {/* Chevron */}
                                                <td className="py-3 px-4 rounded-r-lg">
                                                    <svg
                                                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </td>
                                            </tr>

                                            {/* ── Expanded Detail Row ── */}
                                            {isOpen && (
                                                <tr key={`expanded-${id}`}>
                                                    <td colSpan={7} className="px-4 pb-3">
                                                        <div className="bg-gray-50 dark:bg-[#0e1726] border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                                                                {/* User Details */}
                                                                <div>
                                                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">User Details</p>
                                                                    <div className="space-y-1.5">
                                                                        <div>
                                                                            <p className="text-xs text-gray-500 dark:text-gray-400">Name</p>
                                                                            <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name || '—'}</p>
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                                                                            <p className="text-sm text-gray-800 dark:text-gray-200">{user?.phoneNumber || '—'}</p>
                                                                        </div>
                                                                        {user?.email && (
                                                                            <div>
                                                                                <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                                                                                <p className="text-sm text-gray-800 dark:text-gray-200 break-all">{user.email}</p>
                                                                            </div>
                                                                        )}
                                                                        <div>
                                                                            <p className="text-xs text-gray-500 dark:text-gray-400">Role</p>
                                                                            <span className={`badge ${getRoleStyle(user?.role)} px-2 py-0.5 rounded text-xs font-semibold`}>
                                                                                {user?.role || '—'}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Addons */}
                                                                <div>
                                                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                                                                        Addons {addons.length > 0 && <span className="text-primary">({addons.length})</span>}
                                                                    </p>
                                                                    {addons.length > 0 ? (
                                                                        <div className="space-y-1.5">
                                                                            {addons.map(ad => (
                                                                                <div key={ad._id} className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg px-3 py-1.5 border border-gray-200 dark:border-gray-700">
                                                                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{ad.key}</span>
                                                                                    <span className="text-xs font-semibold text-primary">₹{ad.price}</span>
                                                                                </div>
                                                                            ))}
                                                                            <p className="text-xs text-gray-500 text-right">Total: ₹{order.addonAmount ?? 0}</p>
                                                                        </div>
                                                                    ) : (
                                                                        <p className="text-sm text-gray-400 italic">No addons</p>
                                                                    )}
                                                                </div>

                                                                {/* Coupon & Discount */}
                                                                <div>
                                                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Coupon & Discount</p>
                                                                    {coupon ? (
                                                                        <div className="space-y-1.5">
                                                                            <div className="inline-flex items-center gap-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-3 py-1.5">
                                                                                <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                                                    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a1 1 0 01-1 1H3a1 1 0 01-1-1V6zM3 11a1 1 0 011-1h12a1 1 0 011 1v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5z" />
                                                                                </svg>
                                                                                <span className="font-mono text-xs font-bold text-green-700 dark:text-green-400">{coupon.code}</span>
                                                                            </div>
                                                                            <div className="text-xs text-gray-500 dark:text-gray-400 space-y-0.5 pl-1">
                                                                                <p>Type: <span className="font-medium text-gray-700 dark:text-gray-300">{coupon.discountType}</span></p>
                                                                                <p>Discount: <span className="font-semibold text-green-600">-₹{order.discountAmount ?? 0}</span></p>
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        <p className="text-sm text-gray-400 italic">No coupon applied</p>
                                                                    )}
                                                                </div>

                                                                {/* Payment Info */}
                                                                <div>
                                                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Payment Info</p>
                                                                    <div className="space-y-1.5">
                                                                        <div>
                                                                            <p className="text-xs text-gray-500 dark:text-gray-400">Method</p>
                                                                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 capitalize">{order.paymentMethod || 'razorpay'}</p>
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-xs text-gray-500 dark:text-gray-400">Payment ID</p>
                                                                            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded block text-gray-600 dark:text-gray-400 break-all">
                                                                                {payId}
                                                                            </code>
                                                                        </div>
                                                                        {order.razorpayOrderId && (
                                                                            <div>
                                                                                <p className="text-xs text-gray-500 dark:text-gray-400">Order ID</p>
                                                                                <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded block text-gray-600 dark:text-gray-400 break-all">
                                                                                    {order.razorpayOrderId}
                                                                                </code>
                                                                            </div>
                                                                        )}

                                                                        {/* Amount breakdown */}
                                                                        <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2 space-y-1">
                                                                            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                                                                                <span>Plan price</span>
                                                                                <span>₹{plan?.price ?? 0}</span>
                                                                            </div>
                                                                            {(order.addonAmount ?? 0) > 0 && (
                                                                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                                                                                    <span>Addons</span>
                                                                                    <span>+₹{order.addonAmount}</span>
                                                                                </div>
                                                                            )}
                                                                            {(order.discountAmount ?? 0) > 0 && (
                                                                                <div className="flex justify-between text-xs text-green-600">
                                                                                    <span>Discount</span>
                                                                                    <span>-₹{order.discountAmount}</span>
                                                                                </div>
                                                                            )}
                                                                            <div className="flex justify-between text-sm font-bold text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 pt-1">
                                                                                <span>Final</span>
                                                                                <span>₹{order.finalAmount ?? 0}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-5">
                    <div className="text-sm text-gray-500">
                        Showing page {page} of {totalPages}
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            className={`p-2 rounded-full bg-white dark:bg-black w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                            disabled={page === 1}
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className={`p-2 rounded-full bg-white dark:bg-black w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                            disabled={page === totalPages}
                            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseHistory;
