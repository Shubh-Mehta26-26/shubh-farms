import Link from "next/link";
import { getCurrentUser } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/components/logout-button";
import { Star } from "lucide-react";
import { CartIcon } from "@/components/cart-icon";

export async function NavBar() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-green-600">
              Shubh_Farmers
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/#products"
              className="text-sm font-medium transition-colors hover:text-green-600"
            >
              Products
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium transition-colors hover:text-green-600"
            >
              About
            </Link>
            <Link
              href="/#vendors"
              className="text-sm font-medium transition-colors hover:text-green-600"
            >
              Vendors
            </Link>
            <Link
              href="/#schedule"
              className="text-sm font-medium transition-colors hover:text-green-600"
            >
              Schedule
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium transition-colors hover:text-green-600"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <CartIcon />

          {user ? (
            <>
              <Link href="/loyalty">
                <Button
                  variant="ghost"
                  className="hidden items-center gap-1 md:flex"
                >
                  <Star className="h-4 w-4 text-green-600" />
                  <span>Rewards</span>
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" className="hidden md:flex">
                  Dashboard
                </Button>
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" className="hidden md:flex">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-green-600 hover:bg-green-700">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
