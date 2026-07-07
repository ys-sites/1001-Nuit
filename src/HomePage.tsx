import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import {
  ArrowRight,
  Instagram,
  Facebook,
  Phone,
  Star,
  Calendar,
  X,
  ShoppingBag,
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
import SocialFeedback from "./components/SocialFeedback";


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
    title_en: "MAIN DISH",
    title_fr: "PLATS PRINCIPAUX",
    items: [
      {
        id: "",
        name_fr: "Bœuf au brocoli",
        name_en: "Broccoli Beef",
        name_zh: "西蘭花牛肉",
        price: "$16.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C01",
        name_fr: "Riz frit aux crevettes sakura et poulet",
        name_en: "C01 Sakura Shrimp&Chicken FR",
        name_zh: "櫻花蝦雞粒炒飯",
        price: "$22.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B16",
        name_fr: "Poulet Général Tao",
        name_en: "B16 General Tao's Chicken",
        name_zh: "左宗棠雞",
        price: "$23.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C03",
        name_fr: "Poulet takoyaki sur riz",
        name_en: "C03 TakoyakiChicken on Rice",
        name_zh: "章魚燒雞飯",
        price: "$21.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C04",
        name_fr: "Crevettes, bœuf et œufs brouillés sur riz",
        name_en: "C04 Prawns BeefScrambleEggsRice",
        name_zh: "香蔥大蝦牛肉滑蛋飯",
        price: "$24.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C06",
        name_fr: "Spaghetti sauté au bœuf sauce poivre noir",
        name_en: "C06 Spaghetti w/Beef BPSauce",
        name_zh: "黑椒牛肉炒意粉",
        price: "$22.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C09",
        name_fr: "Côtes de bœuf AAA sauce poivre noir avec œuf au plat sur riz",
        name_en: "C09 AAA Beef Ribs SunnyEggRice",
        name_zh: "AAA 黑椒牛仔骨煎蛋飯",
        price: "$26.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C10",
        name_fr: "Nouilles de riz plates sautées au bœuf style Hong Kong",
        name_en: "C10 HK style Beef Noodles",
        name_zh: "干炒牛河",
        price: "$23.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C11",
        name_fr: "Pad thaï",
        name_en: "C11 Pad Thai",
        name_zh: "炒泰式河粉",
        price: "$23.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C12",
        name_fr: "Riz frit à l'ananas",
        name_en: "C12 Pineapple Fried Rice",
        name_zh: "菠蘿炒飯",
        price: "$25.99",
        desc_fr: "",
        desc_en: ""
      }
    ]
  },
  {
    title_en: "SUSHI COMBO",
    title_fr: "SUSHI COMBO",
    items: [
      {
        id: "",
        name_fr: "Mangue",
        name_en: "Mango",
        name_zh: "芒果卷",
        price: "$5.99",
        desc_fr: "",
        desc_en: "",
        image: "/sushi/image.webp"
      },
      {
        id: "",
        name_fr: "Avocat",
        name_en: "Avocado",
        name_zh: "牛油果卷",
        price: "$5.99",
        desc_fr: "",
        desc_en: "",
        image: "/sushi/avocado.webp"
      },
      {
        id: "",
        name_fr: "Saumon & Avocat",
        name_en: "Salmon & Avocado",
        name_zh: "三文魚牛油果卷",
        price: "$8.99",
        desc_fr: "",
        desc_en: "",
        image: "/sushi/salmon and avocado.webp"
      },
      {
        id: "",
        name_fr: "Rouleau au poulet frit",
        name_en: "Fried Chicken roll",
        name_zh: "炸雞卷",
        price: "$11.99",
        desc_fr: "",
        desc_en: "",
        image: "/sushi/fried chicken roll.webp"
      },
      {
        id: "",
        name_fr: "Rouleau œil de dragon",
        name_en: "Dragon eye roll",
        name_zh: "龍眼卷",
        price: "$12.99",
        desc_fr: "",
        desc_en: "",
        image: "/sushi/dragon eye roll.webp"
      },
      {
        id: "",
        name_fr: "Saumon épicé",
        name_en: "Spicy Salmon",
        name_zh: "辣三文魚卷",
        price: "$13.99",
        desc_fr: "",
        desc_en: "",
        image: "/sushi/spicy salmon.webp"
      },
      {
        id: "",
        name_fr: "SS1",
        name_en: "SS1",
        name_zh: "SS1壽司拼盤",
        price: "$15.99",
        desc_fr: "",
        desc_en: "",
        image: "/sushi/ss1.webp"
      },
      {
        id: "",
        name_fr: "SS2",
        name_en: "SS2",
        name_zh: "SS2壽司拼盤",
        price: "$21.99",
        desc_fr: "",
        desc_en: "",
        image: "/sushi/ss2.webp"
      },
      {
        id: "",
        name_fr: "SS3",
        name_en: "SS3",
        name_zh: "SS3壽司拼盤",
        price: "$34.99",
        desc_fr: "",
        desc_en: "",
        image: "/sushi/ss3.webp"
      },
      {
        id: "",
        name_fr: "SS4",
        name_en: "SS4",
        name_zh: "SS4壽司拼盤",
        price: "$44.99",
        desc_fr: "",
        desc_en: "",
        image: "/sushi/ss4.webp"
      },
      {
        id: "",
        name_fr: "Bateau 1",
        name_en: "Boat 1",
        name_zh: "壽司船 1",
        price: "$97.99",
        desc_fr: "",
        desc_en: "",
        image: "/sushi/boat 1.webp"
      },
      {
        id: "",
        name_fr: "Bateau 2",
        name_en: "Boat2",
        name_zh: "壽司船 2",
        price: "$111.99",
        desc_fr: "",
        desc_en: "",
        image: "/sushi/boat 2.webp"
      }
    ]
  },
  {
    title_en: "SIZZLING PLATES",
    title_fr: "PLATS SUR PLAQUE CHAUDE",
    items: [
      {
        id: "SP01",
        name_fr: "Côtelettes d'agneau sur plaque chaude",
        name_en: "SP01 Sizzling Lamb Chops",
        name_zh: "鐵板羊扒",
        price: "$39.99",
        desc_fr: "préparation env. 20 min",
        desc_en: "prep time approx. 20 min"
      },
      {
        id: "SP02",
        name_fr: "Côtes de bœuf AAA Angus sur plaque chaude",
        name_en: "SP02 AAA Angus Beef Ribs",
        name_zh: "AAA安格斯牛肋骨",
        price: "$34.99",
        desc_fr: "préparation env. 20 min",
        desc_en: "prep time approx. 20 min"
      },
      {
        id: "SP03",
        name_fr: "Poulet à l'ail sur plaque chaude",
        name_en: "SP03 Garlic Chicken Chop",
        name_zh: "鐵板蒜蓉雞扒",
        price: "$28.99",
        desc_fr: "préparation env. 20 min",
        desc_en: "prep time approx. 20 min"
      },
      {
        id: "SP04",
        name_fr: "Filet de sole pané et poulet sur plaque chaude",
        name_en: "SP04 BreadSole&ChickenChop",
        name_zh: "鐵板吉列龍利雞扒",
        price: "$31.99",
        desc_fr: "préparation env. 20 min",
        desc_en: "prep time approx. 20 min"
      }
    ]
  },
  {
    title_en: "DUMPLINGS",
    title_fr: "DUMPLINGS",
    items: [
      {
        id: "",
        name_fr: "Raviolis crevettes, œuf & courgette",
        name_en: "Shrimp egg & zucchini",
        name_zh: "蝦仁蛋瓜餃",
        price: "$12.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Raviolis aux légumes",
        name_en: "Vegetables Dumpling",
        name_zh: "素菜餃子",
        price: "$8.99",
        desc_fr: "",
        desc_en: ""
      }
    ]
  },
  {
    title_en: "VEGETARIAN",
    title_fr: "PLATS VÉGÉTARIENS",
    items: [
      {
        id: "V01",
        name_fr: "Vermicelles de riz sautés végétariens",
        name_en: "V01 Veg Stir Vermicelli",
        name_zh: "素炒米粉",
        price: "$15.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "V02",
        name_fr: "Riz frit végétarien",
        name_en: "V02 Veg Fried Rice",
        name_zh: "炒飯 (素)",
        price: "$13.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "V05",
        name_fr: "Tofu braisé à la sauce soya",
        name_en: "V05 Braised Tofu in Soy Sauce",
        name_zh: "紅燒豆腐",
        price: "$13.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Légumes mélangés sautés",
        name_en: "Stir-Fried Mixed Vegetables",
        name_zh: "炒雜菜",
        price: "$12.95",
        desc_fr: "",
        desc_en: ""
      }
    ]
  },
  {
    title_en: "BAKED HK STYLE",
    title_fr: "PLATS GRATINÉS STYLE HK",
    items: [
      {
        id: "F01",
        name_fr: "Gratin au cari de bœuf braisé",
        name_en: "F01 Baked Curry Braised Beef",
        name_zh: "焗咖喱牛腩",
        price: "$22.99",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti"
      },
      {
        id: "F02",
        name_fr: "Gratin au poulet sauce crémeuse",
        name_en: "F02 Baked Chicken Creamy Sauce",
        name_zh: "焗白汁雞皇",
        price: "$19.99",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti"
      },
      {
        id: "F03",
        name_fr: "Gratin au poulet sauce poivre noir",
        name_en: "F03 Bake BPChicken Steak",
        name_zh: "焗黑椒雞扒",
        price: "$19.99",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti"
      },
      {
        id: "F05",
        name_fr: "Gratin à la sauce bolognaise",
        name_en: "F05 Baked Bolognese",
        name_zh: "焗肉醬意粉",
        price: "$18.99",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti"
      },
      {
        id: "F06",
        name_fr: "Gratin spécial bœuf",
        name_en: "F06 Special Beef Bake",
        name_zh: "焗牛魔王",
        price: "$24.99",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti"
      },
      {
        id: "F07",
        name_fr: "Filet de poisson gratiné sauce crémeuse aux champignons",
        name_en: "BakeFish Fillet w/Creamy MushS",
        name_zh: "焗白汁蘑菇魚柳",
        price: "$21.99",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti"
      }
    ]
  },
  {
    title_en: "CURRY STYLE HK",
    title_fr: "CARI STYLE HK",
    items: [
      {
        id: "E01",
        name_fr: "Cari de bœuf braisé (sans accompagnement)",
        name_en: "E01 Curry Beef (no side)",
        name_zh: "咖喱牛腩淨食",
        price: "$29.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "E02",
        name_fr: "Cari de côtelettes d'agneau (sans accompagnement)",
        name_en: "E02 Curry Lamb Chops (No Side)",
        name_zh: "咖喱羊排淨食",
        price: "$33.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "E03",
        name_fr: "Cari de légumes variés avec œuf sur riz",
        name_en: "E03 Curry Mixed VegEgg on Rice",
        name_zh: "咖喱雜菜蛋飯",
        price: "$16.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "E06",
        name_fr: "Cari de bœuf sur riz",
        name_en: "E06 Curry Beef on Rice",
        name_zh: "咖喱牛肉飯",
        price: "$21.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "E08",
        name_fr: "Cari de côtelettes d'agneau sur riz",
        name_en: "E08 Curry Lamb Chops on Rice",
        name_zh: "咖喱羊排飯",
        price: "$27.99",
        desc_fr: "",
        desc_en: ""
      }
    ]
  },
  {
    title_en: "INSTANT",
    title_fr: "NOUILLES INSTANTANÉES",
    items: [
      {
        id: "M01",
        name_fr: "Nouilles Lo Ding au curry et poitrine de bœuf braisée",
        name_en: "M01 Curry Beef Brisket Lo Ding",
        name_zh: "咖喱牛腩湯撈一丁",
        price: "$18.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "M02",
        name_fr: "Nouilles Lo Ding au poulet sauce soja et œufs brouillés",
        name_en: "M02 Chicken&ScrambleEggLoDing",
        name_zh: "豉油皇雞滑蛋湯撈一丁",
        price: "$15.99",
        desc_fr: "",
        desc_en: ""
      }
    ]
  },
  {
    title_en: "SIGNATURE SNACK",
    title_fr: "COLLATION SIGNATURE",
    items: [
      {
        id: "",
        name_fr: "Poulet pop-corn",
        name_en: "Popcorn Chicken",
        name_zh: "鹽酥雞",
        price: "$14.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Toast au lait condensé",
        name_en: "Condensed Milk Toast",
        name_zh: "煉奶多士",
        price: "$7.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Toast avec crème glacée",
        name_en: "Ice cream toast",
        name_zh: "雪糕多士",
        price: "$9.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Toast aux crevettes",
        name_en: "Shrimp Toast",
        name_zh: "蝦多士",
        price: "$6.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Crème glacée",
        name_en: "Ice Cream",
        name_zh: "雪糕",
        price: "$1.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Gaufre au chocolat et crème glacée",
        name_en: "Chocolate waffle ice cream",
        name_zh: "朱古力雪糕格仔餅",
        price: "$8.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Gaufres à la crème glacée au thé vert",
        name_en: "green tea ice cream waffles",
        name_zh: "抹茶雪糕格仔餅",
        price: "$8.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Gaufres à la crème glacée aux haricots rouges",
        name_en: "red bean ice cream waffles",
        name_zh: "紅豆雪糕格仔餅",
        price: "$8.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Gelato à la mangue",
        name_en: "Mango Gelato",
        name_zh: "芒果意式雪糕",
        price: "$7.99",
        desc_fr: "",
        desc_en: ""
      }
    ]
  },
  {
    title_en: "DRINK",
    title_fr: "BOISSONS",
    items: [
      {
        id: "",
        name_fr: "Thé au lait à la hongkongaise",
        name_en: "Hong Kong Style Milk Tea",
        name_zh: "港式奶茶",
        price: "$4.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Thé au lait au taro",
        name_en: "Taro milk tea",
        name_zh: "芋頭奶茶",
        price: "$5.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Café",
        name_en: "Coffee",
        name_zh: "咖啡",
        price: "$3.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Latte matcha aux fraises",
        name_en: "Strawberry matcha latte",
        name_zh: "草莓抹茶拿鐵",
        price: "$5.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Latte matcha à la mangue",
        name_en: "Mango matcha latte",
        name_zh: "芒果抹茶拿鐵",
        price: "$5.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Slush mangue et fruit de la passion",
        name_en: "Mango passion slush",
        name_zh: "芒果百香果沙冰",
        price: "$7.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Slush aux fraises",
        name_en: "Strawberry slush",
        name_zh: "草莓沙冰",
        price: "$7.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Coca-Cola mexicain en bouteille",
        name_en: "Coca cola mexican bottled",
        name_zh: "墨西哥可口可樂",
        price: "$4.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Limonade",
        name_en: "Limonade",
        name_zh: "檸檬水",
        price: "$4.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Coke diète",
        name_en: "Diet Coke",
        name_zh: "健怡可樂",
        price: "$3.00",
        desc_fr: "",
        desc_en: ""
      }
    ]
  },
  {
    title_en: "SNACKS & SIDES",
    title_fr: "ENTRÉES & ACCOMPAGNEMENTS",
    items: [
      {
        id: "B09",
        name_fr: "Bœuf épicé piment",
        name_en: "B09 Spicy Chill Beef",
        name_zh: "B09 辣椒牛肉",
        price: "$13.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B01",
        name_fr: "Soupe udon au bœuf braisé au cari",
        name_en: "B01 Curry Beef Udon Soup",
        name_zh: "B01 咖喱牛腩湯烏冬",
        price: "$22.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B06",
        name_fr: "Udon sauté au poulet",
        name_en: "B06 Chicken Udon Stir-Fry",
        name_zh: "B06 雞肉炒烏冬",
        price: "$19.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B03",
        name_fr: "Crevettes Général Tao",
        name_en: "B03 General Tao's Shrimp",
        name_zh: "B03 左宗棠蝦",
        price: "$26.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B16",
        name_fr: "Poulet Général Tao",
        name_en: "B16 General Tao's Chicken",
        name_zh: "B16 左宗棠雞",
        price: "$23.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Cuisse de poulet frit croustillant avec salade de pommes de terre ou frites",
        name_en: "ChickenLeg w/PotatoSalad/Fries",
        name_zh: "生炸雞腿配薯仔沙律或薯條",
        price: "$14.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B04",
        name_fr: "Boules de sésame",
        name_en: "B04 Sesame Balls",
        name_zh: "B04 煎堆",
        price: "$5.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B19",
        name_fr: "Pétoncles frits",
        name_en: "B19 Fried Scallops",
        name_zh: "B19 炸帶子",
        price: "$6.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B17",
        name_fr: "Calmars frits",
        name_en: "B17 Deep Fried Calamari",
        name_zh: "B17 炸魷魚圈",
        price: "$14.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B10",
        name_fr: "Boulettes de bœuf au cari style Hong Kong",
        name_en: "B10 HKCurry Beef Ball",
        name_zh: "B10 港式咖喱牛丸",
        price: "$9.99",
        desc_fr: "",
        desc_en: ""
      }
    ]
  }
];

