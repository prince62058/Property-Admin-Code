import { useState, useEffect } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { Coupon, CouponsService } from '../services/couponsService';
import IconX from './Icon/IconX';
import IconLoader from './Icon/IconLoader';

interface CouponFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    coupon?: Coupon | null; // For editing, null for adding
}

const CouponForm = ({ isOpen, onClose, onSuccess, coupon }: CouponFormProps) => {
    const [formData, setFormData] = useState({
        code: '',
        discountType: 'FLAT' as 'FLAT' | 'PERCENTAGE',
        discountValue: '',
        minOrderValue: '',
        maxDiscount: '',
        usageLimit: '',
        isActive: true
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (coupon) {
            // Editing mode - populate form with existing data
            setFormData({
                code: coupon.code,
                discountType: coupon.discountType,
                discountValue: coupon.discountValue.toString(),
                minOrderValue: coupon.minOrderValue.toString(),
                maxDiscount: coupon.maxDiscount ? coupon.maxDiscount.toString() : '',
                usageLimit: coupon.usageLimit ? coupon.usageLimit.toString() : '',
                isActive: coupon.isActive
            });
        } else {
            // Adding mode - reset form
            setFormData({
                code: '',
                discountType: 'FLAT',
                discountValue: '',
                minOrderValue: '',
                maxDiscount: '',
                usageLimit: '',
                isActive: true
            });
        }
        setError('');
    }, [coupon, isOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
                   type === 'number' ? (value === '' ? '' : Number(value)) : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const submitData = {
                ...formData,
                discountValue: Number(formData.discountValue) || 0,
                minOrderValue: Number(formData.minOrderValue) || 0,
                maxDiscount: formData.discountType === 'PERCENTAGE' && (formData.maxDiscount === '' || Number(formData.maxDiscount) === 0) ? undefined : Number(formData.maxDiscount) || undefined,
                usageLimit: formData.usageLimit === '' ? 0 : Number(formData.usageLimit) || 0
            };

            if (coupon) {
                // Update existing coupon
                await CouponsService.updateCoupon(coupon._id, submitData);
            } else {
                // Create new coupon
                await CouponsService.createCoupon(submitData);
            }

            onSuccess();
            onClose();
        } catch (error: any) {
            setError(error.message || 'Failed to save coupon');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" open={isOpen} onClose={onClose} className="relative z-50">
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-lg transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {coupon ? 'Edit Coupon' : 'Add New Coupon'}
                                    </h3>
                                    <button
                                        type="button"
                                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                        onClick={onClose}
                                    >
                                        <IconX className="w-5 h-5" />
                                    </button>
                                </div>

                                {error && (
                                    <div className="alert alert-danger mb-4">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Coupon Code *
                                        </label>
                                        <input
                                            type="text"
                                            name="code"
                                            value={formData.code}
                                            onChange={handleInputChange}
                                            className="form-input w-full"
                                            placeholder="Enter coupon code"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Discount Type *
                                        </label>
                                        <select
                                            name="discountType"
                                            value={formData.discountType}
                                            onChange={handleInputChange}
                                            className="form-select w-full"
                                            required
                                        >
                                            <option value="FLAT">Flat Amount</option>
                                            <option value="PERCENTAGE">Percentage</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Discount Value *
                                        </label>
                                        <input
                                            type="number"
                                            name="discountValue"
                                            value={formData.discountValue}
                                            onChange={handleInputChange}
                                            className="form-input w-full"
                                            placeholder={formData.discountType === 'FLAT' ? 'Enter amount' : 'Enter percentage'}
                                            min="0"
                                            onWheel={(e) => e.currentTarget.blur()}
                                            required
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                            {formData.discountType === 'FLAT' ? 'Amount in INR' : 'Percentage (0-100)'}
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Minimum Order Value *
                                        </label>
                                        <input
                                            type="number"
                                            name="minOrderValue"
                                            value={formData.minOrderValue}
                                            onChange={handleInputChange}
                                            className="form-input w-full"
                                            placeholder="Enter minimum order value"
                                            min="0"
                                            onWheel={(e) => e.currentTarget.blur()}
                                            required
                                        />
                                    </div>

                                    {formData.discountType === 'PERCENTAGE' && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Maximum Discount
                                            </label>
                                            <input
                                                type="number"
                                                name="maxDiscount"
                                                value={formData.maxDiscount}
                                                onChange={handleInputChange}
                                                className="form-input w-full"
                                                placeholder="Enter maximum discount amount"
                                                min="0"
                                                onWheel={(e) => e.currentTarget.blur()}
                                            />
                                            <p className="text-xs text-gray-500 mt-1">Leave empty for no maximum limit</p>
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Usage Limit
                                        </label>
                                        <input
                                            type="number"
                                            name="usageLimit"
                                            value={formData.usageLimit}
                                            onChange={handleInputChange}
                                            className="form-input w-full"
                                            placeholder="Enter usage limit"
                                            min="1"
                                            onWheel={(e) => e.currentTarget.blur()}
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Leave empty for unlimited usage</p>
                                    </div>

                                    <div className="flex justify-end gap-3 pt-4">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={onClose}
                                            disabled={loading}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <IconLoader className="w-4 h-4 animate-spin mr-2" />
                                                    {coupon ? 'Updating...' : 'Creating...'}
                                                </>
                                            ) : (
                                                coupon ? 'Update Coupon' : 'Create Coupon'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default CouponForm;
