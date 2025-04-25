import { useEffect, useState } from "react"
import { Trash2, Minus, Plus } from "lucide-react"

const USERID = 1

export default function Cart() {
  const [carts, setCarts] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      setLoading(true)
      const res = await fetch("https://fakestoreapi.com/carts")
      const data = await res.json()

      if (data && data.length) {
        const userCart = data.filter((cart) => cart?.userId === USERID)
        setCarts(userCart)
      }
    } catch (error) {
      console.error("Error fetching cart data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  // Calculate total items
  const totalItems = carts.reduce((total, cart) => {
    return total + cart.products.reduce((sum, product) => sum + product.quantity, 0)
  }, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Shopping Cart</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : carts.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-4">Looks like you haven't added any products to your cart yet.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">
                {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
              </h2>
              <button className="text-sm text-purple-600 hover:text-purple-800">Clear cart</button>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {carts?.map((cart) => (
              <div key={cart?.id} className="divide-y divide-gray-100">
                {cart.products?.map((product) => (
                  <CartProduct key={product.productId} cProduct={product} />
                ))}
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold text-lg">$0.00</span>
            </div>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function CartProduct({ cProduct }) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      setLoading(true)
      const res = await fetch(`https://fakestoreapi.com/products/${cProduct?.productId}`)
      const data = await res.json()
      if (data) {
        setProduct(data)
      }
    } catch (error) {
      console.error("Error fetching product data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return (
      <div className="p-4 flex animate-pulse">
        <div className="bg-gray-200 w-16 h-16 rounded"></div>
        <div className="ml-4 flex-1">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  if (!product) return null

  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
          <img
            src={product?.image || "/placeholder.svg"}
            alt={product?.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="ml-4 flex-1">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product?.title}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">{product?.category}</p>
          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900">${product?.price}</span>
              <span className="mx-2 text-gray-400">×</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-2 py-1 text-sm">{cProduct?.quantity}</span>
                <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <span className="font-medium">${(product?.price * cProduct?.quantity).toFixed(2)}</span>
          </div>
        </div>

        <button className="ml-4 text-gray-400 hover:text-red-500">
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
