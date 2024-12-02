import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '../src/components/Avatar';
import { Link } from 'react-router-dom';

export function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="container overflow-auto p-4">
      <div className="header mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Hey Kevin</h1>
          <p className="text-gray-600">Welcome Back</p>
        </div>
        <Link to="/profile" className="block">
          <Avatar />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-2xl font-bold">150</p>
          <p className="text-sm text-gray-600">TOTAL STOCK</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-gray-600">LOW STOCK</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-2xl font-bold">5</p>
          <p className="text-sm text-gray-600">OUT STOCK</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-2xl font-bold">30</p>
          <p className="text-sm text-gray-600">CUSTOMERS</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <button
          onClick={() => navigate('/add-sale')}
          className="btn-primary"
        >
          Add Sale
        </button>
        <button
          onClick={() => navigate('/add-stock')}
          className="btn-secondary"
        >
          Add Stock
        </button>
      </div>
    </div>
  );
}
