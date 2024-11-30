import { Home, FileText, Package2, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

const navItems = [
  {
    label: 'Home',
    icon: Home,
    path: '/'
  },
  {
    label: 'Sales',
    icon: FileText,
    path: '/sales'
  },
  {
    label: 'Stocks',
    icon: Package2,
    path: '/stocks'
  },
  {
    label: 'Settings',
    icon: Settings,
    path: '/settings'
  }
]

export function Navbar() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
      <div className="max-w-xl mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          {navItems.map((item) => {
            const isActive = currentPath === item.path
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                className={clsx(
                  'inline-flex flex-col items-center justify-center p-2',
                  isActive
                    ? 'text-ribaru-blue'
                    : 'text-gray-500 hover:text-ribaru-blue'
                )}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
