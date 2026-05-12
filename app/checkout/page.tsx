import { NavBar } from "@/components/nav-bar"
import { CheckoutForm } from "@/components/checkout-form"
import { redirect } from "next/navigation"
import { getCurrentUser } from "@/app/actions"

export default async function CheckoutPage() {
  const user = await getCurrentUser()

  // Redirect to login if user is not logged in
  if (!user) {
    redirect("/login?redirect=/checkout")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="mb-8 text-3xl font-bold">Checkout</h1>
          <CheckoutForm user={user} />
        </div>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Farmwise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
