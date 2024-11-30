import { ArrowLeft, Search, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SearchInput } from '../components/ui/SearchInput'
import { useState } from 'react'

const stockItems = [
  {
    name: 'Indian style curry paste',
    quantity: 45,
    status: 'IN STOCK'
  },
  {
    name: 'Granola',
    quantity: 0,
    status: 'OUT OF STOCK'
  },
  {
    name: 'Trail Mix',
    quantity: 23,
    status: 'LOW STOCK'
  }
]

export function StockPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="p-6 pb-32">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Stock</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 mb-6">
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">TOTAL ITEMS</p>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-3xl font-bold mt-2">150</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">LOW STOCK ITEMS</p>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>

          <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">OUT OF STOCK</p>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-3xl font-bold mt-2">5</p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <SearchInput
          label="Search Items"
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by name..."
        />
      </div>

      {/* Stock List */}
      <div className="grid gap-4">
        {stockItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{item.name}</h3>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Quantity: {item.quantity}</p>
              <span className={`text-sm ${
                item.status === 'IN STOCK' ? 'text-green-500' :
                item.status === 'LOW STOCK' ? 'text-yellow-500' :
                'text-red-500'
              }`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
