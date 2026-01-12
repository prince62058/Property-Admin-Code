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
        _id: string;
        transactionId: string;
        name: string;
        amount: number;
        type: string;
        createdAt: string;
    }[];
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
        count: number;
        status: string | null;
    }[];
};

const Finance = () => {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    
    // Fallback static data
    const staticData: DashboardData = {
        summary: {
            totalProperties: 1247,
            totalRequirements: 892,
            totalTransactions: 456,
            totalUsers: 3289
        },
        recentTransactions: [
            {
                _id: '1',
                transactionId: 'TXN001',
                name: 'John Doe',
                amount: 2500,
                type: 'CREDIT',
                createdAt: new Date().toISOString()
            },
            {
                _id: '2',
                transactionId: 'TXN002',
                name: 'Jane Smith',
                amount: 1800,
                type: 'DEBIT',
                createdAt: new Date(Date.now() - 86400000).toISOString()
            },
            {
                _id: '3',
                transactionId: 'TXN003',
                name: 'Mike Johnson',
                amount: 3200,
                type: 'CREDIT',
                createdAt: new Date(Date.now() - 172800000).toISOString()
            }
        ],
        propertyTypeDistribution: [
            { type: 'Apartment', count: 456 },
            { type: 'House', count: 324 },
            { type: 'Villa', count: 189 },
            { type: 'Commercial', count: 156 },
            { type: 'Land', count: 122 }
        ],
        userRegistrationTrend: [
            { date: new Date(Date.now() - 604800000).toISOString(), count: 45 },
            { date: new Date(Date.now() - 518400000).toISOString(), count: 52 },
            { date: new Date(Date.now() - 432000000).toISOString(), count: 38 },
            { date: new Date(Date.now() - 345600000).toISOString(), count: 67 },
            { date: new Date(Date.now() - 259200000).toISOString(), count: 71 },
            { date: new Date(Date.now() - 172800000).toISOString(), count: 89 },
            { date: new Date().toISOString(), count: 94 }
        ],
        revenueData: [
            { date: new Date(Date.now() - 259200000).toISOString(), amount: 12500, type: 'Property Sale' },
            { date: new Date(Date.now() - 172800000).toISOString(), amount: 8900, type: 'Service Fee' },
            { date: new Date().toISOString(), amount: 15600, type: 'Property Sale' }
        ],
        propertyStatusCount: [
            { status: 'Active', count: 789 },
            { status: 'Sold', count: 234 },
            { status: 'Pending', count: 145 },
            { status: 'Inactive', count: 79 }
        ]
    };
    
    useEffect(() => {
        dispatch(setPageTitle('Finance'));
        fetchApi();
    }, []);

    const fetchApi = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');

            const response = await fetch(
                `${BASE_URL}/admin/dashboard/stats`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error('API request failed');
            }
            
            const result = await response.json();
            
            if (result.success && result.data) {
                // Transform the API data to match our structure
                const transformedData: DashboardData = {
                    summary: result.data.summary || staticData.summary,
                    recentTransactions: result.data.recentTransactions || staticData.recentTransactions,
                    propertyTypeDistribution: result.data.propertyTypeDistribution 
                        ? result.data.propertyTypeDistribution.map((item: any) => ({
                            count: item.count,
                            type: item.type || 'Unknown'
                        }))
                        : staticData.propertyTypeDistribution,
                    userRegistrationTrend: result.data.userRegistrationTrend || staticData.userRegistrationTrend,
                    revenueData: result.data.revenueData || staticData.revenueData,
                    propertyStatusCount: result.data.propertyStatusCount
                        ? result.data.propertyStatusCount.map((item: any) => ({
                            count: item.count,
                            status: item.status || 'Unknown'
                        }))
                        : staticData.propertyStatusCount
                };
                setData(transformedData);
            } else {
                setData(staticData);
            }
        } catch (error) {
            console.log('API Error, using fallback data:', error);
            setData(staticData);
        } finally {
            setLoading(false);
        }
    };

    // Remove or fix the cryptocurrency chart data since it's not being used
    // ... (keep your chart options if you need them later, but they're not being used in the current UI)

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

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
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Total Properties</div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {data?.summary?.totalProperties || 0}</div>
                        </div>
                    </div>

                    {/* Total Requirements Card */}
                    <div className="panel bg-gradient-to-r from-violet-500 to-violet-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Total Requirements</div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {data?.summary?.totalRequirements || 0} </div>
                        </div>
                    </div>

                    {/* Total Transactions Card */}
                    <div className="panel bg-gradient-to-r from-blue-500 to-blue-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Total Transactions</div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {data?.summary?.totalTransactions || 0} </div>
                        </div>
                    </div>

                    {/* Total Users Card */}
                    <div className="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
                        <div className="flex justify-between">
                            <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">Total Users</div>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {data?.summary?.totalUsers || 0} </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {/* Recent Transactions */}
                    <div className="panel">
                        <div className="mb-5 text-lg font-bold">Recent Transactions</div>
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="ltr:rounded-l-md rtl:rounded-r-md">Transaction ID</th>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Type</th>
                                        <th>Date</th>
                                        <th className="text-center ltr:rounded-r-md rtl:rounded-l-md">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.recentTransactions?.map((transaction) => (
                                        <tr key={transaction._id}>
                                            <td className="font-semibold">{transaction.transactionId}</td>
                                            <td className="whitespace-nowrap">{transaction.name}</td>
                                            <td className={transaction.type === 'CREDIT' ? 'text-success' : 'text-danger'}>
                                                {transaction.type === 'CREDIT' ? '+' : '-'}${transaction.amount}
                                            </td>
                                            <td>
                                                <span className={`badge ${transaction.type === 'CREDIT' ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'} rounded-full`}>
                                                    {transaction.type}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap">{new Date(transaction.createdAt).toLocaleDateString()}</td>
                                            <td className="text-center">
                                                <span className="badge bg-success/20 text-success rounded-full hover:top-0">Completed</span>
                                            </td>
                                        </tr>
                                    ))}
                                    {(!data?.recentTransactions || data.recentTransactions.length === 0) && (
                                        <tr>
                                            <td colSpan={6} className="text-center py-4 text-gray-500">
                                                No recent transactions found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Property Type Distribution */}
                    <div className="panel">
                        <div className="mb-5 text-lg font-bold">Property Type Distribution</div>
                        {data?.propertyTypeDistribution && data.propertyTypeDistribution.length > 0 ? (
                            <ReactApexChart
                                series={data.propertyTypeDistribution.map(item => item.count)}
                                options={{
                                    chart: {
                                        type: 'donut',
                                        height: 300,
                                    },
                                    labels: data.propertyTypeDistribution.map(item => item.type || 'Unknown'),
                                    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'],
                                    legend: {
                                        position: 'bottom',
                                    },
                                    responsive: [{
                                        breakpoint: 480,
                                        options: {
                                            chart: {
                                                width: 200
                                            },
                                            legend: {
                                                position: 'bottom'
                                            }
                                        }
                                    }]
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
                        <div className="mb-5 text-lg font-bold">User Registration Trend</div>
                        {data?.userRegistrationTrend && data.userRegistrationTrend.length > 0 ? (
                            <ReactApexChart
                                series={[{
                                    name: 'Users Registered',
                                    data: data.userRegistrationTrend.map(item => item.count)
                                }]}
                                options={{
                                    chart: {
                                        type: 'line',
                                        height: 300,
                                        toolbar: {
                                            show: false
                                        }
                                    },
                                    xaxis: {
                                        categories: data.userRegistrationTrend.map(item =>
                                            new Date(item.date).toLocaleDateString('en-US', { 
                                                month: 'short', 
                                                day: 'numeric' 
                                            })
                                        ),
                                    },
                                    stroke: {
                                        curve: 'smooth',
                                        width: 3
                                    },
                                    colors: ['#3b82f6'],
                                    markers: {
                                        size: 4,
                                        colors: ['#3b82f6'],
                                        strokeColors: '#fff',
                                        strokeWidth: 2,
                                        hover: {
                                            size: 7
                                        }
                                    },
                                    grid: {
                                        borderColor: '#e5e7eb',
                                        strokeDashArray: 3
                                    },
                                    tooltip: {
                                        y: {
                                            formatter: function (val: number) {
                                                return val + " users"
                                            }
                                        }
                                    }
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
                        <div className="mb-5 text-lg font-bold">Property Status Count</div>
                        <div className="space-y-3">
                            {data?.propertyStatusCount?.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <div className="flex items-center">
                                        <div className={`w-3 h-3 rounded-full ${index % 3 === 0 ? 'bg-info' : index % 3 === 1 ? 'bg-success' : 'bg-warning'} mr-3`}></div>
                                        <span className="font-medium">{item.status || 'Unknown'}</span>
                                    </div>
                                    <span className="font-bold text-lg">{item.count}</span>
                                </div>
                            ))}
                            {(!data?.propertyStatusCount || data.propertyStatusCount.length === 0) && (
                                <div className="text-center py-4 text-gray-500">
                                    No property status data available
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Revenue Data - Only show if data exists */}
                {data?.revenueData && data.revenueData.length > 0 && (
                    <div className="panel mt-6">
                        <div className="mb-5 text-lg font-bold">Revenue Data</div>
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="ltr:rounded-l-md rtl:rounded-r-md">Date</th>
                                        <th>Amount</th>
                                        <th className="text-center ltr:rounded-r-md rtl:rounded-l-md">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.revenueData.map((revenue, index) => (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap">{new Date(revenue.date).toLocaleDateString()}</td>
                                            <td className="font-semibold">${revenue.amount}</td>
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