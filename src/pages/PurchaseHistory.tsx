import { Fragment, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { BASE_URL } from '../config';

type TransactionItem = {
    _id?: string;
    id?: string;
    userId?: string;
    userName?: string;
    name?: string;
    user?: {
        name?: string;
        fullName?: string;
        email?: string;
    };
    amount?: number;
    currency?: string;
    status?: string;
    type?: string;
    description?: string;
    paymentMethod?: string;
    transactionId?: string;
    createdAt?: string;
    updatedAt?: string;
    [key: string]: unknown;
};

type TransactionsResponse = {
    success: boolean;
    message?: string;
    total?: number;
    page?: number;
    limit?: number;
    transactions?: TransactionItem[];
    data?: TransactionItem[];
};

const PurchaseHistory = () => {
    const dispatch = useDispatch();

    const [transactions, setTransactions] = useState<TransactionItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        dispatch(setPageTitle('Purchase History'));
    }, [dispatch]);

    const fetchTransactions = async (signal?: AbortSignal) => {
        setLoading(true);
        setError(null);

        try {
            const token =
                localStorage.getItem('token') ||
                localStorage.getItem('token') ||
                localStorage.getItem('accessToken') ||
                '';

            const res = await fetch(`${BASE_URL}/transactions`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                ...(signal ? { signal } : {}),
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
                throw new Error(`Failed to fetch transactions (${res.status})${suffix}`);
            }

            const json = (await res.json()) as TransactionsResponse;
            console.log('API Response:', json);
            
            // Check if response has success field or has transactions data
            if (json?.success === false) {
                throw new Error(json?.message || 'Failed to fetch transactions');
            }
            
            // Handle both data and transactions arrays from API
            const transactionData = json?.transactions || json?.data || [];
            console.log('Transaction Data:', transactionData);
            setTransactions(Array.isArray(transactionData) ? transactionData : []);
        } catch (err) {
            if ((err as Error)?.name !== 'AbortError') {
                setError((err as Error)?.message || 'Failed to fetch transactions');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        fetchTransactions(controller.signal);
        return () => controller.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const rows = useMemo(() => {
        return transactions.map((transaction, idx) => {
            const id = (transaction._id || transaction.id || `${idx}`) as string;
            
            // Get user name from various possible fields
            const userName = transaction.userName || 
                           transaction.user?.name || 
                           transaction.user?.fullName || 
                           transaction.name || 
                           '-';
            
            return {
                idx,
                id,
                amount: transaction.amount || 0,
                currency: transaction.currency || 'INR',
                status: transaction.status || 'completed',
                type: transaction.type || 'unknown',
                userName: userName,
                description: transaction.description || '-',
                paymentMethod: transaction.paymentMethod || '-',
                transactionId: transaction.transactionId || '-',
                createdAt: transaction.createdAt || '',
            };
        });
    }, [transactions]);

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'completed':
            case 'success':
                return 'text-success';
            case 'pending':
                return 'text-warning';
            case 'failed':
            case 'cancelled':
                return 'text-danger';
            default:
                return 'text-info';
        }
    };

    const getStatusBadge = (status: string) => {
        const colorClass = getStatusColor(status);
        return (
            <span className={`badge ${colorClass} bg-opacity-10 px-2 py-1 rounded text-xs font-semibold`}>
                {status}
            </span>
        );
    };

    return (
        <div>
            <div className="panel">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h5 className="font-semibold text-lg dark:text-white-light mb-1">Purchase History</h5>
                        <p className="text-sm text-white-dark">View all transaction records and payment history</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="badge bg-success/10 text-success px-3 py-1 rounded-full text-sm">
                            {rows.length} Transactions
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="alert alert-danger mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="animate-spin border-2 border-primary border-l-transparent rounded-full w-10 h-10 mb-4"></div>
                        <p className="text-white-dark">Loading transactions...</p>
                    </div>
                ) : rows.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-4 mb-4">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <p className="text-white-dark text-lg mb-2">No transactions found</p>
                        <p className="text-white-dark text-sm">Transaction history will appear here once payments are made</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">#</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">User</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Date</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Amount</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Type</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Payment Method</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Transaction ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((r, index) => (
                                    <tr key={r.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{r.idx + 1}</td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-2">
                                                {/* <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <span className="text-primary text-xs font-semibold">
                                                        {r.userName.charAt(0).toUpperCase()}
                                                    </span>
                                                </div> */}
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">{r.userName}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">Customer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="text-sm">
                                                <p className="font-medium text-gray-900 dark:text-white">
                                                    {r.createdAt ? new Date(r.createdAt).toLocaleDateString('en-GB') : '-'}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    {r.createdAt ? new Date(r.createdAt).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit', hour12: true}) : '-'}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="font-medium text-gray-900 dark:text-white">
                                                <span className="font-medium text-gray-900 dark:text-white">
                                                    {r.currency} {r.amount?.toFixed(2)}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">{getStatusBadge(r.status)}</td>
                                        <td className="py-3 px-4">
                                            <span className="badge bg-info/10 text-info px-2 py-1 rounded text-xs font-medium">
                                                {r.type}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <span className="text-sm text-gray-700 dark:text-gray-300">{r.paymentMethod}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center gap-2">
                                                <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400">
                                                    {r.transactionId}
                                                </code>
                                                
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PurchaseHistory;
