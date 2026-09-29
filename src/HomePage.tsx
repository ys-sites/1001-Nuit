import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import {
  ArrowRight,
  Instagram,
  Facebook,
  Phone,
  Star,
  Calendar,
  ShoppingBag,
  MapPin,
} from "lucide-react";

const RESTAURANT_ADDRESS = "11602-A Boulevard de Salaberry, Dollard-des-Ormeaux, QC H9B 2R8";

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
import CateringForm from "./components/CateringForm";


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

const SHOW_MENU_IMAGES = true;

const MENU_CATEGORIES = [
  {
    "title_en": "MAIN DISH",
    "title_fr": "PLATS PRINCIPAUX",
    "items": [
      {
        "id": "",
        "name_fr": "Bœuf au brocoli",
        "name_en": "Broccoli Beef",
        "name_zh": "西蘭花牛肉",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Main Dish/Broccoli Beef.png"
      },
      {
        "id": "C01",
        "name_fr": "Riz frit aux crevettes sakura et poulet",
        "name_en": "C01 Sakura Shrimp & Chicken Fried Rice",
        "name_zh": "櫻花蝦雞粒炒飯",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Main Dish/C01 Sakura Shrimp&Chicken FR.png"
      },
      {
        "id": "B16",
        "name_fr": "Poulet Général Tao (Plat)",
        "name_en": "B16 General Tao's Chicken (Main)",
        "name_zh": "左宗棠雞飯",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Main Dish/B16 General Tao's Chicken - Main Dish.png"
      },
      {
        "id": "C03",
        "name_fr": "Poulet takoyaki sur riz",
        "name_en": "C03 Takoyaki Chicken on Rice",
        "name_zh": "章魚燒雞飯",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Main Dish/C03 TakoyakiChicken on Rice.jpg"
      },
      {
        "id": "C06",
        "name_fr": "Spaghetti sauté au bœuf sauce poivre noir",
        "name_en": "C06 Spaghetti w/Beef BP Sauce",
        "name_zh": "黑椒牛肉炒意粉",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Main Dish/C06 Spaghetti w-Beef BPSauce.png"
      },
      {
        "id": "C09",
        "name_fr": "Côtes de bœuf AAA sauce poivre noir avec œuf au plat sur riz",
        "name_en": "C09 AAA Beef Ribs Sunny Egg Rice",
        "name_zh": "AAA 黑椒牛仔骨煎蛋飯",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Main Dish/C09 AAA Beef Ribs SunnyEggRice.png"
      },
      {
        "id": "C10",
        "name_fr": "Nouilles de riz plates sautées au bœuf style Hong Kong",
        "name_en": "C10 HK style Beef Noodles",
        "name_zh": "干炒牛河",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Main Dish/C10 HK style Beef Noodles.png"
      },
      {
        "id": "C11",
        "name_fr": "Pad thaï",
        "name_en": "C11 Pad Thai",
        "name_zh": "炒泰式河粉",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Main Dish/C11 Pad Thai.png"
      },
      {
        "id": "C12",
        "name_fr": "Riz frit à l'ananas",
        "name_en": "C12 Pineapple Fried Rice",
        "name_zh": "菠蘿炒飯",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Main Dish/C12 Pineapple Fried Rice.png"
      },
      {
        "id": "C13",
        "name_fr": "Udon sauté au bœuf",
        "name_en": "C13 Stir-fried Beef udon",
        "name_zh": "乾炒牛肉烏冬",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Main Dish/Stir-fried Beef udon.jpg"
      }
    ]
  },
  {
    "title_en": "SUSHI COMBO",
    "title_fr": "COMBOS SUSHI",
    "items": [
      {
        "id": "",
        "name_fr": "Rouleau à la mangue (6 mcx)",
        "name_en": "Mango roll 6 PCS",
        "name_zh": "芒果卷",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/Mango roll 6PCS.png"
      },
      {
        "id": "",
        "name_fr": "Rouleau à l'avocat (6 mcx)",
        "name_en": "Avocado 6 PCS",
        "name_zh": "牛油果卷",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/Avocado 6PCS.png"
      },
      {
        "id": "",
        "name_fr": "Saumon & Avocat (6 mcx)",
        "name_en": "Salmon & Avocado 6 PCS",
        "name_zh": "三文魚牛油果卷",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/Salmon & Avocado 6PCS.png"
      },
      {
        "id": "",
        "name_fr": "Rouleau au poulet frit (10 mcx)",
        "name_en": "Fried Chicken roll 10 PCS",
        "name_zh": "炸雞卷",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/Fried Chicken roll 10 PCS.png"
      },
      {
        "id": "",
        "name_fr": "Rouleau Dragon Eye (10 mcx)",
        "name_en": "Dragon eye roll 10 PCS",
        "name_zh": "龍眼卷",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/Dragon eye roll 10 PCS.png"
      },
      {
        "id": "",
        "name_fr": "Saumon épicé (6 mcx)",
        "name_en": "Spicy Salmon 6 PCS",
        "name_zh": "辣三文魚卷",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/Spicy Salmon 6PCS.png"
      },
      {
        "id": "",
        "name_fr": "Rouleau Californie (10 mcx)",
        "name_en": "California Roll 10 PCS",
        "name_zh": "加州卷",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/California Roll 10 PCS.png"
      },
      {
        "id": "SS1",
        "name_fr": "Combo SS1 (14 mcx)",
        "name_en": "SS1 (14 PCS)",
        "name_zh": "壽司套餐 SS1",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/SS1.png"
      },
      {
        "id": "SS2",
        "name_fr": "Combo SS2 (16 mcx)",
        "name_en": "SS2 (16 PCS)",
        "name_zh": "壽司套餐 SS2",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/SS2.png"
      },
      {
        "id": "SS3",
        "name_fr": "Combo SS3 (28 mcx)",
        "name_en": "SS3 (28 PCS)",
        "name_zh": "壽司套餐 SS3",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/SS3.png"
      },
      {
        "id": "SS4",
        "name_fr": "Combo SS4 (34 mcx)",
        "name_en": "SS4 (34 PCS)",
        "name_zh": "壽司套餐 SS4",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/SS4.png"
      },
      {
        "id": "Boat 1",
        "name_fr": "Bateau Sushi 1 (74 mcx)",
        "name_en": "Boat 1 (74 PCS)",
        "name_zh": "壽司船 1",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/Boat 1.png"
      },
      {
        "id": "Boat 2",
        "name_fr": "Bateau Sushi 2 (88 mcx)",
        "name_en": "Boat 2 (88 PCS)",
        "name_zh": "壽司船 2",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Sushi Combo/Boat2.png"
      }
    ]
  },
  {
    "title_en": "SIZZLING PLATES",
    "title_fr": "PLAQUES CHAUFFANTES",
    "items": [
      {
        "id": "SP01",
        "name_fr": "Côtelettes d'agneau grésillantes",
        "name_en": "SP01 Sizzling Lamb Chops",
        "name_zh": "SP01 鐵板羊扒",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SIZZLING PLATES/SP01 Sizzling Lamb Chops.png"
      },
      {
        "id": "SP02",
        "name_fr": "Côtes de bœuf Angus AAA",
        "name_en": "SP02 AAA Angus Beef Ribs",
        "name_zh": "SP02 AAA 鐵板牛仔骨",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SIZZLING PLATES/SP02 AAA Angus Beef Ribs.png"
      },
      {
        "id": "SP03",
        "name_fr": "Côtelette de poulet à l'ail",
        "name_en": "SP03 Garlic Chicken Chop",
        "name_zh": "SP03 蒜香雞扒",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SIZZLING PLATES/SP03 Garlic Chicken Chop.jpg"
      },
      {
        "id": "SP04",
        "name_fr": "Filet de sole et côtelette de poulet",
        "name_en": "SP04 Bread Sole & Chicken Chop",
        "name_zh": "SP04 龍利柳配雞扒",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SIZZLING PLATES/SP04 BreadSole&ChickenChop.jpg"
      }
    ]
  },
  {
    "title_en": "DUMPLINGS",
    "title_fr": "DUMPLINGS",
    "items": [
      {
        "id": "",
        "name_fr": "Dumplings à la soupe d'agneau et coriandre",
        "name_en": "Lamb & Cilantro Soup Dumplings",
        "name_zh": "羊肉香菜小籠包",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/DUMPLINGS/Lamb&Cilantro Soup Dumplings.jpg"
      },
      {
        "id": "",
        "name_fr": "Dumplings crevettes, œufs et courgettes",
        "name_en": "Shrimp, Egg & Zucchini Dumplings",
        "name_zh": "蝦仁雞蛋西葫蘆水餃",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/DUMPLINGS/Shrimp egg & zucchini.jpg"
      },
      {
        "id": "",
        "name_fr": "Dumpling aux légumes",
        "name_en": "Vegetables Dumpling",
        "name_zh": "蔬菜餃子",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/DUMPLINGS/Vegetables Dumpling.jpg"
      }
    ]
  },
  {
    "title_en": "VEGETARIAN",
    "title_fr": "VÉGÉTARIEN",
    "items": [
      {
        "id": "V01",
        "name_fr": "Vermicelles sautés aux légumes",
        "name_en": "V01 Veg Stir Vermicelli",
        "name_zh": "雜菜炒粉絲",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/VEGETARIAN/V01 Veg Stir Vermicelli.jpg"
      },
      {
        "id": "V02",
        "name_fr": "Riz frit aux légumes",
        "name_en": "V02 Veg Fried Rice",
        "name_zh": "雜菜炒飯",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/VEGETARIAN/V02 Veg Fried Rice.png"
      },
      {
        "id": "V05",
        "name_fr": "Tofu braisé à la sauce soja",
        "name_en": "V05 Braised Tofu in Soy Sauce",
        "name_zh": "紅燒豆腐",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/VEGETARIAN/V05 Braised Tofu in Soy Sauce.png"
      },
      {
        "id": "",
        "name_fr": "Légumes assortis sautés",
        "name_en": "Stir-fried Mixed Vegetables",
        "name_zh": "清炒時蔬",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/VEGETARIAN/Stir-Fried Mixed Vegetables.jpg"
      }
    ]
  },
  {
    "title_en": "CURRY STYLE HK",
    "title_fr": "CARI STYLE HK",
    "items": [
      {
        "id": "E06",
        "name_fr": "Bœuf au cari sur riz",
        "name_en": "E06 Curry Beef on Rice",
        "name_zh": "咖哩牛肉飯",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/CURRY STYLE HK/E06 Curry Beef on Rice.jpg"
      },
      {
        "id": "E08",
        "name_fr": "Côtelettes d'agneau au cari sur riz",
        "name_en": "E08 Curry Lamb Chops on Rice",
        "name_zh": "咖哩羊扒飯",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/CURRY STYLE HK/E08 Curry Lamb Chops on Rice.jpg"
      }
    ]
  },
  {
    "title_en": "Instant",
    "title_fr": "LO DING",
    "items": [
      {
        "id": "M01",
        "name_fr": "Ragoût de bœuf au cari Lo Ding",
        "name_en": "M01 Curry Beef Brisket Lo Ding",
        "name_zh": "咖哩牛腩撈丁",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Curry Beef Brisket Lo Ding - Copy.jpeg"
      },
      {
        "id": "M02",
        "name_fr": "Poulet et œufs brouillés Lo Ding",
        "name_en": "M02 Chicken & Scramble Egg Lo Ding",
        "name_zh": "滑蛋雞肉撈丁",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Chicken & ScrambleEgg LoDing.jpeg"
      }
    ]
  },
  {
    "title_en": "SIGNATURE SNACK",
    "title_fr": "COLLATIONS SIGNATURE",
    "items": [
      {
        "id": "",
        "name_fr": "Takoyaki (4 morceaux)",
        "name_en": "Takoyaki (4 pieces)",
        "name_zh": "章魚燒 (4粒)",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Signature Snacks/Takoyaki (4 pieces).png"
      },
      {
        "id": "",
        "name_fr": "Poulet pop-corn",
        "name_en": "Popcorn Chicken",
        "name_zh": "鹽酥雞",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Signature Snacks/Popcorn Chicken.png"
      },
      {
        "id": "",
        "name_fr": "Pain doré au lait condensé",
        "name_en": "Condensed Milk Toast",
        "name_zh": "奶油多士",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Signature Snacks/Condensed Milk Toast.png"
      },
      {
        "id": "",
        "name_fr": "Pain doré avec crème glacée",
        "name_en": "Ice cream toast",
        "name_zh": "雪糕多士",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Signature Snacks/Ice cream toast.png"
      },
      {
        "id": "",
        "name_fr": "Pain doré aux crevettes",
        "name_en": "Shrimp Toast",
        "name_zh": "蝦多士",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Signature Snacks/Shrimp Toast.png"
      },
      {
        "id": "",
        "name_fr": "Crème glacée",
        "name_en": "Ice Cream",
        "name_zh": "雪糕",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Signature Snacks/Ice Cream.jpg"
      },
      {
        "id": "",
        "name_fr": "Gaufres avec crème glacée",
        "name_en": "ice cream waffles",
        "name_zh": "雪糕格仔餅",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Signature Snacks/ice cream waffles.png"
      },
      {
        "id": "",
        "name_fr": "Mochi au thé matcha",
        "name_en": "Matcha Mochi",
        "name_zh": "抹茶麻糬",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Signature Snacks/Matcha Mochi - Signature Snack.png"
      },
      {
        "id": "",
        "name_fr": "Mochi aux fraises",
        "name_en": "Strawberry Mochi",
        "name_zh": "草莓麻糬",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Signature Snacks/Strawberry Mochi - Signature Snack.png"
      },
      {
        "id": "",
        "name_fr": "Mochi à la mangue",
        "name_en": "Mango Mochi",
        "name_zh": "芒果麻糬",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Signature Snacks/Mango Mochi - Signature Snack.png"
      }
    ]
  },
  {
    "title_en": "SNACKS & SIDES",
    "title_fr": "COLLATIONS & ACCOMPAGNEMENTS",
    "items": [
      {
        "id": "B09",
        "name_fr": "Bœuf piquant aux piments",
        "name_en": "B09 Spicy Chili Beef",
        "name_zh": "辣牛肉",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SNACKS & SIDES/B09 Spicy Chill Beef.png"
      },
      {
        "id": "B01",
        "name_fr": "Soupe udon au bœuf au cari",
        "name_en": "B01 Curry Beef Udon Soup",
        "name_zh": "咖哩牛肉烏冬湯麵",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SNACKS & SIDES/B01 Curry Beef Udon Soup.jpg"
      },
      {
        "id": "B06",
        "name_fr": "Udon sauté au poulet",
        "name_en": "B06 Chicken Udon Stir-Fry",
        "name_zh": "雞肉炒烏冬",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SNACKS & SIDES/B06 Chicken Udon Stir-Fry.jpg"
      },
      {
        "id": "B03",
        "name_fr": "Crevettes Général Tao",
        "name_en": "B03 General Tao's Shrimp",
        "name_zh": "左宗棠蝦",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SNACKS & SIDES/B03 General Tao’s Shrimp.jpg"
      },
      {
        "id": "B16",
        "name_fr": "Poulet Général Tao (Collation)",
        "name_en": "B16 General Tao's Chicken (Snack)",
        "name_zh": "左宗棠雞",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SNACKS & SIDES/B16 General Tao's Chicken - Snacks & Sides.png"
      },
      {
        "id": "B04",
        "name_fr": "Boules de sésame frites",
        "name_en": "B04 Sesame Balls",
        "name_zh": "煎堆",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SNACKS & SIDES/B04 Sesame Balls.png"
      },
      {
        "id": "B05",
        "name_fr": "Ailes de poulet avec frites",
        "name_en": "B05 Chicken wing with Fries",
        "name_zh": "炸雞翼配薯條",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SNACKS & SIDES/B05Chicken wing with Fries.jpg"
      },
      {
        "id": "",
        "name_fr": "Ailes de poulet & frites maison",
        "name_en": "Chicken wings & Fries",
        "name_zh": "雞翼拼薯條",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SNACKS & SIDES/Chicken wings-Fries.jpg"
      },
      {
        "id": "B17",
        "name_fr": "Calamars frits croustillants",
        "name_en": "B17 Deep Fried Calamari",
        "name_zh": "酥炸魷魚圈",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SNACKS & SIDES/B17 Deep Fried Calamari.png"
      },
      {
        "id": "B18",
        "name_fr": "Rouleaux de printemps",
        "name_en": "B18 Spring Rolls",
        "name_zh": "炸春卷",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SNACKS & SIDES/B18 Spring Rolls.png"
      },
      {
        "id": "B19",
        "name_fr": "Pétoncles frits",
        "name_en": "B19 Fried Scallops",
        "name_zh": "炸帶子",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/SNACKS & SIDES/B19 Fried Scallops.png"
      }
    ]
  },
  {
    "title_en": "DRINK",
    "title_fr": "BOISSONS",
    "items": [
      {
        "id": "",
        "name_fr": "Thé au lait à la hongkongaise",
        "name_en": "Hong Kong Style Milk Tea",
        "name_zh": "港式奶茶",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Hong Kong Style Milk Tea.png"
      },
      {
        "id": "",
        "name_fr": "Thé au lait au taro",
        "name_en": "Taro milk tea",
        "name_zh": "芋頭奶茶",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Taro milk tea.png"
      },
      {
        "id": "",
        "name_fr": "Café",
        "name_en": "Coffee",
        "name_zh": "咖啡",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Coffee.png"
      },
      {
        "id": "",
        "name_fr": "Latte au matcha et fraises",
        "name_en": "Strawberry matcha latte",
        "name_zh": "草莓抹茶拿鐵",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Strawberry matcha latte.png"
      },
      {
        "id": "",
        "name_fr": "Latte au matcha et mangue",
        "name_en": "Mango matcha latte",
        "name_zh": "芒果抹茶拿鐵",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Mango matcha latte.png"
      },
      {
        "id": "",
        "name_fr": "Barbotine mangue et fruits de la passion",
        "name_en": "Mango passion slush",
        "name_zh": "芒果百香果冰沙",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Mango passion slush.png"
      },
      {
        "id": "",
        "name_fr": "Barbotine aux fraises",
        "name_en": "Strawberry slush",
        "name_zh": "草莓冰沙",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Strawberry slush.png"
      },
      {
        "id": "",
        "name_fr": "Limonade maison",
        "name_en": "Limonade",
        "name_zh": "青檸檬水",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Limonade.png"
      },
      {
        "id": "",
        "name_fr": "Eau de coco naturelle",
        "name_en": "coconut water",
        "name_zh": "天然椰子水",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/coconut water.png"
      },
      {
        "id": "",
        "name_fr": "Thé Oolong (sans sucre)",
        "name_en": "Oolong Tea (no sugar)",
        "name_zh": "無糖烏龍茶",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Oolong Tea(no sugar).png"
      },
      {
        "id": "",
        "name_fr": "Coca-Cola mexicain en bouteille en verre",
        "name_en": "Coca cola mexican bottled",
        "name_zh": "墨西哥玻璃瓶可樂",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Coca cola mexican bottled.png"
      },
      {
        "id": "",
        "name_fr": "Coke Diète",
        "name_en": "Diet Coke",
        "name_zh": "健怡可樂",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Diet Coke.jpg"
      },
      {
        "id": "",
        "name_fr": "Milkis (boisson gazeuse au lait)",
        "name_en": "Milkis",
        "name_zh": "米爾奇斯乳酸碳酸飲",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Milkis.png"
      },
      {
        "id": "",
        "name_fr": "Eau pétillante San Pellegrino",
        "name_en": "Sparkling Water",
        "name_zh": "氣泡礦泉水",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Sparkling Water.jpg"
      },
      {
        "id": "",
        "name_fr": "Gâteau au fromage Yuzu",
        "name_en": "Cheese cake Yuzu",
        "name_zh": "柚子芝士蛋糕",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Cheese cake Yuzu.png"
      },
      {
        "id": "",
        "name_fr": "Red Bull Zéro",
        "name_en": "Red Bull Zero",
        "name_zh": "紅牛無糖能量飲料",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Red Bull Zero.jpg"
      },
      {
        "id": "",
        "name_fr": "Mochi au thé matcha (Boisson/Dessert)",
        "name_en": "Matcha Mochi (Drink/Dessert)",
        "name_zh": "抹茶麻糬",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Matcha Mochi - Drink.png"
      },
      {
        "id": "",
        "name_fr": "Mochi aux fraises (Boisson/Dessert)",
        "name_en": "Strawberry Mochi (Drink/Dessert)",
        "name_zh": "草莓麻糬",
        "desc_fr": "",
        "desc_en": "",
        "image": "/menu/Drinks/Strawberry Mochi - Drink.png"
      }
    ]
  }
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const handleOrderOnline = () => {
    window.open('https://cloud.quickposhub.com/onlineorder/#/pages/order/tableurl?code=E9IPN247Bx', '_blank');
  };

  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

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
          </div>

          {/* Floating Navbar */}
          <Navbar
            className="absolute top-6 left-6 right-6 md:top-8 md:left-8 md:right-8 z-30 w-auto"
            lang={lang}
            setLang={setLang}
          />






          {/* Location Badge bottom left */}
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(RESTAURANT_ADDRESS)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              const isIOS =
                /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
              if (isIOS) {
                e.preventDefault();
                window.open(
                  `https://maps.apple.com/?daddr=${encodeURIComponent(RESTAURANT_ADDRESS)}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }
            }}
            className="group/loc absolute bottom-5 left-5 md:bottom-10 md:left-10 z-20 flex items-center gap-2.5 md:gap-3 bg-[#0a0b0a]/85 backdrop-blur-none md:backdrop-blur-md md:bg-[#0a0b0a]/60 border border-[#333330] hover:border-[#cfbe91]/60 rounded-full py-1.5 pl-1.5 pr-4 md:py-2 md:pl-2 md:pr-5 transition-all duration-300"
          >
            <span className="w-8 h-8 md:w-9 md:h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-[#cfbe91]/15 text-[#cfbe91] group-hover/loc:bg-[#cfbe91] group-hover/loc:text-[#0a0b0a] transition-colors duration-300">
              <MapPin size={15} strokeWidth={1.75} />
            </span>
            <span className="text-[9px] md:text-xs font-bold tracking-wide text-white leading-tight max-w-[150px] md:max-w-none md:whitespace-nowrap">
              11602-A Bd de Salaberry, Dollard-des-Ormeaux
            </span>
          </a>

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
              src={encodeURI("/menu/Sushi Combo/Boat 2.jpeg")}
              alt="Menu"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
            />
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
              src={encodeURI("/menu/Main Dish/Spaghetti wBeef BPSauce.jpeg")}
              alt="Reservation"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
            />
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
              src={encodeURI("/menu/SIZZLING PLATES/Sizzling Lamb Chops.jpeg")}
              alt="Order Online"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
            />
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

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {MENU_CATEGORIES[activeCategory].items.map((item, idx) => (
              <motion.div
                key={`${activeCategory}-${idx}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ delay: idx * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 flex overflow-hidden h-[120px] sm:h-[140px] md:h-[150px] group"
              >
                {SHOW_MENU_IMAGES && item.image && (
                  <div className="w-[120px] sm:w-[150px] md:w-[180px] shrink-0 h-full relative overflow-hidden">
                    <img
                      src={encodeURI(item.image)}
                      alt={lang === "fr" ? item.name_fr : item.name_en}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover rounded-l-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center min-w-0">
                  <div className="min-w-0">
                    <h4 className="font-sans font-bold text-[#1a1c19] text-sm sm:text-base md:text-lg leading-snug line-clamp-2">
                      {lang === "fr" ? item.name_fr : item.name_en}
                    </h4>
                    {(lang === "fr" ? item.desc_fr : item.desc_en) && (
                      <p className="text-[10px] sm:text-xs text-[#1a1c19]/60 mt-1 line-clamp-2 leading-relaxed">
                        {lang === "fr" ? item.desc_fr : item.desc_en}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                src="/heritage.jpg"
                alt="1001 Nuits Halal Culinary Masterpiece"
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
                  src="/menu/Sushi Combo/Boat 2.jpeg"
                  alt="Sushi Boat"
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

      {/* Private Events & Catering Section */}
      <section id="private-events" className="py-24 md:py-32 w-full border-t border-[#1a1c19]/10 relative bg-[#1a1c19] text-[#efe7d2] content-visibility-lazy">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-20">
          
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative w-full max-w-xl mx-auto lg:ml-auto rounded-[2.5rem] overflow-hidden border border-[#cfbe91]/30 shadow-2xl group">
                <img
                  src="/catering-events.jpg"
                  alt="Private Dining & Catering Banquet"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-all duration-[4s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#0a0b0a]/85 backdrop-blur-md border border-[#cfbe91]/30 rounded-2xl p-4 text-xs text-[#efe7d2]/90 flex items-center justify-between shadow-xl">
                  <div>
                    <p className="font-serif text-[#cfbe91] font-semibold text-sm sm:text-base">
                      {lang === "fr" ? "Service Traiteur & Réceptions" : "Catering Feasts & Celebrations"}
                    </p>
                    <p className="text-[11px] text-[#efe7d2]/70 mt-0.5">
                      {lang === "fr" ? "100% Halal • Livraison sur le lieu de votre fête" : "100% Halal • Delivered directly to your venue"}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      document.getElementById('catering-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3.5 py-2 rounded-xl bg-[#cfbe91] text-[#0a0b0a] font-bold text-[11px] uppercase tracking-wider hover:bg-white transition-all shadow"
                  >
                    {lang === "fr" ? "Devis" : "Quote"}
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="w-full lg:w-1/2 flex flex-col gap-6"
            >
              <ScrollTextReveal delay={0.3} textColor="#efe7d2">
                <span className="text-[#cfbe91] uppercase tracking-[0.2em] font-bold text-sm mb-3 block">
                  {lang === "fr" ? "Service Traiteur & Livraison de Repas" : "Catering & Venue Food Delivery"}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#efe7d2] leading-tight text-balance">
                  <ShinyText
                    text={lang === "fr" ? "Votre Festin Délicieux Livré sur les Lieux de votre Fête" : "Delicious Feasts Delivered Directly to Your Celebration"}
                    color="#efe7d2"
                    shineColor="#cfbe91"
                    speed={3}
                  />
                </h2>
                <div className="flex flex-col gap-4 text-[#efe7d2]/80 text-base sm:text-lg leading-relaxed mt-4">
                  <p>
                    {lang === "fr"
                      ? "Offrez à vos invités une expérience culinaire inoubliable sans le stress de la préparation. Qu'il s'agisse d'un mariage, d'une remise de diplôme, d'un anniversaire ou d'une fête spéciale, nous préparons et livrons nos grands plateaux buffet chauds, nos bateaux de sushis et nos spécialités asiatiques 100% halal directement sur le lieu de votre événement."
                      : "Treat your guests to an unforgettable culinary experience delivered straight to your event. Whether for a wedding, graduation, birthday party, or special celebration, we prepare and deliver generous hot buffet trays, handcrafted sushi boats, and 100% Halal Asian fusion dishes directly to your venue or gathering."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-[#cfbe91]/20">
                  <div>
                    <span className="text-[#cfbe91] text-xs uppercase font-bold tracking-wider block mb-1">
                      {lang === "fr" ? "Pour tout événement" : "Every Celebration"}
                    </span>
                    <p className="text-xs text-[#efe7d2]/70">
                      {lang === "fr" ? "Mariages, anniversaires, remises de diplômes" : "Weddings, birthdays, graduation feasts"}
                    </p>
                  </div>
                  <div>
                    <span className="text-[#cfbe91] text-xs uppercase font-bold tracking-wider block mb-1">
                      {lang === "fr" ? "Livraison sur Place" : "Venue Delivery"}
                    </span>
                    <p className="text-xs text-[#efe7d2]/70">
                      {lang === "fr" ? "Plateaux prêts à servir livrés à votre lieu" : "Ready-to-serve trays delivered to your event"}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('catering-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 rounded-full bg-[#cfbe91] text-[#0a0b0a] uppercase tracking-[0.15em] text-xs sm:text-sm font-bold hover:bg-[#dbcb9d] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    {lang === "fr" ? "Demander un devis traiteur" : "Request Catering Quote"}
                  </button>
                  <a
                    href="tel:+15144211114"
                    className="px-6 py-3 rounded-full border border-[#cfbe91]/50 text-[#cfbe91] uppercase tracking-[0.15em] text-xs sm:text-sm font-bold hover:bg-[#cfbe91]/10 hover:border-[#cfbe91] transition-all inline-flex items-center gap-2"
                  >
                    <Phone size={14} />
                    <span>(514) 421-1114</span>
                  </a>
                </div>
              </ScrollTextReveal>
            </motion.div>
          </div>

          {/* Interactive Catering Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px 0px 0px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <CateringForm lang={lang} />
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
                  ? "Réservez en ligne pour une confirmation instantanée ou appelez-nous directement pour vos réservations."
                  : "Book online for instant confirmation or call us directly to arrange your reservation."}
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
                  className="w-full flex items-center justify-center gap-3 bg-[#1a1c19] text-[#efe7d2] hover:bg-[#cfbe91] hover:text-[#1a1c19] px-6 py-4.5 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors duration-300 shadow-md group/btn"
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
                      ? "Contactez-nous directement par téléphone pour réserver votre table."
                      : "Call us directly to book your table or arrange a special event."}
                  </p>
                </div>
              </div>
              <div className="mt-8 w-full">
                <motion.a
                  href="tel:+15144211114"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 border-[1.5px] border-[#1a1c19] text-[#1a1c19] hover:bg-[#1a1c19] hover:text-[#efe7d2] px-6 py-4.5 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors duration-300 shadow-sm"
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
                    {lang === "fr" ? "Réservez en ligne via le lien ci-dessus ou contactez-nous :" : "Book online using the reservation link above or contact us:"}
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
        
        

        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-[12px] opacity-80 mb-4">
          <a
            href="mailto:info@1001nuit.com"
            className="text-[#cfbe91] hover:text-[#efe7d2] transition-colors"
          >
            info@1001nuit.com
          </a>
          <span className="text-[#333330]">•</span>
          <Link
            to="/careers"
            className="text-[#efe7d2]/80 hover:text-[#cfbe91] transition-colors font-medium tracking-wider uppercase text-[11px]"
          >
            {lang === "fr" ? "Rejoindre l'équipe • Carrières" : "Join Our Team • Careers"}
          </Link>
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

    </div>
  );
}
