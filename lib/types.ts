export interface User {
  id: string
  email: string
  name: string
  role: "customer" | "vendor" | "admin"
  isVerified: boolean
  phone?: string
  address?: string
  createdAt: Date
  updatedAt: Date
}

export interface Restaurant {
  id: string
  name: string
  description: string
  address: string
  location: {
    latitude: number
    longitude: number
  }
  phone: string
  email: string
  website?: string
  images: string[]
  categories: string[]
  cuisineTypes: string[]
  priceRange: "budget" | "mid-range" | "premium"
  rating: number
  reviewCount: number
  isVerified: boolean
  isOpen: boolean
  openingHours: {
    [key: string]: {
      open: string
      close: string
      isClosed: boolean
    }
  }
  features: string[]
  ownerId: string
  createdAt: Date
  updatedAt: Date
}

export interface MenuItem {
  id: string
  restaurantId: string
  name: string
  description: string
  price: number
  category: string
  image?: string
  isVegetarian: boolean
  isAvailable: boolean
  ingredients: string[]
  allergens: string[]
  preparationTime: number
  createdAt: Date
  updatedAt: Date
}

export interface Order {
  id: string
  customerId: string
  restaurantId: string
  items: OrderItem[]
  totalAmount: number
  status: "pending" | "confirmed" | "preparing" | "ready" | "delivered" | "cancelled"
  orderType: "delivery" | "pickup" | "dine-in"
  deliveryAddress?: string
  customerNotes?: string
  estimatedDeliveryTime?: Date
  paymentStatus: "pending" | "paid" | "failed" | "refunded"
  paymentMethod: "razorpay" | "cod"
  razorpayOrderId?: string
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  menuItemId: string
  name: string
  price: number
  quantity: number
  specialInstructions?: string
}

export interface Booking {
  id: string
  customerId: string
  restaurantId: string
  date: Date
  time: string
  partySize: number
  status: "pending" | "confirmed" | "cancelled" | "completed"
  customerNotes?: string
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  customerId: string
  restaurantId: string
  orderId?: string
  rating: number
  comment: string
  images?: string[]
  createdAt: Date
  updatedAt: Date
}
