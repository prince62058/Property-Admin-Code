import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { BASE_URL } from '../config';
import TableHeaderActions from '../components/TableHeaderActions';
import Swal from 'sweetalert2';

type RequirementUser = {
    _id?: string;
    email?: string;
    name?: string;
};

type RequirementItem = {
    _id: string;
    Preffered?: string;
    purpose?: string;
    budget?: number;
    area?: number;
    furished?: string;
    name?: string;
    mobileNumber?: number;
    requirement?: string;
    requestCall?: boolean;
    userId?: RequirementUser;
};

type RequirementsApiResponse = {
    success: boolean;
    message?: string;
    data?: RequirementItem[];
    pagination?: {
        total: number;
        totalPages: number;
        currentPage: number;
        itemsPerPage: number;
        search: string;
        hasNextPage?: boolean;
        hasPreviousPage?: boolean;
    };
};

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    showCloseButton: true,
});

const RequirementsList = () => {
    const dispatch = useDispatch();

    const [requirements, setRequirements] = useState<RequirementItem[]>([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        dispatch(setPageTitle('Requirements'));
    }, [dispatch]);

    useEffect(() => {
        setPage(1);
    }, [searchQuery]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchRequirements = async () => {
            setLoading(true);
            setError(null);
            try {
                const token = localStorage.getItem('token');

                const url = new URL(`${BASE_URL}/property-requirements`);
                url.searchParams.set('page', String(page));
                url.searchParams.set('limit', String(limit));
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
                    throw new Error(`Failed to fetch requirements (${res.status})${suffix}`);
                }

                const json = (await res.json()) as RequirementsApiResponse;
                if (!json?.success) {
                    throw new Error(json?.message || 'Failed to fetch requirements');
                }

                setRequirements(Array.isArray(json?.data) ? json.data : []);
                const apiTotalPages = json?.pagination?.totalPages;
                setTotalPages(typeof apiTotalPages === 'number' && apiTotalPages > 0 ? apiTotalPages : 1);
            } catch (err) {
                if ((err as Error)?.name !== 'AbortError') {
                    setError((err as Error)?.message || 'Failed to fetch requirements');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchRequirements();

        return () => controller.abort();
    }, [page, limit, searchQuery]);

    console.log(requirements)

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

            a.download = `requirements_${new Date().getTime()}.${extension}`;
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
                    <h5 className="font-semibold text-lg dark:text-white-light">
                        Requirements
                    </h5>

                    <TableHeaderActions
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        onDownload={handleDownload}
                        pdfEndpoint="property-requirements/export-pdf"
                        excelEndpoint="property-requirements/export-excel"
                        placeholder="Search requirements..."
                    />
                </div>
                {error && <div className="text-danger mb-4">{error}</div>}

                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Preferred</th>
                                <th>Purpose</th>
                                <th>Budget</th>
                                <th>Area</th>
                                <th>Furnished</th>
                                <th>Requirement</th>
                                <th>Request Call</th>
                                <th>User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={11} className="text-center py-8">
                                        <div className="flex justify-center items-center">
                                            <div className="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                                        </div>
                                    </td>
                                </tr>
                            ) : requirements.length === 0 ? (
                                <tr>
                                    <td colSpan={9} className="text-center py-8">
                                        <div className="flex justify-center items-center">
                                            <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                requirements.map((r, index) => (
                                    <tr key={r._id}>
                                        <td>{(page - 1) * limit + index + 1}</td>
                                        <td>
                                            <div className="whitespace-nowrap">{r.name || '-'}</div>
                                        </td>
                                        <td>{typeof r.mobileNumber === 'number' ? r.mobileNumber : '-'}</td>
                                        <td>{r.Preffered || '-'}</td>
                                        <td>{r.purpose || '-'}</td>
                                        <td>{typeof r.budget === 'number' ? `₹ ${r.budget.toLocaleString()}` : '-'}</td>
                                        <td>{r.area}</td>
                                        <td>{r.furished || '-'}</td>
                                        <td>
                                            {r.requirement ? (
                                                <div className="max-w-[320px] break-words">{r.requirement}</div>
                                            ) : (
                                                '-'
                                            )}
                                        </td>
                                        <td>
                                            <span className={r.requestCall ? 'text-success' : 'text-white-dark'}>{r.requestCall ? 'Yes' : 'No'}</span>
                                        </td>
                                        <td>
                                            {r.userId?._id ? (
                                                <div className="whitespace-nowrap">
                                                    {r.userId?.name || '-'}
                                                    {r.userId?.email ? <div className="text-xs text-white-dark">{r.userId.email}</div> : null}
                                                </div>
                                            ) : (
                                                '-'
                                            )}
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
                    <button type="button" className="btn btn-outline-primary" disabled={page >= totalPages || loading} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RequirementsList;
