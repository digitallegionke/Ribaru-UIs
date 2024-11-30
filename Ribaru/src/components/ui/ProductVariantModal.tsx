import { X } from 'lucide-react'
import { SearchInput } from './SearchInput'
import { useState } from 'react'

interface Variant {
  size: string
  price: number
  stock: number
  sku: string
}

interface ProductVariantModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  variants: Variant[]
  onAddToCart: (variant: Variant) => void
}

export function ProductVariantModal({
  isOpen,
  onClose,
  productName,
  variants,
  onAddToCart,
}: ProductVariantModalProps) {
  const [searchQuery, setSearchQuery] = useState('')

  if (!isOpen) return null

  const filteredVariants = variants.filter(variant =>
    variant.size.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-end">
      <div className="bg-white w-full rounded-t-xl max-h-[90vh] overflow-auto pb-[72px]">
        <div className="p-4 border-b sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold">Select Size</h2>
              <p className="text-gray-500 text-sm">{productName}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search sizes..."
          />
        </div>

        <div className="p-4 space-y-4">
          {filteredVariants.map((variant) => (
            <div
              key={variant.sku}
              className="flex flex-col gap-1"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{variant.size}</h3>
                  <p className="text-sm text-ribaru-blue">
                    KES {variant.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    {variant.stock} in stock
                    {variant.stock === 0 && <span className="text-red-500 ml-2">Sold out</span>}
                  </p>
                </div>
                <button
                  className="bg-[#F1F2F6] text-ribaru-blue px-6 py-2 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#E5E7EB]"
                  onClick={() => onAddToCart(variant)}
                  disabled={variant.stock === 0}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-[72px] left-0 right-0 p-4 border-t bg-white">
          <button
            className="w-full bg-[#F1F2F6] text-ribaru-blue py-4 rounded-xl font-medium hover:bg-[#E5E7EB]"
            onClick={onClose}
          >
            Back to items
          </button>
        </div>
      </div>
    </div>
  )
}
