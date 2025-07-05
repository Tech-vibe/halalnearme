"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MapPin, Star, Clock, DollarSign, Heart, Phone, ShoppingBag } from "lucide-react"
import Link from "next/link"

// Mock data for food shops
const mockFoodShops = [
  {
    id: "1",
    name: "Halal Meat Market",
    description: "Premium halal meat and poultry with fresh cuts daily. Certified by Islamic authorities.",
    address: "123 Butcher Street, Downtown",
    location: { latitude: 40.7128, longitude: -74.006 },
    phone: "+1-555-0301",
    email: "info@halalmeat.com",
    website: "https://halalmeat.com",
    images: ["/placeholder.svg?height=300&width=400"],
    categories: ["Meat", "Butcher"],
    products: ["Fresh Meat", "Poultry", "Lamb", "Beef"],
    priceRange: "mid-range",
    rating: 4.8,
    reviewCount: 156,
    isVerified: true,
    isOpen: true,
    openingHours: {
      monday: { open: "08:00", close: "20:00", isClosed: false },
      tuesday: { open: "08:00", close: "20:00", isClosed: false },
      wednesday: { open: "08:00", close: "20:00", isClosed: false },
      thursday: { open: "08:00", close: "20:00", isClosed: false },
      friday: { open: "08:00", close: "21:00", isClosed: false },
      saturday: { open: "08:00", close: "21:00", isClosed: false },
      sunday: { open: "09:00", close: "19:00", isClosed: false },
    },
    features: ["Home Delivery", "Fresh Daily", "Certified Halal", "Custom Cuts"],
    specialties: ["Wagyu Beef", "Organic Chicken", "Fresh Lamb"],
  },
  {
    id: "2",
    name: "Middle Eastern Grocery",
    description: "Authentic Middle Eastern ingredients, spices, and specialty foods imported directly from the region.",
    address: "456 Spice Avenue, Little Arabia",
    location: { latitude: 40.7589, longitude: -73.9851 },
    phone: "+1-555-0302",
    email: "info@megrocery.com",
    images: ["/placeholder.svg?height=300&width=400"],
    categories: ["Grocery", "Spices"],
    products: ["Spices", "Rice", "Dates", "Olive Oil"],
    priceRange: "budget",
    rating: 4.6,
    reviewCount: 203,
    isVerified: true,
    isOpen: true,
    openingHours: {
      monday: { open: "09:00", close: "21:00", isClosed: false },
      tuesday: { open: "09:00", close: "21:00", isClosed: false },
      wednesday: { open: "09:00", close: "21:00", isClosed: false },
      thursday: { open: "09:00", close: "21:00", isClosed: false },
      friday: { open: "09:00", close: "22:00", isClosed: false },
      saturday: { open: "09:00", close: "22:00", isClosed: false },
      sunday: { open: "10:00", close: "20:00", isClosed: false },
    },
    features: ["Import Direct", "Bulk Orders", "Online Shopping", "Expert Advice"],
    specialties: ["Saffron", "Basmati Rice", "Medjool Dates"],
  },
  {
    id: "3",
    name: "Halal Bakery & Sweets",
    description: "Traditional Islamic pastries, fresh bread, and authentic Middle Eastern sweets made daily.",
    address: "789 Sweet Lane, Cultural District",
    location: { latitude: 40.7282, longitude: -73.7949 },
    phone: "+1-555-0303",
    email: "info@halalbakery.com",
    images: ["/placeholder.svg?height=300&width=400"],
    categories: ["Bakery", "Sweets"],
    products: ["Baklava", "Fresh Bread", "Ma'amoul", "Kunafa"],
    priceRange: "budget",
    rating: 4.7,
    reviewCount: 189,
    isVerified: true,
    isOpen: true,
    openingHours: {
      monday: { open: "06:00", close: "19:00", isClosed: false },
      tuesday: { open: "06:00", close: "19:00", isClosed: false },
      wednesday: { open: "06:00", close: "19:00", isClosed: false },
      thursday: { open: "06:00", close: "19:00", isClosed: false },
      friday: { open: "06:00", close: "20:00", isClosed: false },
      saturday: { open: "06:00", close: "20:00", isClosed: false },
      sunday: { open: "07:00", close: "18:00", isClosed: false },
    },
    features: ["Fresh Daily", "Custom Orders", "Wedding Cakes", "Catering"],
    specialties: ["Baklava", "Kunafa", "Fresh Pita"],
  },
  {
    id: "4",
    name: "Halal Supermarket",
    description: "One-stop shop for all halal groceries, fresh produce, and household items with competitive prices.",
    address: "321 Market Street, Suburban Plaza",
    location: { latitude: 40.6892, longitude: -74.0445 },
    phone: "+1-555-0304",
    email: "info@halalsupermarket.com",
    images: ["/placeholder.svg?height=300&width=400"],
    categories: ["Supermarket", "Grocery"],
    products: ["Fresh Produce", "Frozen Foods", "Dairy", "Household Items"],
    priceRange: "budget",
    rating: 4.5,
    reviewCount: 267,
    isVerified: true,
    isOpen: true,
    openingHours: {
      monday: { open: "07:00", close: "22:00", isClosed: false },
      tuesday: { open: "07:00", close: "22:00", isClosed: false },
      wednesday: { open: "07:00", close: "22:00", isClosed: false },
      thursday: { open: "07:00", close: "22:00", isClosed: false },
      friday: { open: "07:00", close: "23:00", isClosed: false },
      saturday: { open: "07:00", close: "23:00", isClosed: false },
      sunday: { open: "08:00", close: "21:00", isClosed: false },
    },
    features: ["Wide Selection", "Competitive Prices", "Fresh Produce", "Parking Available"],
    specialties: ["Organic Produce", "International Brands", "Bulk Items"],
  },
]

