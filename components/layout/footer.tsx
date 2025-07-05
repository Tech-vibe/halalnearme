import Link from "next/link"
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-green-400">HalalNearMe</span>
            </div>
            <p className="text-gray-400">
              Your trusted platform for finding verified halal food worldwide. Connecting you with authentic halal
              dining experiences.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/restaurants" className="block text-gray-400 hover:text-white">
                Find Restaurants
              </Link>
              <Link href="/hotels" className="block text-gray-400 hover:text-white">
                Halal Hotels
              </Link>
              <Link href="/food-shops" className="block text-gray-400 hover:text-white">
                Food Shops
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white">
                About Us
              </Link>
            </div>
          </div>

          {/* For Business */}
          <div>
            <h3 className="font-semibold mb-4">For Business</h3>
            <div className="space-y-2">
              <Link href="/vendor/register" className="block text-gray-400 hover:text-white">
                List Your Restaurant
              </Link>
              <Link href="/vendor/login" className="block text-gray-400 hover:text-white">
                Vendor Login
              </Link>
              <Link href="/partner" className="block text-gray-400 hover:text-white">
                Partner With Us
              </Link>
              <Link href="/advertise" className="block text-gray-400 hover:text-white">
                Advertise
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@halalnearme.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  123 Business Ave
                  <br />
                  Suite 100
                  <br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 HalalNearMe. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
