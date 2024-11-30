import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronRight, Plus, Search, Trash2, UserCog } from 'lucide-react'
import { User, UserRole } from '../types/user'
import { SearchInput } from '../components/ui/SearchInput'

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Mwangi',
    phone: '+254712345678',
    role: 'ADMIN',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Ann Naliaka',
    phone: '+254723456789',
    role: 'ADMIN',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Mary Atieno',
    phone: '+254734567890',
    role: 'SALES_REP',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Agnes Akinyi',
    phone: '+254745678901',
    role: 'SALES_REP',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export function Users() {
  const [users] = useState<User[]>(mockUsers)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.includes(searchQuery)
  )

  const getRoleBadgeStyle = (role: UserRole) => {
    return role === 'ADMIN' 
      ? 'bg-ribaru-blue text-white' 
      : 'bg-[#F8F9FC] text-ribaru-blue'
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/settings" className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex justify-between items-center flex-1">
            <h1 className="text-2xl font-bold">User Management</h1>
            <Link
              to="/users/add"
              className="inline-flex items-center gap-2 bg-ribaru-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Add User</span>
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search users..."
          />
        </div>

        {/* Users List */}
        <div className="space-y-4">
          {filteredUsers.map(user => (
            <div
              key={user.id}
              className="bg-white rounded-xl p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="font-mono text-lg">{user.name}</h3>
                <p className="text-gray-500 font-mono">{user.phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm font-mono ${getRoleBadgeStyle(user.role)}`}>
                  {user.role === 'ADMIN' ? 'ADMIN' : 'SALES REP'}
                </span>
                <Link to={`/users/${user.id}`}>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
