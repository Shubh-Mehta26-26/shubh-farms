"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CreditCard, Landmark, Banknote } from "lucide-react"
import Link from "next/link"
import { placeOrder } from "@/app/actions"

interface CheckoutFormProps {
  user: {
    id: string
    name: string
    email: string
  }
}

export function CheckoutForm({ user }: CheckoutFormProps) {
  const { items, subtotal, clearCart } = useCart()
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  // Calculate shipping cost (free for orders over ₹1000)
  const shippingCost = subtotal >= 1000 ? 0 : 100

  // Calculate total
  const total = subtotal + shippingCost

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)

      const orderData = {
        userId: user.id,
        items,
        subtotal,
        shipping: shippingCost,
        total,
        paymentMethod,
        shippingAddress: {
          fullName: formData.get("fullName") as string,
          address: formData.get("address") as string,
          city: formData.get("city") as string,
          state: formData.get("state") as string,
          pinCode: formData.get("pinCode") as string,
          phone: formData.get("phone") as string,
        },
        notes: formData.get("notes") as string,
      }

      const result = await placeOrder(orderData)

      if (result.success) {
        // Clear the cart
        clearCart()

        // Show success toast
        toast({
          title: "Order placed successfully!",
          description: "Thank you for your purchase. You will receive a confirmation email shortly.",
        })

        // Redirect to order confirmation page
        router.push(`/order-confirmation/${result.orderId}`)
      } else {
        toast({
          title: "Failed to place order",
          description: result.error || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) {
    router.push("/cart")
    return null
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="text-xl font-semibold">Shipping Information</h2>
                <p className="text-sm text-muted-foreground">Enter your shipping details</p>
              </div>
              <Separator />
              <div className="p-6 space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" name="fullName" defaultValue={user.name} required disabled={isSubmitting} />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Street address, apartment, landmark, etc."
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" required disabled={isSubmitting} />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" name="state" required disabled={isSubmitting} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="pinCode">PIN Code</Label>
                    <Input id="pinCode" name="pinCode" required disabled={isSubmitting} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" required disabled={isSubmitting} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={user.email}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="text-xl font-semibold">Payment Method</h2>
                <p className="text-sm text-muted-foreground">Select your preferred payment method</p>
              </div>
              <Separator />
              <div className="p-6">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-3"
                  disabled={isSubmitting}
                >
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center gap-2 font-normal">
                      <CreditCard className="h-4 w-4" /> Credit/Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex items-center gap-2 font-normal">
                      <Landmark className="h-4 w-4" /> UPI
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" />
                    <Label htmlFor="cash-on-delivery" className="flex items-center gap-2 font-normal">
                      <Banknote className="h-4 w-4" /> Cash on Delivery
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="text-xl font-semibold">Additional Information</h2>
                <p className="text-sm text-muted-foreground">Add any special instructions or notes</p>
              </div>
              <Separator />
              <div className="p-6">
                <Label htmlFor="notes">Order Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Special delivery instructions, preferred delivery time, etc."
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <Link href="/cart">
                <Button variant="outline" type="button" disabled={isSubmitting}>
                  Back to Cart
                </Button>
              </Link>
              <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                  </>
                ) : (
                  `Complete Order (₹${total.toFixed(2)})`
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <div className="rounded-lg border">
          <div className="p-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <p className="text-sm text-muted-foreground">{items.length} items in your cart</p>
          </div>
          <Separator />
          <ul className="max-h-80 overflow-y-auto divide-y">
            {items.map((item) => (
              <li key={item.id} className="p-4 flex items-center gap-3">
                <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border">
                  <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-medium">₹{Number.parseInt(item.price.split("/")[0]) * item.quantity}</p>
              </li>
            ))}
          </ul>
          <Separator />
          <div className="p-6 space-y-4">
            <div className="flex justify-between">
              <p className="text-muted-foreground">Subtotal</p>
              <p className="font-medium">₹{subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground">Shipping</p>
              <p className="font-medium">{shippingCost === 0 ? "Free" : `₹${shippingCost.toFixed(2)}`}</p>
            </div>
            {shippingCost === 0 && (
              <div className="rounded-md bg-green-50 p-2 text-center text-sm text-green-600">
                You've qualified for free shipping!
              </div>
            )}
            <Separator />
            <div className="flex justify-between">
              <p className="font-medium">Total</p>
              <p className="text-xl font-bold">₹{total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
