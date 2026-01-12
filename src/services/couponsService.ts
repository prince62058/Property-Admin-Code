export interface Coupon {
  _id: string;
  code: string;
  discountType: 'FLAT' | 'PERCENTAGE';
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
  usageLimit: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CouponsResponse {
  success: boolean;
  data: Coupon[];
}

import { BASE_URL } from '../config';

export class CouponsService {

  static async getCoupons(): Promise<CouponsResponse> {
    try {
      const token = localStorage.getItem('token') || localStorage.getItem('accessToken') || '';
      console.log('CouponsService - Token:', token);
      console.log('CouponsService - API URL:', `${BASE_URL}/coupon`);
      
      const response = await fetch(`${BASE_URL}/coupon`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      
      console.log('CouponsService - Response status:', response.status);
      console.log('CouponsService - Response headers:', response.headers);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.log('CouponsService - Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: CouponsResponse = await response.json();
      console.log('CouponsService - Parsed data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching coupons:', error);
      throw error;
    }
  }

  static async createCoupon(couponData: Omit<Coupon, '_id' | 'createdAt' | 'updatedAt' | '__v'>): Promise<Coupon> {
    try {
      const token = localStorage.getItem('token') || localStorage.getItem('accessToken') || '';
      
      const response = await fetch(`${BASE_URL}/coupon`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(couponData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error creating coupon:', error);
      throw error;
    }
  }

  static async updateCoupon(id: string, couponData: Partial<Coupon>): Promise<Coupon> {
    try {
      const token = localStorage.getItem('token') || localStorage.getItem('accessToken') || '';
      
      const response = await fetch(`${BASE_URL}/coupon/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(couponData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error updating coupon:', error);
      throw error;
    }
  }

  static async deleteCoupon(id: string): Promise<void> {
    try {
      const token = localStorage.getItem('token') || localStorage.getItem('accessToken') || '';
      
      const response = await fetch(`${BASE_URL}/coupon/${id}`, {
        method: 'DELETE',
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting coupon:', error);
      throw error;
    }
  }

  static async getCouponById(id: string): Promise<Coupon> {
    try {
      const token = localStorage.getItem('token') || localStorage.getItem('accessToken') || '';
      
      const response = await fetch(`${BASE_URL}/coupon/${id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching coupon:', error);
      throw error;
    }
  }
}
