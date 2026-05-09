import { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Facebook,
  Quote,
  Phone,
  Play,
} from "lucide-react";

const TiktokIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

import Navbar from "./components/Navbar";
import ShinyText from "./components/ui/ShinyText";
import BlurText from "./components/ui/BlurText";
import CurvedLoop from "./components/ui/CurvedLoop";

const MENU_CATEGORIES = [
  {
    title_en: "APPETIZERS & SIDES",
    title_fr: "ENTRÉES & ACCOMPAGNEMENTS",
    items: [
      {
        id: "T01",
        name_fr: "Takoyaki (6 pièces)",
        name_en: "Takoyaki (6 pcs)",
        price: "$8.99",
        desc_fr: "Boulettes de poulpe classiques style Hong Kong.",
        desc_en: "Classic Hong Kong street style octopus balls.",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "B01",
        name_fr: "Soupe udon au bœuf au cari",
        name_en: "Curry Beef Brisket Udon Soup",
        price: "$17.99",
        desc_fr: "Poitrine de bœuf tendre, cari savoureux.",
        desc_en: "Tender beef brisket in a savory curry broth.",
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "B02",
        name_fr: "Cuisse de poulet frit croustillant",
        name_en: "Crispy Fried Chicken Leg",
        price: "$15.99",
        desc_fr: "Avec salade de pommes de terre ou frites.",
        desc_en: "Served with potato salad or fries.",
        image: "https://images.unsplash.com/photo-1626082927389-6cd0b61cff9c?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "B03",
        name_fr: "Toast aux crevettes",
        name_en: "Shrimp Toast",
        price: "$14.99",
        desc_fr: "Pain croustillant aux crevettes avec salade.",
        desc_en: "Crispy bread with shrimp paste, served with salad.",
        image: "https://images.unsplash.com/photo-1541014741259-df5290ce50fb?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "B04",
        name_fr: "Poutine style Hong Kong",
        name_en: "Hong Kong Style Poutine",
        price: "$16.99",
        desc_fr: "Double fromage et sauce à la viande.",
        desc_en: "Double cheese and meat sauce.",
        image: "https://images.unsplash.com/photo-1586805608485-add336722759?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "B05",
        name_fr: "Ailes de poulet croustillantes",
        name_en: "Crispy Chicken Wings",
        price: "$15.99",
        desc_fr: "Servies avec salade de pommes de terre ou frites.",
        desc_en: "Served with potato salad or fries.",
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "B07",
        name_fr: "Boulettes de poisson au cari",
        name_en: "HK Style Curry Fish Balls",
        price: "$8.99",
        desc_fr: "15 morceaux, sauce cari authentique.",
        desc_en: "15 pieces, authentic curry sauce.",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "B17",
        name_fr: "Calmars frits",
        name_en: "Deep Fried Calamari",
        price: "$18.99",
        desc_fr: "Calamars croustillants et tendres.",
        desc_en: "Crispy and tender fried calamari.",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    title_en: "MAIN DISHES",
    title_fr: "PLATS PRINCIPAUX",
    items: [
      {
        id: "C01",
        name_fr: "Riz frit crevettes sakura et poulet",
        name_en: "Sakura Shrimp & Chicken Fried Rice",
        price: "$22.99",
        desc_fr: "Crevettes sakura de première qualité.",
        desc_en: "Fried rice with premium sakura shrimp.",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "C02",
        name_fr: "Bœuf BBQ avec 2 œufs sur riz",
        name_en: "BBQ Beef with 2 Eggs on Rice",
        price: "$23.99",
        desc_fr: "Bœuf BBQ avec œufs sur riz au gras de bœuf.",
        desc_en: "BBQ beef with eggs on beef tallow rice.",
        image: "https://images.unsplash.com/photo-1546833999-296e4630f148?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "C03",
        name_fr: "Poulet sauce poivre noir sur riz",
        name_en: "Chicken Black Pepper on Rice",
        price: "$21.99",
        desc_fr: "Savoureuse sauce au poivre noir.",
        desc_en: "Savory black pepper sauce.",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "C04",
        name_fr: "Crevettes, bœuf & œufs brouillés",
        name_en: "Prawns, Beef & Scrambled Eggs",
        price: "$24.99",
        desc_fr: "Sur riz, œufs brouillés veloutés.",
        desc_en: "Silky scrambled eggs over rice.",
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "C05",
        name_fr: "Bœuf épicé en dés",
        name_en: "Spiced Diced Beef & Eggs",
        price: "$22.99",
        desc_fr: "Avec œufs brouillés sur riz.",
        desc_en: "With scrambled eggs on rice.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "C09",
        name_fr: "Côtes de bœuf AAA poivre noir",
        name_en: "AAA Beef Ribs Black Pepper",
        price: "$26.99",
        desc_fr: "Servies avec œuf au plat sur riz.",
        desc_en: "Served with sunny side up egg on rice.",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "C10",
        name_fr: "Nouilles de riz sautées au bœuf",
        name_en: "Beef Stir-fried Flat Rice Noodles",
        price: "$23.99",
        desc_fr: "Style Hong Kong authentique au wok.",
        desc_en: "Authentic HK style wok-fried noodles.",
        image: "https://images.unsplash.com/photo-1512058560366-cd242959828d?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "C11",
        name_fr: "Pad Thai (Poulet/Bœuf/Crevettes)",
        name_en: "Pad Thai (Chicken/Beef/Shrimp)",
        price: "$23.99",
        desc_fr: "Pad Thai classique, un favori du menu.",
        desc_en: "Classic Pad Thai, a menu favorite.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    title_en: "BAKED & INSTANT",
    title_fr: "GRATINÉS & INSTANT",
    items: [
      {
        id: "F01",
        name_fr: "Gratin cari bœuf braisé",
        name_en: "Baked Curry Beef Brisket",
        price: "$22.99",
        desc_fr: "Riz ou spaghetti, double fromage.",
        desc_en: "Rice or spaghetti, double cheese.",
        image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "F04",
        name_fr: 'Gratin "duo" - spaghetti',
        name_en: "Bolognese & Tomato Chicken",
        price: "$21.99",
        desc_fr: "Bolognaise et poulet sauce tomate.",
        desc_en: "Bolognese and tomato chicken.",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "F06",
        name_fr: "Gratin spécial bœuf",
        name_en: "Curry Brisket & Pepper Ribs",
        price: "$24.99",
        desc_fr: "Mélange spécial gratiné.",
        desc_en: "Special gratin mix.",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "M01",
        name_fr: "Nouilles Lo Ding bœuf braisé",
        name_en: "Beef Brisket Lo Ding",
        price: "$18.99",
        desc_fr: "Nouilles instantanées au bœuf braisé.",
        desc_en: "Instant noodles with savory beef.",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "M02",
        name_fr: "Nouilles Lo Ding poulet soja",
        name_en: "Soy Sauce Chicken Lo Ding",
        price: "$15.99",
        desc_fr: "Poulet sauce soja et œufs brouillés.",
        desc_en: "Soy sauce chicken and scrambled eggs.",
        image: "https://images.unsplash.com/photo-1512058560366-cd242959828d?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "M03",
        name_fr: "Nouilles Lo Ding bœuf satay",
        name_en: "Satay Beef Lo Ding",
        price: "$15.99",
        desc_fr: "Bœuf satay et œufs brouillés.",
        desc_en: "Satay beef and scrambled eggs.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    title_en: "SIZZLING PLATES",
    title_fr: "PLAQUES CHAUDES",
    items: [
      {
        id: "SP01",
        name_fr: "Côtelettes d'agneau sur plaque",
        name_en: "Sizzling Lamb Chops",
        price: "$39.99",
        desc_fr: "Côtelettes d'agneau grillées, servies grésillantes.",
        desc_en: "Grilled lamb chops, served sizzling hot.",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=400",
      },
      {id: "SP02", name_fr: "Contre-filet Angus AAA sur plaque", name_en: "AAA Angus Striploin Steak", price: "$36.99", desc_fr: "Bœuf premium servi sur plaque chauffante.", desc_en: "Premium beef served on a hot sizzling plate.", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=400"},
      {
        id: "SP03",
        name_fr: "Poulet à l'ail sur plaque chaude",
        name_en: "Sizzling Garlic Chicken",
        price: "$28.99",
        desc_fr: "Poulet infusé à l'ail.",
        desc_en: "Sizzling garlic-infused chicken.",
        image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "SP04",
        name_fr: "Sole panée et poulet sur plaque",
        name_en: "Breaded Sole & Chicken Combo",
        price: "$31.99",
        desc_fr: "Duo de poisson and poulet sur plaque.",
        desc_en: "Fish and chicken combo on sizzling plate.",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    title_en: "CURRY SPECIALS",
    title_fr: "SPÉCIALITÉS AU CARI",
    items: [
      {
        id: "E01",
        name_fr: "Cari de bœuf braisé (Bol)",
        name_en: "Curry Beef Brisket (Bowl)",
        price: "$29.99",
        desc_fr: "Sans accompagnement, le goût pur du cari.",
        desc_en: "The pure taste of our signature curry.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "E04",
        name_fr: "Cari de bœuf braisé sur riz",
        name_en: "Curry Beef Brisket on Rice",
        price: "$22.99",
        desc_fr: "Notre cari signature style Hong Kong.",
        desc_en: "Our signature Hong Kong style curry.",
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "E05",
        name_fr: "Cari de poulet sur riz",
        name_en: "Curry Chicken on Rice",
        price: "$18.99",
        desc_fr: "Poulet tendre et sauce cari riche.",
        desc_en: "Tender chicken in a rich curry sauce.",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "E06",
        name_fr: "Cari de bœuf sur riz",
        name_en: "Curry Beef on Rice",
        price: "$21.99",
        desc_fr: "Tranches de bœuf tendres au cari.",
        desc_en: "Tender sliced beef in curry.",
        image: "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "E08",
        name_fr: "Cari d'agneau sur riz",
        name_en: "Curry Lamb Chop on Rice",
        price: "$27.99",
        desc_fr: "Côtelettes d'agneau dans un riche cari.",
        desc_en: "Lamb chops in a rich, spicy curry.",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    title_en: "TOAST & SANDWICH",
    title_fr: "RÔTIES & SANDWICH",
    items: [
      {
        id: "S09",
        name_fr: "Sandwich club",
        name_en: "Club Sandwich",
        price: "$14.99",
        desc_fr: "Poulet pané, concombre, jambon, tomate, fromage.",
        desc_en: "Chicken cutlet, cucumber, ham, tomato, cheese.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "S14",
        name_fr: "Sandwich bœuf & œufs",
        name_en: "Beef & Egg Sandwich",
        price: "$10.99",
        desc_fr: "Bœuf, oignons verts et œufs.",
        desc_en: "Beef, scallions and eggs sandwich.",
        image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "S10",
        name_fr: "Rôtie bœuf épicé & œufs",
        name_en: "Spiced Beef & Egg Toast",
        price: "$13.99",
        desc_fr: "Bœuf épicé et œufs brouillés.",
        desc_en: "Spiced beef and scrambled eggs toast.",
        image: "https://images.unsplash.com/photo-1506084868730-342b1f45ff9d?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "S15",
        name_fr: "Rôtie au charbon - Beurre d'arachide",
        name_en: "Charcoal Toast - Peanut Butter",
        price: "$8.99",
        desc_fr: "Toast unique au charbon avec beurre d'arachide.",
        desc_en: "Unique charcoal toast with peanut butter.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "S17",
        name_fr: "Pain doré beurre arachide & lait",
        name_en: "French Toast PB & Condensed Milk",
        price: "$12.99",
        desc_fr: "Le classique pain doré hongkongais.",
        desc_en: "The classic Hong Kong style French toast.",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "S23",
        name_fr: 'Rôtie style "Lau Nai Wah"',
        name_en: "Ovaltine & Condensed Milk Toast",
        price: "$9.99",
        desc_fr: "Avec Ovaltine et lait condensé.",
        desc_en: "With Ovaltine and condensed milk.",
        image: "https://images.unsplash.com/photo-1506084868730-342b1f45ff9d?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    title_en: "VEGETARIAN",
    title_fr: "VÉGÉTARIEN",
    items: [
      {
        id: "V01",
        name_fr: "Vermicelles de riz sautés",
        name_en: "Vegetarian Stir-fried Vermicelli",
        price: "$14.99",
        desc_fr: "Légumes frais et vermicelles de riz.",
        desc_en: "Fresh vegetables and rice vermicelli.",
        image: "https://images.unsplash.com/photo-1512058560366-cd242959828d?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "V04",
        name_fr: "Mapo tofu végétarien",
        name_en: "Vegetarian Mapo Tofu",
        price: "$15.99",
        desc_fr: "Tofu épicé style Szechuan sans viande.",
        desc_en: "Spicy Szechuan style tofu without meat.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "V05",
        name_fr: "Tofu braisé à la sauce soya",
        name_en: "Braised Tofu in Soy Sauce",
        price: "$13.99",
        desc_fr: "Tofu tendre et savoureux.",
        desc_en: "Tender and savory braised tofu.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
  {
    title_en: "DRINKS",
    title_fr: "BOISSONS",
    items: [
      {
        id: "G03",
        name_fr: "Thé au lait HK",
        name_en: "HK Style Milk Tea",
        price: "$5.99",
        desc_fr: "Thé au lait riche et onctueux.",
        desc_en: "Rich and smooth milk tea.",
        image: "https://images.unsplash.com/photo-1611077544046-e5c9e29a3e2a?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "G05",
        name_fr: "Café & thé mélangés",
        name_en: "Yuenyeung (Coffee & Tea Mix)",
        price: "$5.99",
        desc_fr: "Mélange classique café et thé.",
        desc_en: "Classic coffee and tea blend.",
        image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "G10",
        name_fr: 'Thé au lait "Teddy Bear"',
        name_en: "Teddy Bear Milk Tea",
        price: "$6.99",
        desc_fr: "Avec un ourson en glace.",
        desc_en: "With an adorable ice teddy bear.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400",
      },
      {
        id: "G11",
        name_fr: "Thé glacé citron Teddy Bear",
        name_en: "Teddy Bear Lemon Iced Tea",
        price: "$6.99",
        desc_fr: "Rafraîchissant avec un ourson en glace.",
        desc_en: "Refreshing with an ice teddy bear.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400",
      },
    ],
  },
];

const MINI_MENU = [
  { name_en: "Takoyaki", name_fr: "Takoyaki", price: "$8.99" },
  { name_en: "Curry Beef Brisket", name_fr: "Bœuf au Cari", price: "$21.99" },
  {
    name_en: "Sizzling Lamb Chops",
    name_fr: "Côtelettes d'agneau",
    price: "$39.99",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah A.",
    text_en:
      "The best Halal Hong Kong style food I've ever had. Highly recommended!",
    text_fr:
      "La meilleure nourriture halal hongkongaise que j'aie jamais goûtée. Je recommande vivement !",
  },
  {
    name: "Michael T.",
    text_en:
      "Absolutely incredible braised beef curry. A hidden gem in the city.",
    text_fr:
      "Un curry de bœuf braisé absolument incroyable. Une perle rare en ville.",
  },
  {
    name: "Emma R.",
    text_en:
      "The ambiance, the service, and above all, the exquisite flavors. 10/10.",
    text_fr:
      "L'ambiance, le service et par-dessus tout des saveurs exquises. 10/10.",
  },
  {
    name: "David K.",
    text_en:
      "Truly authentic flavors. The sizzling plates are a must-try experience.",
    text_fr:
      "Des saveurs vraiment authentiques. Les plaques chauffantes sont une expérience à ne pas manquer.",
  },
  {
    name: "Sophia L.",
    text_en:
      "The milk tea here brings me right back to the streets of Hong Kong.",
    text_fr:
      "Le thé au lait ici me ramène directement dans les rues de Hong Kong.",
  },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [lang, setLang] = useState<"en" | "fr">("en");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#0a0b0a] font-sans selection:bg-[#cfbe91] selection:text-[#0a0b0a]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#cfbe91] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section Container */}
      <section className="w-full p-3 md:p-4 flex flex-col md:flex-row gap-3 md:gap-4 box-border text-[#efe7d2] md:h-[100svh] min-h-[100svh]">
        {/* Hero Left Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-[70%] xl:w-[75%] relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden h-[calc(100svh-1.5rem)] md:h-full md:flex-none flex-shrink-0 group"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=2400"
              alt="Ambiance"
              className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
            />
            {/* Subtle gradient overlay to darken edges for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0a]/90 via-[#0a0b0a]/20 to-[#0a0b0a]/40 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0a]/60 flex-transparent z-10"></div>
          </div>

          {/* Floating Navbar */}
          <Navbar
            className="absolute top-6 left-6 right-6 md:top-8 md:left-8 md:right-8 z-30 w-auto"
            lang={lang}
            setLang={setLang}
          />

          {/* Big Hero Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-20 pointer-events-none"
          >
            <h1 className="font-serif text-[4.5rem] leading-[0.85] md:text-[8rem] lg:text-[10vw] xl:text-[11vw] uppercase tracking-tight text-[#efe7d2] drop-shadow-2xl">
              <ShinyText text="1001" className="lining-nums" color="#efe7d2" shineColor="#cfbe91" speed={3} /> <br /> 
              <ShinyText text="Nuits" color="#efe7d2" shineColor="#cfbe91" speed={3} delay={0.5} />
            </h1>
          </motion.div>

          {/* Halal Badge */}
          <div className="absolute top-28 right-6 md:top-32 md:right-8 z-20 flex flex-col items-center justify-center pointer-events-none backdrop-blur-sm rounded-full p-2 bg-[#0a0b0a]/40 border border-[#efe7d2]/20 w-20 h-20 md:w-24 md:h-24 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#cfbe91]">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="block font-serif text-[#cfbe91] text-[10px] md:text-[12px] font-bold tracking-[0.2em] leading-none mb-1">HALAL</span>
              <span className="block text-[7px] md:text-[8px] text-[#efe7d2]/80 uppercase tracking-[0.1em]">Certified</span>
            </div>
          </div>

          {/* Social Badges bottom right - Desktop only */}
          <div className="absolute bottom-10 right-10 z-20 hidden md:flex items-center gap-3">
            {[
              { icon: Instagram, link: "#" },
              { icon: Facebook, link: "#" },
              { icon: TiktokIcon, link: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#0a0b0a]/60 backdrop-blur-md border border-[#333330] hover:bg-white hover:text-black transition-colors duration-300"
              >
                <social.icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Sidebar Sections - Equal Ratio Boxes */}
        <div className="w-full md:w-[30%] xl:w-[25%] flex flex-col gap-3 md:gap-4 flex-shrink-0 md:h-full md:flex-1 h-auto">
          {/* Menu Block */}
          <motion.div
            onClick={() => scrollTo("menu")}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex-1 aspect-[4/3] md:aspect-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group block cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800"
              alt="Menu"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0a0b0a]/30 group-hover:bg-[#0a0b0a]/10 transition-colors duration-500 z-0"></div>

            {/* Mini Menu Peek */}
            <div className="absolute top-6 left-6 right-6 z-10 hidden sm:block pointer-events-none">
              <div className="bg-[#0a0b0a]/70 backdrop-blur-xl border border-[#333330] rounded-2xl p-4 flex flex-col gap-3 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {MINI_MENU.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-baseline text-xs"
                  >
                    <span className="font-serif text-[#cfbe91] tracking-wide">
                      {lang === "fr" ? item.name_fr : item.name_en}
                    </span>
                    <div className="flex-grow border-b border-dashed border-[#cfbe91]/30 mx-2 opacity-50"></div>
                    <span className="font-serif text-[#cfbe91]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-6 right-6 z-10 bg-[#0a0b0a]/80 backdrop-blur-md border border-[#333330] rounded-full pl-6 py-2.5 pr-2.5 flex items-center gap-5 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
              <span className="text-[10px] tracking-[0.2em] font-medium uppercase mt-0.5">
                {lang === "fr" ? "Menu" : "Menu"}
              </span>
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
                <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>

          {/* Reservation Block */}
          <motion.div
            onClick={() => scrollTo("reservation")}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex-1 aspect-[4/3] md:aspect-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group block cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1544025162-831e5bb574d7?auto=format&fit=crop&q=80&w=800"
              alt="Reservation"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0a0b0a]/30 group-hover:bg-[#0a0b0a]/10 transition-colors duration-500 z-0"></div>

            <div className="absolute bottom-6 right-6 z-10 bg-[#0a0b0a]/80 backdrop-blur-md border border-[#333330] rounded-full pl-6 py-2.5 pr-2.5 flex items-center gap-5 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
              <span className="text-[10px] tracking-[0.2em] font-medium uppercase mt-0.5">
                {lang === "fr" ? "Réservation" : "Reservation"}
              </span>
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
                <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>

          {/* Our Restaurant Block */}
          <motion.div
            onClick={() => scrollTo("about")}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex-1 aspect-[4/3] md:aspect-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group block cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
              alt="Our Restaurant"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0a0b0a]/40 group-hover:bg-[#0a0b0a]/20 transition-colors duration-500 z-0"></div>

            <div className="absolute bottom-6 right-6 z-10 bg-[#0a0b0a]/80 backdrop-blur-md border border-[#333330] rounded-full pl-6 py-2.5 pr-2.5 flex items-center gap-5 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
              <span className="text-[10px] tracking-[0.2em] font-medium uppercase mt-0.5">
                {lang === "fr" ? "Notre Restaurant" : "Our Restaurant"}
              </span>
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
                <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="min-h-screen bg-[#faf8f5] text-[#1a1c19] pt-24 pb-24 w-full relative"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3 md:gap-4 mb-16 md:mb-20 max-w-lg md:max-w-none mx-auto"
          >
            {MENU_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`py-3 px-2 md:px-5 md:py-2.5 rounded-[12px] md:rounded-lg border text-[10px] sm:text-xs font-bold md:tracking-[0.1em] transition-colors uppercase leading-tight ${
                  activeCategory === idx
                    ? "border-[#1a1c19] bg-[#1a1c19] text-[#efe7d2]"
                    : "border-[#1a1c19]/20 text-[#1a1c19] hover:border-[#1a1c19]"
                }`}
              >
                {lang === "fr" ? cat.title_fr : cat.title_en}
              </button>
            ))}
          </motion.div>

          {/* Category Header */}
          <motion.div
            key={`header-${activeCategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <div className="w-10 h-[1px] bg-[#1a1c19]/30 hidden sm:block"></div>
            <span className="text-[#1a1c19]/40 rotate-45 transform text-[10px] hidden sm:block">
              ◆
            </span>
            <h3 className="font-serif text-3xl md:text-5xl tracking-widest text-[#1a1c19] uppercase text-center mx-4">
              {lang === "fr"
                ? MENU_CATEGORIES[activeCategory].title_fr
                : MENU_CATEGORIES[activeCategory].title_en}
            </h3>
            <span className="text-[#1a1c19]/40 rotate-45 transform text-[10px] hidden sm:block">
              ◆
            </span>
            <div className="w-10 h-[1px] bg-[#1a1c19]/30 hidden sm:block"></div>
          </motion.div>

          {/* Complimentary Drink Notice */}
          {["MAIN DISHES", "BAKED & INSTANT", "SIZZLING PLATES", "CURRY SPECIALS", "VEGETARIAN"].includes(MENU_CATEGORIES[activeCategory].title_en) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={`notice-${activeCategory}`}
              className="mb-10 text-center"
            >
              <p className="inline-block px-6 py-2 bg-[#cfbe91]/20 border border-[#cfbe91]/30 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-bold text-[#8a7a4a]">
                {lang === "fr" 
                  ? "☕ Boisson gratuite incluse avec ce plat (café ou thé)"
                  : "☕ Complimentary beverage included (hot/cold tea or coffee)"}
              </p>
            </motion.div>
          )}

          {/* Menu Items */}
          <div className="flex flex-col gap-12">
            {MENU_CATEGORIES[activeCategory].items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-8 group"
              >
                {/* Item Image */}
                <div className="w-full sm:w-[220px] h-[160px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#f0ece6] shadow-sm border border-[#1a1c19]/5">
                  <img
                    src={item.image}
                    alt={lang === "fr" ? item.name_fr : item.name_en}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1 flex flex-col justify-center sm:pt-4 w-full">
                  <div className="flex justify-between items-end gap-3 w-full">
                    <h4 className="font-serif text-[1.4rem] sm:text-2xl tracking-wide text-[#1a1c19] whitespace-nowrap overflow-hidden text-ellipsis">
                      {lang === "fr" ? item.name_fr : item.name_en}
                    </h4>
                    <div className="flex-1 border-b-[1.5px] border-dotted border-[#1a1c19]/30 mx-2 relative top-[-8px]"></div>
                    <span className="font-serif text-[1.4rem] sm:text-2xl tracking-wider text-[#1a1c19]">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[13px] md:text-sm text-[#1a1c19]/70 mt-3 font-medium tracking-wide">
                    {lang === "fr" ? item.desc_fr : item.desc_en}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 md:py-32 w-full border-t border-[#1a1c19]/5 relative overflow-hidden bg-[#faf8f5] text-[#1a1c19]"
      >
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 border border-[#1a1c19]/5 rounded-full blur-[1px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#1a1c19]/5 rounded-full blur-[1px] translate-y-1/2 -translate-x-1/2"></div>


        <div className="w-full relative z-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 px-6 md:px-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-[#1a1c19]/60 uppercase tracking-[0.2em] text-xs font-bold">
                {lang === "fr" ? "Avis" : "Testimonials"}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1a1c19] mb-4">
              <ShinyText 
                text={lang === "fr" ? "Ce que disent nos convives" : "What our guests say"} 
                color="#1a1c19" 
                shineColor="#cfbe91" 
                speed={3} 
              />
            </h2>
          </motion.div>

          <div className="flex overflow-hidden relative w-full pt-4 pb-20">
            <motion.div
              className="flex gap-6 md:gap-8 px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map(
                (testimonial, idx) => (
                  <div
                    key={idx}
                    className="w-[300px] md:w-[380px] flex-shrink-0 flex flex-col bg-white rounded-[2rem] shadow-sm border border-[#1a1c19]/5 overflow-hidden group hover:shadow-md transition-shadow duration-500"
                  >
                    <div className="p-8 md:p-10 flex flex-col h-full bg-white">
                      <p className="font-serif text-lg leading-relaxed text-[#1a1c19]/90 mb-8 flex-grow">
                        "
                        {lang === "fr"
                          ? testimonial.text_fr
                          : testimonial.text_en}
                        "
                      </p>
                      <div className="flex flex-col">
                        <span className="text-lg font-serif italic tracking-wide text-[#1a1c19]">
                          {testimonial.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-[#faf8f5] text-[#1a1c19] py-24 w-full relative border-t border-[#1a1c19]/10 overflow-hidden flex flex-col justify-between"
      >
        {/* Top Marquee */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none opacity-[0.5] h-1/4 flex items-start justify-center -z-0">
          <CurvedLoop marqueeText="1001 NUIT ✦ 1001 NIGHTS ✦ 1001 NUIT ✦ 1001 NIGHTS" speed={0.4} curveAmount={200} direction="left" className="text-[3.5rem] md:text-[4.5rem] font-serif italic tracking-[0.35em] font-light text-[#000000]" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20 md:gap-32 min-h-[75vh] relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative order-2 lg:order-1"
          >
            {/* Image Composition */}
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 mt-8 mb-16 lg:my-0">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
                alt="Restaurant Interior"
                className="w-full h-full object-cover rounded-[2.5rem] shadow-xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-10 -right-10 w-2/3 max-w-[240px] aspect-square rounded-[2rem] overflow-hidden border-[12px] border-[#faf8f5] shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800"
                  alt="Chefs"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex flex-col justify-center lg:mt-0 order-1 lg:order-2 backdrop-blur-md bg-white/30 p-8 md:p-12 lg:p-16 rounded-[4rem] border border-white/20 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#1a1c19]/30"></div>
              <span className="text-[#1a1c19]/60 uppercase tracking-[0.2em] text-xs font-bold">
                {lang === "fr" ? "Notre Histoire" : "Our Story"}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest leading-[0.9] mb-8 text-[#1a1c19]">
              <ShinyText text={lang === "fr" ? "Notre Héritage" : "Our Heritage"} color="#1a1c19" shineColor="#cfbe91" speed={3} />
            </h2>
            <div className="space-y-5 text-[#1a1c19]/80 font-medium leading-relaxed max-w-md text-sm md:text-base">
              <BlurText 
                text={lang === "en" 
                  ? "Founded on the belief that culinary excellence shouldn't compromise on dietary principles, 1001 Nuits brings authentic Hong Kong style dining crafted exclusively with halal ingredients."
                  : "Fondé sur la conviction que l'excellence culinaire ne doit pas faire de compromis avec ses principes diététiques, 1001 Nuits propose une cuisine authentique de style hongkongais élaborée exclusivement avec des ingrédients halal."}
                delay={20}
                animateBy="words"
                className="text-[#1a1c19]/80"
              />
              <BlurText 
                text={lang === "en"
                  ? "Every dish is a carefully balanced masterpiece—hand-slaughtered halal meat, free of pork and alcohol, without losing the signature taste that makes Hong Kong cuisine world-renowned."
                  : "Chaque plat est un chef-d'œuvre soigneusement équilibré : viande halal abattue à la main, sans porc ni alcool, tout en préservant le goût distinctif qui rend la cuisine hongkongaise célèbre dans le monde entier."}
                delay={20}
                animateBy="words"
                className="text-[#1a1c19]/80"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Marquee */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-[0.5] h-1/4 flex items-end justify-center -z-0">
          <CurvedLoop marqueeText="1001 NUIT ✦ 1001 NIGHTS ✦ 1001 NUIT ✦ 1001 NIGHTS" speed={0.4} curveAmount={-200} direction="right" className="text-[3.5rem] md:text-[4.5rem] font-serif italic tracking-[0.35em] font-light text-[#000000]" />
        </div>
      </section>

      {/* Private Events Section */}
      <section id="private-events" className="py-24 md:py-32 w-full border-t border-[#1a1c19]/10 relative bg-[#1a1c19] text-[#efe7d2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row-reverse items-center gap-16 md:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
             <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200" alt="Private Dining Room" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[5s] hover:grayscale-0 hover:scale-105" />
               <div className="absolute inset-0 bg-[#0a0b0a]/20"></div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col gap-8"
          >
            <div>
              <span className="text-[#cfbe91] uppercase tracking-[0.2em] font-bold text-sm mb-4 block">
                {lang === "fr" ? "Événements Privés" : "Private Events"}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#efe7d2] leading-tight text-balance">
                <ShinyText text={lang === "fr" ? "Des Célébrations Inoubliables" : "Unforgettable Celebrations"} color="#efe7d2" shineColor="#cfbe91" speed={3} />
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-[#efe7d2]/70 text-lg leading-relaxed">
              <BlurText 
                text={lang === "fr" 
                  ? "Qu'il s'agisse d'une réunion d'affaires intime, d'un dîner de répétition ou d'une réception fastueuse, nos salles à manger privées offrent le cadre idéal. Nous proposons des menus personnalisés avec des ingrédients halal finement sélectionnés, et un service dédié pour faire de votre événement une expérience inoubliable." 
                  : "Whether it is an intimate business gathering, a rehearsal dinner, or a lavish reception, our private dining rooms provide the perfect backdrop. We offer custom menus crafted with the finest halal ingredients, and dedicated service to make your event an unforgettable experience."}
                delay={20}
                animateBy="words"
                className="text-[#efe7d2]/70"
              />
            </div>
            <div>
              <a href="mailto:events@1001nuits.com" className="inline-block uppercase tracking-[0.15em] text-sm font-bold border-b border-[#cfbe91] pb-1 text-[#cfbe91] hover:text-[#efe7d2] hover:border-[#efe7d2] transition-colors">
                {lang === "fr" ? "Se Renseigner" : "Inquire Now"}
              </a>
            </div>
          </motion.div>
        
        </div>
      </section>

      {/* Reservation Section */}
      <section
        id="reservation"
        className="min-h-[70vh] bg-[#faf8f5] text-[#1a1c19] py-32 w-full relative overflow-hidden flex items-center border-t border-[#1a1c19]/10"
      >
        <div className="absolute inset-0 opacity-[0.03] flex items-center pointer-events-none overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...Array(8)].map((_, i) => (
              <h2
                key={i}
                className="text-[25vw] font-serif uppercase leading-none font-bold text-[#1a1c19] select-none px-12 md:px-24 lining-nums"
              >
                {lang === "fr" ? "Réservation" : "Reservation"}
              </h2>
            ))}
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white text-[#1a1c19] p-12 md:p-24 rounded-[3rem] shadow-2xl border border-[#1a1c19]/5"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-[#1a1c19] text-[#efe7d2] flex items-center justify-center mb-8">
              <Phone size={32} />
            </div>
            <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-widest leading-[1] mb-6 text-[#1a1c19]">
              <ShinyText text={lang === "fr" ? "Rejoignez-nous" : "Join Us"} color="#1a1c19" shineColor="#cfbe91" speed={3} /> <br />
              <span className="text-[#cfbe91] italic normal-case font-light drop-shadow-sm">
                {lang === "fr" ? "pour le souper" : "for Dinner"}
              </span>
            </h2>
            <div className="mb-12 max-w-lg mx-auto">
              <BlurText 
                text={lang === "fr"
                  ? "Nous gérons exclusivement nos réservations de manière personnelle pour garantir la meilleure expérience possible. Veuillez nous appeler pour réserver votre table."
                  : "We exclusively handle our bookings personally to ensure the best possible experience. Please give us a call to secure your table."}
                delay={20}
                animateBy="words"
                className="text-sm md:text-lg font-medium opacity-70 leading-relaxed justify-center"
              />
            </div>

            <a
              href="tel:+15141234567"
              className="inline-flex items-center gap-6 bg-[#1a1c19] text-[#efe7d2] pl-8 pr-3 py-3 rounded-full hover:bg-[#333330] transition-all duration-300 group shadow-lg hover:shadow-xl hover:pr-4 hover:pl-7"
            >
              <span className="font-sans font-medium tracking-[0.15em] text-lg mt-0.5">
                (514) 123-4567
              </span>
              <div className="w-12 h-12 rounded-full bg-[#efe7d2] text-[#1a1c19] flex items-center justify-center group-hover:scale-105 transition-transform">
                <ArrowRight size={20} />
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Information & Location Section */}
      <section
        id="information"
        className="py-24 w-full border-t border-[#1a1c19]/10 bg-[#faf8f5] text-[#1a1c19]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <h3 className="font-serif text-3xl uppercase tracking-widest text-[#1a1c19]">
                {lang === "fr" ? "Heures d'ouverture" : "Hours"}
              </h3>
              <div className="flex flex-col gap-3 font-medium text-[#1a1c19]/80">
                <div className="flex justify-between border-b border-[#1a1c19]/10 pb-2">
                  <span>
                    {lang === "fr" ? "Lundi - Mercredi" : "Monday - Wednesday"}
                  </span>
                  <span>17:00 - 22:30</span>
                </div>
                <div className="flex justify-between border-b border-[#1a1c19]/10 pb-2">
                  <span>
                    {lang === "fr" ? "Jeudi - Samedi" : "Thursday - Saturday"}
                  </span>
                  <span>17:00 - 23:30</span>
                </div>
                <div className="flex justify-between border-b border-[#1a1c19]/10 pb-2">
                  <span>{lang === "fr" ? "Dimanche" : "Sunday"}</span>
                  <span>16:00 - 22:00</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <h3 className="font-serif text-3xl uppercase tracking-widest text-[#1a1c19]">
                {lang === "fr" ? "Emplacement" : "Location"}
              </h3>
              <div className="flex flex-col gap-3 font-medium text-[#1a1c19]/80">
                <p>
                  11602 Bd de Salaberry, <br />
                  Dollard-des-Ormeaux, QC H9B 2R8
                  <br />
                  Canada
                </p>
                <div className="mt-4">
                  <span className="block text-sm uppercase tracking-[0.15em] font-bold text-[#1a1c19]/60 mb-2">
                    {lang === "fr" ? "Stationnement" : "Parking"}
                  </span>
                  <p>
                    {lang === "fr"
                      ? "Service de voiturier disponible à l'entrée principale. Parking public à 2 minutes à pied."
                      : "Valet parking available at the main entrance. Public parking within 2 minutes walking distance."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#0a0b0a] text-[#efe7d2] pt-16 border-t border-[#333330] text-center pb-8"
      >
        <h2 className="font-serif text-4xl tracking-[0.2em] text-[#efe7d2] mb-8">
          <ShinyText text="1001" className="lining-nums" color="#efe7d2" shineColor="#cfbe91" speed={3} />
          <ShinyText text=" NUIT" color="#efe7d2" shineColor="#cfbe91" speed={3} />
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 text-[10px] uppercase tracking-[0.2em] opacity-50 mb-12">
          <span>11602 Bd de Salaberry, QC</span>
          <span className="text-[#cfbe91]">•</span>
          <span>
            {lang === "fr"
              ? "Viande halal abattue à la main"
              : "Hand-slaughtered halal meat"}
          </span>
          <span className="text-[#cfbe91]">•</span>
          <span>{lang === "fr" ? "Sans porc" : "No pork"}</span>
          <span className="text-[#cfbe91]">•</span>
          <span>{lang === "fr" ? "Sans alcool" : "No alcohol"}</span>
        </div>
        <p className="text-[10px] uppercase tracking-widest opacity-30">
          © {new Date().getFullYear()} 1001 Nuit.{" "}
          {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
        </p>
      </motion.footer>
    </div>
  );
}
