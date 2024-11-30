import { SelectHTMLAttributes } from 'react'

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label: string
  error?: string
  required?: boolean
  onChange: (value: string) => void
}

export function Select({
  label,
  error,
  required,
  onChange,
  className = '',
  children,
  ...props
}: SelectProps) {
  return (
    <div>
      <label className="text-ribaru-blue font-mono text-base mb-2 block">
        {label} {required && <span className="text-ribaru-blue">*</span>}
      </label>
      <select
        {...props}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-[#F1F2F6] rounded-[6px] border-0 p-4 text-[#1A1A1A] text-base font-mono focus:ring-1 focus:ring-ribaru-blue focus:outline-none ${className}`}
      >
        {children}
      </select>
      {error && (
        <p className="mt-1 text-red-500 text-sm font-mono">{error}</p>
      )}
    </div>
  )
}
