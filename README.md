# Shubh_Farmers Market

Shubh_Farmers Market is a modern e-commerce web application built to connect local farmers directly with consumers. It provides a fair and transparent marketplace, eliminating costly intermediaries and ensuring farmers receive fair prices for their hard work while providing consumers with fresh, locally grown produce and artisanal goods.

## Features

- **Direct Farmer-to-Consumer Marketplace:** Discover fresh, seasonal produce and goods directly from local vendors.
- **Product Catalog & Details:** Browse items by category, view detailed product information, and check if items are organic.
- **Vendor Profiles:** Learn about the farmers, bakers, and artisans who provide the products.
- **Loyalty Rewards Program:** Earn points for purchases, redeem rewards, and enjoy exclusive benefits based on membership tiers.
- **User Authentication:** Register and log in to manage your account, orders, and loyalty points.
- **Shopping Cart & Checkout:** Seamless and intuitive purchasing process.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.

## Tech Stack

This project is built with modern web technologies:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (built on Radix UI)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Form Handling & Validation:** React Hook Form + Zod

## Getting Started

### Prerequisites

Ensure you have Node.js and npm (or pnpm/yarn) installed on your system. 

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd Shubh_Farmers
   ```

2. Install dependencies:
   Using npm:
   ```bash
   npm install
   ```
   Or using pnpm (which has a lockfile in this project):
   ```bash
   pnpm install
   ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/`: Contains all Next.js App Router routes including `dashboard`, `products`, `cart`, `checkout`, `loyalty`, `login`, and `register`.
- `components/`: Reusable React components including the UI library (shadcn/ui).
- `lib/`: Utility functions and mock data (e.g., `products.ts`).
- `hooks/`: Custom React hooks.
- `context/`: React context providers for global state.
- `public/`: Static assets such as images.

## Contact & Location

**Location:** Ramjee chak Digh Bata Ganj, Patna, Bihar, India
**Email:** info@bharatfarmersmarket.com
**Phone:** +91 98765 43210
