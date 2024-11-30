import { Home, ShoppingCart, Package, Settings } from 'lucide-react'
import { typography } from '../../../theme/typography'

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: ShoppingCart, label: 'Sales', href: '/sales' },
  { icon: Package, label: 'Stock', href: '/stock' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 style={{ fontFamily: typography.fontFamily.recursive }} className="text-2xl font-bold text-gray-900">
                Ribaru
              </h1>
            </div>
          </div>
          <div className="flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                style={{ fontFamily: typography.fontFamily.recursive }}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
