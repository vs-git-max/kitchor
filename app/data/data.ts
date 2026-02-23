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
