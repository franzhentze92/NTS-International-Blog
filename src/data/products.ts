export interface Product {
  id: number;
  name: string;
  flavor: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  color: string;
  bgGradient: string;
  benefits: string[];
  ingredients: string[];
  nutrition: {
    calories: number;
    sugar: string;
    fiber: string;
    vitamins: string[];
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Berry Bliss",
    flavor: "Mixed Berry",
    price: 3.99,
    description: "A delightful blend of strawberries, blueberries, and raspberries",
    longDescription: "Experience the perfect harmony of nature's finest berries. Our Berry Bliss combines antioxidant-rich strawberries, blueberries, and raspberries with prebiotics and adaptogens for a drink that tastes amazing and supports your gut health.",
    image: "https://d64gsuwffb70l.cloudfront.net/69603f4a08b2a2fcae755025_1767915754633_670e2090.jpg",
    color: "#FF6B9D",
    bgGradient: "from-pink-400 via-pink-300 to-purple-300",
    benefits: ["Rich in antioxidants", "Supports gut health", "Natural energy boost"],
    ingredients: ["Sparkling water", "Organic berry juice", "Prebiotics", "Ashwagandha", "Natural flavors"],
    nutrition: {
      calories: 35,
      sugar: "5g",
      fiber: "9g",
      vitamins: ["Vitamin C", "Vitamin B12", "Zinc"]
    }
  },
  {
    id: 2,
    name: "Tropical Sunrise",
    flavor: "Mango Passion",
    price: 3.99,
    description: "Escape to paradise with mango, passion fruit, and a hint of pineapple",
    longDescription: "Transport yourself to a tropical paradise with every sip. Tropical Sunrise blends exotic mango, tangy passion fruit, and sweet pineapple with our signature prebiotic blend for a vacation in a can.",
    image: "https://d64gsuwffb70l.cloudfront.net/69603f4a08b2a2fcae755025_1767915773410_784018ac.png",
    color: "#FF9F43",
    bgGradient: "from-orange-400 via-yellow-300 to-amber-200",
    benefits: ["Immune support", "Digestive wellness", "Mood enhancer"],
    ingredients: ["Sparkling water", "Organic mango puree", "Passion fruit", "Prebiotics", "Turmeric"],
    nutrition: {
      calories: 40,
      sugar: "6g",
      fiber: "9g",
      vitamins: ["Vitamin A", "Vitamin C", "Potassium"]
    }
  },
  {
    id: 3,
    name: "Lime Refresh",
    flavor: "Lime Mint",
    price: 3.99,
    description: "Crisp lime meets cool mint for the ultimate refreshment",
    longDescription: "When you need a pick-me-up, reach for Lime Refresh. The zesty combination of fresh lime and cooling mint creates an invigorating experience that refreshes your body and mind.",
    image: "https://d64gsuwffb70l.cloudfront.net/69603f4a08b2a2fcae755025_1767915787912_3b3634b8.jpg",
    color: "#2ED573",
    bgGradient: "from-green-400 via-emerald-300 to-teal-200",
    benefits: ["Mental clarity", "Hydration boost", "Digestive aid"],
    ingredients: ["Sparkling water", "Organic lime juice", "Fresh mint extract", "Prebiotics", "Green tea"],
    nutrition: {
      calories: 30,
      sugar: "4g",
      fiber: "9g",
      vitamins: ["Vitamin C", "Vitamin K", "Iron"]
    }
  },
  {
    id: 4,
    name: "Ocean Blue",
    flavor: "Blueberry Lavender",
    price: 3.99,
    description: "Calming blueberry and lavender for peaceful moments",
    longDescription: "Find your zen with Ocean Blue. This unique blend of sweet blueberries and aromatic lavender creates a calming experience perfect for unwinding after a long day while still supporting your wellness goals.",
    image: "https://d64gsuwffb70l.cloudfront.net/69603f4a08b2a2fcae755025_1767915804864_f7106d11.png",
    color: "#54A0FF",
    bgGradient: "from-blue-400 via-cyan-300 to-sky-200",
    benefits: ["Stress relief", "Better sleep", "Antioxidant rich"],
    ingredients: ["Sparkling water", "Organic blueberry juice", "Lavender extract", "Prebiotics", "L-theanine"],
    nutrition: {
      calories: 35,
      sugar: "5g",
      fiber: "9g",
      vitamins: ["Vitamin C", "Vitamin E", "Magnesium"]
    }
  },
  {
    id: 5,
    name: "Peachy Dream",
    flavor: "Peach Ginger",
    price: 3.99,
    description: "Sweet peach with a warming ginger kick",
    longDescription: "Dreams do come true with Peachy Dream. Juicy Georgia peaches meet spicy ginger root for a flavor combination that's both comforting and energizing. Perfect for any time of day.",
    image: "https://d64gsuwffb70l.cloudfront.net/69603f4a08b2a2fcae755025_1767915820321_9bdc8e67.jpg",
    color: "#FF7F50",
    bgGradient: "from-orange-300 via-rose-300 to-pink-200",
    benefits: ["Anti-inflammatory", "Digestive support", "Natural energy"],
    ingredients: ["Sparkling water", "Organic peach puree", "Ginger root", "Prebiotics", "Apple cider vinegar"],
    nutrition: {
      calories: 38,
      sugar: "5g",
      fiber: "9g",
      vitamins: ["Vitamin A", "Vitamin C", "B6"]
    }
  },
  {
    id: 6,
    name: "Grape Glow",
    flavor: "Concord Grape",
    price: 3.99,
    description: "Classic grape flavor with a modern wellness twist",
    longDescription: "Nostalgia meets nutrition in Grape Glow. We've taken the beloved taste of Concord grapes and elevated it with our prebiotic blend for a drink that satisfies your cravings while supporting your health.",
    image: "https://d64gsuwffb70l.cloudfront.net/69603f4a08b2a2fcae755025_1767915836911_ea4ad8fe.png",
    color: "#A55EEA",
    bgGradient: "from-purple-400 via-violet-300 to-fuchsia-200",
    benefits: ["Heart health", "Brain function", "Skin glow"],
    ingredients: ["Sparkling water", "Organic grape juice", "Resveratrol", "Prebiotics", "Elderberry"],
    nutrition: {
      calories: 40,
      sugar: "6g",
      fiber: "9g",
      vitamins: ["Vitamin C", "Vitamin K", "Resveratrol"]
    }
  }
];

export const heroImage = "https://d64gsuwffb70l.cloudfront.net/69603f4a08b2a2fcae755025_1767915857548_2c12b4c2.png";
export const lifestyleImage = "https://d64gsuwffb70l.cloudfront.net/69603f4a08b2a2fcae755025_1767915879870_4b0aef36.jpg";
export const teamImage = "https://d64gsuwffb70l.cloudfront.net/69603f4a08b2a2fcae755025_1767915896006_7d080af7.jpg";
