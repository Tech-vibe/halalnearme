"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Users, Store, ShoppingBag, AlertTriangle, CheckCircle, XCircle, Search, Filter, Eye, Ban } from "lucide-react"

// Mock data
const adminStats = {
  totalVendors: 245,
  pendingApprovals: 12,
  totalOrders: 1567,
  reportedListings: 8,
}

const pendingVendors = [
  {
    id: 1,
    name: "Halal Delights Restaurant",
    owner: "Mohammed Ahmed",
    email: "ahmed@halaldelights.com",
    location: "New York, NY",
    submittedAt: "2024-01-15",
    documents: ["Business License", "Halal Certificate"],
  },
  {
    id: 2,
    name: "Spice Garden",
    owner: "Fatima Khan",
    email: "fatima@spicegarden.com",
    location: "Los Angeles, CA",
    submittedAt: "2024-01-14",
    documents: ["Business License", "Halal Certificate", "Health Permit"],
  },
]

const reportedListings = [
  {
    id: 1,
    restaurant: "Quick Bites",
    issue: "Non-halal ingredients reported",
    reporter: "Anonymous",
    reportedAt: "2024-01-16",
    status: "investigating",
  },
  {
    id: 2,
    restaurant: "Food Corner",
    issue: "Fake halal certification",
    reporter: "User123",
    reportedAt: "2024-01-15",
    status: "pending",
  },
]

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")

  const handleApproveVendor = (vendorId: number) => {
    console.log("Approving vendor:", vendorId)
    // Implementation for approving vendor
  }

  const handleRejectVendor = (vendorId: number) => {
    console.log("Rejecting vendor:", vendorId)
    // Implementation for rejecting vendor
  }

  const handleInvestigateReport = (reportId: number) => {
    console.log("Investigating report:", reportId)
    // Implementation for investigating report
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage vendors, monitor listings, and oversee platform operations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Vendors</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{adminStats.totalVendors}</p>
                </div>
                <Store className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Approvals</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{adminStats.pendingApprovals}</p>
                </div>
                <Users className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {adminStats.totalOrders.toLocaleString()}
                  </p>
                </div>
                <ShoppingBag className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Reported Listings</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{adminStats.reportedListings}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="vendors">Vendor Approvals</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Pending Approvals */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Pending Vendor Approvals
                    <Badge variant="secondary">{pendingVendors.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingVendors.slice(0, 3).map((vendor) => (
                      <div key={vendor.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">{vendor.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {vendor.owner} • {vendor.location}
                            </p>
                          </div>
                          <Badge variant="outline">Pending</Badge>
                        </div>
                        <p className="text-xs text-gray-500 mb-3">Submitted: {vendor.submittedAt}</p>
                        <div className="flex gap-2">
                          <Button size="sm" onClick={() => handleApproveVendor(vendor.id)}>
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleRejectVendor(vendor.id)}>
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent Reports
                    <Badge variant="destructive">{reportedListings.length}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reportedListings.map((report) => (
                      <div key={report.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">{report.restaurant}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{report.issue}</p>
                          </div>
                          <Badge variant={report.status === "investigating" ? "default" : "secondary"}>
                            {report.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500 mb-3">
                          Reported: {report.reportedAt} by {report.reporter}
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleInvestigateReport(report.id)}>
                            <Eye className="h-4 w-4 mr-1" />
                            Investigate
                          </Button>
                          <Button size="sm" variant="destructive">
                            <Ban className="h-4 w-4 mr-1" />
                            Take Action
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="vendors" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Vendor Applications</CardTitle>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search vendors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button size="sm" variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingVendors.map((vendor) => (
                    <div key={vendor.id} className="p-6 border rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{vendor.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400">Owner: {vendor.owner}</p>
                          <p className="text-gray-600 dark:text-gray-400">Email: {vendor.email}</p>
                          <p className="text-gray-600 dark:text-gray-400">Location: {vendor.location}</p>
                        </div>
                        <Badge variant="outline">Pending Review</Badge>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Submitted Documents:</h4>
                        <div className="flex gap-2">
                          {vendor.documents.map((doc) => (
                            <Badge key={doc} variant="secondary">
                              {doc}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Submitted: {vendor.submittedAt}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                          <Button size="sm" onClick={() => handleApproveVendor(vendor.id)}>
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => handleRejectVendor(vendor.id)}>
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reported Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reportedListings.map((report) => (
                    <div key={report.id} className="p-6 border rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-red-600">{report.restaurant}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">Issue: {report.issue}</p>
                          <p className="text-sm text-gray-500">
                            Reported by: {report.reporter} on {report.reportedAt}
                          </p>
                        </div>
                        <Badge variant={report.status === "investigating" ? "default" : "secondary"}>
                          {report.status}
                        </Badge>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleInvestigateReport(report.id)}>
                          <Eye className="h-4 w-4 mr-1" />
                          Investigate
                        </Button>
                        <Button size="sm" variant="outline">
                          Contact Reporter
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Ban className="h-4 w-4 mr-1" />
                          Remove Listing
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    Growth Chart Placeholder - Integrate with Chart.js
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    Activity Chart Placeholder - Integrate with Chart.js
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
