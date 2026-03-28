import { useState, useEffect } from 'react';
import IconBell from '../components/Icon/IconBell';
import IconX from '../components/Icon/IconX';
import IconChecks from '../components/Icon/IconChecks';
import IconClock from '../components/Icon/IconClock';
import IconInfoCircle from '../components/Icon/IconInfoCircle';

interface Notification {
  _id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: string;
  priority: 'low' | 'medium' | 'high';
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    setLoading(true);
    setError(null);
    try {
      // Mock data for now - replace with actual API call
      const mockNotifications: Notification[] = [
        {
          _id: '1',
          title: 'New Property Listed',
          message: 'A new luxury apartment has been listed in Jaipur. Check it out now!',
          type: 'success',
          isRead: false,
          createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
          priority: 'high'
        },
        {
          _id: '2',
          title: 'Payment Received',
          message: 'You have received a payment of ₹50,000 for property listing.',
          type: 'success',
          isRead: false,
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
          priority: 'medium'
        },
        {
          _id: '3',
          title: 'System Maintenance',
          message: 'Scheduled maintenance will occur tonight from 2 AM to 4 AM.',
          type: 'warning',
          isRead: true,
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
          priority: 'medium'
        },
        {
          _id: '4',
          title: 'New User Registration',
          message: 'A new user has registered on the platform.',
          type: 'info',
          isRead: true,
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
          priority: 'low'
        },
        {
          _id: '5',
          title: 'Property Approval Required',
          message: '3 properties are pending your approval.',
          type: 'warning',
          isRead: false,
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
          priority: 'high'
        }
      ];

      // Sort by creation date (newest first)
      const sortedNotifications = mockNotifications.sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setNotifications(sortedNotifications);
    } catch (error) {
      setError('Error fetching notifications');
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      setNotifications(prev =>
        prev.map(notification =>
          notification._id === notificationId
            ? { ...notification, isRead: true }
            : notification
        )
      );
    } catch (error) {
      setError('Error marking notification as read');
    }
  };

  const markAllAsRead = async () => {
    try {
      setNotifications(prev =>
        prev.map(notification => ({ ...notification, isRead: true }))
      );
    } catch (error) {
      setError('Error marking all notifications as read');
    }
  };

  const deleteNotification = async (notificationId: string) => {
    try {
      setNotifications(prev =>
        prev.filter(notification => notification._id !== notificationId)
      );
      if (selectedNotification?._id === notificationId) {
        setSelectedNotification(null);
      }
    } catch (error) {
      setError('Error deleting notification');
    }
  };

  const clearAllNotifications = async () => {
    try {
      setNotifications([]);
      setSelectedNotification(null);
    } catch (error) {
      setError('Error clearing notifications');
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <IconChecks className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <IconX className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <IconX className="w-5 h-5 text-red-500" />;
      default:
        return <IconInfoCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  const getNotificationBgColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
    }
  };

  const getPriorityBadgeColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInMins = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMins / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMins < 60) {
      return `${diffInMins} min${diffInMins > 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.isRead;
    if (filter === 'read') return notification.isRead;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <IconBell className="w-5 h-5 mr-2 text-primary" />
          <h1 className="text-2xl font-semibold">Notifications</h1>
          {unreadCount > 0 && (
            <span className="ml-3 px-2 py-1 text-xs font-medium bg-primary text-white rounded-full">
              {unreadCount} new
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="btn btn-outline-primary btn-sm"
            >
              Mark All as Read
            </button>
          )}
          {notifications.length > 0 && (
            <button
              onClick={clearAllNotifications}
              className="btn btn-outline-danger btn-sm"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notifications List */}
        <div className="lg:col-span-2">
          <div className="panel">
            <div className="mb-5">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-semibold text-lg dark:text-white-light">All Notifications</h5>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${filter === 'all'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                  >
                    All ({notifications.length})
                  </button>
                  <button
                    onClick={() => setFilter('unread')}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${filter === 'unread'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                  >
                    Unread ({unreadCount})
                  </button>
                  <button
                    onClick={() => setFilter('read')}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${filter === 'read'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                  >
                    Read ({notifications.length - unreadCount})
                  </button>
                </div>
              </div>

              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                </div>
              ) : error ? (
                <div className="text-red-500 text-center py-8">{error}</div>
              ) : filteredNotifications.length === 0 ? (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <IconBell className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No notifications found</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredNotifications.map((notification) => (
                    <div
                      key={notification._id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${!notification.isRead
                          ? getNotificationBgColor(notification.type) + ' border-l-4'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                        } ${selectedNotification?._id === notification._id ? 'ring-2 ring-primary' : ''}`}
                      onClick={() => {
                        setSelectedNotification(notification);
                        if (!notification.isRead) {
                          markAsRead(notification._id);
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="mt-1">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h6 className={`font-semibold ${!notification.isRead ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                {notification.title}
                              </h6>
                              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getPriorityBadgeColor(notification.priority)}`}>
                                {notification.priority}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {notification.message}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                              <IconClock className="w-3 h-3" />
                              {formatTimeAgo(notification.createdAt)}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNotification(notification._id);
                          }}
                          className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <IconX className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Notification Details */}
        <div className="lg:col-span-1">
          <div className="panel">
            <h5 className="font-semibold text-lg dark:text-white-light mb-4">Details</h5>

            {selectedNotification ? (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg border ${getNotificationBgColor(selectedNotification.type)}`}>
                  <div className="flex items-center gap-2 mb-3">
                    {getNotificationIcon(selectedNotification.type)}
                    <h6 className="font-semibold">{selectedNotification.title}</h6>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {selectedNotification.message}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className={`px-2 py-1 font-medium rounded-full ${getPriorityBadgeColor(selectedNotification.priority)}`}>
                      {selectedNotification.priority} priority
                    </span>
                    <span className="text-gray-500 dark:text-gray-500">
                      {new Date(selectedNotification.createdAt).toLocaleDateString('en-GB')} at{' '}
                      {new Date(selectedNotification.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h6 className="font-medium text-sm">Actions</h6>
                  <div className="space-y-2">
                    {!selectedNotification.isRead && (
                      <button
                        onClick={() => markAsRead(selectedNotification._id)}
                        className="w-full btn btn-outline-primary btn-sm"
                      >
                        Mark as Read
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(selectedNotification._id)}
                      className="w-full btn btn-outline-danger btn-sm"
                    >
                      Delete Notification
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <IconInfoCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Select a notification to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
