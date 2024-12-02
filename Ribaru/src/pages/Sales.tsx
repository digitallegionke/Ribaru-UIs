import { ArrowLeft, Search, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SearchInput } from '../components/ui/SearchInput'

const recentSales = [
  {
    id: '1',
    product: 'Trail Mix',
    quantity: 3,
    total: 'KES 4,500',
    date: '2024-01-20'
  },
  {
    id: '2',
    product: 'Indian style curry paste',
    quantity: 2,
    total: 'KES 3,000',
    date: '2024-01-19'
  },
  {
    id: '3',
    product: 'Granola',
    quantity: 4,
    total: 'KES 6,000',
    date: '2024-01-18'
  }
]

export function SalesPage() {
  return (
    <div className="relative min-h-screen p-6 pb-32">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Sales</h1>
        </div>
      </div>

      {/* Stats Card */}
      <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
        <div className="mb-6">
          <p className="text-gray-500 text-sm mb-1">TODAY'S SALES</p>
          <p className="text-4xl font-bold text-ribaru-blue">KES 16,788</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm mb-1">TOTAL SALES</p>
            <p className="text-xl font-bold">KES 45,850</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">TOTAL ITEMS SOLD</p>
            <p className="text-xl font-bold">150</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <SearchInput
          placeholder="Search sales..."
          value=""
          onChange={() => {}}
        />
      </div>

      {/* Recent Sales */}
      <div>
        <h2 className="font-bold mb-4">RECENT SALES</h2>
        <div className="space-y-4">
          {recentSales.map((sale) => (
            <Link
              key={sale.id}
              to={`/sales/${sale.id}`}
              className="block bg-white rounded-xl p-4 shadow-sm"
            >
              <div>
                <h3 className="font-medium mb-1">{sale.product}</h3>
                <p className="text-gray-500 text-sm">{sale.quantity} Items • {sale.total}</p>
                <p className="text-gray-400 text-sm">{sale.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Floating Add Button */}
      <Link
        to="/sales/add"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 bg-ribaru-blue text-white px-4 py-2 rounded-lg shadow-lg"
      >
        <Plus className="w-5 h-5" />
        <span>Add Sale</span>
      </Link>
    </div>
  )
}