const MINI_MENU = [
  { name_en: "B16 General Tao's Chicken", name_fr: "B16 Poulet Général Tao", price: "$23.99" },
  { name_en: "E06 Curry Beef on Rice", name_fr: "E06 Cari de bœuf sur riz", price: "$21.99" },
  {
    name_en: "SP01 Sizzling Lamb Chops",
    name_fr: "SP01 Côtelettes d'agneau sur plaque chaude",
    price: "$39.99",
  },
];


export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [showPromo, setShowPromo] = useState(true);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const handleOrderOnline = () => {
    window.open('https://cloud.quickposhub.com/onlineorder/#/pages/order/tableurl?code=E9IPN247Bx', '_blank');
  };

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
          className="w-full md:w-[78%] xl:w-[82%] relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden h-[calc(100svh-1.5rem)] md:h-full md:flex-none flex-shrink-0 group"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/HeroShot.webp"
              alt="Ambiance"
              fetchPriority="high"
              decoding="async"
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






          {/* Social Badges bottom right */}
          <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 z-20 flex items-center gap-2 md:gap-3">
            {[
              { icon: Instagram as any, link: "https://www.instagram.com/1001nu1t/", color: "#E4405F" },
              { icon: Facebook as any, link: "https://www.facebook.com/share/1J1KukJuHs/?mibextid=wwXIfr", color: "#1877F2" },
              { icon: TiktokIcon as any, link: "https://www.tiktok.com/@1001nu1t", color: "#25F4EE" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredSocial(idx)}
                onMouseLeave={() => setHoveredSocial(null)}
                className="w-10 h-10 md:w-[52px] md:h-[52px] flex items-center justify-center rounded-full bg-[#0a0b0a]/85 backdrop-blur-none md:backdrop-blur-md md:bg-[#0a0b0a]/60 border border-[#333330] transition-colors duration-300"
                style={{
                  backgroundColor: hoveredSocial === idx ? social.color : undefined,
                  borderColor: hoveredSocial === idx ? social.color : undefined,
                }}
              >
                <social.icon
                  size={16}
                  strokeWidth={1.5}
                  style={{
                    color: hoveredSocial === idx ? "#ffffff" : social.color,
                    transition: "color 0.3s ease",
                  }}
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Sidebar Sections - Equal Ratio Boxes */}
        <div className="w-full md:w-[22%] xl:w-[18%] flex flex-col gap-3 md:gap-4 flex-shrink-0 md:h-full md:flex-1 h-auto">
          {/* Menu Block */}
          <motion.div
            onClick={() => scrollTo("menu")}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex-1 aspect-[16/9] md:aspect-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group block cursor-pointer"
          >
            <img
              src="/SoupDumplings.webp"
              alt="Menu"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0a0b0a]/30 group-hover:bg-[#0a0b0a]/10 transition-colors duration-500 z-0"></div>

            {/* Mini Menu Peek */}
            <div className="absolute top-6 left-6 right-6 z-10 hidden sm:block pointer-events-none">
              <div className="bg-[#0a0b0a]/70 backdrop-blur-md md:backdrop-blur-xl border border-[#333330] rounded-2xl p-4 flex flex-col gap-3 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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

            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 bg-[#0a0b0a]/85 backdrop-blur-none md:backdrop-blur-md md:bg-[#0a0b0a]/80 border border-[#333330] rounded-full pl-6 py-2.5 pr-2.5 flex items-center gap-5 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
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
            className="relative w-full flex-1 aspect-[16/9] md:aspect-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group block cursor-pointer"
          >
            <img
              src="/reservation.webp"
              alt="Reservation"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0a0b0a]/40 group-hover:bg-[#0a0b0a]/20 transition-colors duration-500 z-0"></div>

            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 bg-[#0a0b0a]/85 backdrop-blur-none md:backdrop-blur-md md:bg-[#0a0b0a]/80 border border-[#333330] rounded-full pl-6 py-2.5 pr-2.5 flex items-center gap-5 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
              <span className="text-[10px] tracking-[0.2em] font-medium uppercase mt-0.5">
                {lang === "fr" ? "Réservation" : "Reservation"}
              </span>
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
                <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>

          {/* Order Online Block */}
          <motion.div
            onClick={handleOrderOnline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex-1 aspect-[16/9] md:aspect-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group block cursor-pointer"
          >
            <img
              src="/menu.webp"
              alt="Order Online"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0a0b0a]/30 group-hover:bg-[#0a0b0a]/10 transition-colors duration-500 z-0"></div>

            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 bg-[#0a0b0a]/85 backdrop-blur-none md:backdrop-blur-md md:bg-[#0a0b0a]/80 border border-[#333330] rounded-full pl-6 py-2.5 pr-2.5 flex items-center gap-5 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
              <span className="text-[10px] tracking-[0.2em] font-medium uppercase mt-0.5">
                {lang === "fr" ? "Commander en ligne — À emporter" : "Order Online — Pickup"}
              </span>
              <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
                <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Feedback Section */}
      <SocialFeedback lang={lang} />

      {/* Menu Section */}
      <section
        id="menu"
        className="min-h-screen bg-[#faf8f5] text-[#1a1c19] pt-24 pb-24 w-full relative content-visibility-lazy"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Order Online CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 sm:gap-12 mb-12"
          >
            {/* Pickup Order */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-[#1a1c19]/50 text-[11px] uppercase tracking-[0.25em] font-bold">
                {lang === "fr" ? "Commande à emporter" : "Pickup Order"}
              </p>
              <button
                id="order-online-menu-cta"
                onClick={handleOrderOnline}
                className="px-8 py-3.5 bg-[#c8b88a] text-[#1a1c19] text-[11px] tracking-[0.25em] font-bold uppercase rounded-full hover:bg-[#efe7d2] transition-all duration-300 shadow-md"
              >
                {lang === "fr" ? "Commander en ligne" : "Order Online"}
              </button>
            </div>

            {/* Uber Eats Delivery Order */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-[#1a1c19]/50 text-[11px] uppercase tracking-[0.25em] font-bold">
                {lang === "fr" ? "Livraison Uber Eats" : "Uber Eats Delivery"}
              </p>
              <button
                id="uber-eats-menu-cta"
                onClick={() => window.open('https://www.order.store/store/1001-nuit-authentic-chinese-restaurant/3pM54vb0RuSg-0QNzFABEQ', '_blank')}
                className="px-8 py-3.5 bg-[#06C167] text-white text-[11px] tracking-[0.25em] font-bold uppercase rounded-full hover:bg-[#05a85c] transition-all duration-300 shadow-md"
              >
                {lang === "fr" ? "Commander sur Uber Eats" : "Order Uber Eats"}
              </button>
            </div>

            {/* DoorDash Delivery Order */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-[#1a1c19]/50 text-[11px] uppercase tracking-[0.25em] font-bold">
                {lang === "fr" ? "Livraison DoorDash" : "DoorDash Delivery"}
              </p>
              <button
                id="doordash-menu-cta"
                onClick={() => window.open('https://order.online/business/1001-nuit-21950545', '_blank')}
                className="px-8 py-3.5 bg-[#FF3008] text-white text-[11px] tracking-[0.25em] font-bold uppercase rounded-full hover:bg-[#E02600] transition-all duration-300 shadow-md"
              >
                {lang === "fr" ? "Commander sur DoorDash" : "Order DoorDash"}
              </button>
            </div>

            {/* Fantuan Delivery Order */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-[#1a1c19]/50 text-[11px] uppercase tracking-[0.25em] font-bold">
                {lang === "fr" ? "Livraison Fantuan" : "Fantuan Delivery"}
              </p>
              <button
                id="fantuan-menu-cta"
                onClick={() => window.open('https://mwx.fantuan.ca/store/Restaurant/ca-4811988?f_promotion=157745&f_channel=198603&f_type=0&f_id=1', '_blank')}
                className="px-8 py-3.5 bg-[#1CC4C4] text-black text-[11px] tracking-[0.25em] font-bold uppercase rounded-full hover:bg-[#16a8a8] transition-all duration-300 shadow-md"
              >
                {lang === "fr" ? "Commander sur Fantuan" : "Order Fantuan"}
              </button>
            </div>
          </motion.div>

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
                    ? "border-[#c8b88a] bg-[#c8b88a] text-[#1a1c19] shadow-sm"
                    : "border-[#1a1c19]/20 text-[#1a1c19] hover:border-[#c8b88a] hover:text-[#1a1c19]"
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

          {/* Menu Items -- photo-grid for Sushi Combo, text rows for others */}
          {(MENU_CATEGORIES[activeCategory].items[0] as any)?.image ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {MENU_CATEGORIES[activeCategory].items.map((item, idx) => (
                <motion.div
                  key={`img-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden group aspect-[4/3]"
                >
                  <img
                    src={(item as any).image}
                    alt={lang === "fr" ? item.name_fr : item.name_en}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0a]/90 via-[#0a0b0a]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <p className="font-serif text-sm sm:text-base text-[#efe7d2] leading-snug">
                      {lang === "fr" ? item.name_fr : item.name_en}
                    </p>
                    <p className="font-serif text-[#cfbe91] text-sm sm:text-base font-bold mt-1">
                      {item.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-6 sm:gap-10">
              {MENU_CATEGORIES[activeCategory].items.map((item, idx) => (
                <motion.div
                  key={`txt-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex flex-col gap-2 group"
                >
                  <div className="flex-1 flex flex-col justify-center w-full">
                    <div className="flex items-end gap-2 w-full min-w-0">
                      <h4 className="font-serif text-[1.05rem] sm:text-[1.4rem] md:text-2xl tracking-wide text-[#1a1c19] shrink min-w-0">
                        {lang === "fr" ? item.name_fr : item.name_en}
                      </h4>
                      <div className="flex-1 border-b-[1.5px] border-dotted border-[#1a1c19]/30 mx-1 sm:mx-2 relative top-[-5px] sm:top-[-8px] min-w-[8px] shrink-0"></div>
                      <span className="font-serif text-[1.05rem] sm:text-[1.4rem] md:text-2xl tracking-wider text-[#1a1c19] shrink-0">
                        {item.price}
                      </span>
                    </div>
                    {(lang === "fr" ? item.desc_fr : item.desc_en) && (
                      <p className="text-[12px] sm:text-[13px] md:text-sm text-[#1a1c19]/70 mt-2 font-medium tracking-wide">
                        {lang === "fr" ? item.desc_fr : item.desc_en}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-24 md:py-32 bg-[#faf8f5] text-[#1a1c19] overflow-hidden content-visibility-lazy">
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

          <Link
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
          </Link>
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
        className="min-h-screen bg-[#faf8f5] text-[#1a1c19] py-24 w-full relative border-t border-[#1a1c19]/10 overflow-hidden flex flex-col justify-between content-visibility-lazy"
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
                loading="lazy"
                decoding="async"
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
                  loading="lazy"
                  decoding="async"
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
            className="flex-1 flex flex-col justify-center lg:mt-0 order-1 lg:order-2 backdrop-blur-none bg-white/85 md:backdrop-blur-md md:bg-white/30 p-8 md:p-12 lg:p-16 rounded-[4rem] border border-white/20 shadow-sm"
          >
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="rounded-2xl p-2 bg-[#0a0b0a] border border-[#333330] w-36 h-20 shadow-md overflow-hidden">
                <img
                  src="/logo.webp"
                  alt="1001 Nuits Logo"
                  loading="lazy"
                  decoding="async"
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
                    ? "Founded on the belief that culinary excellence shouldn't compromise on dietary principles, 1001 Nuits brings authentic Asian cuisine crafted exclusively with halal ingredients."
                    : "Fondé sur la conviction que l'excellence culinaire ne doit pas faire de compromis avec ses principes diététiques, 1001 Nuits propose une cuisine asiatique authentique élaborée exclusivement avec des ingrédients halal."}
                  delay={10}
                  animateBy="words"
                  className="text-[#1a1c19]/80"
                />
                <BlurText
                  text={lang === "en"
                    ? "Every dish is a carefully balanced masterpiece—hand-slaughtered halal meat, free of pork and alcohol, without losing the signature taste that makes Asian cuisine world-renowned."
                    : "Chaque plat est un chef-d'œuvre soigneusement équilibré : viande halal abattue à la main, sans porc ni alcool, tout en préservant le goût distinctif qui rend la cuisine asiatique célèbre dans le monde entier."}
                  delay={10}
                  animateBy="words"
                  className="text-[#1a1c19]/80"
                />
                <BlurText
                  text={lang === "en"
                    ? "Our chefs are experts in Asian cuisine with more than 20 years of experience, bringing genuine technique and flavor to every plate."
                    : "Nos chefs sont des experts de la cuisine asiatique et possèdent plus de 20 ans d'expérience culinaire, apportant authenticité et savoir-faire à chaque plat."}
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
      <section id="private-events" className="py-24 md:py-32 w-full border-t border-[#1a1c19]/10 relative bg-[#1a1c19] text-[#efe7d2] content-visibility-lazy">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row-reverse items-center gap-16 md:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative"
          >
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto rounded-[2.5rem] overflow-hidden">
               <img src="/hero.webp" alt="Private Dining Room" loading="lazy" decoding="async" className="w-full h-auto transition-all duration-[5s] hover:scale-105" />
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
        className="min-h-[85vh] bg-[#faf8f5] text-[#1a1c19] py-32 w-full relative overflow-hidden flex items-center border-t border-[#1a1c19]/10 content-visibility-lazy"
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
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <ScrollTextReveal className="mb-16 text-center" textColor="#1a1c19">
            <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-widest leading-[1] mb-6 text-[#1a1c19]">
              <ShinyText text={lang === "fr" ? "Réservez" : "Reserve"} color="#1a1c19" shineColor="#cfbe91" speed={3} /> <br />
              <span className="text-[#cfbe91] italic normal-case font-light drop-shadow-sm">
                {lang === "fr" ? "une table" : "a table"}
              </span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <BlurText
                text={lang === "fr"
                  ? "Réservez en ligne pour une confirmation instantanée (jusqu'à 8 personnes) ou appelez-nous directement."
                  : "Book online for instant confirmation (up to 8 guests) or call us directly to arrange your reservation."}
                delay={20}
                animateBy="words"
                className="text-sm md:text-lg font-medium opacity-70 leading-relaxed justify-center"
              />
            </div>
          </ScrollTextReveal>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto mt-12">
            {/* Online Booking Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 p-8 md:p-10 bg-white border border-[#cfbe91]/40 rounded-[2.5rem] shadow-[0_24px_60px_rgba(0,0,0,0.06)] flex flex-col justify-between items-center text-center group hover:shadow-[0_30px_70px_rgba(207,190,145,0.15)] transition-all duration-500"
            >
              <div className="flex flex-col items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#cfbe91]/10 flex items-center justify-center text-[#cfbe91] group-hover:bg-[#cfbe91] group-hover:text-white transition-all duration-500">
                  <Calendar size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1a1c19] mb-2 font-semibold">
                    {lang === "fr" ? "En Ligne" : "Book Online"}
                  </h3>
                  <p className="text-sm text-[#1a1c19]/60 font-medium leading-relaxed max-w-[280px] mx-auto">
                    {lang === "fr"
                      ? "Confirmation instantanée et rapide en quelques clics."
                      : "Quick, instant confirmation in just a few clicks."}
                  </p>
                </div>
              </div>
              <div className="mt-8 w-full">
                <motion.a
                  href="https://cloud.quickposhub.com/onlineorder/#/pages/order/tableurl?code=eJlRgR8hfc"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-[#c8b88a] text-[#1a1c19] hover:bg-[#efe7d2] px-4 py-4 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300 shadow-md group/btn whitespace-nowrap"
                >
                  <span>{lang === "fr" ? "Réserver en ligne" : "Reserve Online"}</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>

            {/* Phone Booking Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 p-8 md:p-10 bg-white border border-[#cfbe91]/20 rounded-[2.5rem] shadow-[0_24px_60px_rgba(0,0,0,0.06)] flex flex-col justify-between items-center text-center group hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              <div className="flex flex-col items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#cfbe91]/10 flex items-center justify-center text-[#cfbe91] group-hover:bg-[#cfbe91] group-hover:text-white transition-all duration-500">
                  <Phone size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1a1c19] mb-2 font-semibold">
                    {lang === "fr" ? "Par Téléphone" : "By Phone"}
                  </h3>
                  <p className="text-sm text-[#1a1c19]/60 font-medium leading-relaxed max-w-[280px] mx-auto">
                    {lang === "fr"
                      ? "Idéal pour les groupes de plus de 8 personnes ou événements spéciaux."
                      : "Best for groups larger than 8 guests or special events."}
                  </p>
                </div>
              </div>
              <div className="mt-8 w-full">
                <motion.a
                  href="tel:+15144211114"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-[#c8b88a] text-[#1a1c19] hover:bg-[#efe7d2] px-4 py-4 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300 shadow-md whitespace-nowrap"
                >
                  <Phone size={16} />
                  <span className="lining-nums">(514) 421-1114</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
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
                    {lang === "fr" ? "Réservez en ligne via le lien de réservation ci-dessus." : "Book online using the reservation link above."}
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
        className="bg-[#0a0b0a] text-[#efe7d2] pt-16 border-t border-[#333330] text-center pb-8 content-visibility-lazy"
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
        <div className="flex justify-center items-center mt-6">
          <a 
            href="https://www.ysdev.ca" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ys-signature-btn"
          >
            <img 
              src="/YS.webp" 
              alt="YS Logo" 
              loading="lazy"
              decoding="async"
              className="ys-sig-logo" 
            />
            <span className="ys-sig-text">
              Made by <strong className="ys-sig-highlight">YS Marketing Solutions</strong> <span className="ys-sig-divider">|</span> Marketing Agency
            </span>
          </a>
        </div>
      </motion.footer>

      {/* Promotional Popup Modal */}
      <AnimatePresence>
        {showPromo && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
            {/* Backdrop Blur/Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPromo(false)}
              className="absolute inset-0 bg-[#0a0b0a]/90 backdrop-blur-none md:backdrop-blur-md md:bg-[#0a0b0a]/85 cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative max-w-lg w-full bg-[#1a1c19] border border-[#cfbe91]/30 rounded-3xl md:rounded-[2rem] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.6)] z-10 flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPromo(false)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0a0b0a]/60 text-[#efe7d2] hover:bg-white hover:text-black border border-white/10 transition-colors cursor-pointer"
                aria-label="Close promotion"
              >
                <X size={20} />
              </button>

              {/* Image Container */}
              <div className="w-full aspect-auto flex items-center justify-center bg-[#0a0b0a]">
                <img
                  src="/promotion.webp"
                  alt="Promotion"
                  decoding="async"
                  className="w-full h-auto max-h-[75vh] object-contain select-none"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
