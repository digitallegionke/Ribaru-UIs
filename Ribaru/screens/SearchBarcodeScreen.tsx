import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SearchBarcodeScreen() {
  const navigate = useNavigate();
  const [barcode, setBarcode] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your barcode search logic here
    console.log('Searching barcode:', barcode);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label htmlFor="barcode" className="block text-xl font-medium text-gray-900 mb-2">
            Enter Barcode
          </label>
          <input
            type="text"
            id="barcode"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
            className="w-full px-6 py-4 text-xl border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#0000FF] focus:border-[#0000FF]"
            placeholder="Scan or type barcode"
            required
          />
        </div>

        <button type="submit" className="btn-primary">
          Search
        </button>

        <button
          type="button"
          onClick={() => navigate('/stock')}
          className="btn-secondary"
        >
          Back
        </button>
      </form>
    </div>
  );
}
