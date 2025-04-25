import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">ShopNow</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Your one-stop destination for premium products at affordable prices. Quality guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/nabin.basnet.919377" className="hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.instagram.com/nabin_basnet01/" className="hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.youtube.com/@CelestialForge" className="hover:text-white transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition-colors">
                  My Account
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                  Track Order
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                  Returns & Exchanges
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                  Shipping Policy
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                  FAQ
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-400">Belbari-8, Morang, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone  className="mr-2 flex-shrink-0" />
                  9815326723
              </li>
              <li className="flex items-center">
                  nabinbasnet1200@gmail.com
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  )
}
