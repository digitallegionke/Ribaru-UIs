import { ArrowLeft, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SearchInput } from '../components/ui/SearchInput'
import { ProductVariantModal } from '../components/ui/ProductVariantModal'
import { useState } from 'react'

interface Product {
  name: string
  price: string
  quantity: number
  variants: Array<{
    size: string
    price: number
    stock: number
    sku: string
  }>
}

const products: Product[] = [
  {
    name: 'Indian style curry paste',
    price: 'KES 1,500',
    quantity: 45,
    variants: [
      { size: '150g', price: 295, stock: 18, sku: 'CURRY-150' },
      { size: '350g', price: 1220, stock: 0, sku: 'CURRY-350' },
      { size: '500g', price: 950, stock: 15, sku: 'CURRY-500' },
      { size: '1Kg', price: 1220, stock: 12, sku: 'CURRY-1000' },
    ]
  },
  {
    name: 'Granola',
    price: 'KES 850',
    quantity: 32,
    variants: [
      { size: '250g', price: 450, stock: 20, sku: 'GRAN-250' },
      { size: '500g', price: 850, stock: 12, sku: 'GRAN-500' },
    ]
  },
  {
    name: 'Trail Mix',
    price: 'KES 650',
    quantity: 23,
    variants: [
      { size: '100g', price: 250, stock: 23, sku: 'TRAIL-100' },
      { size: '250g', price: 650, stock: 0, sku: 'TRAIL-250' },
    ]
  }
]

export function AddSalePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedItems, setSelectedItems] = useState<Array<{
    sku: string
    name: string
    size: string
    price: number
    quantity: number
  }>>([])

  const handleAddToCart = (variant: {
    size: string
    price: number
    stock: number
    sku: string
  }) => {
    if (selectedProduct) {
      setSelectedItems(prev => [...prev, {
        sku: variant.sku,
        name: selectedProduct.name,
        size: variant.size,
        price: variant.price,
        quantity: 1
      }])
      setSelectedProduct(null)
    }
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/sales" className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Add Sale</h1>
        </div>

        {/* Search */}
        <div className="mb-6">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by product name..."
          />
        </div>

        {/* Products */}
        <div className="grid gap-4">
          {filteredProducts.map((product) => (
            <button 
              key={product.name}
              className="w-full bg-white rounded-xl p-4 text-left"
              onClick={() => setSelectedProduct(product)}
            >
              <h3 className="font-medium mb-1">{product.name}</h3>
              <div className="flex justify-between text-sm text-gray-500">
                <p>{product.price}</p>
                <p>{product.quantity} in stock</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="sticky bottom-[72px] left-0 right-0 bg-white border-t p-4">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-500">Selected Items</p>
            <p className="font-medium">{selectedItems.length} items</p>
          </div>
          <button 
            type="submit"
            className="w-full bg-ribaru-blue text-white py-4 rounded-xl font-medium"
            disabled={selectedItems.length === 0}
          >
            Check Out
          </button>
        </div>
      </div>

      {/* Variant Selection Modal */}
      {selectedProduct && (
        <ProductVariantModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          productName={selectedProduct.name}
          variants={selectedProduct.variants}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  )
}
