import { useState, useEffect } from 'react';
import IconBell from '../components/Icon/IconBell';
import IconPlus from '../components/Icon/IconPlus';
import IconX from '../components/Icon/IconX';
import IconSend from '../components/Icon/IconSend';
import IconUser from '../components/Icon/IconUser';
import IconBuilding from '../components/Icon/IconArchive';
import IconChecks from '../components/Icon/IconChecks';
import IconLoader from '../components/Icon/IconLoader';
import { BASE_URL } from '../config';

interface User {
  _id: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  disable?: boolean;
}

interface Property {
  _id: string;
  title?: string;
  location?: string;
  propertyType?: string;
  listingType?: string;
  sold?: boolean;
}

interface NotificationFormData {
  title: string;
  message: string;
  pType: 'NOTIFICATION' | 'MESSAGE';
  subType: 'REVIEW' | 'SLOD' | 'OTHER';
  userId: string;
  propertyId: string;
  sendToAll: boolean;
}

interface SentNotification {
  _id: string;
  userId: string;
  title: string;
  message: string;
  pType: string;
  subType: string;
  propertyId?: string;
  isRead: boolean;
  createdAt: string;
}

const SendNotification = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [sentNotifications, setSentNotifications] = useState<SentNotification[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [propertiesLoading, setPropertiesLoading] = useState(false);

  const [formData, setFormData] = useState<NotificationFormData>({
    title: '',
    message: '',
    pType: 'NOTIFICATION',
    subType: 'REVIEW',
    userId: '',
    propertyId: '',
    sendToAll: false,
  });

  useEffect(() => {
    fetchUsers();
    fetchProperties();
  }, []);

  const fetchUsers = async () => {
    setUsersLoading(true);
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const response = await fetch(`${BASE_URL}/getAllUser?page=1&limit=100`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success && Array.isArray(data.data)) {
          setUsers(data.data.filter((user: User) => !user.disable));
        }
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setUsersLoading(false);
    }
  };

  const fetchProperties = async () => {
    setPropertiesLoading(true);
    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      const response = await fetch(`${BASE_URL}/getAllProperties?page=1&limit=100&sort=recent,most-view,low-to-high`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success && Array.isArray(data.data)) {
          setProperties(data.data.filter((property: Property) => !property.sold));
        }
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setPropertiesLoading(false);
    }
  };

  

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      
      // Remove manual ID validation since we're using dropdowns
      if (!formData.sendToAll && !formData.userId) {
        setError('Please select a user or check "Send To All Users"');
        setLoading(false);
        return;
      }
      
      if (!formData.propertyId) {
        setError('Please select a property');
        setLoading(false);
        return;
      }
      
      const payload = {
        title: formData.title,
        message: formData.message,
        pType: formData.pType,
        subType: formData.subType,
        userId: formData.userId,
        propertyId: formData.propertyId,
        sendToAll: formData.sendToAll,
      };

      const response = await fetch(`${BASE_URL}/sendNotification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(`Notification sent successfully to ${data.data.sentCount} user(s)`);
        setSentNotifications(prev => [...data.data.notifications, ...prev]);
        // Reset form
        setFormData({
          title: '',
          message: '',
          pType: 'NOTIFICATION',
          subType: 'REVIEW',
          userId: '',
          propertyId: '',
          sendToAll: false,
        });
        setShowModal(false);
      } else {
        setError(data.message || 'Failed to send notification');
      }
    } catch (error) {
      setError('Error sending notification');
    } finally {
      setLoading(false);
    }
  };

  const getTypeColor = (pType: string) => {
    switch (pType) {
      case 'NOTIFICATION':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'ALERT':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'UPDATE':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getSubTypeColor = (subType: string) => {
    switch (subType) {
      case 'REVIEW':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'URGENT':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'INFO':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'PROMOTION':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-GB');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <IconBell className="w-5 h-5 mr-2 text-primary" />
          <h1 className="text-2xl font-semibold">Send Notifications</h1>
        </div>
        
      </div>

      {/* Success/Error Messages */}
      {success && (
        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <div className="flex items-center">
            <IconChecks className="w-5 h-5 mr-2" />
            {success}
          </div>
        </div>
      )}

      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <div className="flex items-center">
            <IconX className="w-5 h-5 mr-2" />
            {error}
          </div>
        </div>
      )}

      {/* Send Notification Form */}
      <div className="panel">
        <div className="mb-5">
          <h5 className="font-semibold text-lg dark:text-white-light mb-4">Send New Notification</h5>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Notification Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="form-input w-full"
                placeholder="Enter notification title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="form-textarea w-full"
                placeholder="Enter notification message"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Type</label>
                <select
                  name="pType"
                  value={formData.pType}
                  onChange={handleInputChange}
                  className="form-select w-full"
                >
                  <option value="NOTIFICATION">Notification</option>
                  <option value="MESSAGE">Message</option>
                 
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Sub Type</label>
                <select
                  name="subType"
                  value={formData.subType}
                  onChange={handleInputChange}
                  className="form-select w-full"
                >
                  <option value="REVIEW">Review</option>
                  <option value="SLOD">Slot</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Select User *</label>
              <div className="relative">
                {usersLoading ? (
                  <div className="flex items-center justify-center p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800">
                    <IconLoader className="animate-spin w-5 h-5 text-primary" />
                    <span className="ml-2 text-sm">Loading users...</span>
                  </div>
                ) : (
                  <select
                    name="userId"
                    value={formData.userId}
                    onChange={handleInputChange}
                    disabled={formData.sendToAll}
                    className="form-select w-full"
                    required={!formData.sendToAll}
                  >
                    <option value="">Select a user</option>
                    {users.map((user) => (
                      <option key={user._id} value={user._id}>
                        {user.name || 'Unknown User'} - {user.email || user.phoneNumber || 'No contact info'}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              {users.length === 0 && !usersLoading && (
                <p className="text-xs text-gray-500 mt-1">No active users found</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Select Property *</label>
              <div className="relative">
                {propertiesLoading ? (
                  <div className="flex items-center justify-center p-3 border border-gray-300 rounded-md bg-white dark:bg-gray-800">
                    <IconLoader className="animate-spin w-5 h-5 text-primary" />
                    <span className="ml-2 text-sm">Loading properties...</span>
                  </div>
                ) : (
                  <select
                    name="propertyId"
                    value={formData.propertyId}
                    onChange={handleInputChange}
                    className="form-select w-full"
                    required
                  >
                    <option value="">Select a property</option>
                    {properties.map((property) => (
                      <option key={property._id} value={property._id}>
                        {property.title || 'Untitled Property'} - {property.location || 'No location'} ({property.propertyType || 'Unknown Type'})
                      </option>
                    ))}
                  </select>
                )}
              </div>
              {properties.length === 0 && !propertiesLoading && (
                <p className="text-xs text-gray-500 mt-1">No available properties found</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Send To All Users</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="sendToAll"
                  checked={formData.sendToAll}
                  onChange={handleInputChange}
                  className="form-checkbox mr-2"
                />
                <label className="text-sm">Send to all users (overrides specific user ID)</label>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary flex items-center gap-2 flex-1"
              >
                <IconSend className="w-4 h-4" />
                {loading ? 'Sending...' : 'Send Notification'}
              </button>
            </div>
          </form>
        </div>
      </div>

     
    </div>
  );
};

export default SendNotification;
