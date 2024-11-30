import { ArrowLeft, Camera } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { Textarea } from '../components/ui/Textarea'
import { useState } from 'react'

export function BusinessProfilePage() {
  const [businessName, setBusinessName] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/settings" className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Business Profile</h1>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Business Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <img 
              src="/business-logo.jpg" 
              alt="Business Logo" 
              className="w-24 h-24 rounded-full object-cover"
            />
            <button 
              type="button"
              className="absolute bottom-0 right-0 bg-ribaru-blue p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>
          <p className="text-gray-500 font-mono">Upload your business logo</p>
        </div>

        {/* Business Information */}
        <div>
          <h2 className="text-sm font-medium bg-gray-100 p-4 rounded-t-xl">
            Business Information
          </h2>
          <div className="bg-white rounded-b-xl p-4 space-y-4">
            <Input 
              label="Business Name"
              value={businessName}
              onChange={setBusinessName}
              placeholder="Your Business Name"
              required
            />
            <Select
              label="Business Type"
              value={businessType}
              onChange={setBusinessType}
              required
            >
              <option value="">Select business type</option>
              <option value="retail">Retail Store</option>
              <option value="restaurant">Restaurant</option>
              <option value="service">Service Business</option>
            </Select>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-sm font-medium bg-gray-100 p-4 rounded-t-xl">
            Contact Information
          </h2>
          <div className="bg-white rounded-b-xl p-4 space-y-4">
            <Input 
              label="Email Address"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="business@example.com"
              required
            />
            <Input 
              label="Phone Number"
              type="tel"
              value={phone}
              onChange={setPhone}
              placeholder="+254 712 345 678"
              required
            />
            <Textarea 
              label="Physical Address"
              value={address}
              onChange={setAddress}
              placeholder="Enter your business address"
            />
          </div>
        </div>

        {/* Save Button */}
        <button 
          type="submit"
          className="w-full bg-ribaru-blue text-white py-4 rounded-xl font-mono hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}
