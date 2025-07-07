export interface Product {
  id: string;
  name: string;
  sku: string;
  description?: string;
  price: number;
  quantity: number;
  variants?: ProductVariant[];
  category?: string;
  vendor?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: string;
  size?: string;
  color?: string;
  weight?: string;
  price: number;
  quantity: number;
  sku: string;
}

export interface Sale {
  id: string;
  items: SaleItem[];
  total: number;
  customerId?: string;
  paymentMethod?: string;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface SaleItem {
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Customer {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  address?: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'staff';
  createdAt: string;
}