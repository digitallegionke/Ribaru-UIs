import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Select } from '../components/ui/Select'
import { useState } from 'react'

export function AccountSettingsPage() {
  const [language, setLanguage] = useState('en')
  const [currency, setCurrency] = useState('KES')
  const [emailNotifications, setEmailNotifications] = useState({
    salesReports: false,
    lowStockAlerts: false,
    newUserRegistration: false
  })

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/settings" className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Account Settings</h1>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Email Notifications */}
        <div>
          <h2 className="text-sm font-medium bg-gray-100 p-4 rounded-t-xl">
            Email Notifications
          </h2>
          <div className="bg-white rounded-b-xl p-4 space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-[#1A1A1A] font-mono">Sales Reports</span>
              <input 
                type="checkbox" 
                checked={emailNotifications.salesReports}
                onChange={(e) => setEmailNotifications(prev => ({
                  ...prev,
                  salesReports: e.target.checked
                }))}
                className="w-5 h-5 text-ribaru-blue rounded focus:ring-ribaru-blue" 
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-[#1A1A1A] font-mono">Low Stock Alerts</span>
              <input 
                type="checkbox" 
                checked={emailNotifications.lowStockAlerts}
                onChange={(e) => setEmailNotifications(prev => ({
                  ...prev,
                  lowStockAlerts: e.target.checked
                }))}
                className="w-5 h-5 text-ribaru-blue rounded focus:ring-ribaru-blue" 
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-[#1A1A1A] font-mono">New User Registration</span>
              <input 
                type="checkbox" 
                checked={emailNotifications.newUserRegistration}
                onChange={(e) => setEmailNotifications(prev => ({
                  ...prev,
                  newUserRegistration: e.target.checked
                }))}
                className="w-5 h-5 text-ribaru-blue rounded focus:ring-ribaru-blue" 
              />
            </label>
          </div>
        </div>

        {/* Language */}
        <div>
          <h2 className="text-sm font-medium bg-gray-100 p-4 rounded-t-xl">
            Language
          </h2>
          <div className="bg-white rounded-b-xl p-4">
            <Select
              label="Select Language"
              value={language}
              onChange={setLanguage}
            >
              <option value="en">English</option>
              <option value="sw">Swahili</option>
            </Select>
          </div>
        </div>

        {/* Currency */}
        <div>
          <h2 className="text-sm font-medium bg-gray-100 p-4 rounded-t-xl">
            Currency
          </h2>
          <div className="bg-white rounded-b-xl p-4">
            <Select
              label="Select Currency"
              value={currency}
              onChange={setCurrency}
            >
              <option value="KES">KES - Kenyan Shilling</option>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
            </Select>
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
