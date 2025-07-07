import { useState, useCallback } from 'react';
import { Sale, SaleItem } from '../types';

export function useSales() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(false);

  const addSale = useCallback(async (saleData: Omit<Sale, 'id' | 'createdAt'>) => {
    setLoading(true);
    try {
      const newSale: Sale = {
        ...saleData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      setSales(prev => [newSale, ...prev]);
      return newSale;
    } catch (error) {
      console.error('Error adding sale:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const getSales = useCallback(async () => {
    setLoading(true);
    try {
      // Mock API call - replace with actual API
      const mockSales: Sale[] = [
        {
          id: '1',
          items: [
            {
              productId: '1',
              quantity: 2,
              price: 1500,
              total: 3000,
            },
          ],
          total: 3000,
          status: 'completed',
          createdAt: new Date().toISOString(),
        },
      ];
      setSales(mockSales);
    } catch (error) {
      console.error('Error fetching sales:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    sales,
    loading,
    addSale,
    getSales,
  };
}