"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Banknote } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { createRazorpayOrder, initiatePayment } from "@/lib/razorpay"

interface CheckoutFormProps {
  orderItems: Array<{
    id: string
    name: string
    price: number
    quantity: number
  }>
  restaurantName: string
  totalAmount: number
}

export function CheckoutForm({ orderItems, restaurantName, totalAmount }: CheckoutFormProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("razorpay")

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  })

  const handlePayment = async () => {
    setLoading(true)

    try {
      if (paymentMethod === "razorpay") {
        // 1) fetch the public key safely from the server
        const keyRes = await fetch("/api/get-razorpay-key")
        if (!keyRes.ok) throw new Error("Unable to load Razorpay key")
        const { key } = (await keyRes.json()) as { key: string }

        // 2) create Razorpay order on our own backend
        const orderData = await createRazorpayOrder(totalAmount)

        const options = {
          key,
          amount: orderData.amount,
          currency: orderData.currency,
          name: "HalalNearMe",
          description: `Order from ${restaurantName}`,
          order_id: orderData.orderId,
          handler: async (response: any) => {
            // Handle successful payment
            toast({
              title: "Payment Successful!",
              description: "Your order has been placed successfully.",
            })

            // Here you would save the order to Firebase
            console.log("Payment successful:", response)
          },
          prefill: {
            name: customerInfo.name,
            email: customerInfo.email,
            contact: customerInfo.phone,
          },
          theme: {
            color: "#16a34a",
          },
        }

        await initiatePayment(options)
      } else {
        // Handle Cash on Delivery
        toast({
          title: "Order Placed!",
          description: "Your order has been placed. Pay cash on delivery.",
        })
      }
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const deliveryFee = 2.99
  const tax = totalAmount * 0.08 // 8% tax
  const finalTotal = totalAmount + deliveryFee + tax

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {orderItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-500 ml-2">x{item.quantity}</span>
                </div>
                <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Information & Payment */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Delivery Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address</Label>
              <Textarea
                id="address"
                value={customerInfo.address}
                onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                placeholder="Enter your complete delivery address..."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Special Instructions (Optional)</Label>
              <Textarea
                id="notes"
                value={customerInfo.notes}
                onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                placeholder="Any special instructions for the restaurant or delivery..."
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="razorpay" id="razorpay" />
                <Label htmlFor="razorpay" className="flex items-center space-x-2 cursor-pointer flex-1">
                  <CreditCard className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Online Payment</div>
                    <div className="text-sm text-gray-500">Pay securely with Razorpay</div>
                  </div>
                </Label>
                <Badge className="bg-green-100 text-green-800">Recommended</Badge>
              </div>

              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod" className="flex items-center space-x-2 cursor-pointer flex-1">
                  <Banknote className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Cash on Delivery</div>
                    <div className="text-sm text-gray-500">Pay when your order arrives</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>

            <Button
              onClick={handlePayment}
              disabled={
                loading || !customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address
              }
              className="w-full mt-6"
              size="lg"
            >
              {loading ? "Processing..." : `Place Order - $${finalTotal.toFixed(2)}`}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
