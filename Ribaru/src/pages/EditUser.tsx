import { ArrowLeft } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { User, UserRole, UpdateUserInput } from '../types/user'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { DeleteUserModal } from '../components/ui/DeleteUserModal'

export function EditUserPage() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [formData, setFormData] = useState<UpdateUserInput>({
    name: '',
    phone: '',
    email: '',
    role: 'ADMIN'
  })
  const [errors, setErrors] = useState<Partial<Record<keyof UpdateUserInput, string>>>({})

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockUser = {
      id: id!,
      name: 'John Mwangi',
      phone: '+254712345678',
      role: 'ADMIN' as UserRole,
      email: 'john@example.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setFormData({
      name: mockUser.name,
      phone: mockUser.phone,
      email: mockUser.email,
      role: mockUser.role
    })
  }, [id])

  const validateForm = () => {
    const newErrors: Partial<Record<keyof UpdateUserInput, string>> = {}
    
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

    // TODO: API call to update user
    console.log('Updating user:', formData)
    navigate('/users')
  }

  const handleDelete = () => {
    // TODO: API call to delete user
    console.log('Deleting user:', id)
    navigate('/users')
  }

  const handleChange = (field: keyof UpdateUserInput) => (value: string) => {
    setFormData((prev: UpdateUserInput) => ({ ...prev, [field]: value }))
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
          <h1 className="text-2xl font-bold">Edit User</h1>
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
        <div className="max-w-lg mx-auto space-y-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-ribaru-blue text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={() => setShowDeleteModal(true)}
            className="w-full bg-white text-red-500 border-2 border-red-500 py-4 rounded-xl font-medium hover:bg-red-50 transition-colors"
          >
            Delete User
          </button>
        </div>
      </div>

      <DeleteUserModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  )
}
