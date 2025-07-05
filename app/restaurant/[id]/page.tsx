"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Phone, Clock, Globe, Heart, Share2, Plus, Minus, ShoppingCart } from "lucide-react"
import Link from "next/link"
import type { Restaurant, MenuItem, Review } from "@/lib/types"

// Mock data
const mockRestaurant: Restaurant = {
  id: "1",
  name: "Al-Baik Restaurant",
  description:
    "Authentic Middle Eastern cuisine with the finest halal ingredients. We pride ourselves on serving traditional dishes made with love and care, using recipes passed down through generations.",
  address: "123 Main Street, Downtown, New York, NY 10001",
  location: { latitude: 40.7128, longitude: -74.006 },
  phone: "+1-555-0123",
  email: "info@albaik.com",
  website: "https://albaik.com",
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
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
  features: ["Delivery", "Takeout", "Dine-in", "Parking", "WiFi", "Family Friendly"],
  ownerId: "vendor1",
  createdAt: new Date(),
  updatedAt: new Date(),
}

const mockMenuItems: MenuItem[] = [
  {
    id: "1",
    restaurantId: "1",
    name: "Chicken Shawarma",
    description: "Tender marinated chicken wrapped in fresh pita bread with vegetables and tahini sauce",
    price: 12.99,
    category: "Main Course",
    image: "/placeholder.svg?height=200&width=300",
    isVegetarian: false,
    isAvailable: true,
    ingredients: ["Chicken", "Pita Bread", "Lettuce", "Tomato", "Onion", "Tahini"],
    allergens: ["Gluten", "Sesame"],
    preparationTime: 15,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    restaurantId: "1",
    name: "Falafel Platter",
    description: "Crispy falafel served with hummus, tabbouleh, and fresh vegetables",
    price: 14.99,
    category: "Main Course",
    image: "/placeholder.svg?height=200&width=300",
    isVegetarian: true,
    isAvailable: true,
    ingredients: ["Chickpeas", "Herbs", "Hummus", "Tabbouleh", "Vegetables"],
    allergens: ["Sesame"],
    preparationTime: 12,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    restaurantId: "1",
    name: "Baklava",
    description: "Traditional Middle Eastern pastry with honey and nuts",
    price: 6.99,
    category: "Desserts",
    image: "/placeholder.svg?height=200&width=300",
    isVegetarian: true,
    isAvailable: true,
    ingredients: ["Phyllo Pastry", "Honey", "Nuts", "Butter"],
    allergens: ["Gluten", "Nuts", "Dairy"],
    preparationTime: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const mockReviews: Review[] = [
  {
    id: "1",
    customerId: "customer1",
    restaurantId: "1",
    rating: 5,
    comment: "Amazing food! The shawarma was perfectly seasoned and the service was excellent. Definitely coming back!",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    customerId: "customer2",
    restaurantId: "1",
    rating: 4,
    comment: "Great authentic Middle Eastern food. The falafel was crispy and delicious. Atmosphere is cozy too.",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
  },
]

export default function RestaurantDetailPage() {
  const params = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>(mockRestaurant)
  const [menuItems, setMenuItems] = useState<MenuItem[]>(mockMenuItems)
  const [reviews, setReviews] = useState<Review[]>(mockReviews)
  const [cart, setCart] = useState<{ [key: string]: number }>({})
  const [selectedImage, setSelectedImage] = useState(0)

  const addToCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }))
  }

  const removeFromCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }))
  }

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find((item) => item.id === itemId)
      return total + (item ? item.price * quantity : 0)
    }, 0)
  }

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0)
  }

  const menuCategories = [...new Set(menuItems.map((item) => item.category))]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Restaurant Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-8">
          {/* Image Gallery */}
          <div className="relative h-64 md:h-96">
            <img
              src={restaurant.images[selectedImage] || "/placeholder.svg"}
              alt={restaurant.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {restaurant.isVerified && <Badge className="bg-green-600 hover:bg-green-700">✓ Verified Halal</Badge>}
              <Badge variant={restaurant.isOpen ? "default" : "secondary"}>
                {restaurant.isOpen ? "Open Now" : "Closed"}
              </Badge>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Image Thumbnails */}
            {restaurant.images.length > 1 && (
              <div className="absolute bottom-4 left-4 flex gap-2">
                {restaurant.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-3 h-3 rounded-full ${selectedImage === index ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Restaurant Info */}
          <div className="p-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{restaurant.name}</h1>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">{restaurant.rating}</span>
                    <span className="text-gray-600 dark:text-gray-400">({restaurant.reviewCount} reviews)</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">{restaurant.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.categories.map((category) => (
                    <Badge key={category} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                  {restaurant.cuisineTypes.map((cuisine) => (
                    <Badge key={cuisine} variant="outline">
                      {cuisine}
                    </Badge>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{restaurant.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Phone className="h-4 w-4" />
                    <span>{restaurant.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>Open until 10:00 PM</span>
                  </div>
                  {restaurant.website && (
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <Globe className="h-4 w-4" />
                      <a href={restaurant.website} className="hover:text-green-600">
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:w-80">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Quick Actions
                      {getCartItemCount() > 0 && <Badge variant="destructive">{getCartItemCount()}</Badge>}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" asChild>
                      <Link href={`/restaurant/${restaurant.id}/book`}>Book a Table</Link>
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Call Restaurant
                    </Button>
                    {getCartItemCount() > 0 && (
                      <div className="border-t pt-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Cart Total:</span>
                          <span className="font-bold text-green-600">${getCartTotal().toFixed(2)}</span>
                        </div>
                        <Button className="w-full">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Proceed to Checkout
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="menu" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
          </TabsList>

          <TabsContent value="menu" className="space-y-6">
            {menuCategories.map((category) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {menuItems
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                          {item.image && (
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                          )}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                                {item.isVegetarian && (
                                  <Badge variant="secondary" className="text-xs">
                                    Vegetarian
                                  </Badge>
                                )}
                              </div>
                              <span className="font-bold text-green-600">${item.price.toFixed(2)}</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{item.description}</p>
                            <div className="flex justify-between items-center">
                              <div className="text-xs text-gray-500">
                                <Clock className="h-3 w-3 inline mr-1" />
                                {item.preparationTime} min
                              </div>
                              <div className="flex items-center gap-2">
                                {cart[item.id] > 0 && (
                                  <>
                                    <Button size="sm" variant="outline" onClick={() => removeFromCart(item.id)}>
                                      <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="font-semibold min-w-[2rem] text-center">{cart[item.id]}</span>
                                  </>
                                )}
                                <Button size="sm" onClick={() => addToCart(item.id)} disabled={!item.isAvailable}>
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Customer Reviews
                  <Button>Write a Review</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.createdAt.toLocaleDateString()}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="info" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Opening Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(restaurant.openingHours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="capitalize font-medium">{day}</span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {hours.isClosed ? "Closed" : `${hours.open} - ${hours.close}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Features & Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {restaurant.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="photos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Restaurant Photos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {restaurant.images.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${restaurant.name} photo ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
