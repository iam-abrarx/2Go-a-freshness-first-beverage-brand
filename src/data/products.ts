export interface Product {
  id: number;
  name: string;
  category: "juice" | "shake" | "coffee";
  description: string;
  ingredients: string;
  size: string;
  price: number;
  originalPrice?: number;
  image: string;
  realImage?: string;
  specialNotes?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Pineapple Juice",
    category: "juice",
    description: "A bright and naturally sweet juice made from freshly pressed pineapples. Smooth texture with a hint of tang that delivers tropical freshness in every sip.",
    ingredients: "Fresh pineapple, purified water",
    size: "250ml",
    price: 150,
    originalPrice: 180,
    image: "/assets/bottles/Fruit Fizz Bottle.png",
    specialNotes: [
      "Consume within one day of purchase",
      "Keep refrigerated below 4°C for up to 2–3 hours if storing",
      "Shake well before drinking",
      "Do not consume if the bottle appears swollen or looks fizzy"
    ]
  },
  {
    id: 2,
    name: "Watermelon Juice",
    category: "juice",
    description: "Light, sweet, and refreshing. Made from pure watermelon for a naturally cooling experience and a clean, hydrating finish.",
    ingredients: "Fresh watermelon, purified water",
    size: "250ml",
    price: 120,
    originalPrice: 150,
    image: "/assets/bottles/Watermelon Bottle.png",
    realImage: "/assets/bottles/real_photos/watermelon.png",
    specialNotes: [
      "Consume within one day of purchase",
      "Keep refrigerated below 4°C for up to 2–3 hours if storing",
      "Shake well before drinking"
    ]
  },
  {
    id: 3,
    name: "Papaya Juice",
    category: "juice",
    description: "Thick, mellow, and mildly sweet. A wholesome juice rich in natural fiber with a smooth, creamy consistency.",
    ingredients: "Fresh papaya, purified water",
    size: "250ml",
    price: 140,
    image: "/assets/bottles/Papaya Bottle.png",
    realImage: "/assets/bottles/real_photos/papaya.png",
    specialNotes: [
      "Consume within one day of purchase",
      "Keep refrigerated below 4°C for up to 2–3 hours if storing",
      "Rich in natural fiber"
    ]
  },
  {
    id: 4,
    name: "Lemon Guava",
    category: "juice",
    description: "A refreshing balance of sour lemon, sweet guava, and cool mint with a subtle kick of green chili. A bold and lively combination crafted for the adventurous palate.",
    ingredients: "Fresh lemon, guava, mint leaves, green chili, purified water",
    size: "250ml",
    price: 130,
    image: "/assets/bottles/Fruit Fizz Bottle.png",
    realImage: "/assets/bottles/real_photos/lemon_guava.png",
    specialNotes: [
      "Subtle kick of green chili",
      "Adventure in a bottle",
      "Shake well before drinking"
    ]
  },
  {
    id: 7,
    name: "Fruit Fizz",
    category: "juice",
    description: "A vibrant blend of sweet watermelon and tangy pineapple finished with fresh mint. Naturally lively and full of balanced flavor.",
    ingredients: "Fresh watermelon, pineapple, mint leaves, purified water",
    size: "250ml",
    price: 150,
    image: "/assets/bottles/Fruit Fizz Bottle.png",
    realImage: "/assets/bottles/real_photos/Fizz.png",
    specialNotes: [
      "Watermelon + Pineapple + Mint",
      "Naturally lively flavor"
    ]
  },
  {
    id: 5,
    name: "Banana Chocolate Shake",
    category: "shake",
    description: "Smooth, creamy, and lightly sweet. A rich blend of ripe banana and dark chocolate made for comfort and energy.",
    ingredients: "Fresh banana, dark chocolate, milk, small amount of sugar",
    size: "250ml",
    price: 180,
    image: "/assets/bottles/Papaya Bottle.png",
  },
  {
    id: 6,
    name: "Cold Coffee",
    category: "coffee",
    description: "A smooth and aromatic cold coffee with balanced sweetness and creamy texture. Brewed fresh for a satisfying, chilled finish.",
    ingredients: "Brewed coffee, milk, small amount of sugar",
    size: "250ml",
    price: 160,
    image: "/assets/bottles/Cold Coffee Bottle.png",
    realImage: "/assets/bottles/real_photos/cold_coffee.png",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "juice", label: "Juices" },
  { id: "shake", label: "Shakes" },
  { id: "coffee", label: "Coffee" },
];
