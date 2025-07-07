import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Shield, Heart, Award, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Shield, label: "Verified Businesses", value: "500+" },
    { icon: Globe, label: "Cities Covered", value: "50+" },
    { icon: Award, label: "Years of Trust", value: "5+" },
  ]

  const team = [
    {
      name: "Ahmed Hassan",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=200",
      description: "Passionate about connecting the Muslim community with authentic halal food experiences.",
    },
    {
      name: "Sarah Khan",
      role: "Head of Operations",
      image: "/placeholder.svg?height=200&width=200",
      description: "Ensuring quality and authenticity in every business partnership we establish.",
    },
    {
      name: "Omar Ali",
      role: "Technology Director",
      image: "/placeholder.svg?height=200&width=200",
      description: "Building innovative solutions to make halal food discovery seamless and reliable.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-green-600">HalalNearMe</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About HalalNearMe</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your trusted platform for discovering verified halal food experiences worldwide
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  At HalalNearMe, we believe that finding authentic halal food shouldn't be a challenge. Our mission is
                  to connect the global Muslim community with verified halal restaurants, food shops, and hotels,
                  ensuring peace of mind with every meal.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We're committed to building trust through rigorous verification processes, supporting local halal
                  businesses, and creating a platform where faith meets flavor.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Our Mission"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <stat.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Trust & Verification</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every business on our platform undergoes rigorous verification to ensure authentic halal practices.
                </p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Community First</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We prioritize the needs of the Muslim community and support local halal businesses.
                </p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Global Reach</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connecting halal food lovers worldwide with authentic dining experiences in their local areas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Join Our Community</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you're looking for your next halal meal or want to list your business, we're here to help you
              connect with the halal community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/restaurants">Find Restaurants</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/list-business">List Your Business</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
