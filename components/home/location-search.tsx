"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Search, Navigation } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Location {
  latitude: number
  longitude: number
  address: string
}

export function LocationSearch() {
  const [location, setLocation] = useState<Location | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const getCurrentLocation = () => {
    setLoading(true)

    if (!navigator.geolocation) {
      toast({
        title: "Geolocation not supported",
        description: "Please enter your location manually",
        variant: "destructive",
      })
      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords

        try {
          // In a real app, you'd use a geocoding service like Google Maps API
          const address = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`

          setLocation({ latitude, longitude, address })
          toast({
            title: "Location found!",
            description: "Searching for halal restaurants near you...",
          })
        } catch (error) {
          toast({
            title: "Error",
            description: "Failed to get address from coordinates",
            variant: "destructive",
          })
        } finally {
          setLoading(false)
        }
      },
      (error) => {
        toast({
          title: "Location access denied",
          description: "Please enter your location manually",
          variant: "destructive",
        })
        setLoading(false)
      },
    )
  }

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Please enter a location",
        description: "Enter a city, address, or postal code",
        variant: "destructive",
      })
      return
    }

    // In a real app, you'd geocode the search query
    toast({
      title: "Searching...",
      description: `Looking for halal restaurants in ${searchQuery}`,
    })
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Find Halal Food Near You
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Use your current location or search for a specific area
            </p>
          </div>

          <Card className="p-6">
            <CardContent className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder="Enter city, address, or postal code..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12"
                      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleSearch} className="h-12 px-8">
                    Search
                  </Button>
                  <Button
                    variant="outline"
                    onClick={getCurrentLocation}
                    disabled={loading}
                    className="h-12 px-4 bg-transparent"
                  >
                    <Navigation className="h-5 w-5 mr-2" />
                    {loading ? "Getting..." : "Use My Location"}
                  </Button>
                </div>
              </div>

              {location && (
                <div className="flex items-center space-x-2 text-sm text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <MapPin className="h-4 w-4" />
                  <span>Current location: {location.address}</span>
                </div>
              )}

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Restaurants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Food Shops</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Hotels</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cities</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
