import { Search } from 'lucide-react'

interface SearchInputProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  className?: string
  label?: string
}

export function SearchInput({
  placeholder = 'Search...',
  value,
  onChange,
  className = '',
  label,
}: SearchInputProps) {
  return (
    <div>
      {label && (
        <label className="text-blue-600 text-sm mb-2 block">
          {label}
        </label>
      )}
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full p-4 bg-gray-50 rounded-xl border-0 pl-12 placeholder-gray-400 text-base focus:ring-1 focus:ring-blue-600 focus:outline-none ${className}`}
        />
      </div>
    </div>
  )
}
