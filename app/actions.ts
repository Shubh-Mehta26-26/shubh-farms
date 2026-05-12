"use server"

import { cookies } from "next/headers"
import type { CartItem } from "@/context/cart-context"

// Mock user database - in a real app, this would be a database query
const USERS = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    password: "password123", // In a real app, this would be hashed
    role: "customer",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password123",
    role: "vendor",
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
]

// Mock orders database
const ORDERS = []

interface LoginData {
  email: string
  password: string
}

interface RegisterData {
  name: string
  email: string
  password: string
}

interface ShippingAddress {
  fullName: string
  address: string
  city: string
  province: string
  postalCode: string
  phone: string
}

interface OrderData {
  userId: string
  items: CartItem[]
  subtotal: number
  shipping: number
  total: number
  paymentMethod: string
  shippingAddress: ShippingAddress
  notes?: string
}

export async function loginUser(data: LoginData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Find user by email
  const user = USERS.find((user) => user.email === data.email)

  // Check if user exists and password matches
  if (!user || user.password !== data.password) {
    return {
      success: false,
      error: "Invalid email or password",
    }
  }

  // Set a cookie with the user info (in a real app, this would be a JWT token)
  const userInfo = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  }

  cookies().set({
    name: "user",
    value: JSON.stringify(userInfo),
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    sameSite: "strict",
  })

  return {
    success: true,
    user: userInfo,
  }
}

export async function registerUser(data: RegisterData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Check if user already exists
  const existingUser = USERS.find((user) => user.email === data.email)

  if (existingUser) {
    return {
      success: false,
      error: "Email already in use",
    }
  }

  // In a real app, we would save the user to the database
  // For this demo, we'll just pretend we did
  const newUser = {
    id: `${USERS.length + 1}`,
    name: data.name,
    email: data.email,
    password: data.password, // In a real app, this would be hashed
    role: "customer",
  }

  // In a real app, we would add the user to the database
  // USERS.push(newUser);

  return {
    success: true,
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  }
}

export async function logoutUser() {
  cookies().delete("user")

  return {
    success: true,
  }
}

export async function getCurrentUser() {
  const userCookie = cookies().get("user")

  if (!userCookie) {
    return null
  }

  try {
    return JSON.parse(userCookie.value)
  } catch (error) {
    return null
  }
}

export async function placeOrder(data: OrderData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  try {
    // In a real app, we would save the order to the database
    // For this demo, we'll just create an order object
    const orderId = `ORD-${Math.floor(Math.random() * 10000)}`

    const order = {
      id: orderId,
      ...data,
      status: "processing",
      createdAt: new Date().toISOString(),
    }

    // In a real app, we would add the order to the database
    // ORDERS.push(order);

    // In a real app, we would also update inventory, send confirmation emails, etc.

    return {
      success: true,
      orderId,
    }
  } catch (error) {
    return {
      success: false,
      error: "Failed to place order. Please try again.",
    }
  }
}
