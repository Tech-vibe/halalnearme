"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Handshake, TrendingUp, Users, Globe, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function PartnerPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    partnershipType: "",
    message: "",
  })

  const benefits = [
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Access our growing customer base and increase your revenue through our platform.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a network of verified halal businesses and benefit from community referrals.",
    },
    {
      icon: Globe,
      title: "Marketing Exposure",
      description: "Get featured in our marketing campaigns and reach customers across multiple cities.",
    },
  ]

  const partnershipTypes = [
    {
      title: "Restaurant Partnership",
      description: "Join as a verified halal restaurant and reach thousands of hungry customers.",
      features: ["Online ordering system", "Table booking management", "Customer reviews", "Marketing support"],
    },
    {
      title: "Hotel Partnership",
      description: "List your halal-friendly hotel and attract Muslim travelers worldwide.",
      features: ["Room booking system", "Halal amenities showcase", "Travel community access", "Global visibility"],
    },
    {
      title: "Corporate Partnership",
      description: "Partner with us for bulk orders, corporate events, and employee meal programs.",
      features: ["Volume discounts", "Dedicated account manager", "Custom solutions", "Priority support"],
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitted(true)
      toast({
        title: "Partnership Request Sent!",
        description: "We'll review your request and get back to you within 24 hours.",
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
              Thank you for your interest in partnering with us. We'll review your request and get back to you within 24
              hours.
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Partner With Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join our growing network of verified halal businesses and reach thousands of customers
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <benefit.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Partnership Options</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Handshake className="h-5 w-5 text-green-600" />
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Get Started Today</CardTitle>
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

              <div className="space-y-2">
                <Label htmlFor="partnershipType">Partnership Type *</Label>
                <Select
                  value={formData.partnershipType}
                  onValueChange={(value) => setFormData({ ...formData, partnershipType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select partnership type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restaurant">Restaurant Partnership</SelectItem>
                    <SelectItem value="hotel">Hotel Partnership</SelectItem>
                    <SelectItem value="corporate">Corporate Partnership</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your business *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your business, goals, and how you'd like to partner with us..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading ? "Submitting..." : "Submit Partnership Request"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
