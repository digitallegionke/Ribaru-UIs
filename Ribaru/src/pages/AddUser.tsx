import { ArrowLeft } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CreateUserInput, UserRole } from '../types/user'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'

export function AddUserPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<CreateUserInput>({
    name: '',
    phone: '',
    email: '',
    role: 'SALES_REP'
  })
  const [errors, setErrors] = useState<Partial<Record<keyof CreateUserInput, string>>>({})

  const validateForm = () => {
    const newErrors: Partial<Record<keyof CreateUserInput, string>> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+254\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format (e.g. +254712345678)'
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // TODO: API call to create user
    console.log('Creating user:', formData)
    navigate('/users')
  }

  const handleChange = (field: keyof CreateUserInput) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/users" className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Add User</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Full Name"
            value={formData.name}
            onChange={handleChange('name')}
            error={errors.name}
            required
          />

          <Input
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange('phone')}
            error={errors.phone}
            placeholder="+254712345678"
            required
          />

          <Input
            label="Email Address"
            type="email"
            value={formData.email || ''}
            onChange={handleChange('email')}
            error={errors.email}
            placeholder="john@example.com"
          />

          <Select
            label="Role"
            value={formData.role}
            onChange={handleChange('role')}
            required
          >
            <option value="SALES_REP">Sales Representative</option>
            <option value="ADMIN">Administrator</option>
          </Select>
        </form>
      </div>

      {/* Bottom Actions */}
      <div className="sticky bottom-[72px] left-0 right-0 bg-white border-t p-4">
        <div className="max-w-lg mx-auto">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-ribaru-blue text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  )
}