export default function FoodShopsPage() {
  const [foodShops, setFoodShops] = useState(mockFoodShops)
  const [filteredFoodShops, setFilteredFoodShops] = useState(mockFoodShops)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState<string[]>(["budget", "mid-range", "premium"])
  const [sortBy, setSortBy] = useState("rating")
  const [showFilters, setShowFilters] = useState(false)

  const categories = ["all", "Meat", "Grocery", "Bakery", "Supermarket", "Spices", "Sweets"]

  useEffect(() => {
    let filtered = foodShops

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (shop) =>
          shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          shop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          shop.categories.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase())) ||
          shop.products.some((product) => product.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((shop) => shop.categories.includes(selectedCategory))
    }

    // Price range filter
    filtered = filtered.filter((shop) => priceRange.includes(shop.priceRange))

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

    setFilteredFoodShops(filtered)
  }, [searchTerm, selectedCategory, priceRange, sortBy, foodShops])

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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Halal Food Shops</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Find verified halal grocery stores and specialty food shops
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search food shops, products, or specialties..."
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
          <p className="text-gray-600 dark:text-gray-400">{filteredFoodShops.length} food shops found</p>
        </div>

        {/* Food Shops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoodShops.map((shop) => (
            <Card key={shop.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={shop.images[0] || "/placeholder.svg"} alt={shop.name} className="w-full h-48 object-cover" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {shop.isVerified && <Badge className="bg-green-600 hover:bg-green-700">✓ Verified Halal</Badge>}
                  <Badge variant={shop.isOpen ? "default" : "secondary"}>{shop.isOpen ? "Open" : "Closed"}</Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="bg-white dark:bg-gray-800 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{shop.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{shop.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{shop.description}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>1.8 km</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>Open until 8 PM</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{getPriceRangeSymbol(shop.priceRange)}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {shop.categories.slice(0, 2).map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {shop.specialties.slice(0, 3).map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>
                        {shop.rating} ({shop.reviewCount} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Phone className="h-4 w-4" />
                    <span>{shop.phone}</span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={`/food-shop/${shop.id}`}>
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        View Products
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/food-shop/${shop.id}/contact`}>Contact</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredFoodShops.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Shops
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredFoodShops.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No food shops found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your search criteria or filters</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
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
