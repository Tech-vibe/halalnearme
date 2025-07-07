"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, MapPin, Store, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function ListBusinessPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    contactNumber: "",
    email: "",
    website: "",
    description: "",
    halalConfirmation: false,
  })

  const [files, setFiles] = useState({
    businessLogo: null as File | null,
    halalCertificate: null as File | null,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFiles((prev) => ({
      ...prev,
      [field]: file,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Validation
    if (!formData.halalConfirmation) {
      toast({
        title: "Halal Confirmation Required",
        description: "Please confirm that your business follows Halal practices.",
        variant: "destructive",
      })
      setLoading(false)
      return
    }

    if (!files.halalCertificate) {
      toast({
        title: "Halal Certificate Required",
        description: "Please upload your Halal certificate.",
        variant: "destructive",
      })
      setLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would integrate with Firebase to save the business listing
      console.log("Form Data:", formData)
      console.log("Files:", files)

      setSubmitted(true)
      toast({
        title: "Listing Submitted Successfully!",
        description: "Thank you. Your listing is submitted and will be reviewed shortly.",
      })
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your listing. Please try again.",
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
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Listing Submitted!</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Thank you. Your listing is submitted and will be reviewed shortly.
              </p>
            </div>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link
                  href="/list-business"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      businessName: "",
                      businessType: "",
                      address: "",
                      city: "",
                      state: "",
                      country: "",
                      pincode: "",
                      contactNumber: "",
                      email: "",
                      website: "",
                      description: "",
                      halalConfirmation: false,
                    })
                    setFiles({
                      businessLogo: null,
                      halalCertificate: null,
                    })
                  }}
                >
                  Submit Another Listing
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-green-600">HalalNearMe</span>
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            List Your Halal Business
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join our platform and connect with customers looking for verified halal businesses. Fill out the form below
            to get started.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5" />
                Business Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange("businessName", e.target.value)}
                      placeholder="Enter your business name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => handleInputChange("businessType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="hotel">Hotel</SelectItem>
                        <SelectItem value="food-shop">Food Shop</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Address Details</h3>

                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Enter complete street address"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="City"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        placeholder="State"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        placeholder="Country"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange("pincode", e.target.value)}
                        placeholder="Pincode"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Information</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactNumber">Contact Number *</Label>
                      <Input
                        id="contactNumber"
                        type="tel"
                        value={formData.contactNumber}
                        onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                        placeholder="Enter contact number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website URL (Optional)</Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      placeholder="https://your-website.com"
                    />
                  </div>
                </div>

                {/* Business Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Business Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Describe your business, specialties, and what makes it unique..."
                    rows={4}
                    required
                  />
                </div>

                {/* File Uploads */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Business Assets</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Business Logo */}
                    <div className="space-y-2">
                      <Label htmlFor="businessLogo">Business Logo or Image (Optional)</Label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Click to upload or drag and drop
                        </div>
                        <div className="text-xs text-gray-500">PNG, JPG up to 5MB</div>
                        <Input
                          id="businessLogo"
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange("businessLogo", e.target.files?.[0] || null)}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-2 bg-transparent"
                          onClick={() => document.getElementById("businessLogo")?.click()}
                        >
                          Choose File
                        </Button>
                        {files.businessLogo && (
                          <div className="mt-2 text-sm text-green-600">✓ {files.businessLogo.name}</div>
                        )}
                      </div>
                    </div>

                    {/* Halal Certificate */}
                    <div className="space-y-2">
                      <Label htmlFor="halalCertificate">Halal Certificate *</Label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Upload your Halal certificate
                        </div>
                        <div className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</div>
                        <Input
                          id="halalCertificate"
                          type="file"
                          accept=".pdf,image/*"
                          onChange={(e) => handleFileChange("halalCertificate", e.target.files?.[0] || null)}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-2 bg-transparent"
                          onClick={() => document.getElementById("halalCertificate")?.click()}
                        >
                          Choose File
                        </Button>
                        {files.halalCertificate && (
                          <div className="mt-2 text-sm text-green-600">✓ {files.halalCertificate.name}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Halal Confirmation */}
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="halalConfirmation"
                      checked={formData.halalConfirmation}
                      onCheckedChange={(checked) => handleInputChange("halalConfirmation", !!checked)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="halalConfirmation" className="text-sm font-medium cursor-pointer">
                        I confirm this business follows Halal practices *
                      </Label>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        By checking this box, you certify that your business adheres to Islamic dietary laws and
                        practices. False information may result in removal from the platform.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button type="submit" disabled={loading} className="flex-1" size="lg">
                    {loading ? "Submitting..." : "Submit Listing"}
                  </Button>
                  <Button type="button" variant="outline" size="lg" asChild className="bg-transparent">
                    <Link href="/">Cancel</Link>
                  </Button>
                </div>

                {/* Note */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Review Process:</strong> All business listings are manually reviewed to ensure quality and
                      authenticity. You'll receive an email within 24-48 hours regarding your listing status.
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
