import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function AddStockPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link to="/stocks" className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Add Stock</h1>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="text-blue-600 text-sm">
            Product Name*
          </label>
          <input 
            type="text" 
            placeholder="Granola"
            className="w-full bg-white rounded-xl p-4 mt-2 outline-none"
          />
        </div>

        {/* SKU */}
        <div>
          <label className="text-blue-600 text-sm">
            SKU*
          </label>
          <input 
            type="text" 
            placeholder="32"
            className="w-full bg-white rounded-xl p-4 mt-2 outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-blue-600 text-sm">
            Description (Optional)
          </label>
          <textarea 
            placeholder="Enter Stock Description"
            className="w-full bg-white rounded-xl p-4 mt-2 outline-none min-h-[100px]"
          />
        </div>

        {/* Variants */}
        <div>
          <button 
            type="button"
            className="flex items-center gap-2 text-blue-600"
          >
            <span className="text-2xl">+</span>
            Add Variants(color, size, weight)
          </button>
        </div>

        {/* Initial Quantity */}
        <div>
          <label className="text-blue-600 text-sm">
            Initial Quantity
          </label>
          <select 
            className="w-full bg-white rounded-xl p-4 mt-2 outline-none appearance-none"
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="text-blue-600 text-sm">
            Price per Item
          </label>
          <div className="relative mt-2">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              KES
            </div>
            <input 
              type="text" 
              placeholder="1,500"
              className="w-full bg-white rounded-xl p-4 pl-16 outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          className="w-full bg-ribaru-blue text-white py-4 rounded-xl mt-8 hover:bg-blue-700 transition-colors"
        >
          Add Stock
        </button>
      </form>
    </div>
  )
}
