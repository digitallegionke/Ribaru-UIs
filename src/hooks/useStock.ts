import { useState, useCallback } from 'react';
import { Product } from '../types';

export function useStock() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const addProduct = useCallback(async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    setLoading(true);
    try {
      const newProduct: Product = {
        ...productData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setProducts(prev => [newProduct, ...prev]);
      return newProduct;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProduct = useCallback(async (id: string, updates: Partial<Product>) => {
    setLoading(true);
    try {
      setProducts(prev =>
        prev.map(product =>
          product.id === id
            ? { ...product, ...updates, updatedAt: new Date().toISOString() }
            : product
        )
      );
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const getProducts = useCallback(async () => {
    setLoading(true);
    try {
      // Mock API call - replace with actual API
      const mockProducts: Product[] = [
        {
          id: '1',
          name: 'Indian style curry paste',
          sku: 'CURRY001',
          price: 1500,
          quantity: 45,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '2',
          name: 'Granola',
          sku: 'GRAN001',
          price: 850,
          quantity: 32,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
      setProducts(mockProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    products,
    loading,
    addProduct,
    updateProduct,
    getProducts,
  };
}