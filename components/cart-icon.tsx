"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import Link from "next/link"

export function CartIcon() {
  const { itemCount } = useCart()

  return (
    <Link href="/cart">
      <Button variant="ghost" className="relative">
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
            {itemCount}
          </span>
        )}
      </Button>
    </Link>
  )
}
