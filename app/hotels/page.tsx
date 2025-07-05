"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MapPin, Star, DollarSign, Heart, Phone, Wifi, Car, Coffee } from "lucide-react"
import Link from "next/link"

// Mock data for hotels
const mockHotels = [
  {
    id: "1",
    name: "Grand Halal Resort",
    description: "Luxury halal resort with world-class amenities, prayer facilities, and halal dining options",
    address: "456 Resort Boulevard, Miami Beach, FL",
    location: { latitude: 25.7617, longitude: -80.1918 },
    phone: "+1-555-0201",
    email: "info@grandhalal.com",
    website: "https://grandhalal.com",
    images: ["/placeholder.svg?height=300&width=400"],
    categories: ["Luxury", "Resort"],
    amenities: ["Pool", "Spa", "Gym", "Prayer Room"],
    priceRange: "premium",
    rating: 4.9,
    reviewCount: 342,
    isVerified: true,
    isOpen: true,
    features: ["Halal Restaurant", "Prayer Facilities", "Family Rooms", "WiFi", "Parking", "Pool"],
    pricePerNight: 299,
    roomTypes: ["Standard", "Deluxe", "Suite"],
  },
  {
    id: "2",
    name: "Islamic Heritage Hotel",
    description:
      "Traditional Islamic architecture with modern comfort, featuring dedicated prayer areas and halal cuisine",
    address: "789 Heritage Street, New York, NY",
    location: { latitude: 40.7128, longitude: -74.006 },
    phone: "+1-555-0202",
    email: "info@islamicheritage.com",
    images: ["/placeholder.svg?height=300&width=400"],
    categories: ["Heritage", "Boutique"],
    amenities: ["Prayer Room", "Halal Restaurant", "Library", "Garden"],
    priceRange: "mid-range",
    rating: 4.7,
    reviewCount: 198,
    isVerified: true,
    isOpen: true,
    features: ["Prayer Facilities", "Halal Dining", "Cultural Tours", "WiFi", "Concierge"],
    pricePerNight: 189,
    roomTypes: ["Standard", "Family", "Executive"],
  },
  {
    id: "3",
    name: "Crescent Moon Inn",
    description: "Cozy family-friendly hotel with authentic halal breakfast and comfortable accommodations",
    address: "321 Crescent Avenue, Los Angeles, CA",
    location: { latitude: 34.0522, longitude: -118.2437 },
    phone: "+1-555-0203",
    email: "info@crescentmoon.com",
    images: ["/placeholder.svg?height=300&width=400"],
    categories: ["Family", "Budget"],
    amenities: ["Free Breakfast", "Prayer Room", "Kids Area", "Garden"],
    priceRange: "budget",
    rating: 4.5,
    reviewCount: 156,
    isVerified: true,
    isOpen: true,
    features: ["Halal Breakfast", "Family Rooms", "Prayer Facilities", "WiFi", "Parking"],
    pricePerNight: 129,
    roomTypes: ["Standard", "Family"],
  },
  {
    id: "4",
    name: "Oasis Business Hotel",
    description: "Modern business hotel catering to Muslim travelers with prayer facilities and halal room service",
    address: "654 Business District, Chicago, IL",
    location: { latitude: 41.8781, longitude: -87.6298 },
    phone: "+1-555-0204",
    email: "info@oasisbusiness.com",
    images: ["/placeholder.svg?height=300&width=400"],
    categories: ["Business", "Modern"],
    amenities: ["Business Center", "Prayer Room", "Gym", "Conference Rooms"],
    priceRange: "mid-range",
    rating: 4.6,
    reviewCount: 223,
    isVerified: true,
    isOpen: true,
    features: ["Business Center", "Prayer Facilities", "Halal Room Service", "WiFi", "Gym"],
    pricePerNight: 199,
    roomTypes: ["Standard", "Business", "Executive"],
  },
]

export default function HotelsPage() {
  const [hotels, setHotels] = useState(mockHotels)
  const [filteredHotels, setFilteredHotels] = useState(mockHotels)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState<string[]>(["budget", "mid-range", "premium"])
  const [sortBy, setSortBy] = useState("rating")
  const [showFilters, setShowFilters] = useState(false)

  const categories = ["all", "Luxury", "Heritage", "Family", "Business", "Resort", "Boutique"]

  useEffect(() => {
    let filtered = hotels

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hotel.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hotel.categories.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((hotel) => hotel.categories.includes(selectedCategory))
    }

    // Price range filter
    filtered = filtered.filter((hotel) => priceRange.includes(hotel.priceRange))

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviewCount - a.reviewCount
        case "price":
          return a.pricePerNight - b.pricePerNight
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    setFilteredHotels(filtered)
  }, [searchTerm, selectedCategory, priceRange, sortBy, hotels])

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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Halal Hotels</h1>
          <p className="text-gray-600 dark:text-gray-400">Discover verified halal-friendly hotels worldwide</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search hotels, location, or amenities..."
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
                  <SelectItem value="price">Price</SelectItem>
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
          <p className="text-gray-600 dark:text-gray-400">{filteredHotels.length} hotels found</p>
        </div>

        {/* Hotels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={hotel.images[0] || "/placeholder.svg"}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {hotel.isVerified && <Badge className="bg-green-600 hover:bg-green-700">✓ Verified Halal</Badge>}
                  <Badge variant={hotel.isOpen ? "default" : "secondary"}>
                    {hotel.isOpen ? "Available" : "Fully Booked"}
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
                    <span className="text-sm font-semibold">{hotel.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{hotel.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{hotel.description}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>2.5 km</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{getPriceRangeSymbol(hotel.priceRange)}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {hotel.categories.slice(0, 2).map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {hotel.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center space-x-1 text-xs text-gray-500">
                        {feature === "WiFi" && <Wifi className="h-3 w-3" />}
                        {feature === "Parking" && <Car className="h-3 w-3" />}
                        {feature === "Halal Restaurant" && <Coffee className="h-3 w-3" />}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>
                        {hotel.rating} ({hotel.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">${hotel.pricePerNight}</div>
                      <div className="text-xs text-gray-500">per night</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Phone className="h-4 w-4" />
                    <span>{hotel.phone}</span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={`/hotel/${hotel.id}`}>View Details</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/hotel/${hotel.id}/book`}>Book Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredHotels.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Hotels
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredHotels.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No hotels found</h3>
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
