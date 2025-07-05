"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MapPin, Star, Clock, DollarSign, Heart, Phone } from "lucide-react"
import Link from "next/link"
import type { Restaurant } from "@/lib/types"

// Mock data - replace with Firebase data
const mockRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Al-Baik Restaurant",
    description: "Authentic Middle Eastern cuisine with the finest halal ingredients",
    address: "123 Main Street, Downtown",
    location: { latitude: 40.7128, longitude: -74.006 },
    phone: "+1-555-0123",
    email: "info@albaik.com",
    images: ["/placeholder.svg?height=300&width=400"],
    categories: ["Fast Food", "Middle Eastern"],
    cuisineTypes: ["Arabic", "Lebanese"],
    priceRange: "budget",
    rating: 4.8,
    reviewCount: 245,
    isVerified: true,
    isOpen: true,
    openingHours: {
      monday: { open: "10:00", close: "22:00", isClosed: false },
      tuesday: { open: "10:00", close: "22:00", isClosed: false },
      wednesday: { open: "10:00", close: "22:00", isClosed: false },
      thursday: { open: "10:00", close: "22:00", isClosed: false },
      friday: { open: "10:00", close: "23:00", isClosed: false },
      saturday: { open: "10:00", close: "23:00", isClosed: false },
      sunday: { open: "12:00", close: "21:00", isClosed: false },
    },
    features: ["Delivery", "Takeout", "Dine-in", "Parking"],
    ownerId: "vendor1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Biryani Palace",
    description: "Traditional Indian and Pakistani biryani made with authentic spices",
    address: "456 Food Street, Central",
    location: { latitude: 40.7589, longitude: -73.9851 },
    phone: "+1-555-0124",
    email: "info@biryanipalace.com",
    images: ["/placeholder.svg?height=300&width=400"],
    categories: ["Traditional", "Indian"],
    cuisineTypes: ["Indian", "Pakistani"],
    priceRange: "mid-range",
    rating: 4.6,
    reviewCount: 189,
    isVerified: true,
    isOpen: true,
    openingHours: {
      monday: { open: "11:00", close: "23:00", isClosed: false },
      tuesday: { open: "11:00", close: "23:00", isClosed: false },
      wednesday: { open: "11:00", close: "23:00", isClosed: false },
      thursday: { open: "11:00", close: "23:00", isClosed: false },
      friday: { open: "11:00", close: "24:00", isClosed: false },
      saturday: { open: "11:00", close: "24:00", isClosed: false },
      sunday: { open: "11:00", close: "23:00", isClosed: false },
    },
    features: ["Delivery", "Takeout", "Dine-in", "Catering"],
    ownerId: "vendor2",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(mockRestaurants)
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(mockRestaurants)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCuisine, setSelectedCuisine] = useState("all")
  const [priceRange, setPriceRange] = useState<string[]>(["budget", "mid-range", "premium"])
  const [sortBy, setSortBy] = useState("rating")
  const [showFilters, setShowFilters] = useState(false)

  const categories = ["all", "Fast Food", "Traditional", "Grilled", "Desserts", "Beverages"]
  const cuisines = ["all", "Arabic", "Lebanese", "Indian", "Pakistani", "Turkish", "Mediterranean"]

  useEffect(() => {
    let filtered = restaurants

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.categories.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((restaurant) => restaurant.categories.includes(selectedCategory))
    }

    // Cuisine filter
    if (selectedCuisine !== "all") {
      filtered = filtered.filter((restaurant) => restaurant.cuisineTypes.includes(selectedCuisine))
    }

    // Price range filter
    filtered = filtered.filter((restaurant) => priceRange.includes(restaurant.priceRange))

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviewCount - a.reviewCount
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    setFilteredRestaurants(filtered)
  }, [searchTerm, selectedCategory, selectedCuisine, priceRange, sortBy, restaurants])

  const getPriceRangeSymbol = (range: string) => {
    switch (range) {
      case "budget":
        return "$"
      case "mid-range":
        return "$$"
      case "premium":
        return "$$$"
      default:
        return "$"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Halal Restaurants</h1>
          <p className="text-gray-600 dark:text-gray-400">Discover verified halal restaurants in your area</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search restaurants, cuisine, or dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="border-t pt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Cuisine Type</label>
                <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cuisine" />
                  </SelectTrigger>
                  <SelectContent>
                    {cuisines.map((cuisine) => (
                      <SelectItem key={cuisine} value={cuisine}>
                        {cuisine === "all" ? "All Cuisines" : cuisine}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <div className="space-y-2">
                  {["budget", "mid-range", "premium"].map((range) => (
                    <label key={range} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={priceRange.includes(range)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPriceRange([...priceRange, range])
                          } else {
                            setPriceRange(priceRange.filter((r) => r !== range))
                          }
                        }}
                        className="rounded"
                      />
                      <span className="text-sm">
                        {getPriceRangeSymbol(range)} {range.charAt(0).toUpperCase() + range.slice(1).replace("-", " ")}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 dark:text-gray-400">{filteredRestaurants.length} restaurants found</p>
        </div>

        {/* Restaurant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={restaurant.images[0] || "/placeholder.svg"}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {restaurant.isVerified && <Badge className="bg-green-600 hover:bg-green-700">✓ Verified</Badge>}
                  <Badge variant={restaurant.isOpen ? "default" : "secondary"}>
                    {restaurant.isOpen ? "Open" : "Closed"}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-3 right-3">
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
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{restaurant.description}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>2.5 km</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>25-35 min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{getPriceRangeSymbol(restaurant.priceRange)}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {restaurant.categories.slice(0, 3).map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>
                        {restaurant.rating} ({restaurant.reviewCount} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Phone className="h-4 w-4" />
                    <span>{restaurant.phone}</span>
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

        {/* Load More */}
        {filteredRestaurants.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Restaurants
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No restaurants found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your search criteria or filters</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSelectedCuisine("all")
                setPriceRange(["budget", "mid-range", "premium"])
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
