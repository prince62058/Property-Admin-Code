import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../../config';
import IconHome from '../../components/Icon/IconHome';
import IconDollarSignCircle from '../../components/Icon/IconDollarSignCircle';
import IconUser from '../../components/Icon/IconUser';
import IconPhone from '../../components/Icon/IconPhone';
import IconLinkedin from '../../components/Icon/IconLinkedin';
import IconTwitter from '../../components/Icon/IconTwitter';
import IconFacebook from '../../components/Icon/IconFacebook';
import IconGithub from '../../components/Icon/IconGithub';
import IconCamera from '../../components/Icon/IconCamera';
import Swal from 'sweetalert2';

const toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  showCloseButton: true,
});

const AccountSetting = () => {
    const dispatch = useDispatch();
    const [tabs, setTabs] = useState<string>('home');
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string>('');

    const toggleTabs = (name: string) => {
        setTabs(name);
    };

    const fetchUser = useCallback(async () => {
        try {
            setLoading(true);

            // Try all possible keys where admin/user ID might be stored
            const userId =
                localStorage.getItem('adminId') ||
                localStorage.getItem('admin') ||
                localStorage.getItem('userId');
            const token = localStorage.getItem('token');

            if (!userId || !token) {
                console.error('Missing userId or token');
                setLoading(false);
                return;
            }

            const res = await fetch(
                `${BASE_URL}/getUserById/${userId}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!res.ok) {
                throw new Error(`Failed to fetch user: ${res.status}`);
            }

            const data = await res.json();
            if (data.success && data.data) {
                setUser(data.data);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            toast.fire({
                icon: 'error',
                title: 'Invalid File Type',
                text: 'Please upload a valid image file (JPEG, PNG, GIF, or WebP)'
            });
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            toast.fire({
                icon: 'error',
                title: 'File Too Large',
                text: 'Image size should be less than 5MB'
            });
            return;
        }

        setSelectedImage(file);
        
        // Create preview URL for the selected image
        const imageUrl = URL.createObjectURL(file);
        setPreviewImage(imageUrl);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Only allow digits and limit to 10
        const cleanValue = value.replace(/\D/g, '').slice(0, 10);
        e.target.value = cleanValue;
    };

    useEffect(() => {
        dispatch(setPageTitle('Account Setting'));
        fetchUser();
    }, [dispatch, fetchUser]);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        
        try {
            const token = localStorage.getItem('token');
            const adminId =
                localStorage.getItem('adminId') ||
                localStorage.getItem('admin') ||
                localStorage.getItem('userId');
            
            if (!adminId) {
                throw new Error('Admin ID not found');
            }

            if (!token) {
                throw new Error('Authentication token not found');
            }

            // Get form data
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            
            // Add image to formData if selected
            // if (selectedImage) {
            //     formData.append('userImage', selectedImage);
            // }
            
            // Validate phone number (max 10 digits)
            const phoneNumber = formData.get('phone') as string;
            const cleanPhoneNumber = phoneNumber.replace(/\D/g, ''); 
            
            if (cleanPhoneNumber.length > 10) {
                throw new Error('Phone number cannot exceed 10 digits');
            }
            
            if (cleanPhoneNumber.length > 0 && cleanPhoneNumber.length < 10) {
                throw new Error('Phone number must be exactly 10 digits');
            }

            // Create the request with FormData
            const res = await fetch(`${BASE_URL}/updateAdmin/${adminId}`, {
                method: 'PUT',
                headers: {
                    // Don't set Content-Type header when using FormData
                    // The browser will set it automatically with boundary
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
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
                throw new Error(`Failed to update profile (${res.status})${suffix}`);
            }

            const data = await res.json();
            
            if (data.success) {
                // Clear selected image since it's been uploaded
                setSelectedImage(null);
                
                // Refresh user data after successful update
                await fetchUser();
                toast.fire({
                    icon: 'success',
                    title: 'User Profile Updated.',
                });
            } else {
                throw new Error(data.message || 'Failed to update information');
            }
        } catch (error) {
            console.error('Update error:', error);
            toast.fire({
                icon: 'error',
                title: 'Error',
                text: (error as Error).message || 'Failed to update information'
            });
        } finally {
            setSaving(false);
        }
    };

    return (
        <div>
           
            <div className="pt-5">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Settings</h5>
                </div>
                <div>
                    <ul className="sm:flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('home')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'home' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconHome />
                                Home
                            </button>
                        {/* </li>
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('payment-details')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'payment-details' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconDollarSignCircle />
                                Payment Details
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('preferences')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'preferences' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconUser className="w-5 h-5" />
                                Preferences
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('danger-zone')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'danger-zone' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconPhone />
                                Danger Zone
                            </button>
                        </li> */}
                        </li>
                    </ul>
                </div>
                {tabs === 'home' ? (
                    <div>
                        {loading ? (
                            <div className="min-h-[240px] flex items-center justify-center">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                                    <div className="text-sm text-white-dark">Loading profile...</div>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSave} className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
                                <h6 className="text-lg font-bold mb-5">General Information</h6>
                                <div className="flex flex-col sm:flex-row">
                                    <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                                        <div className="relative group">
                                            <img 
                                                src={previewImage || user?.userImage || user?.profileImage || '/assets/images/profile-34.jpeg'} 
                                                alt="profile" 
                                                className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto transition-all duration-300 group-hover:opacity-80" 
                                            />
                                            <label className="absolute inset-0 flex items-center justify-center cursor-pointer group">
                                                <input
                                                    type="file"
                                                    name="userImage"
                                                    accept="image/*"
                                                    onChange={handleImageSelect}
                                                    className="hidden"
                                                    disabled={saving}
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="text-white text-center">
                                                        <IconCamera className="w-6 h-6 mx-auto mb-1" />
                                                        <span className="text-xs">Change Photo</span>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <p className="text-xs text-gray-500 text-center mt-2">
                                            {selectedImage ? 'New image selected' : 'Click to change photo'}
                                        </p>
                                    </div>
                                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name">Full Name</label>
                                            <input 
                                                id="name" 
                                                name="name" 
                                                type="text" 
                                                placeholder="Jimmy Turner" 
                                                className="form-input" 
                                                defaultValue={user?.name || user?.fullName || user?.firstName || ''}
                                                disabled={saving}
                                            />
                                        </div>
                                        {/* <div>
                                            <label htmlFor="profession">Profession</label>
                                            <input 
                                                id="profession" 
                                                name="profession" 
                                                type="text" 
                                                placeholder="Web Developer" 
                                                className="form-input" 
                                                defaultValue={user?.profession || ''}
                                                disabled={saving}
                                            />
                                        </div> */}
                                        {/* <div>
                                            <label htmlFor="country">Country</label>
                                            <select 
                                                name="country" 
                                                id="country" 
                                                className="form-select text-white-dark"
                                                defaultValue={user?.country || 'All Countries'}
                                                disabled={saving}
                                            >
                                                <option value="All Countries">All Countries</option>
                                                <option value="United States">United States</option>
                                                <option value="India">India</option>
                                                <option value="Japan">Japan</option>
                                                <option value="China">China</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Canada">Canada</option>
                                            </select>
                                        </div> */}
                                        {/* <div>
                                            <label htmlFor="address">Address</label>
                                            <input 
                                                id="address" 
                                                name="address" 
                                                type="text" 
                                                placeholder="Enter Address" 
                                                className="form-input" 
                                                defaultValue={user?.address || ''}
                                                disabled={saving}
                                            />
                                        </div> */}
                                       
                                        <div>
                                            <label htmlFor="phone">Phone</label>
                                            <input 
                                                id="phone" 
                                                name="phone" 
                                                type="tel" 
                                                placeholder="1234567890" 
                                                className="form-input" 
                                                defaultValue={user?.phoneNumber || user?.phone || user?.contactNumber || ''}
                                                maxLength={10}
                                                onChange={handlePhoneChange}
                                                pattern="[0-9]{10}"
                                                title="Phone number must be exactly 10 digits"
                                                disabled={saving}
                                            />
                                            <p className="text-xs text-gray-500 mt-1">Enter 10-digit phone number</p>
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <input 
                                                id="email" 
                                                name="email" 
                                                type="email" 
                                                placeholder="Jimmy@gmail.com" 
                                                className="form-input" 
                                                defaultValue={user?.email || user?.emailAddress || ''}
                                                disabled={saving}
                                            />
                                        </div>
                                        {/* <div>
                                            <label htmlFor="web">Website</label>
                                            <input 
                                                id="web" 
                                                name="web" 
                                                type="text" 
                                                placeholder="Enter URL" 
                                                className="form-input" 
                                                defaultValue={user?.Website || user?.web || ''}
                                                disabled={saving}
                                            />
                                        </div> */}

                                        <div className="sm:col-span-2 mt-3">
                                            <button 
                                                type="submit" 
                                                className="btn btn-primary"
                                                disabled={saving}
                                            >
                                                {saving ? 'Saving...' : 'Save'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default AccountSetting;