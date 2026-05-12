// Product data with extended information for product detail pages
export interface Product {
  id: string
  name: string
  image: string
  price: string
  vendor: string
  isOrganic: boolean
  description: string
  details: string[]
  category: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Strawberries",
    image: "/images/strawberries.jpg",
    price: "275/basket",
    vendor: "Sunshine Farms",
    isOrganic: true,
    description:
      "Sweet, juicy organic strawberries grown without pesticides. These vibrant red berries are perfect for snacking, baking, or adding to your favorite smoothie.",
    details: [
      "Freshly harvested from farms in Himachal Pradesh",
      "Grown using organic farming practices",
      "Rich in vitamin C and antioxidants",
      "Approximately 500g per basket",
    ],
    category: "fruits",
  },
  {
    id: "2",
    name: "Fresh Baked Bread",
    image: "/images/bread.jpg",
    price: "150/loaf",
    vendor: "Desi Bakery",
    isOrganic: false,
    description:
      "Artisanal sourdough bread baked fresh daily using traditional methods. Our bread features a crispy crust and soft, airy interior with a mild tangy flavor.",
    details: [
      "Made with locally milled flour",
      "No preservatives or artificial ingredients",
      "Naturally leavened with our 5-year-old sourdough starter",
      "Each loaf weighs approximately 800g",
    ],
    category: "bakery",
  },
  {
    id: "3",
    name: "Himalayan Honey",
    image: "/images/honey.jpg",
    price: "650/jar",
    vendor: "Bee Happy Apiaries",
    isOrganic: true,
    description:
      "Pure, raw honey collected from Himalayan wildflower meadows. This unfiltered honey retains all of its natural enzymes, pollen, and beneficial properties.",
    details: [
      "Harvested from hives in Uttarakhand",
      "Never heated or ultra-filtered",
      "Rich in antioxidants and has antibacterial properties",
      "500ml glass jar",
    ],
    category: "pantry",
  },
  {
    id: "4",
    name: "Heirloom Tomatoes",
    image: "/images/tomatoes.jpg",
    price: "120/kg",
    vendor: "Green Thumb Gardens",
    isOrganic: true,
    description:
      "Colorful mix of heirloom tomato varieties, each with its own unique flavor profile. These tomatoes are grown for taste rather than shelf life, offering superior flavor.",
    details: [
      "Multiple varieties including Brandywine, Cherokee Purple, and Green Zebra",
      "Grown using organic methods",
      "Harvested at peak ripeness for maximum flavor",
      "Perfect for salads, sauces, or eating fresh",
    ],
    category: "vegetables",
  },
  {
    id: "5",
    name: "Free-Range Eggs",
    image: "/images/eggs.jpg",
    price: "120/dozen",
    vendor: "Happy Hen Farm",
    isOrganic: true,
    description:
      "Farm-fresh eggs from free-range chickens raised on organic feed. Our hens roam freely during the day, resulting in eggs with vibrant orange yolks and superior taste.",
    details: [
      "Collected daily from free-range chickens",
      "Chickens are fed an organic diet supplemented with kitchen scraps",
      "No antibiotics or hormones",
      "Mixed sizes from medium to extra large",
    ],
    category: "dairy",
  },
  {
    id: "6",
    name: "Artisan Paneer",
    image: "/images/cheese.jpg",
    price: "280/pack",
    vendor: "Valley Creamery",
    isOrganic: false,
    description:
      "Handcrafted paneer made in small batches using traditional methods. This fresh Indian cheese has a rich, creamy texture and mild flavor that's perfect for curries and grilling.",
    details: [
      "Made from locally sourced cow's milk",
      "No artificial preservatives or additives",
      "High in protein and calcium",
      "200g vacuum-sealed pack",
    ],
    category: "dairy",
  },
  {
    id: "7",
    name: "Organic Kashmiri Apples",
    image: "/images/apples.jpg",
    price: "220/kg",
    vendor: "Orchard Hills",
    isOrganic: true,
    description:
      "Crisp, sweet organic apples grown in the highlands of Kashmir. These apples are perfect for snacking, baking, or adding to salads.",
    details: [
      "Varieties include Royal Delicious and Ambri",
      "Grown using organic farming practices",
      "No wax coating or preservatives",
      "Rich in fiber and antioxidants",
    ],
    category: "fruits",
  },
  {
    id: "8",
    name: "Fresh Herbs",
    image: "/images/herbs.jpg",
    price: "60/bunch",
    vendor: "Green Thumb Gardens",
    isOrganic: true,
    description:
      "Aromatic fresh herbs that will elevate any dish. Each bunch contains a generous amount of freshly harvested herbs with vibrant flavor and aroma.",
    details: [
      "Available varieties include coriander, mint, curry leaves, and tulsi",
      "Grown using organic methods",
      "Harvested the morning of market day",
      "Store with stems in water for extended freshness",
    ],
    category: "vegetables",
  },
  {
    id: "9",
    name: "Organic Jaggery",
    image: "/images/maple-syrup.jpg",
    price: "180/pack",
    vendor: "Desi Farms",
    isOrganic: true,
    description:
      "Traditional organic jaggery made from sugarcane juice. This natural sweetener has a rich caramel flavor and is packed with minerals and antioxidants.",
    details: [
      "100% pure organic jaggery with no additives",
      "Produced using traditional methods",
      "Rich in iron and minerals",
      "500g block",
    ],
    category: "pantry",
  },
  {
    id: "10",
    name: "Grass-Fed Mutton",
    image: "/images/beef.jpg",
    price: "720/kg",
    vendor: "Green Pastures",
    isOrganic: true,
    description:
      "Premium grass-fed mutton from sheep raised on open pastures. This meat is leaner than grain-fed alternatives and has a more complex flavor profile.",
    details: [
      "Sheep are 100% grass-fed and finished",
      "No antibiotics or growth hormones",
      "Humanely raised with sustainable farming practices",
      "Available cuts include curry pieces, chops, and mince",
    ],
    category: "meat",
  },
  {
    id: "11",
    name: "Organic Carrots",
    image: "/images/carrots.jpg",
    price: "80/bunch",
    vendor: "Root Farm",
    isOrganic: true,
    description:
      "Sweet, crunchy organic carrots with vibrant orange color. These freshly harvested carrots are perfect for snacking, cooking, or juicing.",
    details: [
      "Grown in rich, organic soil",
      "No pesticides or synthetic fertilizers",
      "High in beta-carotene and fiber",
      "Approximately 500g per bunch with tops",
    ],
    category: "vegetables",
  },
  {
    id: "12",
    name: "Handmade Ayurvedic Soap",
    image: "/images/soap.jpg",
    price: "180/bar",
    vendor: "Natural Essentials",
    isOrganic: false,
    description:
      "Artisanal soap made with natural oils and ayurvedic herbs. Each bar is handcrafted in small batches and cured for 4-6 weeks for a mild, long-lasting soap.",
    details: [
      "Made with coconut oil, neem oil, and shea butter",
      "Infused with turmeric, neem, and other ayurvedic herbs",
      "Free from synthetic fragrances, colors, and preservatives",
      "Approximately 100g per bar",
    ],
    category: "personal-care",
  },
  {
    id: "13",
    name: "Alphonso Mangoes",
    image: "/images/mangoes.jpg",
    price: "450/dozen",
    vendor: "Tropical Fruits Farm",
    isOrganic: true,
    description:
      "Sweet, juicy Alphonso mangoes from Ratnagiri. Known as the 'King of Mangoes', these mangoes have a smooth, fiber-free flesh and intense sweetness.",
    details: [
      "Premium Alphonso variety (Ratnagiri mango)",
      "Tree-ripened for optimal sweetness",
      "No chemical ripening agents used",
      "Perfect for eating fresh or making into desserts",
    ],
    category: "fruits",
  },
  {
    id: "14",
    name: "Homemade Ghee",
    image: "/images/ube-jam.jpg",
    price: "550/jar",
    vendor: "Desi Delights",
    isOrganic: false,
    description:
      "Traditional A2 cow ghee made using the bilona method. This golden clarified butter has a rich, nutty aroma and is perfect for cooking, tempering, or as a condiment.",
    details: [
      "Made from A2 cow milk from indigenous breeds",
      "Prepared using the traditional bilona (churning) method",
      "No additives or preservatives",
      "500g glass jar",
    ],
    category: "pantry",
  },
  {
    id: "15",
    name: "Fresh Lemons",
    image: "/images/calamansi.jpg",
    price: "80/kg",
    vendor: "Citrus Grove",
    isOrganic: true,
    description:
      "Fresh, juicy lemons with bright, aromatic juice. These citrus fruits have a perfect balance of acidity and flavor, ideal for beverages and cooking.",
    details: [
      "Locally grown in Maharashtra",
      "Harvested at peak ripeness",
      "Rich in vitamin C",
      "Great for juice, pickles, and cooking",
    ],
    category: "fruits",
  },
  {
    id: "16",
    name: "Cold-Pressed Coconut Oil",
    image: "/images/coconut-oil.jpg",
    price: "350/bottle",
    vendor: "Coconut Haven",
    isOrganic: true,
    description:
      "Cold-pressed virgin coconut oil with a light coconut aroma and flavor. This versatile oil can be used for cooking, baking, or as a natural beauty product.",
    details: [
      "Made from fresh coconuts within 24 hours of harvesting",
      "Cold-pressed to preserve nutrients and flavor",
      "No chemicals or high heat used in processing",
      "500ml glass bottle",
    ],
    category: "pantry",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(id: string, count: number): Product[] {
  const currentProduct = getProductById(id)

  if (!currentProduct) {
    return []
  }

  // Get products in the same category, excluding the current product
  const sameCategory = products.filter((product) => product.category === currentProduct.category && product.id !== id)

  // If we don't have enough products in the same category, add some random products
  let related = [...sameCategory]

  if (related.length < count) {
    const otherProducts = products.filter(
      (product) => product.category !== currentProduct.category && product.id !== id,
    )

    // Shuffle the array to get random products
    const shuffled = [...otherProducts].sort(() => 0.5 - Math.random())

    // Add enough products to reach the desired count
    related = [...related, ...shuffled.slice(0, count - related.length)]
  }

  // Return only the requested number of products
  return related.slice(0, count)
}

export function getAllProducts(): Product[] {
  return products
}
