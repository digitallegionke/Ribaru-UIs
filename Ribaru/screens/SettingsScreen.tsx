import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SettingsScreen() {
  const settingsOptions = [
    { title: 'Profile Settings', path: '/settings/profile' },
    { title: 'Account Settings', path: '/settings/account' },
    { title: 'User Management', path: '/users' },
    { title: 'Business Profile', path: '/settings/business' },
    { title: 'POS Setup', path: '/settings/pos' },
  ];

  return (
    <div className="p-6 pb-32 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>
      <div className="space-y-2">
        {settingsOptions.map((option, index) => (
          <Link
            key={index}
            to={option.path}
            className="flex items-center justify-between p-4 bg-white rounded-xl hover:bg-gray-50"
          >
            <span className="font-medium">{option.title}</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        ))}
      </div>
      <button
        type="submit"
        className="btn-primary"
      >
        Save Changes
      </button>
    </div>
  );
}
