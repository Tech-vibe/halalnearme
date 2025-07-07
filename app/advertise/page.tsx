"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Target, TrendingUp, Eye, Users, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function AdvertisePage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    adType: "",
    budget: "",
    message: "",
  })

  const adPackages = [
    {
      name: "Starter",
      price: "$299/month",
      features: [
        "Featured listing on homepage",
        "Priority in search results",
        "Basic analytics dashboard",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$599/month",
      features: [
        "Everything in Starter",
        "Banner ads on category pages",
        "Social media promotion",
        "Advanced analytics",
        "Phone support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$999/month",
      features: [
        "Everything in Professional",
        "Custom landing page",
        "Newsletter inclusion",
        "Dedicated account manager",
        "Custom reporting",
      ],
      popular: false,
    },
  ]

  const stats = [
    { icon: Users, label: "Monthly Active Users", value: "50,000+" },
    { icon: Eye, label: "Page Views", value: "500,000+" },
    { icon: Target, label: "Targeted Audience", value: "Muslim Community" },
    { icon: TrendingUp, label: "Growth Rate", value: "25% Monthly" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitted(true)
      toast({
        title: "Advertising Request Sent!",
        description: "Our advertising team will contact you within 24 hours.",
      })
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Thank you for your interest in advertising with us. Our team will contact you within 24 hours to discuss
              your advertising needs.
            </p>
            <Button asChild className="w-full">
              <Link href="/">Return to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Advertise With Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Reach the Muslim community and grow your halal business with targeted advertising
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <stat.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Advertise Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Why Advertise With HalalNearMe?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Targeted Audience</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Reach Muslims actively searching for halal food and services
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">High Engagement</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Our users are highly engaged and ready to make purchasing decisions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Trusted Platform</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Build trust with our verified and authentic halal community
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Measurable Results</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Track your ROI with detailed analytics and reporting
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Advertising Benefits"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Packages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Advertising Packages</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {adPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "border-green-500 border-2" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{pkg.name}</div>
                    <div className="text-3xl font-bold text-green-600 mt-2">{pkg.price}</div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Start Your Advertising Campaign</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company/Business Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="adType">Advertising Package *</Label>
                  <Select
                    value={formData.adType}
                    onValueChange={(value) => setFormData({ ...formData, adType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="starter">Starter - $299/month</SelectItem>
                      <SelectItem value="professional">Professional - $599/month</SelectItem>
                      <SelectItem value="enterprise">Enterprise - $999/month</SelectItem>
                      <SelectItem value="custom">Custom Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Monthly Budget *</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-500">Under $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                      <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                      <SelectItem value="over-5000">Over $5,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Campaign Goals & Requirements *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your advertising goals, target audience, and any specific requirements..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? "Submitting..." : "Request Advertising Information"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
