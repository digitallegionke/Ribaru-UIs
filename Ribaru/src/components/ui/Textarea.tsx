import { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label: string
  error?: string
  required?: boolean
  onChange: (value: string) => void
}

export function Textarea({
  label,
  error,
  required,
  onChange,
  className = '',
  ...props
}: TextareaProps) {
  return (
    <div>
      <label className="text-blue-600 text-sm mb-2 block">
        {label} {required && <span className="text-blue-600">*</span>}
      </label>
      <textarea
        {...props}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-4 bg-gray-50 rounded-xl border-0 placeholder-gray-400 text-base focus:ring-1 focus:ring-blue-600 focus:outline-none min-h-[100px] ${className}`}
      />
      {error && (
        <p className="mt-1 text-red-500 text-sm">{error}</p>
      )}
    </div>
  )
}
