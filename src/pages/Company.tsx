import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import Swal from 'sweetalert2';
import { BASE_URL } from '../config';

type CompanyData = {
    _id: string;
    companyName?: string;
    companyAddress?: string;
    contactNumber?: number;
    whatsappNumber?: number;
    aboutUs?: string;
    termsAndConditon?: string;
    privatePolicy?: string;
    logo?: string;
    website?: string;
    supportEmail?: string;
};

type GetCompanyResponse = {
    success: boolean;
    message?: string;
    data?: CompanyData;
};

type UpdateCompanyResponse = {
    success: boolean;
    message?: string;
    data?: CompanyData;
};

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    showCloseButton: true,
});

const Company = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [companyId, setCompanyId] = useState<string | null>(null);
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [website, setWebsite] = useState('');
    const [supportEmail, setSupportEmail] = useState('');
    const [logo, setLogo] = useState('');
    const [aboutUs, setAboutUs] = useState('');
    const [termsAndConditon, setTermsAndConditon] = useState('');
    const [privatePolicy, setPrivatePolicy] = useState('');

    useEffect(() => {
        dispatch(setPageTitle('Company'));
    }, [dispatch]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchCompany = async () => {
            setLoading(true);
            setError(null);
            try {
                const token = localStorage.getItem('token');

                const res = await fetch(`${BASE_URL}/getCompany`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
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
                    throw new Error(`Failed to fetch company (${res.status})${suffix}`);
                }

                const json = (await res.json()) as GetCompanyResponse;
                if (!json?.success || !json?.data?._id) {
                    throw new Error(json?.message || 'Invalid company response');
                }

                const c = json.data;
                setCompanyId(c._id);
                setCompanyName(c.companyName || '');
                setCompanyAddress(c.companyAddress || '');
                setContactNumber(typeof c.contactNumber === 'number' ? String(c.contactNumber) : '');
                setWhatsappNumber(typeof c.whatsappNumber === 'number' ? String(c.whatsappNumber) : '');
                setWebsite(c.website || '');
                setSupportEmail(c.supportEmail || '');
                setLogo(c.logo || '');
                setAboutUs(c.aboutUs || '');
                setTermsAndConditon(c.termsAndConditon || '');
                setPrivatePolicy(c.privatePolicy || '');
            } catch (err) {
                if ((err as Error)?.name !== 'AbortError') {
                    setError((err as Error)?.message || 'Failed to fetch company');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCompany();

        return () => controller.abort();
    }, []);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const trimmedName = companyName.trim();
        if (!trimmedName) {
            setError('Company name is required');
            return;
        }

        setSaving(true);
        setError(null);
        try {
            const token = localStorage.getItem('token');

            const payload = {
                companyName: trimmedName,
                companyAddress: companyAddress.trim(),
                contactNumber: contactNumber ? Number(contactNumber) : undefined,
                whatsappNumber: whatsappNumber ? Number(whatsappNumber) : undefined,
                aboutUs,
                termsAndConditon,
                privatePolicy,
                logo,
                website,
                supportEmail,
            };

            const res = await fetch(`${BASE_URL}/updateCompany`, {
                method: 'PUT',
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
                throw new Error(`Failed to update company (${res.status})${suffix}`);
            }

            const json = (await res.json()) as UpdateCompanyResponse;
            if (!json?.success) {
                throw new Error(json?.message || 'Failed to update company');
            }

            const updated = json?.data;
            if (updated?._id) {
                setCompanyId(updated._id);
                setCompanyName(updated.companyName || '');
                setCompanyAddress(updated.companyAddress || '');
                setContactNumber(typeof updated.contactNumber === 'number' ? String(updated.contactNumber) : contactNumber);
                setWhatsappNumber(typeof updated.whatsappNumber === 'number' ? String(updated.whatsappNumber) : whatsappNumber);
                setWebsite(updated.website || '');
                setSupportEmail(updated.supportEmail || '');
                setLogo(updated.logo || '');
                setAboutUs(updated.aboutUs || '');
                setTermsAndConditon(updated.termsAndConditon || '');
                setPrivatePolicy(updated.privatePolicy || '');
            }

            toast.fire({ icon: 'success', title: 'Updated successfully' });
        } catch (err) {
            setError((err as Error)?.message || 'Failed to update company');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div>
            <div className="panel">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Company</h5>
                </div>

                {error && <div className="text-danger mb-4">{error}</div>}

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <form className="space-y-4" onSubmit={onSubmit}>
                        <div>
                            <label className="text-white-dark text-xs">Company Name</label>
                            <input className="form-input" value={companyName} onChange={(e) => setCompanyName(e.target.value)} type="text" required />
                        </div>

                        <div>
                            <label className="text-white-dark text-xs">Company Address</label>
                            <input className="form-input" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} type="text" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-white-dark text-xs">Contact Number</label>
                               <input
  className="form-input"
  type="number"
  value={contactNumber}
  onChange={(e) => {
    const value = e.target.value;

    // max 10 digits allow
    if (value.length <= 10) {
      setContactNumber(value);
    }
  }}
/>

                            </div>
                            <div>
                                <label className="text-white-dark text-xs">Whatsapp Number</label>
                                <input className="form-input" value={whatsappNumber} onChange={(e) => {
    const value = e.target.value;
    // max 10 digits allow
    if (value.length <= 10) {
      setWhatsappNumber(value);
    }
  }} type="number" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-white-dark text-xs">Website</label>
                                <input className="form-input" value={website} onChange={(e) => setWebsite(e.target.value)} type="text" />
                            </div>
                            <div>
                                <label className="text-white-dark text-xs">Support Email</label>
                                <input className="form-input" value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)} type="email" />
                            </div>
                        </div>

                        {/* <div>
                            <label className="text-white-dark text-xs">Logo (path/url)</label>
                            <input className="form-input" value={logo} onChange={(e) => setLogo(e.target.value)} type="text" />
                        </div> */}

                        <div>
                            <label className="text-white-dark text-xs">About Us</label>
                            <textarea className="form-textarea" rows={3} value={aboutUs} onChange={(e) => setAboutUs(e.target.value)} />
                        </div>

                        <div>
                            <label className="text-white-dark text-xs">Terms & Condition</label>
                            <textarea className="form-textarea" rows={3} value={termsAndConditon} onChange={(e) => setTermsAndConditon(e.target.value)} />
                        </div>

                        <div>
                            <label className="text-white-dark text-xs">Private Policy</label>
                            <textarea className="form-textarea" rows={3} value={privatePolicy} onChange={(e) => setPrivatePolicy(e.target.value)} />
                        </div>

                        <div className="flex items-center justify-end gap-2 pt-2">
                            <button type="submit" className="btn btn-primary" disabled={saving}>
                                {saving ? 'Saving...' : 'Update'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Company;
