import { FaShieldAlt, FaTools } from "react-icons/fa";
import { FaDollarSign, FaHandshake } from "react-icons/fa6";

export const navItems = [
  { label: "Home", link: "/" },
  { label: "Kitchens", link: "/kitchen" },
  { label: "Projects", link: "/projects" },
  { label: "Shop", link: "/shop" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

export const kitchenLayouts = [
  {
    slug: "country-kitchen-design",
    title: "Country Kitchen",
    image: "/kitchen/country.jpg",
    shortDescription:
      "A warm and inviting kitchen layout inspired by rustic charm and natural materials.",
    longDescription:
      "The Country Kitchen design embraces warmth, comfort, and timeless craftsmanship. Featuring natural wood cabinetry, soft color palettes, farmhouse sinks, and open shelving, this layout creates a welcoming atmosphere perfect for family living.",
  },
  {
    slug: "concord-kitchen-design",
    title: "Concord Kitchen",
    image: "/kitchen/concord.jpg",
    shortDescription:
      "A balanced kitchen layout combining contemporary elegance with functional design.",
    longDescription:
      "The Concord Kitchen layout is designed for homeowners who value symmetry, clean lines, and efficient space planning. With streamlined cabinetry and integrated storage solutions, this modern kitchen enhances workflow while maintaining sophistication.",
  },
  {
    slug: "classic-kitchen-design",
    title: "Classic Kitchen",
    image: "/kitchen/classic.jpg",
    shortDescription:
      "A timeless kitchen design featuring elegant detailing and enduring style.",
    longDescription:
      "The Classic Kitchen layout reflects traditional elegance with refined finishes, decorative moldings, and balanced proportions. Designed to stand the test of time, it delivers both beauty and functionality.",
  },
  {
    slug: "luxor-kitchen-design",
    title: "Luxor Kitchen",
    image: "/kitchen/luxor.jpg",
    shortDescription:
      "A premium luxury kitchen layout defined by bold design and high-end finishes.",
    longDescription:
      "The Luxor Kitchen layout represents the pinnacle of luxury kitchen design, featuring statement islands, bespoke cabinetry, premium stone countertops, and advanced appliance integration.",
  },
];

export const whyChooseUs = [
  {
    title: "Full Service",
    icon: FaTools,
    description:
      "From design to installation and repair, we handle every aspect of your kitchen project, ensuring a seamless experience.",
  },
  {
    title: "Deliver Value",
    icon: FaDollarSign,
    description:
      "We provide top-quality workmanship and materials at competitive prices, maximizing your investment and satisfaction.",
  },
  {
    title: "Partners",
    icon: FaHandshake,
    description:
      "We collaborate closely with our clients and suppliers, building long-term relationships that result in exceptional kitchen solutions.",
  },
  {
    title: "Integrity",
    icon: FaShieldAlt,
    description:
      "Honesty, transparency, and accountability guide everything we do, so you can trust us to deliver exactly what we promise.",
  },
];

export const kitchenDesigns = [
  {
    id: 1,
    name: "Modern Minimalist Kitchen",
    style: "Modern",
    description:
      "A sleek kitchen design focused on clean lines, handleless cabinets, and a clutter-free layout.",
    priceRange: "$8,000 - $15,000",
    materials: [
      "Quartz Countertops",
      "Matte Laminate Cabinets",
      "Stainless Steel",
    ],
    colorScheme: ["White", "Light Gray", "Black Accents"],
    features: [
      "Soft-close drawers",
      "Hidden storage",
      "Under-cabinet lighting",
    ],
    size: "Medium",
    image: "/images/kitchens/design.jpg",
    rating: 4.7,
    popular: true,
  },
  {
    id: 2,
    name: "Classic Wooden Kitchen",
    style: "Traditional",
    description:
      "A warm and timeless kitchen with natural wood cabinetry and elegant detailing.",
    priceRange: "$10,000 - $18,000",
    materials: ["Oak Wood", "Granite Countertops", "Ceramic Tiles"],
    colorScheme: ["Brown", "Cream", "Gold"],
    features: ["Decorative moldings", "Large pantry", "Double sink"],
    size: "Large",
    image: "/images/kitchens/design2.jpg",
    rating: 4.5,
    popular: false,
  },
  {
    id: 3,
    name: "Industrial Loft Kitchen",
    style: "Industrial",
    description:
      "Inspired by urban lofts, this kitchen blends raw materials like metal and concrete.",
    priceRange: "$9,000 - $16,000",
    materials: ["Concrete Countertops", "Steel Cabinets", "Exposed Brick"],
    colorScheme: ["Charcoal", "Dark Brown", "Metallic Gray"],
    features: ["Open shelving", "Pendant lighting", "Exposed piping design"],
    size: "Medium",
    image: "/images/kitchens/design3.jpg",
    rating: 4.6,
    popular: true,
  },
  {
    id: 4,
    name: "Scandinavian Kitchen",
    style: "Scandinavian",
    description:
      "A bright and functional kitchen design with natural light, light woods, and simplicity.",
    priceRange: "$7,000 - $13,000",
    materials: ["Birch Wood", "White Quartz", "Glass"],
    colorScheme: ["White", "Light Wood", "Soft Gray"],
    features: ["Open shelves", "Minimal hardware", "Large windows"],
    size: "Small",
    image: "/images/kitchens/design4.jpg",
    rating: 4.8,
    popular: true,
  },
  {
    id: 5,
    name: "Luxury Marble Kitchen",
    style: "Luxury",
    description:
      "A premium kitchen design featuring marble finishes and high-end appliances.",
    priceRange: "$20,000 - $40,000",
    materials: ["Marble Countertops", "Custom Wood Cabinets", "Brass Fixtures"],
    colorScheme: ["White Marble", "Gold", "Dark Walnut"],
    features: ["Kitchen island", "Wine cooler", "Built-in smart appliances"],
    size: "Large",
    image: "/images/kitchens/design5.jpg",
    rating: 4.9,
    popular: true,
  },
  {
    id: 6,
    name: "Farmhouse Kitchen",
    style: "Farmhouse",
    description:
      "A cozy and rustic kitchen with vintage charm and practical storage.",
    priceRange: "$9,000 - $17,000",
    materials: ["Reclaimed Wood", "Butcher Block", "Ceramic Sink"],
    colorScheme: ["White", "Pastel Blue", "Natural Wood"],
    features: ["Apron-front sink", "Open shelves", "Rustic lighting"],
    size: "Medium",
    image: "/images/kitchens/design6.jpg",
    rating: 4.6,
    popular: false,
  },
  {
    id: 7,
    name: "Smart Tech Kitchen",
    style: "Contemporary",
    description:
      "A technology-driven kitchen equipped with smart appliances and automation.",
    priceRange: "$15,000 - $30,000",
    materials: ["Glass Cabinets", "Quartz Countertops", "Aluminum Fixtures"],
    colorScheme: ["Black", "White", "Chrome"],
    features: [
      "Smart fridge",
      "Touchless faucets",
      "Voice-controlled lighting",
    ],
    size: "Large",
    image: "/images/kitchens/design7.jpg",
    rating: 4.7,
    popular: true,
  },
  {
    id: 8,
    name: "Compact Apartment Kitchen",
    style: "Modern Compact",
    description:
      "Designed for small apartments, maximizing storage and efficiency in limited space.",
    priceRange: "$5,000 - $9,000",
    materials: ["Laminate Cabinets", "Quartz Countertops", "Steel Handles"],
    colorScheme: ["White", "Light Gray", "Pastel Green"],
    features: ["Foldable counter", "Vertical storage", "Compact appliances"],
    size: "Small",
    image: "/images/kitchens/design8.jpg",
    rating: 4.4,
    popular: false,
  },
];
