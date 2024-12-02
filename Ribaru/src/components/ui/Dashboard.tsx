import { typography } from '../../../theme/typography'
import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { label: 'Total Stock', value: '150' },
  { label: 'Low Stock', value: '12' },
  { label: 'Out of Stock', value: '5' },
  { label: 'Total Sales', value: '₹25,000' },
]

export function Dashboard() {
  return (
    <div className="p-6 max-w-xl mx-auto font-sans">
      {/* Header */}
      <div className="flex justify-between items-start mb-16">
        <img src="/ribaru-logo.svg" alt="Ribaru Logo" className="h-8" />
        <div className="bg-white p-2 rounded-full">
          <Bell className="w-6 h-6 text-ribaru-blue" />
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-display font-bold tracking-tight mb-2">Hey Kevin</h1>
          <p className="text-gray-500">Welcome Back</p>
        </div>
        <img 
          src="/avatar.jpg" 
          alt="Profile" 
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      {/* Stats Card */}
      <div className="bg-white rounded-2xl p-6">
        <div className="mb-8">
          <p className="text-gray-500 text-sm font-medium mb-1">TODAY'S SALES</p>
          <p className="text-4xl font-bold text-blue-600">KES 16,788</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">TOTAL SALES</p>
            <p className="text-2xl font-bold">KES 45,850</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">TOTAL ITEMS SOLD</p>
            <p className="text-2xl font-bold">150</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <Link 
        to="/sales/add" 
        className="block w-full bg-ribaru-blue text-white py-4 rounded-xl mb-4 text-center font-medium"
      >
        Add a Sale
      </Link>
      <Link 
        to="/stocks/add" 
        className="block w-full bg-gray-100 text-ribaru-blue py-4 rounded-xl text-center border-2 border-ribaru-blue font-medium"
      >
        Add Stock
      </Link>
    </div>
  )
}
