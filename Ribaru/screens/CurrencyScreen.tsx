import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Currency {
  code: string;
  name: string;
}

const currencies: Currency[] = [
  { code: 'KES', name: 'Kenyan Shilling' },
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
];

export function CurrencyScreen() {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <h1 className="text-2xl font-medium mb-8">Currency</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl mb-4">Select Currency</h2>
        
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-4 text-xl bg-[#F8F9FE] rounded-2xl flex items-center justify-between"
          >
            <span>{selectedCurrency.code} - {selectedCurrency.name}</span>
            <ChevronDownIcon className="w-6 h-6" />
          </button>
          
          {isOpen && (
            <div className="absolute w-full mt-2 bg-white rounded-2xl shadow-lg overflow-hidden">
              {currencies.map((currency) => (
                <button
                  key={currency.code}
                  onClick={() => {
                    setSelectedCurrency(currency);
                    setIsOpen(false);
                  }}
                  className="w-full px-6 py-4 text-left hover:bg-[#F8F9FE] transition-colors"
                >
                  {currency.code} - {currency.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
