import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import {
  ArrowRight,
  Instagram,
  Facebook,
  Phone,
  Star,
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
import ScrollTextReveal from "./components/ui/ScrollTextReveal";
import NeighborhoodMap from "./components/NeighborhoodMap";

const REVIEWS = [
  {
    author: "Adnan Chaudhry",
    text: "Great food and great ambience. Definitely would come back.",
    rating: 5,
  },
  {
    author: "Ilsa Rehmat",
    text: "The food was absolutely delicious! Everything tasted fresh, flavorful, and perfectly cooked. Would definitely visit again :)",
    rating: 5,
  },
  {
    author: "Mrs. Hassani",
    text: "We are happy to have a halal Asian restaurant in the neighborhood! We tried Pad Thai and Curry braised beef Udon soup and both were so delicious! And personally love their Taro milk tea.",
    rating: 5,
  },
  {
    author: "Huda Haq",
    text: "Flavorful fresh dishes with great friendly service!",
    rating: 5,
  },
  {
    author: "Sarah Khan",
    text: "As a Muslim kid growing up in the West Island, what an absolute treat not be scared about anything on the menu. Super family friendly vibes and delicious as well.",
    rating: 5,
  },
  {
    author: "S",
    text: "Went on the opening night, food was delicious! There was a bit of a delay in receiving the food but nothing crazy. General Tao chicken and Hong Kong noodles were my favorite, looking forward to coming back.",
    rating: 5,
  },
  {
    author: "Dania Farooq",
    text: "This is one of the best halal restaurants in the city. The food, the ambience, the staff — everything is perfect and amazing. Eagerly looking forward to the next outing.",
    rating: 5,
  },
  {
    author: "Abdullah Akbar",
    text: "Brought my wife here on opening night. Food was great, came out hot and tasted delicious! Only downside was that the service was a bit messy, though I'm sure that was because it was opening night and everyone was a bit overwhelmed. I truly wish the best for the owner and everyone involved in this business and I'll be sure to bring the rest of my family next time, inshallah!",
    rating: 5,
  },
  {
    author: "Ather Majeed Chaudhry",
    text: "Tasty food we enjoyed all the dishes — mango matcha latte at the end was a hit. I recommend.",
    rating: 5,
  },
  {
    author: "Richard D",
    text: "Amazing staff and delicious food",
    rating: 5,
  },
  {
    author: "Mufti Farasat Ullah Sarmad",
    text: "Must try spot — first time 100% authentic and 100% halal and hand slaughtered Chinese food in Montreal now.",
    rating: 5,
  },
  {
    author: "Salma Semraoui",
    text: "Super service et très bonne nourriture, surtout le pad thaï 10/10.",
    rating: 5,
  },
  {
    author: "Zakaria Berrad",
    text: "Friendly staff and superior dining experience",
    rating: 5,
  },
  {
    author: "Hana",
    text: "Came here with my husband and let me tell you… when they say authentic they meant it! The food was 10/10. I ordered the beef pad Thai and my husband ordered a beef curry. Everything came out fresh, sizzling, flavourful, and best of all DELICIOUS! The staff were so welcoming, kind, and professional. The owner was so sweet and gave us some octopus balls on the house and they were amazinggggg! I plan on bringing my family from Ontario and the US to this amazing restaurant! Thank you for the spectacular experience!",
    rating: 5,
  },
  {
    author: "Selma Boutaous",
    text: "One of the best mango matcha I've tasted and delicious food. The packaging is great, we can tell it was chosen with care for the quality",
    rating: 5,
  },
  {
    author: "Sima West",
    text: "Excellent service incredibly delicious and fresh food, over all an amazing dining experience",
    rating: 5,
  },
  {
    author: "Mo",
    text: "Amazing experience at 1001 Nuit — I loved the food, especially the chicken pad thai and the beef dishes. Everything being 100% halal was a huge plus. The location and atmosphere were beautiful and the gentlemen serving us were very professional and welcoming. Would've loved to try the desserts too… maybe next time!",
    rating: 5,
  },
  {
    author: "Benjamin Turmel",
    text: "An exceptional dining experience — Food: 5/5 Service: 5/5 Atmosphere: 5/5",
    rating: 5,
  },
  {
    author: "Mostafa Ghannam",
    text: "Amazing new restaurant, the food was delicious, great staff, and the owner Muhammad is amazing and very kind. Thank you for a great night. Will definitely come again!",
    rating: 5,
  },
  {
    author: "K- Man",
    text: "Great spot for authentic Asian Halal food. Ordered the shrimp and chicken Pad Thai and it was amazing. Definitely check them out!",
    rating: 5,
  },
  {
    author: "Tubie 101",
    text: "My husband and I were very excited about trying 1001Nuit when it first appeared on my fyp. It was our first time here and it was an amazing experience with great service and excellent food. We will definitely be adding 1001Nuit to our restaurant options, and will be returning soon. Thank you to the 1001Nuit team for such an exceptional dining experience. May God bring much success and prosperity to 1001Nuit. — Food: 5/5 Service: 5/5 Atmosphere: 5/5",
    rating: 5,
  },
  {
    author: "Mahdi K",
    text: "Amazing experience! The food was delicious, the service was excellent, and the atmosphere was welcoming. A special thank you to Muhammad, the owner, for his outstanding hospitality and hard work you can really see the care and passion he puts into the restaurant. Highly recommend! — Food: 5/5 Service: 5/5 Atmosphere: 5/5",
    rating: 5,
  },
  {
    author: "Julian Sablowski",
    text: "Really enjoyed the food, we had rose out and Mohammad offered us something while we waited. Superb service and we will certainly be back. Food tasted fresh and really good! — Food: 5/5 Service: 5/5 Atmosphere: 5/5",
    rating: 5,
  },
  {
    author: "Jasmin Bouchard",
    text: "J’ai mangé dans ce restaurant chinois halal. La nourriture était bonne et le service avec Rim était excellent. Elle est très professionnelle et accueillante. Je recommande ! ⭐️⭐️⭐️⭐️⭐️ Merci beaucoup Mohemed — Food: 5/5 Service: 5/5 Atmosphere: 5/5",
    rating: 5,
  },
  {
    author: "Mounia Belmamoun",
    text: "We were very happy with our experience. The food was delicious and the service excellent. The staff was very warm and welcoming, and the place was clean and beautiful. Food: 5/5 Service: 5/5 Atmosphere: 5/5",
    rating: 5,
  },
  {
    author: "Elias Ayhs",
    text: "Food came very quickly. Ordering on the phone was very nice. Big portions and very good food.",
    rating: 5,
  },
  {
    author: "Info Magna Montreal",
    text: "Amazing food, service and staff keep it up",
    rating: 5,
  },
  {
    author: "bilal vinsloke",
    text: "Great spot to try Hong Kong food. I was warmly greeted and the food was soothing. The owner is a great guy, I will be back.",
    rating: 5,
  },
  {
    author: "Amira Ibrahim",
    text: "Food was delicious and arrived fast. Favourite was the general tao",
    rating: 5,
  },
  {
    author: "Maryam I",
    text: "Great first impression, chinese food halal in the west? Yes please and alhamdullilahhhhhh. Loved the shrimp and chicken general tao the pad thai noodles and beef hit the spot! For a new resto the kitchen and serving staff are clearly hard at work much appreciated and I'll be coming back again! 1/1001 nights completed 1000 to go!",
    rating: 5,
  },
  {
    author: "Motahhareh",
    text: "We had a wonderful treat tonight. We were the first customers here on their opening day, and we just came back. We tried the pad Thai, Curry Beef Udon Soup, General Tao's chicken, and HK style Beef Noodles and we really enjoyed all of them. Their beef is very tender and the chicken is the most tender chicken I have ever tried. Taro milk tea and mango passion slush were amazing and Waffles are a must try. We will definitely go back inshallah.",
    rating: 5,
  },
];

const MENU_CATEGORIES = [
  {
    title_en: "SIGNATURE SNACK 招牌小吃",
    title_fr: "COLLATION SIGNATURE 招牌小吃",
    items: [
      {
        id: "T01",
        name_fr: "Takoyaki (4 pièces)",
        name_en: "Takoyaki (4 pieces)",
        price: "$6.99",
        desc_fr: "Boulettes de poulpe classiques.",
        desc_en: "Classic octopus balls.",
      },
      {
        id: "T02",
        name_fr: "Gaufres à la crème glacée au thé vert",
        name_en: "green tea ice cream waffles",
        price: "$8.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "T03",
        name_fr: "Gaufres à la crème glacée aux haricots rouges",
        name_en: "red bean ice cream waffles",
        price: "$8.99",
        desc_fr: "",
        desc_en: "",
      }
    ]
  },
  {
    title_en: "DRINKS 飲品",
    title_fr: "BOISSONS 飲品",
    items: [
      {
        id: "G01",
        name_fr: "Thé au lait de taro",
        name_en: "Taro milk tea",
        price: "$5.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G02",
        name_fr: "Latte matcha aux fraises",
        name_en: "Strawberry matcha latte",
        price: "$5.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G03",
        name_fr: "Latte matcha à la mangue",
        name_en: "Mango matcha latte",
        price: "$5.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G04",
        name_fr: "Slush à la fraise",
        name_en: "Strawberry slush",
        price: "$7.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G05",
        name_fr: "Slush mangue passion",
        name_en: "Mango passion slush",
        price: "$7.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G06",
        name_fr: "Coca-Cola mexicain en bouteille",
        name_en: "Coca cola mexican bottled",
        price: "$4.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G07",
        name_fr: "Red Bull Zéro",
        name_en: "Red Bull Zero",
        price: "$6.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G08",
        name_fr: "Coca Diet",
        name_en: "Diet Coke",
        price: "$3.99",
        desc_fr: "",
        desc_en: "",
      }
    ]
  },
  {
    title_en: "SNACKS & SIDES 小食",
    title_fr: "ENTRÉES & ACCOMPAGNEMENTS 小食",
    items: [
      {
        id: "B01",
        name_fr: "B01 Soupe udon au bœuf braisé au cari",
        name_en: "B01 Curry Beef Udon Soup",
        price: "$22.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B02",
        name_fr: "Cuisse de poulet frit avec salade de pommes de terre/frites",
        name_en: "ChickenLeg w/PotatoSalad/Fries",
        price: "$16.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B03",
        name_fr: "B03 Crevettes Général Tao",
        name_en: "B03 General Tao's Shrimp",
        price: "$26.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B04",
        name_fr: "B04 Boules de sésame",
        name_en: "B04 Sesame Balls",
        price: "$6.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B05",
        name_fr: "B05 Ailes de poulet avec frites",
        name_en: "B05Chicken wing with Fries",
        price: "$15.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B06",
        name_fr: "B06 Udon sauté au poulet",
        name_en: "B06 Chicken Udon Stir-Fry",
        price: "$21.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B09",
        name_fr: "B09 Bœuf épicé froid",
        name_en: "B09 Spicy Chill Beef",
        price: "$12.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B17",
        name_fr: "B17 Calmars frits",
        name_en: "B17 Deep Fried Calamari",
        price: "$16.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B18",
        name_fr: "B18 Rouleaux de printemps",
        name_en: "B18 Spring Rolls",
        price: "$8.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B19",
        name_fr: "B19 Pétoncles frits",
        name_en: "B19 Fried Scallops",
        price: "$10.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B13",
        name_fr: "B13 Ailes de poulet avec frites (sauce HG)",
        name_en: "B13 Wings with Fries(HG sauce)",
        price: "$16.99",
        desc_fr: "",
        desc_en: "",
      }
    ]
  },
  {
    title_en: "MAIN DISH 主食",
    title_fr: "PLATS PRINCIPAUX 主食",
    items: [
      {
        id: "C01",
        name_fr: "C01 Riz frit aux crevettes sakura et poulet",
        name_en: "C01 Sakura Shrimp&Chicken FR",
        price: "$22.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B16",
        name_fr: "B16 Poulet Général Tao",
        name_en: "B16 General Tao's Chicken",
        price: "$23.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C04",
        name_fr: "C04 Crevettes, bœuf et œufs brouillés sur riz",
        name_en: "C04Prawns BeefScrambleEggsRice",
        price: "$24.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C05",
        name_fr: "C05 Bœuf en dés et œufs brouillés sur riz",
        name_en: "C05 Diced BeefScrambleEggsRice",
        price: "$22.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C06",
        name_fr: "C06 Spaghetti sauté au bœuf sauce poivre noir",
        name_en: "C06 Spaghetti w/Beef BPSauce",
        price: "$22.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C07",
        name_fr: "C07 Bœuf haché et œufs brouillés sur riz",
        name_en: "C07Minced BeefScrambleEggsRice",
        price: "$21.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C08",
        name_fr: "C08 Poulet sauce aux oignons sur riz",
        name_en: "C08 Chicken Onion on Rice",
        price: "$21.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C10",
        name_fr: "C10 Nouilles de riz plates sautées au bœuf style HK",
        name_en: "C10 HK style Beef Noodles",
        price: "$23.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C11",
        name_fr: "C11 Pad Thaï",
        name_en: "C11 Pad Thai",
        price: "$23.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C12",
        name_fr: "C12 Riz frit à l'ananas",
        name_en: "C12 Pineapple Fried Rice",
        price: "$25.99",
        desc_fr: "",
        desc_en: "",
      }
    ]
  },
  {
    title_en: "Curry Style HK 港式咖喱",
    title_fr: "Cari Style HK 港式咖喱",
    items: [
      {
        id: "E01",
        name_fr: "E01 Cari de bœuf (sans accompagnement)",
        name_en: "E01 Curry Beef (no side)",
        price: "$29.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "E02",
        name_fr: "E02 Cari de côtelettes d'agneau (sans accompagnement)",
        name_en: "E02 Curry Lamb Chops (No Side)",
        price: "$33.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "E03",
        name_fr: "E03 Cari de légumes variés avec œuf sur riz",
        name_en: "E03 Curry Mixed VegEgg on Rice",
        price: "$16.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "E06",
        name_fr: "E06 Cari de bœuf sur riz",
        name_en: "E06 Curry Beef on Rice",
        price: "$21.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "E08",
        name_fr: "E08 Cari de côtelettes d'agneau sur riz",
        name_en: "E08 Curry Lamb Chops on Rice",
        price: "$27.99",
        desc_fr: "",
        desc_en: "",
      }
    ]
  },
  {
    title_en: "VEGETARIAN 素食專區",
    title_fr: "PLATS VÉGÉTARIENS 素食專區",
    items: [
      {
        id: "V01",
        name_fr: "V01 Vermicelles de riz sautés végétariens",
        name_en: "V01 Veg Stir Vermicelli",
        price: "$14.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "V02",
        name_fr: "V02 Riz frit végétarien",
        name_en: "V02 Veg Fried Rice",
        price: "$13.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "V05",
        name_fr: "V05 Tofu braisé à la sauce soya",
        name_en: "V05 Braised Tofu in Soy Sauce",
        price: "$13.99",
        desc_fr: "",
        desc_en: "",
      }
    ]
  },
  {
    title_en: "INSTANT 面",
    title_fr: "NOUILLES INSTANTANÉES 面",
    items: [
      {
        id: "M01",
        name_fr: "M01 Nouilles Lo Ding au curry et poitrine de bœuf",
        name_en: "M01 Curry Beef Brisket Lo Ding",
        price: "$18.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "M02",
        name_fr: "M02 Nouilles Lo Ding au poulet et œufs brouillés",
        name_en: "M02 Chicken&ScrambleEggLoDing",
        price: "$15.99",
        desc_fr: "",
        desc_en: "",
      }
    ]
  },
  {
    title_en: "SIZZLING PLATES 鐵板系列",
    title_fr: "PLATS SUR PLAQUE CHAUDE 鐵板系列",
    items: [
      {
        id: "SP01",
        name_fr: "SP01 Côtelettes d'agneau sur plaque chaude",
        name_en: "SP01 Sizzling Lamb Chops",
        price: "$39.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "SP02",
        name_fr: "SP02 Contre-filet AAA Angus sur plaque chaude",
        name_en: "SP02 AAA AngusStriploinSteak",
        price: "$36.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "SP03",
        name_fr: "SP03 Poulet à l'ail sur plaque chaude",
        name_en: "SP03 Garlic Chicken Chop",
        price: "$28.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "SP04",
        name_fr: "SP04 Filet de sole pané et poulet sur plaque chaude",
        name_en: "SP04 BreadSole&ChickenChop",
        price: "$31.99",
        desc_fr: "",
        desc_en: "",
      }
    ]
  }
];

const MINI_MENU = [
  { name_en: "Takoyaki", name_fr: "Takoyaki", price: "$6.99" },
  { name_en: "E06 Curry Beef on Rice", name_fr: "E06 Cari de bœuf sur riz", price: "$21.99" },
  {
    name_en: "SP01 Sizzling Lamb Chops",
    name_fr: "SP01 Côtelettes d'agneau",
    price: "$39.99",
  },
];


export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [lang, setLang] = useState<"en" | "fr">("en");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const reviewLoop = [...REVIEWS, ...REVIEWS];

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
              src="/hero.jpeg"
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
            <h1 className="font-serif text-[3.2rem] sm:text-[4.5rem] leading-[0.85] md:text-[8rem] lg:text-[10vw] xl:text-[11vw] uppercase tracking-tight text-[#efe7d2] drop-shadow-2xl">
              <ShinyText text="1001" className="lining-nums inline-block" color="#efe7d2" shineColor="#cfbe91" speed={3} /> <br /> 
              <ShinyText text="NUITS" className="inline-block" color="#efe7d2" shineColor="#cfbe91" speed={3} delay={0.5} />
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

          {/* Social Badges bottom right */}
          <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 z-20 flex items-center gap-2 md:gap-3">
            {[
              { icon: Instagram, link: "https://www.instagram.com/1001nu1t/" },
              { icon: Facebook, link: "https://www.facebook.com/share/1J1KukJuHs/?mibextid=wwXIfr" },
              { icon: TiktokIcon, link: "https://www.tiktok.com/@1001nu1t" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-[52px] md:h-[52px] flex items-center justify-center rounded-full bg-[#0a0b0a]/60 backdrop-blur-md border border-[#333330] hover:bg-white hover:text-black transition-colors duration-300"
              >
                <social.icon size={16} strokeWidth={1.5} />
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
              src="/menu.webp"
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

          {/* Our Restaurant Block */}
          <motion.div
            onClick={() => scrollTo("about")}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex-1 aspect-[4/3] md:aspect-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group block cursor-pointer"
          >
            <img
              src="/restaurent.webp"
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

          {/* Reservation Block */}
          <motion.div
            onClick={() => scrollTo("reservation")}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex-1 aspect-[4/3] md:aspect-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group block cursor-pointer"
          >
            <img
              src="/reservation.png"
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3 md:gap-4 mb-16 md:mb-20 max-w-lg md:max-w-none mx-auto"
          >
            {MENU_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`py-3 px-2 md:px-5 md:py-2.5 rounded-[12px] md:rounded-lg border text-[10px] sm:text-xs font-bold md:tracking-[0.1em] transition-colors uppercase leading-tight ${
                  activeCategory === idx
                    ? "border-[#cfbe91] bg-[#cfbe91] text-[#1a1c19] shadow-sm"
                    : "border-[#1a1c19]/20 text-[#1a1c19] hover:border-[#cfbe91] hover:text-[#1a1c19]"
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
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
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
          {[
            "MAIN DISH",
            "INSTANT",
            "SIZZLING PLATES",
            "CURRY STYLE HK",
            "VEGETARIAN"
          ].some(t => MENU_CATEGORIES[activeCategory].title_en.startsWith(t)) && (
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
          <div className="flex flex-col gap-6 sm:gap-10">
            {MENU_CATEGORIES[activeCategory].items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col gap-2 group"
              >
                {/* Item Details */}
                <div className="flex-1 flex flex-col justify-center w-full">
                  <div className="flex items-end gap-2 w-full min-w-0">
                    <h4 className="font-serif text-[1.05rem] sm:text-[1.4rem] md:text-2xl tracking-wide text-[#1a1c19] shrink min-w-0">
                      {/* {item.id && !item.id.includes("T01") && (
                        <span className="text-[10px] sm:text-xs font-sans font-bold text-[#8a7a4a] tracking-widest uppercase mr-1.5">
                          {item.id}.
                        </span>
                      )} */}
                      {lang === "fr" ? item.name_fr : item.name_en}
                    </h4>
                    <div className="flex-1 border-b-[1.5px] border-dotted border-[#1a1c19]/30 mx-1 sm:mx-2 relative top-[-5px] sm:top-[-8px] min-w-[8px] shrink-0"></div>
                    <span className="font-serif text-[1.05rem] sm:text-[1.4rem] md:text-2xl tracking-wider text-[#1a1c19] shrink-0">
                      {item.price}
                    </span>
                  </div>
                  {(item as any).name_zh && (
                    <p className="font-serif text-[1.05rem] sm:text-[1.4rem] md:text-2xl tracking-wide text-[#1a1c19]/50 mt-1">
                      {(item as any).name_zh}
                    </p>
                  )}
                  {(lang === "fr" ? item.desc_fr : item.desc_en) && (
                    <p className="text-[12px] sm:text-[13px] md:text-sm text-[#1a1c19]/70 mt-2 font-medium tracking-wide">
                      {lang === "fr" ? item.desc_fr : item.desc_en}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-24 md:py-32 bg-[#faf8f5] text-[#1a1c19] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
          <p className="text-[#cfbe91] font-bold tracking-[0.25em] text-sm uppercase mb-4">
            {lang === "fr" ? "Témoignages" : "Testimonials"}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-10">
            <ShinyText
              text={lang === "fr" ? "Avis Clients" : "Client Reviews"}
              color="#1a1c19"
              shineColor="#cfbe91"
              speed={3}
            />
          </h2>

          {/* <Link
            to="/review"
            className="inline-flex items-center gap-4 bg-white border border-[#cfbe91]/30 rounded-2xl p-5 md:p-6 hover:border-[#cfbe91] transition-all group shadow-md max-w-2xl w-full text-left mx-auto"
          >
            <div className="w-11 h-11 rounded-xl bg-[#cfbe91]/15 flex items-center justify-center shrink-0 group-hover:bg-[#cfbe91]/25 transition-colors">
              <Star size={20} className="fill-[#cfbe91] text-[#cfbe91]" />
            </div>
            <div className="flex-1">
              <p className="font-serif text-[#1a1c19] font-semibold text-base leading-snug">
                {lang === "fr" ? "Vous avez apprécié votre expérience ? Laissez-nous un avis Google 5 étoiles !" : "Enjoyed your experience? Leave us a 5-star Google review!"}
              </p>
              <p className="text-[#1a1c19]/60 text-sm mt-1 font-sans">
                {lang === "fr" ? "Aidez d'autres convives à nous découvrir." : "It helps more guests discover us."}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 bg-[#cfbe91] text-[#0a0b0a] font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-xl group-hover:bg-[#d7c683] transition-colors whitespace-nowrap">
              {lang === "fr" ? "Nous noter" : "Review Us"}
            </div>
          </Link> */}
        </div>

        <div className="w-full relative flex flex-col gap-8 md:gap-12 mt-12 overflow-hidden py-10 pointer-events-none">
          <div className="flex w-max gap-8 md:gap-12 animate-marquee pause-on-hover pointer-events-auto group">
            {reviewLoop.map((review, index) => (
                <div key={`row1-${index}`} className="w-[320px] md:w-[420px] p-8 md:p-10 shrink-0 bg-white flex flex-col justify-between border border-[#e4d5ac]/40 shadow-[0_24px_60px_rgba(0,0,0,0.08)] rounded-[2.5rem] relative group-hover:opacity-80 hover:-translate-y-1 transition-all duration-500 fancy-review-card">
                <div>
                  <div className="flex gap-1 mb-6 text-[#cfbe91]">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} size={16} className="fill-[#cfbe91] text-[#cfbe91]" />
                    ))}
                  </div>
                  <p className="font-serif text-lg md:text-xl text-[#1a1c19]/90 leading-relaxed italic relative z-10 max-w-sm">
                    "{review.text}"
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#cfbe91]/20">
                  <p className="font-sans font-bold text-[#1a1c19] uppercase tracking-wider text-xs">
                    — {review.author}
                  </p>
                </div>
              </div>
            ))}
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
          <CurvedLoop marqueeText="1001 NUITS ✦ 1001 NIGHTS ✦ 1001 NUITS ✦ 1001 NIGHTS" speed={0.4} curveAmount={200} direction="left" className="text-[7.8rem] sm:text-[3.5rem] md:text-[4.5rem] font-serif italic tracking-[0.35em] font-light text-[#000000]" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20 md:gap-32 min-h-[75vh] relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px 0px -80px 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative order-2 lg:order-1"
          >
            {/* Image Composition */}
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 mt-8 mb-16 lg:my-0">
              <img
                src="/drink.webp"
                alt="Restaurant Interior"
                className="w-full h-full object-cover rounded-[2.5rem] shadow-xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 w-1/2 sm:w-2/3 max-w-[180px] sm:max-w-[240px] aspect-square rounded-[2rem] overflow-hidden border-[8px] sm:border-[12px] border-[#faf8f5] shadow-2xl"
              >
                <img
                  src="/dessert.webp"
                  alt="Dessert"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex-1 flex flex-col justify-center lg:mt-0 order-1 lg:order-2 backdrop-blur-md bg-white/30 p-8 md:p-12 lg:p-16 rounded-[4rem] border border-white/20 shadow-sm"
          >
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="backdrop-blur-sm rounded-2xl p-2 bg-[#0a0b0a] border border-[#333330] w-36 h-20 shadow-md overflow-hidden">
                <img
                  src="/logo.jpg"
                  alt="1001 Nuits Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <ScrollTextReveal delay={0.35} textColor="#1a1c19" className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#1a1c19]/30"></div>
                <span className="text-[#1a1c19]/60 uppercase tracking-[0.2em] text-xs font-bold">
                  {lang === "fr" ? "Notre Histoire" : "Our Story"}
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest leading-[0.9] text-[#1a1c19]">
                <ShinyText text={lang === "fr" ? "Notre Héritage" : "Our Heritage"} color="#1a1c19" shineColor="#cfbe91" speed={3} />
              </h2>
              <div className="space-y-5 text-[#1a1c19]/80 font-medium leading-relaxed max-w-md text-sm md:text-base mt-6">
                <BlurText
                  text={lang === "en"
                    ? "Founded on the belief that culinary excellence shouldn't compromise on dietary principles, 1001 Nuits brings authentic Hong Kong style dining crafted exclusively with halal ingredients."
                    : "Fondé sur la conviction que l'excellence culinaire ne doit pas faire de compromis avec ses principes diététiques, 1001 Nuits propose une cuisine authentique de style hongkongais élaborée exclusivement avec des ingrédients halal."}
                  delay={10}
                  animateBy="words"
                  className="text-[#1a1c19]/80"
                />
                <BlurText
                  text={lang === "en"
                    ? "Every dish is a carefully balanced masterpiece—hand-slaughtered halal meat, free of pork and alcohol, without losing the signature taste that makes Hong Kong cuisine world-renowned."
                    : "Chaque plat est un chef-d'œuvre soigneusement équilibré : viande halal abattue à la main, sans porc ni alcool, tout en préservant le goût distinctif qui rend la cuisine hongkongaise célèbre dans le monde entier."}
                  delay={10}
                  animateBy="words"
                  className="text-[#1a1c19]/80"
                />
                <BlurText
                  text={lang === "en"
                    ? "Our chefs are straight from Hong Kong with more than 20 years of experience, bringing genuine technique and flavor to every plate."
                    : "Nos chefs viennent directement de Hong Kong et possèdent plus de 20 ans d'expérience culinaire, apportant authenticité et savoir-faire à chaque plat."}
                  delay={10}
                  animateBy="words"
                  className="text-[#1a1c19]/80"
                />
              </div>
            </ScrollTextReveal>
          </motion.div>
        </div>

        {/* Bottom Marquee */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-[0.5] h-1/4 flex items-end justify-center -z-0">
          <CurvedLoop marqueeText="1001 NUITS ✦ 1001 NIGHTS ✦ 1001 NUITS ✦ 1001 NIGHTS" speed={0.4} curveAmount={-200} direction="right" className="text-[7.8rem] sm:text-[3.5rem] md:text-[4.5rem] font-serif italic tracking-[0.35em] font-light text-[#000000]" />
        </div>
      </section>

      {/* Private Events Section */}
      <section id="private-events" className="py-24 md:py-32 w-full border-t border-[#1a1c19]/10 relative bg-[#1a1c19] text-[#efe7d2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row-reverse items-center gap-16 md:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative"
          >
              <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden">
               <img src="/hero.webp" alt="Private Dining Room" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[5s] hover:grayscale-0 hover:scale-105" />
               <div className="absolute inset-0 bg-[#0a0b0a]/20"></div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="w-full lg:w-1/2 flex flex-col gap-8"
          >
            <ScrollTextReveal delay={0.3} textColor="#efe7d2">
              <span className="text-[#cfbe91] uppercase tracking-[0.2em] font-bold text-sm mb-4 block">
                {lang === "fr" ? "Événements Privés" : "Private Events"}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#efe7d2] leading-tight text-balance">
                <ShinyText text={lang === "fr" ? "Des Célébrations Inoubliables" : "Unforgettable Celebrations"} color="#efe7d2" shineColor="#cfbe91" speed={3} />
              </h2>
              <div className="flex flex-col gap-6 text-[#efe7d2]/70 text-lg leading-relaxed mt-6">
                <BlurText
                  text={lang === "fr"
                    ? "Qu'il s'agisse d'une réunion d'affaires intime, d'un dîner de répétition ou d'une réception fastueuse, nos salles à manger privées offrent le cadre idéal. Nous proposons des menus personnalisés avec des ingrédients halal finement sélectionnés, et un service dédié pour faire de votre événement une expérience inoubliable."
                    : "Whether it is an intimate business gathering, a rehearsal dinner, or a lavish reception, our private dining rooms provide the perfect backdrop. We offer custom menus crafted with the finest halal ingredients, and dedicated service to make your event an unforgettable experience."}
                  delay={10}
                  animateBy="words"
                  className="text-[#efe7d2]/70"
                />
              </div>
              <div className="mt-6">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-block uppercase tracking-[0.15em] text-sm font-bold border-b border-[#cfbe91] pb-1 text-[#cfbe91] hover:text-[#efe7d2] hover:border-[#efe7d2] transition-colors"
                >
                  {lang === "fr" ? "Se Renseigner" : "Inquire Now"}
                </button>
              </div>
            </ScrollTextReveal>
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
          <ScrollTextReveal className="mb-12" textColor="#1a1c19">
            <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-widest leading-[1] mb-4 text-[#1a1c19]">
              <ShinyText text={lang === "fr" ? "Réservez" : "Reserve"} color="#1a1c19" shineColor="#cfbe91" speed={3} /> <br />
              <span className="text-[#cfbe91] italic normal-case font-light drop-shadow-sm">
                {lang === "fr" ? "appelez-nous" : "call us"}
              </span>
            </h2>
            <div className="max-w-lg mx-auto mb-12">
              <BlurText
                text={lang === "fr"
                  ? "Pour réserver votre table ou organiser un événement privé, appelez-nous directement."
                  : "To reserve your table or arrange a private event, give us a call directly."}
                delay={20}
                animateBy="words"
                className="text-sm md:text-lg font-medium opacity-70 leading-relaxed justify-center"
              />
            </div>
          </ScrollTextReveal>

          <motion.a
            href="tel:+15144211114"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-4 bg-[#1a1c19] text-[#efe7d2] rounded-full px-8 py-5 md:px-12 md:py-7 hover:bg-[#cfbe91] hover:text-[#1a1c19] transition-all duration-300 group shadow-xl"
          >
            <Phone size={24} className="shrink-0" />
            <span className="font-serif text-2xl md:text-4xl tracking-widest lining-nums">(514) 421-1114</span>
          </motion.a>
        </div>
      </section>

      {/* Information & Location Section */}
      <section
        id="information"
        className="py-12 w-full border-t border-[#1a1c19]/10 bg-[#faf8f5] text-[#1a1c19]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Info Pane */}
            <div className="w-full lg:w-[350px] shrink-0 flex flex-col gap-10">

              <ScrollTextReveal className="flex flex-col gap-4" textColor="#1a1c19" delay={0.1}>
                <h3 className="font-serif text-3xl uppercase tracking-widest text-[#1a1c19]">
                  {lang === "fr" ? "Emplacement" : "Location"}
                </h3>
                <div className="flex flex-col gap-2 font-medium text-[#1a1c19]/80">
                  <p className="font-sans text-sm md:text-base leading-relaxed">
                    11602 A Bd de Salaberry,<br />
                    Dollard-des-Ormeaux, QC H9B 2R8
                  </p>
                </div>
              </ScrollTextReveal>

              <ScrollTextReveal className="flex flex-col gap-4" textColor="#1a1c19" delay={0.2}>
                <h3 className="font-serif text-3xl uppercase tracking-widest text-[#1a1c19]">
                  {lang === "fr" ? "Contact & Réservations" : "Contact & Bookings"}
                </h3>
                <div className="flex flex-col gap-2 font-medium text-[#1a1c19]/80">
                  <p className="text-sm">
                    {lang === "fr" ? "Réservez en ligne via le formulaire ci-dessus." : "Book online using the reservation form above."}
                  </p>
                  <p className="text-sm">
                    {lang === "fr" ? "Appelez-nous au" : "Call us at"}{" "}
                    <a href="tel:+15144211114" className="text-[#8a7a4a] hover:underline font-bold">
                      (514) 421-1114
                    </a>
                  </p>
                </div>
              </ScrollTextReveal>
            </div>

            {/* Right Map Explorer Pane */}
            <div className="flex-grow w-full">
              <ScrollTextReveal className="w-full h-full" textColor="#1a1c19" delay={0.3}>
                <NeighborhoodMap lang={lang} />
              </ScrollTextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0a0b0a] text-[#efe7d2] pt-16 border-t border-[#333330] text-center pb-8"
      >
        <h2 className="font-serif text-4xl tracking-[0.2em] text-[#efe7d2] mb-6">
          <ShinyText text="1001" className="lining-nums inline-block" color="#efe7d2" shineColor="#cfbe91" speed={3} />
          <span className="inline-block w-3"></span>
          <ShinyText text="NUITS" className="inline-block" color="#efe7d2" shineColor="#cfbe91" speed={3} />
        </h2>
        
        

        <div className="flex flex-wrap justify-center items-center gap-6 text-[10px] uppercase tracking-[0.2em] opacity-50 mb-12">
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
        <div className="text-[12px] opacity-80 mb-4">
          <a
            href="mailto:1001nuitmtl@gmail.com"
            className="text-[#cfbe91] hover:text-[#efe7d2] transition-colors"
          >
            1001nuitmtl@gmail.com
          </a>
        </div>
        <p className="text-[10px] uppercase tracking-widest opacity-30">
          © {new Date().getFullYear()} 1001 Nuits.{" "}
          {lang === "fr" ? "Tous droits réservés." : "All rights reserved."}
        </p>
      </motion.footer>
    </div>
  );
}
