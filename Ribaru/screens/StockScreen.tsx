import React from 'react';
import { useNavigate } from 'react-router-dom';

export function StockScreen() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <div className="space-y-4">
        <button
          onClick={() => navigate('/add-stock')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Stock
        </button>
        
        <button
          onClick={() => navigate('/search-barcode')}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Search with Barcode
        </button>
      </div>
    </div>
  );
}
