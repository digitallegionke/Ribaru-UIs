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
        <label className="text-ribaru-blue font-mono text-base mb-2 block">
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
          className={`w-full bg-[#F1F2F6] rounded-[6px] border-0 pl-12 pr-4 py-4 text-[#1A1A1A] text-base font-mono focus:ring-1 focus:ring-ribaru-blue focus:outline-none ${className}`}
        />
      </div>
    </div>
  )
}
