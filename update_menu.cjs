const fs = require('fs');

const menuStr = `const MENU_CATEGORIES = [
  {
    title_en: "MAIN DISH 主食",
    title_fr: "PLATS PRINCIPAUX 主食",
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
    title_en: "SUSHI COMBO 壽司套餐",
    title_fr: "SUSHI COMBO 壽司套餐",
    items: [
      {
        id: "",
        name_fr: "Mangue",
        name_en: "Mango",
        name_zh: "芒果卷",
        price: "$5.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Avocat",
        name_en: "Avocado",
        name_zh: "牛油果卷",
        price: "$5.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Saumon & Avocat",
        name_en: "Salmon & Avocado",
        name_zh: "三文魚牛油果卷",
        price: "$8.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Rouleau au poulet frit",
        name_en: "Fried Chicken roll",
        name_zh: "炸雞卷",
        price: "$11.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Rouleau œil de dragon",
        name_en: "Dragon eye roll",
        name_zh: "龍眼卷",
        price: "$12.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Saumon épicé",
        name_en: "Spicy Salmon",
        name_zh: "辣三文魚卷",
        price: "$13.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "SS1",
        name_en: "SS1",
        name_zh: "SS1壽司拼盤",
        price: "$15.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "SS2",
        name_en: "SS2",
        name_zh: "SS2壽司拼盤",
        price: "$21.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "SS3",
        name_en: "SS3",
        name_zh: "SS3壽司拼盤",
        price: "$34.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "SS4",
        name_en: "SS4",
        name_zh: "SS4壽司拼盤",
        price: "$44.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Bateau 1",
        name_en: "Boat 1",
        name_zh: "壽司船 1",
        price: "$97.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "",
        name_fr: "Bateau 2",
        name_en: "Boat2",
        name_zh: "壽司船 2",
        price: "$111.99",
        desc_fr: "",
        desc_en: ""
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
    title_en: "DUMPLINGS 餃子",
    title_fr: "DUMPLINGS 餃子",
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
    title_en: "VEGETARIAN 素食專區",
    title_fr: "PLATS VÉGÉTARIENS 素食專區",
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
    title_en: "BAKED HK STYLE 港式焗飯／焗意粉",
    title_fr: "PLATS GRATINÉS STYLE HK 港式焗飯／焗意粉",
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
    title_en: "CURRY STYLE HK 港式咖喱",
    title_fr: "CARI STYLE HK 港式咖喱",
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
    title_en: "INSTANT 面",
    title_fr: "NOUILLES INSTANTANÉES 面",
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
    title_en: "SIGNATURE SNACK 招牌小吃",
    title_fr: "COLLATION SIGNATURE 招牌小吃",
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
    title_en: "DRINK 飲品",
    title_fr: "BOISSONS 飲品",
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
    title_en: "SNACKS & SIDES 小食",
    title_fr: "ENTRÉES & ACCOMPAGNEMENTS 小食",
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
];`;

const miniMenuStr = `const MINI_MENU = [
  { name_en: "B16 General Tao's Chicken", name_fr: "B16 Poulet Général Tao", price: "$23.99" },
  { name_en: "E06 Curry Beef on Rice", name_fr: "E06 Cari de bœuf sur riz", price: "$21.99" },
  {
    name_en: "SP01 Sizzling Lamb Chops",
    name_fr: "SP01 Côtelettes d'agneau sur plaque chaude",
    price: "$39.99",
  },
];`;

let content = fs.readFileSync('src/HomePage.tsx', 'utf8');

// Update MENU_CATEGORIES
const startIdx = content.indexOf('const MENU_CATEGORIES = [');
const endIdx = content.indexOf('const MINI_MENU = [');
if (startIdx === -1 || endIdx === -1) {
  console.error("Could not find MENU_CATEGORIES or MINI_MENU markers in HomePage.tsx");
  process.exit(1);
}
const beforeMenu = content.slice(0, startIdx);
const afterMenu = content.slice(endIdx);
content = beforeMenu + menuStr + '\n\n' + afterMenu;

// Update MINI_MENU
const startMini = content.indexOf('const MINI_MENU = [');
const endMini = content.indexOf('];', startMini);
if (startMini === -1 || endMini === -1) {
  console.error("Could not find MINI_MENU in updated content");
  process.exit(1);
}
const beforeMini = content.slice(0, startMini);
const afterMini = content.slice(endMini + 2); // skip "];"
content = beforeMini + miniMenuStr + afterMini;

fs.writeFileSync('src/HomePage.tsx', content);
console.log("Updated HomePage.tsx menu & mini-menu successfully!");
