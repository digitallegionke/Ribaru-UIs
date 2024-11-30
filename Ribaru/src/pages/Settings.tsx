import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const settingsGroups = [
  {
    title: 'Account Setting',
    items: [
      {
        label: 'Profile Settings',
        path: '/settings/profile'
      },
      {
        label: 'Account Settings',
        path: '/settings/account'
      }
    ]
  },
  {
    title: 'Business Setting',
    items: [
      {
        label: 'User Management',
        path: '/users'
      },
      {
        label: 'Business Profile',
        path: '/settings/business'
      },
      {
        label: 'POS Setup',
        path: '/settings/pos'
      }
    ]
  }
]

export function SettingsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-8">Settings</h1>

      {/* Settings Groups */}
      <div className="space-y-8">
        {settingsGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-medium bg-gray-100 p-4 rounded-t-xl">
              {group.title}
            </h2>
            <div className="bg-white rounded-b-xl">
              {group.items.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between p-4 ${
                    index !== group.items.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <span className="text-gray-600">{item.label}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
