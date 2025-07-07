import { Button } from "@/components/ui/button"
import { MapPin, Star } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Find Verified
                <span className="text-green-600 block">Halal Food</span>
                Near You
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Discover authentic halal restaurants, food shops, and hotels worldwide. Book tables, order food, and
                enjoy verified halal dining experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/restaurants">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find Restaurants
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/list-business">List Your Business</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">10,000+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Happy Customers</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">4.8/5</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Average Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img src="/placeholder.svg?height=600&width=500" alt="Halal Food" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 dark:bg-green-800 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
