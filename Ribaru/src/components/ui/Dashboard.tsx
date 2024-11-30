import { typography } from '../../../theme/typography'

const stats = [
  { label: 'Total Stock', value: '150' },
  { label: 'Low Stock', value: '12' },
  { label: 'Out of Stock', value: '5' },
  { label: 'Total Sales', value: '₹25,000' },
]

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white overflow-hidden shadow rounded-lg"
            style={{ fontFamily: typography.fontFamily.recursive }}
          >
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500">{stat.label}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 
              className="text-lg font-medium text-gray-900 mb-4"
              style={{ fontFamily: typography.fontFamily.recursive }}
            >
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="border-l-4 border-blue-500 pl-4 py-2"
                  style={{ fontFamily: typography.fontFamily.recursive }}
                >
                  <p className="text-sm text-gray-600">Stock updated for Item {item}</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
