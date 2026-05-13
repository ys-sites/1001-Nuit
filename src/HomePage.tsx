import { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import {
  ArrowRight,
  Instagram,
  Facebook,
  Phone,
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
import ReservationForm from "./components/ReservationForm";
import ScrollTextReveal from "./components/ui/ScrollTextReveal";


const MENU_CATEGORIES = [
  {
    title_en: "SNACKS & SIDES 小食",
    title_fr: "ENTRÉES & ACCOMPAGNEMENTS 小食",
    items: [
      {
        id: "B01",
        name_fr: "Soupe udon au bœuf braisé au cari",
        name_en: "Curry Beef Brisket Udon in Soup",
        price: "$17.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B02",
        name_fr: "Cuisse de poulet frit croustillant avec salade de pommes de terre ou frites",
        name_en: "Crispy Fried Chicken Leg with Potato Salad or Fries",
        price: "$15.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B03",
        name_fr: "Toast aux crevettes avec salade de pommes de terre ou frites",
        name_en: "Shrimp Toast with Potato Salad or Fries",
        price: "$14.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B04",
        name_fr: "Poutine style Hong Kong au double fromage et sauce à la viande",
        name_en: "Poutine in Hong Kong Style (Double Cheese & Meat Sauce)",
        price: "$16.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B05",
        name_fr: "Ailes de poulet croustillantes avec salade de pommes de terre ou frites",
        name_en: "Crispy Chicken Wings with Potato Salad or Fries",
        price: "$15.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B07",
        name_fr: "Boulettes de poulet au cari style Hong Kong (15 mcx)",
        name_en: "Fish Balls in Hong Kong Style Curry (15 pcs)",
        price: "$8.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B08",
        name_fr: "Soupe de wontons avec nouilles aux œufs ou nouilles de riz",
        name_en: "Wonton Noodle Soup (Egg Noodles or Flat Rice Noodles)",
        price: "$16.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B10",
        name_fr: "Boulettes de bœuf au cari style Hong Kong (12 mcx)",
        name_en: "Beef Balls in Hong Kong Style Curry (12 pcs)",
        price: "$10.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B11",
        name_fr: "Boulettes de poisson et de bœuf au cari style Hong Kong (12 mcx)",
        name_en: "Fish & Beef Balls in Hong Kong Style Curry (12 pcs)",
        price: "$12.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B13",
        name_fr: "Ailes de poulet avec frites (sauce beurre ou miel et ail)",
        name_en: "Chicken Wings with Fries (Butter Sauce or Honey Garlic)",
        price: "$16.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B16",
        name_fr: "Poulet Général Tao",
        name_en: "General Tso's Chicken",
        price: "$21.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B17",
        name_fr: "Calmars frits",
        name_en: "Deep Fried Calamari",
        price: "$18.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "B18",
        name_fr: "Bouchées de poulet au gingembre et oignons verts",
        name_en: "Ginger and Scallion Chicken Bites",
        price: "$19.99",
        desc_fr: "",
        desc_en: "",
      }
    ]
  },{
    title_en: "SIGNATURE SNACK 招牌小吃",
    title_fr: "COLLATION SIGNATURE 招牌小吃",
    items: [
      {
        id: "T01",
        name_fr: "Takoyaki (6 pièces)",
        name_en: "Takoyaki (6 pcs)",
        price: "$8.99",
        desc_fr: "Boulettes de poulpe classiques.",
        desc_en: "Classic octopus balls.",
      }
    ]
  },
  {
    title_en: "SANDWICHES 三文治",
    title_fr: "SANDWICHS 三文治",
    items: [
      {
        id: "S09",
        name_fr: "Sandwich club (poulet pané, concombre, jambon, tomate, fromage)",
        name_en: "Club Sandwich (Chicken Cutlet, Cucumber, Ham, Tomato, Cheese)",
        price: "$14.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "S14",
        name_fr: "Sandwich au bœuf, oignons verts et œufs",
        name_en: "Scallion Beef and Eggs Sandwich",
        price: "$10.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "S19",
        name_fr: "Sandwich au luncheon meat halal et œufs",
        name_en: "Halal Luncheon Meat and Eggs Sandwich",
        price: "$9.99",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "S20",
        name_fr: "Sandwich aux tomates et œufs",
        name_en: "Tomato and Eggs Sandwich",
        price: "$9.99",
        desc_fr: "",
        desc_en: "",
      }
    ]
  },
  {
    title_en: "TOAST / FRENCH TOAST 多士／西多士",
    title_fr: "RÔTIES / PAIN DORÉ 多士／西多士",
    items: [
      {
        id: "S10",
        name_fr: "Rôtie épaisse au bœuf épicé et œufs brouillés",
        name_en: "Spiced Diced Beef and Scrambled Eggs Toast",
        price: "$13.99",
        name_zh: "五香牛肉滑蛋厚多士",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "S11",
        name_fr: "Rôtie épaisse au bœuf satay et œufs satay",
        name_en: "Satay Beef and Scrambled Eggs Toast",
        price: "$13.99",
        name_zh: "沙爹牛肉滑蛋厚多士",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "S15",
        name_fr: "Rôtie au charbon avec beurre d'arachide",
        name_en: "Charcoal Toast with Peanut Butter",
        price: "$8.99",
        name_zh: "花生酱黑炭厚多士",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "S16",
        name_fr: "Rôtie au charbon avec Milo et lait condensé",
        name_en: "Charcoal Toast with Milo & Condensed Milk",
        price: "$8.99",
        name_zh: "美禄炼奶黑炭厚多士",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "S17",
        name_fr: "Pain doré au beurre d'arachide et lait condensé",
        name_en: "French Toast with Peanut Butter & Condensed Milk",
        price: "$12.99",
        name_zh: "花生炼奶西多士",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "S21",
        name_fr: "Rôtie au charbon avec beurre et lait condensé",
        name_en: "Charcoal Toast with Butter & Condensed Milk",
        price: "$8.99",
        name_zh: "牛油炼奶黑炭厚多士",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "S22",
        name_fr: "Rôtie au charbon avec œufs",
        name_en: "Charcoal Toast with Eggs",
        price: "$9.99",
        name_zh: "黑炭厚多士",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "S23",
        name_fr: "Rôtie style \"Lau Nai Wah\" à l'Ovaltine et lait condensé",
        name_en: "Toast with Ovaltine & Condensed Milk",
        price: "$9.99",
        name_zh: "漏奶华",
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
        name_fr: "Riz frit aux crevettes sakura et poulet",
        name_en: "Sakura Shrimp and Chicken Fried Rice",
        price: "$22.99",
        name_zh: "樱花虾鸡拉炒饭",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C02",
        name_fr: "Bœuf BBQ avec 2 œufs au plat sur riz au gras de bœuf ou riz blanc",
        name_en: "BBQ Beef with 2 Sunny Side Up Eggs on Beef Tallow or White Rice",
        price: "$23.99",
        name_zh: "韶然销魂牛油拥饭(可改白饭)",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C03",
        name_fr: "Poulet sauce poivre noir sur riz",
        name_en: "Chicken with Black Pepper Sauce on Rice",
        price: "$21.99",
        name_zh: "黑椒汁鸡扒饭",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C04",
        name_fr: "Crevettes, bœuf et œufs brouillés sur riz",
        name_en: "Prawns and Beef with Scrambled Eggs on Rice",
        price: "$24.99",
        name_zh: "香葱大虾牛肉滑蛋饭",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C05",
        name_fr: "Bœuf épicé en dés avec œufs brouillés sur riz",
        name_en: "Spiced Diced Beef and Scrambled Eggs on Rice",
        price: "$22.99",
        name_zh: "五香牛肉丁滑蛋饭",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C06",
        name_fr: "Spaghetti sauté au bœuf sauce poivre noir",
        name_en: "Stir-fried Spaghetti with Beef in Black Pepper Sauce",
        price: "$22.99",
        name_zh: "黑椒牛肉炒意粉",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C07",
        name_fr: "Bœuf haché et œufs brouillés sur riz",
        name_en: "Scrambled Eggs and Minced Beef on Rice",
        price: "$21.99",
        name_zh: "滑蛋免治肉饭",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C08",
        name_fr: "Poulet sauce aux oignons sur riz",
        name_en: "Chicken with Onion Sauce on Rice",
        price: "$21.99",
        name_zh: "洋葱鸡扒饭",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C09",
        name_fr: "Côtes de bœuf AAA sauce poivre noir avec œuf au plat sur riz",
        name_en: "Black Pepper Beef Ribs with Sunny Side Up Egg on Rice",
        price: "$26.99",
        name_zh: "AAA黑椒牛仔骨煎蛋饭",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C10",
        name_fr: "Côtes de riz plates sautées au bœuf style Hong Kong",
        name_en: "Hong Kong Style Stir-fried Beef Flat Rice Noodles",
        price: "$23.99",
        name_zh: "干炒牛河",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C11",
        name_fr: "Pad thaï (poulet / bœuf / crevettes)",
        name_en: "Pad Thai (Chicken / Beef / Shrimp)",
        price: "$12.99 / $23.99 / $23.99",
        name_zh: "炒泰式河粉 (鸡／牛／虾)",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "C12",
        name_fr: "Riz frit à l'ananas (poulet / bœuf / crevettes)",
        name_en: "Pineapple Fried Rice (Chicken / Beef / Shrimp)",
        price: "$23.99 / $25.99",
        name_zh: "菠萝炒饭(鸡／牛／虾)",
        desc_fr: "",
        desc_en: "",
      }
    ]
  },
  {
    title_en: "BAKED HONG KONG STYLE – DOUBLE FROMAGE 港式雙重芝士焗飯／焗意粉",
    title_fr: "PLATS GRATINÉS STYLE HONG KONG – DOUBLE FROMAGE 港式雙重芝士焗飯／焗意粉",
    items: [
      {
        id: "F01",
        name_fr: "Gratin au cari de bœuf braisé",
        name_en: "Curry Beef Brisket",
        price: "$22.99",
        desc_fr: "Au choix : riz au spaghetti",
        desc_en: "Choice of: Rice or Spaghetti",
      },
      {
        id: "F02",
        name_fr: "Gratin au poulet sauce crémeuse",
        name_en: "Chicken with Creamy Sauce",
        price: "$19.99",
        desc_fr: "Au choix : riz au spaghetti",
        desc_en: "Choice of: Rice or Spaghetti",
      },
      {
        id: "F03",
        name_fr: "Gratin au poulet sauce poivre noir",
        name_en: "Black Pepper Chicken Steak",
        price: "$19.99",
        desc_fr: "Au choix : riz au spaghetti",
        desc_en: "Choice of: Rice or Spaghetti",
      },
      {
        id: "F04",
        name_fr: "Gratin \"duo\" – spaghetti bolognaise et poulet sauce tomate sur riz",
        name_en: "Bolognese Spaghetti and Tomato Chicken Steak on Rice",
        price: "$21.99",
        name_zh: "鸳鸯两煎",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti",
      },
      {
        id: "F05",
        name_fr: "Gratin à la sauce bolognaise",
        name_en: "Bolognese",
        price: "$18.99",
        desc_fr: "Au choix : riz au spaghetti",
        desc_en: "Choice of: Rice or Spaghetti",
      },
      {
        id: "F06",
        name_fr: "Gratin spécial bœuf (cari de bœuf braisé & côtes sauce poivre noir)",
        name_en: "Curry Beef Brisket + Black Pepper Beef Ribs",
        price: "$24.99",
        desc_fr: "Au choix : riz au spaghetti",
        desc_en: "Choice of: Rice or Spaghetti",
      },
      {
        id: "F07",
        name_fr: "Gratin de filet de poisson sauce crémeuse aux champignons",
        name_en: "Cutlet Fish Fillet with Creamy Mushroom Sauce",
        price: "$21.99",
        desc_fr: "Au choix : riz au spaghetti",
        desc_en: "Choice of: Rice or Spaghetti",
      }
    ]
  },
  {
    title_en: "VEGETARIAN 素食專區",
    title_fr: "PLATS VÉGÉTARIENS 素食專區",
    items: [
      {
        id: "V01",
        name_fr: "Vermicelles de riz sautés végétariens",
        name_en: "Vegetarian Stir-fried Rice Vermicelli",
        price: "$14.99",
        name_zh: "素炒米粉",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "V02",
        name_fr: "Riz frit végétarien (ananas en option)",
        name_en: "Vegetarian Fried Rice (Pineapple Optional)",
        price: "$13.99",
        name_zh: "炒饭（素，可加菠萝）",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "V03",
        name_fr: "Tofu tendre doré poêlé",
        name_en: "Pan-fried Golden Soft Tofu",
        price: "$12.99",
        name_zh: "煎黄金嫩豆腐",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "V04",
        name_fr: "Mapo tofu végétarien",
        name_en: "Vegetarian Mapo Tofu",
        price: "$15.99",
        name_zh: "麻婆豆腐（素）",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "V05",
        name_fr: "Tofu braisé à la sauce soya",
        name_en: "Braised Tofu in Soy Sauce",
        price: "$13.99",
        name_zh: "红烧豆腐",
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
        name_fr: "Nouilles Lo Ding au curry et poitrine de bœuf braisée",
        name_en: "Curry Beef Brisket Lo Ding",
        price: "$18.99",
        name_zh: "咖喱牛腩汤捞一丁",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "M02",
        name_fr: "Nouilles Lo Ding au poulet sauce soja et œufs brouillés",
        name_en: "Soy Sauce Chicken & Scrambled Egg Lo Ding",
        price: "$15.99",
        name_zh: "豉油皇鸡滑蛋汤捞一丁",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "M03",
        name_fr: "Nouilles Lo Ding au bœuf satay et œufs brouillés",
        name_en: "Satay Beef & Scrambled Egg Lo Ding",
        price: "$15.99",
        name_zh: "豉油皇沙爹牛肉滑蛋捞一丁",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "M04",
        name_fr: "Nouilles Lo Ding au luncheon meat halal et œufs brouillés",
        name_en: "Halal Luncheon Meat & Scrambled Egg Lo Ding",
        price: "$15.99",
        name_zh: "Halal 午餐肉滑蛋捞一丁",
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
        name_fr: "Côtelettes d'agneau sur plaque chaude",
        name_en: "Sizzling Lamb Chops",
        price: "$39.99",
        name_zh: "铁板羊扒",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "SP02",
        name_fr: "Contre-filet AAA Angus sur plaque chaude",
        name_en: "AAA Angus Striploin Steak",
        price: "$36.99",
        name_zh: "AAA安格斯西冷牛扒",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "SP03",
        name_fr: "Poulet à l'ail sur plaque chaude",
        name_en: "Sizzling Garlic Chicken Chop",
        price: "$28.99",
        name_zh: "铁板蒜蓉鸡扒",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "SP04",
        name_fr: "Filet de sole pané et poulet sur plaque chaude",
        name_en: "Sizzling Breaded Sole & Chicken Chop",
        price: "$31.99",
        name_zh: "铁板吉列龙利鸡扒",
        desc_fr: "",
        desc_en: "",
      }
    ]
  },
  {
    title_en: "CURRY – STYLE HONG KONG 港式咖喱",
    title_fr: "CARI – STYLE HONG KONG 港式咖喱",
    items: [
      {
        id: "E01",
        name_fr: "Cari de bœuf braisé (sans accompagnement)",
        name_en: "Curry Beef Brisket (Only)",
        price: "$29.99",
        name_zh: "咖喱牛腩净食",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "E02",
        name_fr: "Cari de côtelettes d'agneau (sans accompagnement)",
        name_en: "Curry Lamb Chop (Only)",
        price: "$33.99",
        name_zh: "咖喱羊排净食",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "E03",
        name_fr: "Cari de légumes variés avec œuf sur riz",
        name_en: "Curry Mixed Vegetables with Egg on Rice",
        price: "$16.99",
        name_zh: "咖喱杂菜蛋饭",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "E04",
        name_fr: "Cari de bœuf braisé sur riz",
        name_en: "Curry Beef Brisket on Rice",
        price: "$22.99",
        name_zh: "咖喱牛腩饭",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "E05",
        name_fr: "Cari de poulet sur riz",
        name_en: "Curry Chicken Steak on Rice",
        price: "$18.99",
        name_zh: "咖喱鸡扒饭",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "E06",
        name_fr: "Cari de bœuf sur riz",
        name_en: "Curry Beef on Rice",
        price: "$21.99",
        name_zh: "咖喱牛肉饭",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "E07",
        name_fr: "Cari de cuisse de poulet frit sur riz",
        name_en: "Curry Chicken Leg on Rice",
        price: "$19.99",
        name_zh: "咖喱生炸鸡腿饭",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "E08",
        name_fr: "Cari de côtelettes d'agneau sur riz",
        name_en: "Curry Lamb Chop on Rice",
        price: "$27.99",
        name_zh: "咖喱羊排饭",
        desc_fr: "",
        desc_en: "",
      }
    ]
  },
  {
    title_en: "DRINK 飲品",
    title_fr: "BOISSONS 飲品",
    items: [
      {
        id: "G03",
        name_fr: "Thé au lait à la hongkongaise",
        name_en: "Hong Kong Style Milk Tea",
        price: "$5.99",
        name_zh: "港式奶茶",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G04",
        name_fr: "Café",
        name_en: "Coffee",
        price: "$4.99",
        name_zh: "咖啡",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G05",
        name_fr: "Café et thé au lait mélangés (Yuenyeung)",
        name_en: "Coffee & Milk Tea Mix",
        price: "$5.99",
        name_zh: "鸳鸯",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G07",
        name_fr: "Thé au citron à la hongkongaise",
        name_en: "Hong Kong Style Lemon Tea",
        price: "$5.99",
        name_zh: "港式柠檬茶",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G08",
        name_fr: "Eau au citron",
        name_en: "Lemon Water",
        price: "$4.99",
        name_zh: "柠檬水",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G09",
        name_fr: "Limonade au miel",
        name_en: "Honey Lemonade",
        price: "$5.99",
        name_zh: "蜂蜜柠檬",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G10",
        name_fr: "Thé au lait \"Teddy Bear\"",
        name_en: "Teddy Bear Milk Tea",
        price: "$6.99",
        name_zh: "熊熊丝袜奶茶",
        desc_fr: "",
        desc_en: "",
      },
      {
        id: "G11",
        name_fr: "Thé glacé au citron \"Teddy Bear\"",
        name_en: "Teddy Bear Lemon Tea",
        price: "$6.99",
        name_zh: "熊熊柠檬红茶",
        desc_fr: "",
        desc_en: "",
      }
    ]
  }
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
              src="/menu.avif"
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
            "BAKED HONG KONG STYLE – DOUBLE FROMAGE",
            "INSTANT",
            "SIZZLING PLATES",
            "CURRY – STYLE HONG KONG",
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
                      {item.id && !item.id.includes("T01") && (
                        <span className="text-[10px] sm:text-xs font-sans font-bold text-[#8a7a4a] tracking-widest uppercase mr-1.5">
                          {item.id}.
                        </span>
                      )}
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
      <section
        id="testimonials"
        className="py-24 md:py-32 w-full border-t border-[#1a1c19]/5 relative overflow-hidden bg-[#faf8f5] text-[#1a1c19]"
      >
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 border border-[#1a1c19]/5 rounded-full blur-[1px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#1a1c19]/5 rounded-full blur-[1px] translate-y-1/2 -translate-x-1/2"></div>


        <div className="w-full relative z-10 overflow-hidden">
          <ScrollTextReveal className="text-center mb-16 px-6 md:px-12" textColor="#1a1c19">
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
          </ScrollTextReveal>

          <div className="flex flex-col items-center justify-center gap-6 py-12 pb-20 px-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-[#cfbe91]/40" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-serif text-2xl md:text-3xl text-[#1a1c19]/25 italic text-center max-w-md leading-snug">
              {lang === "fr" ? "Les avis arrivent bientôt…" : "Reviews on their way…"}
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-[#1a1c19]/30 font-bold">
              {lang === "fr" ? "Nouveau restaurant — Ouvrez la marche" : "New restaurant — Be the first to review"}
            </p>
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
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
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
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800"
                  alt="Chefs"
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
               <img src="/event.png" alt="Private Dining Room" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[5s] hover:grayscale-0 hover:scale-105" />
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
              <ShinyText text={lang === "fr" ? "Réservez" : "Book"} color="#1a1c19" shineColor="#cfbe91" speed={3} /> <br />
              <span className="text-[#cfbe91] italic normal-case font-light drop-shadow-sm">
                {lang === "fr" ? "votre événement" : "your event"}
              </span>
            </h2>
            <div className="max-w-lg mx-auto">
              <BlurText
                text={lang === "fr"
                  ? "Remplissez le formulaire ci-dessous pour organiser votre événement privé avec nous."
                  : "Fill out the form below to arrange your private event with us."}
                delay={20}
                animateBy="words"
                className="text-sm md:text-lg font-medium opacity-70 leading-relaxed justify-center"
              />
            </div>
          </ScrollTextReveal>

          <ReservationForm lang={lang} />
        </div>
      </section>

      {/* Information & Location Section */}
      <section
        id="information"
        className="py-24 w-full border-t border-[#1a1c19]/10 bg-[#faf8f5] text-[#1a1c19]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            <ScrollTextReveal className="flex flex-col gap-6" textColor="#1a1c19">
              <h3 className="font-serif text-3xl uppercase tracking-widest text-[#1a1c19]">
                {lang === "fr" ? "Heures d'ouverture" : "Hours"}
              </h3>
              <div className="flex flex-col gap-3 font-medium text-[#1a1c19]/80">
                <div className="flex justify-between border-b border-[#1a1c19]/10 pb-2">
                  <span>
                    {lang === "fr" ? "Tous les jours" : "Every day"}
                  </span>
                  <span>11:00 - 21:00</span>
                </div>
              </div>
            </ScrollTextReveal>

            <ScrollTextReveal className="flex flex-col gap-6" textColor="#1a1c19" delay={0.1}>
              <h3 className="font-serif text-3xl uppercase tracking-widest text-[#1a1c19]">
                {lang === "fr" ? "Emplacement" : "Location"}
              </h3>
              <div className="flex flex-col gap-3 font-medium text-[#1a1c19]/80">
                <p>DDO Montreal</p>
                <p className="italic text-[#1a1c19]/60 text-sm">
                  {lang === "fr" ? "L'emplacement sera bientôt disponible" : "Location will be available soon"}
                </p>
              </div>
            </ScrollTextReveal>
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
        
        <div className="flex justify-center items-center gap-4 mb-8">
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
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1c19] border border-[#333330] hover:bg-[#cfbe91] hover:text-[#1a1c19] hover:border-[#cfbe91] transition-all duration-300 shadow-md"
            >
              <social.icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>

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
