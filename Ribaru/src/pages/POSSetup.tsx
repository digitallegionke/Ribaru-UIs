import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function POSSetupPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/settings" className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">POS Setup</h1>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Receipt Settings */}
        <div>
          <h2 className="text-sm font-medium bg-gray-100 p-4 rounded-t-xl">
            Receipt Settings
          </h2>
          <div className="bg-white rounded-b-xl p-4 space-y-4">
            <div>
              <label className="text-blue-600 text-sm mb-2 block">
                Receipt Header
              </label>
              <textarea 
                placeholder="Enter text to appear at the top of receipts"
                className="w-full p-4 min-h-[100px] bg-gray-50 rounded-xl border-0 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="text-blue-600 text-sm mb-2 block">
                Receipt Footer
              </label>
              <textarea 
                placeholder="Enter text to appear at the bottom of receipts"
                className="w-full p-4 min-h-[100px] bg-gray-50 rounded-xl border-0 placeholder-gray-400"
              />
            </div>
            <label className="flex items-center justify-between">
              <span className="text-gray-600">Show Tax on Receipt</span>
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
            </label>
          </div>
        </div>

        {/* Tax Settings */}
        <div>
          <h2 className="text-sm font-medium bg-gray-100 p-4 rounded-t-xl">
            Tax Settings
          </h2>
          <div className="bg-white rounded-b-xl p-4 space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-600">Enable Tax</span>
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
            </label>
            <div>
              <label className="text-blue-600 text-sm mb-2 block">
                Tax Rate (%)
              </label>
              <input 
                type="number" 
                placeholder="16"
                className="w-full p-4 bg-gray-50 rounded-xl border-0 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h2 className="text-sm font-medium bg-gray-100 p-4 rounded-t-xl">
            Payment Methods
          </h2>
          <div className="bg-white rounded-b-xl p-4 space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-600">Cash</span>
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" defaultChecked />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-600">M-PESA</span>
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" defaultChecked />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-600">Card Payment</span>
              <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
            </label>
          </div>
        </div>

        {/* Save Button */}
        <button 
          type="submit"
          className="w-full bg-ribaru-blue text-white py-4 rounded-xl hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}
