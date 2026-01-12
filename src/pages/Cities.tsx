import { useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import IconMapPin from '../components/Icon/IconMapPin';
import IconPlus from '../components/Icon/IconPlus';
import IconX from '../components/Icon/IconX';
import IconEdit from '../components/Icon/IconEdit';
import Swal from 'sweetalert2';
import { BASE_URL } from '../config';

interface City {
  _id: string;
  name: string;
  slug: string;
  state?: string;
  country?: string;
  pincode: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  lat?: number;
  lng?: number;
}

interface CreateCityData {
  name: string;
  slug: string;
  lat?: number;
  lng?: number;
  pincode: string;
  state:string,
  country:string,
  isActive: boolean;
}



const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2500,
  showCloseButton: true,
});

const Cities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [editingCity, setEditingCity] = useState<City | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState<CreateCityData>({
    name: '',
    slug: '',
    lat: undefined,
    lng: undefined,
    pincode: '',
    state:'',
    country:'',
    isActive: true
  });

  useEffect(() => {
    fetchCities();
  }, [page, limit]);

  const fetchCities = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = new URL(`${BASE_URL}/city`);
      url.searchParams.set('page', String(page));
      url.searchParams.set('limit', String(limit));

      const response = await fetch(url.toString());
      const data = await response.json();
      if (data.success) {
        // Support both shapes: { data: { cities, pagination } } and { cities, pagination }
        const citiesArr: City[] = (data.data && data.data.cities) || data.cities || [];
        const pagination = (data.data && data.data.pagination) || data.pagination || null;

        // Sort by createdAt descending if present
        const sortedCities = Array.isArray(citiesArr)
          ? citiesArr.sort((a: City, b: City) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          : [];

        setCities(sortedCities);
        setTotalPages(pagination?.totalPages || 1);
      } else {
        setError('Failed to fetch cities');
      }
    } catch (error) {
      setError('Error fetching cities');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCity = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreateLoading(true);
    setCreateError(null);
    
    try {
      const url = isEditMode 
        ? `${BASE_URL}/city/${editingCity?._id}`
        : `${BASE_URL}/city`;
      
      const method = isEditMode ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.fire({ 
          icon: 'success', 
          title: isEditMode ? 'City updated successfully' : 'City created successfully' 
        });
        setShowCreateModal(false);
        setIsEditMode(false);
        setEditingCity(null);
        setFormData({
          name: '',
          slug: '',
          lat: undefined,
          lng: undefined,
          pincode: '',
          state:'',
          country:'',
          isActive: true
        });
        fetchCities(); // Refresh the cities list
      } else {
        setCreateError(data.message || `Failed to ${isEditMode ? 'update' : 'create'} city`);
      }
    } catch (error) {
      setCreateError(`Error ${isEditMode ? 'updating' : 'creating'} city`);
    } finally {
      setCreateLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              name === 'lat' || name === 'lng' ? (value ? parseFloat(value) : undefined) : value
    }));
  };

  const handleEditCity = (city: City) => {
    setEditingCity(city);
    setIsEditMode(true);
    setFormData({
      name: city.name,
      slug: city.slug,
      lat: city.lat,
      lng: city.lng,
      pincode: city.pincode,
      isActive: city.isActive,
      state: city.state || '',
      country: city.country || ''
    });
    setShowCreateModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateModal(false);
    setIsEditMode(false);
    setEditingCity(null);
    setCreateError(null);
    setFormData({
      name: '',
      slug: '',
      lat: undefined,
      lng: undefined,
      pincode: '',
      state:'',
      country:'',
      isActive: true
    });
  };

  const handleToggleCityStatus = async (city: City) => {
    const nextStatus = !city.isActive;
    
    // Optimistic update
    setCities(cities.map(c => 
      c._id === city._id ? { ...c, isActive: nextStatus } : c
    ));
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${BASE_URL}/city/${city._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
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
        throw new Error(`Failed to update city status (${response.status})${suffix}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        // Show success toast message
        toast.fire({ 
          icon: 'success', 
          title: nextStatus ? 'City enabled successfully' : 'City disabled successfully' 
        });
      } else {
        throw new Error(data.message || 'Failed to update city status');
      }
    } catch (error) {
      // Revert optimistic update on error
      setCities(cities.map(c => 
        c._id === city._id ? { ...c, isActive: city.isActive } : c
      ));
      
      // Show error toast message
      toast.fire({ 
        icon: 'error', 
        title: (error as Error)?.message || 'Failed to update city status' 
      });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <IconMapPin className="w-5 h-5 mr-2 text-primary" />
          <h1 className="text-2xl font-semibold">Cities</h1>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="btn btn-primary flex items-center gap-2"
        >
          <IconPlus className="w-4 h-4" />
          Create City
        </button>
      </div>

      <div className="panel">
        <div className="mb-5">
          <h5 className="font-semibold text-lg dark:text-white-light mb-3">City List</h5>
          
          {loading ? (
          
                                        <div className="flex justify-center items-center">
                                            <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                                        </div>
                                  
          ) : error ? (
            <div className="text-red-500 text-center py-8">{error}</div>
          ) : (
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Pincode</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cities.map((city) => (
                    <tr key={city._id}>
                      <td>
                        <div className="flex items-center">
                          <div className="font-semibold">{city.name}</div>
                        </div>
                      </td>
                      <td>{city.state || 'N/A'}</td>
                      <td>{city.country || 'N/A'}</td>
                      <td>{city.pincode}</td>
                      <td>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={city.isActive}
                            onChange={() => handleToggleCityStatus(city)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-red-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                      </td>
                      <td>{new Date(city.createdAt).toLocaleDateString('en-GB')}</td>
                      <td>
                        <button
                          onClick={() => handleEditCity(city)}
                          className="btn btn-sm btn-outline-primary flex items-center gap-1"
                        >
                          <IconEdit className="w-4 h-4" />
                      
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 mt-5">
        <button
          type="button"
          className="btn btn-outline-primary"
          disabled={page <= 1 || loading}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Prev
        </button>
        <div className="text-white-dark text-sm">
          Page {page} of {totalPages}
        </div>
        <button
          type="button"
          className="btn btn-outline-primary"
          disabled={page >= totalPages || loading}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        >
          Next
        </button>
      </div>

      {/* Create City Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{isEditMode ? 'Edit City' : 'Create New City'}</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCity} className="space-y-4">
              {createError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded">
                  {createError}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-1">City Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full"
                  placeholder="Enter city name"
                />
              </div>
                  <div>
                <label className="block text-sm font-medium mb-1">State Name *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full"
                  placeholder="Enter city name"
                />
              </div>
    <div>
                <label className="block text-sm font-medium mb-1">Country Name *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full"
                  placeholder="Enter city name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug *</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full"
                  placeholder="Enter city slug"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Latitude</label>
                  <input
                    type="number"
                    step="any"
                    name="lat"
                    value={formData.lat || ''}
                    onChange={handleInputChange}
                    className="form-input w-full"
                    placeholder="26.92"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Longitude</label>
                  <input
                    type="number"
                    step="any"
                    name="lng"
                    value={formData.lng || ''}
                    onChange={handleInputChange}
                    className="form-input w-full"
                    placeholder="75.82"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                  className="form-input w-full"
                  placeholder="Enter pincode"
                />
              </div>

            
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="btn btn-outline-secondary flex-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={createLoading}
                  className="btn btn-primary flex-1"
                >
                  {createLoading ? (isEditMode ? 'Updating...' : 'Creating...') : (isEditMode ? 'Update City' : 'Create City')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cities;
