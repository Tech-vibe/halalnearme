import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock } from "lucide-react"
import Link from "next/link"

const featuredRestaurants = [
  {
    id: 1,
    name: "Al-Baik Restaurant",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 245,
    category: "Fast Food",
    distance: "0.5 km",
    deliveryTime: "20-30 min",
    isOpen: true,
    verified: true,
    specialties: ["Chicken", "Burgers", "Shawarma"],
    address: "123 Main Street, Downtown",
  },
  {
    id: 2,
    name: "Biryani Palace",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 189,
    category: "Traditional",
    distance: "1.2 km",
    deliveryTime: "35-45 min",
    isOpen: true,
    verified: true,
    specialties: ["Biryani", "Kebabs", "Curry"],
    address: "456 Food Street, Central",
  },
  {
    id: 3,
    name: "Halal Grill House",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 156,
    category: "Grilled",
    distance: "0.8 km",
    deliveryTime: "25-35 min",
    isOpen: false,
    verified: true,
    specialties: ["BBQ", "Steaks", "Grilled Fish"],
    address: "789 Grill Avenue, Westside",
  },
  {
    id: 4,
    name: "Sweet Treats Halal",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 98,
    category: "Desserts",
    distance: "1.5 km",
    deliveryTime: "15-25 min",
    isOpen: true,
    verified: true,
    specialties: ["Baklava", "Kunafa", "Ice Cream"],
    address: "321 Sweet Lane, Eastside",
  },
]

export function FeaturedRestaurants() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Restaurants</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Top-rated halal restaurants in your area</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/restaurants">View All</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRestaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {restaurant.verified && <Badge className="bg-green-600 hover:bg-green-700">✓ Verified</Badge>}
                  <Badge variant={restaurant.isOpen ? "default" : "secondary"}>
                    {restaurant.isOpen ? "Open" : "Closed"}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-white dark:bg-gray-800 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{restaurant.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{restaurant.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{restaurant.category}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{restaurant.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {restaurant.specialties.slice(0, 3).map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>
                      {restaurant.rating} ({restaurant.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={`/restaurant/${restaurant.id}`}>View Menu</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/restaurant/${restaurant.id}/book`}>Book Table</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
