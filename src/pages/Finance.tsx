import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import { setPageTitle } from '../store/themeConfigSlice';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../config';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';
import IconEye from '../components/Icon/IconEye';
import IconBitcoin from '../components/Icon/IconBitcoin';
import IconEthereum from '../components/Icon/IconEthereum';
import IconLitecoin from '../components/Icon/IconLitecoin';
import IconBinance from '../components/Icon/IconBinance';
import IconTether from '../components/Icon/IconTether';
import IconSolana from '../components/Icon/IconSolana';
import IconCircleCheck from '../components/Icon/IconCircleCheck';
import IconInfoCircle from '../components/Icon/IconInfoCircle';

type DashboardData = {
    summary: {
        totalProperties: number;
        totalRequirements: number;
        totalTransactions: number;
        totalUsers: number;
    };
    recentTransactions: {
        data: {
            _id: string;
            userId?: { _id: string; name: string; email: string };
            transactionId: string;
            name: string;
            amount: number;
            type: string;
            createdAt: string;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    propertyTypeDistribution: {
        count: number;
        type: string | null;
    }[];
    userRegistrationTrend: {
        count: number;
        date: string;
    }[];
    revenueData: {
        date: string;
        amount: number;
        type: string;
    }[];
    propertyStatusCount: {
        top: { count: number; status: string };
        bottom: { count: number; status: string };
    };
};

const Finance = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [transactionPage, setTransactionPage] = useState(1);
    const [transactionLimit] = useState(5);
    const [transactionTotalPages, setTransactionTotalPages] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Finance'));
        fetchApi();
    }, [transactionPage]);

    const fetchApi = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');

            const response = await fetch(
                `${BASE_URL}/admin/dashboard/stats?page=${transactionPage}&limit=${transactionLimit}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (!response.ok) {
                throw new Error('API request failed');
            }

            const result = await response.json();
            console.log(result);

            if (result.success && result.data) {
                // Transform the API data to match our structure
                const transformedData: DashboardData = {
                    summary: result.data.summary,
                    recentTransactions: result.data.recentTransactions,
                    propertyTypeDistribution: result.data.propertyTypeDistribution.map(
                        (item: any) => ({
                            count: item.count,
                            type: item.type || 'Unknown',
                        })
                    ),
                    userRegistrationTrend: result.data.userRegistrationTrend.map(
                        (item: any) => ({
                            count: item.count,
                            date: item.date,
                        })
                    ),
                    revenueData: result.data.revenueData || [],
                    propertyStatusCount: result.data.propertyStatusCount,
                };
                setData(transformedData);
                setTransactionTotalPages(
                    result.data.recentTransactions?.pagination?.totalPages || 1
                );
            } else {
                setData(null);
            }
        } catch (error) {
            console.log('API Error:', error);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    const isRtl = useSelector(
        (state: IRootState) => state.themeConfig.rtlClass
    ) === 'rtl'
        ? true
        : false;

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                        No Data Available
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Unable to load dashboard data. Please try again later.
                    </p>
                </div>
            </div>
        );
    }

    // Prepare property status data for display (transform top/bottom into array)
    const propertyStatusList = [
        {
            status: data.propertyStatusCount.top.status,
            count: data.propertyStatusCount.top.count,
        },
        {
            status: data.propertyStatusCount.bottom.status,
            count: data.propertyStatusCount.bottom.count,
        },
    ];

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Finance</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white">
                    {/* Total Properties Card */}
                    <div className="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">
                                Total Properties
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3">
                                {data.summary.totalProperties || 0}
                            </div>
                        </div>
                    </div>

                    {/* Total Requirements Card */}
                    <div className="panel bg-gradient-to-r from-violet-500 to-violet-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">
                                Total Requirements
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3">
                                {data.summary.totalRequirements || 0}
                            </div>
                        </div>
                    </div>

                    {/* Total Transactions Card */}
                    <div className="panel bg-gradient-to-r from-blue-500 to-blue-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">
                                Total Transactions
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3">
                                {data.summary.totalTransactions || 0}
                            </div>
                        </div>
                    </div>

                    {/* Total Users Card */}
                    <div className="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">
                                Total Users
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3">
                                {data.summary.totalUsers || 0}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {/* Recent Transactions */}
                    <div className="panel">
                        <div className="mb-5 text-lg font-bold">
                            Recent Transactions
                        </div>
                        <div className="table-responsive">
                            <table className="table-hover">
                                <thead>
                                    <tr>
                                        <th className="ltr:rounded-l-md rtl:rounded-r-md">
                                            Transaction ID
                                        </th>
                                        <th>User Name</th>
                                        <th>Plan Name</th>
                                        <th>Amount</th>
                                        <th>Type</th>
                                        <th>Date</th>
                                        <th className="text-center ltr:rounded-r-md rtl:rounded-l-md">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.recentTransactions.data.map(
                                        (transaction: any) => (
                                            <tr key={transaction._id}>
                                                <td className="font-semibold">
                                                    {transaction.transactionId}
                                                </td>
                                                <td className="whitespace-nowrap">
                                                    {transaction.userId?.name ||
                                                        '-'}
                                                </td>
                                                <td className="whitespace-nowrap">
                                                    {transaction.name}
                                                </td>
                                                <td
                                                    className={
                                                        transaction.type ===
                                                        'CREDIT'
                                                            ? 'text-success'
                                                            : 'text-danger'
                                                    }
                                                >
                                                    {transaction.type ===
                                                    'CREDIT'
                                                        ? '+'
                                                        : '-'}
                                                    ₹{transaction.amount}
                                                </td>
                                                <td>
                                                    <span
                                                        className={`badge ${
                                                            transaction.type ===
                                                            'CREDIT'
                                                                ? 'bg-success/20 text-success'
                                                                : 'bg-danger/20 text-danger'
                                                        } rounded-full`}
                                                    >
                                                        {transaction.type}
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap">
                                                    {new Date(
                                                        transaction.createdAt
                                                    ).toLocaleDateString()}
                                                </td>
                                                <td className="text-center">
                                                    <span className="badge bg-success/20 text-success rounded-full hover:top-0">
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                    {(!data.recentTransactions.data ||
                                        data.recentTransactions.data
                                            .length === 0) && (
                                        <tr>
                                            <td
                                                colSpan={7}
                                                className="text-center py-4 text-gray-500"
                                            >
                                                No recent transactions found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-[#e0e6ed] dark:border-[#1b2e4b]">
                            <button
                                type="button"
                                className="btn btn-outline-primary btn-sm"
                                disabled={transactionPage === 1}
                                onClick={() =>
                                    setTransactionPage(transactionPage - 1)
                                }
                            >
                                Prev
                            </button>
                            <span className="text-white-dark text-xs mx-2">
                                Page {transactionPage} of {transactionTotalPages}
                            </span>
                            <button
                                type="button"
                                className="btn btn-outline-primary btn-sm"
                                disabled={
                                    transactionPage === transactionTotalPages
                                }
                                onClick={() =>
                                    setTransactionPage(transactionPage + 1)
                                }
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Property Type Distribution */}
                    <div className="panel">
                        <div className="mb-5 text-lg font-bold">
                            Property Type Distribution
                        </div>
                        {data.propertyTypeDistribution &&
                        data.propertyTypeDistribution.length > 0 ? (
                            <ReactApexChart
                                series={data.propertyTypeDistribution.map(
                                    (item) => item.count
                                )}
                                options={{
                                    chart: {
                                        type: 'donut',
                                        height: 300,
                                    },
                                    labels: data.propertyTypeDistribution.map(
                                        (item) => item.type || 'Unknown'
                                    ),
                                    colors: [
                                        '#3b82f6',
                                        '#10b981',
                                        '#f59e0b',
                                        '#ef4444',
                                        '#8b5cf6',
                                        '#ec4899',
                                        '#06b6d4',
                                        '#84cc16',
                                    ],
                                    legend: {
                                        position: 'bottom',
                                    },
                                    responsive: [
                                        {
                                            breakpoint: 480,
                                            options: {
                                                chart: {
                                                    width: 200,
                                                },
                                                legend: {
                                                    position: 'bottom',
                                                },
                                            },
                                        },
                                    ],
                                }}
                                type="donut"
                                height={300}
                            />
                        ) : (
                            <div className="text-center py-4 text-gray-500">
                                No property type data available
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    {/* User Registration Trend */}
                    <div className="panel">
                        <div className="mb-5 text-lg font-bold">
                            User Registration Trend
                        </div>
                        {data.userRegistrationTrend &&
                        data.userRegistrationTrend.length > 0 ? (
                            <ReactApexChart
                                series={[
                                    {
                                        name: 'Users Registered',
                                        data: data.userRegistrationTrend.map(
                                            (item) => item.count
                                        ),
                                    },
                                ]}
                                options={{
                                    chart: {
                                        type: 'line',
                                        height: 300,
                                        toolbar: {
                                            show: false,
                                        },
                                    },
                                    xaxis: {
                                        categories:
                                            data.userRegistrationTrend.map(
                                                (item) =>
                                                    new Date(
                                                        item.date
                                                    ).toLocaleDateString(
                                                        'en-US',
                                                        {
                                                            month: 'short',
                                                            day: 'numeric',
                                                        }
                                                    )
                                            ),
                                    },
                                    stroke: {
                                        curve: 'smooth',
                                        width: 3,
                                    },
                                    colors: ['#3b82f6'],
                                    markers: {
                                        size: 4,
                                        colors: ['#3b82f6'],
                                        strokeColors: '#fff',
                                        strokeWidth: 2,
                                        hover: {
                                            size: 7,
                                        },
                                    },
                                    grid: {
                                        borderColor: '#e5e7eb',
                                        strokeDashArray: 3,
                                    },
                                    tooltip: {
                                        y: {
                                            formatter: function (val: number) {
                                                return val + ' users';
                                            },
                                        },
                                    },
                                }}
                                type="line"
                                height={300}
                            />
                        ) : (
                            <div className="text-center py-4 text-gray-500">
                                No registration trend data available
                            </div>
                        )}
                    </div>

                    {/* Property Status Count */}
                    <div className="panel">
                        <div className="mb-5 text-lg font-bold">
                            Property Status Count
                        </div>
                        <div className="space-y-3">
                            {propertyStatusList.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                                >
                                    <div className="flex items-center">
                                        <div
                                            className={`w-3 h-3 rounded-full ${
                                                index % 3 === 0
                                                    ? 'bg-info'
                                                    : index % 3 === 1
                                                    ? 'bg-success'
                                                    : 'bg-warning'
                                            } mr-3`}
                                        ></div>
                                        <span className="font-medium">
                                            {item.status || 'Unknown'}
                                        </span>
                                    </div>
                                    <span className="font-bold text-lg">
                                        {item.count}
                                    </span>
                                </div>
                            ))}
                            {(!propertyStatusList ||
                                propertyStatusList.length === 0) && (
                                <div className="text-center py-4 text-gray-500">
                                    No property status data available
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Revenue Data - Only show if data exists */}
                {data.revenueData && data.revenueData.length > 0 && (
                    <div className="panel mt-6">
                        <div className="mb-5 text-lg font-bold">
                            Revenue Data
                        </div>
                        <div className="table-responsive">
                            <table className="table-hover">
                                <thead>
                                    <tr>
                                        <th className="ltr:rounded-l-md rtl:rounded-r-md">
                                            Date
                                        </th>
                                        <th>Amount</th>
                                        <th className="text-center ltr:rounded-r-md rtl:rounded-l-md">
                                            Type
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.revenueData.map((revenue, index) => (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap">
                                                {new Date(
                                                    revenue.date
                                                ).toLocaleDateString()}
                                            </td>
                                            <td className="font-semibold">
                                                ${revenue.amount}
                                            </td>
                                            <td className="text-center">
                                                <span className="badge bg-primary/20 text-primary rounded-full">
                                                    {revenue.type}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Finance;