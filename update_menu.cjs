const fs = require('fs');

const menuStr = `const MENU_CATEGORIES = [
  {
    title_en: "MAIN DISH 主食",
    title_fr: "PLATS PRINCIPAUX 主食",
    items: [
      {
        id: "C01",
        name_fr: "Riz frit aux crevettes sakura et poulet",
        name_en: "Sakura Shrimp and Chicken Fried Rice",
        name_zh: "櫻花蝦雞粒炒飯",
        price: "$22.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C02",
        name_fr: "Bœuf BBQ avec 2 œufs au plat sur riz au gras de bœuf ou riz blanc",
        name_en: "BBQ Beef with 2 Sunny Side Up Eggs on Beef Tallow or White Rice",
        name_zh: "鵝油豬扒撈飯(可改白飯)",
        price: "$23.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C03",
        name_fr: "Poulet sauce poivre noir sur riz",
        name_en: "Chicken with Black Pepper Sauce on Rice",
        name_zh: "黑椒汁雞扒飯",
        price: "$21.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C04",
        name_fr: "Crevettes, bœuf et œufs brouillés sur riz",
        name_en: "Prawns and Beef with Scrambled Eggs on Rice",
        name_zh: "香蔥大蝦牛肉滑蛋飯",
        price: "$24.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C05",
        name_fr: "Bœuf épicé en dés avec œufs brouillés sur riz",
        name_en: "Spiced Diced Beef and Scrambled Eggs on Rice",
        name_zh: "五香牛肉丁滑蛋飯",
        price: "$22.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C06",
        name_fr: "Spaghetti sauté au bœuf sauce poivre noir",
        name_en: "Stir-fried Spaghetti with Beef in Black Pepper Sauce",
        name_zh: "黑椒牛肉炒意粉",
        price: "$22.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C07",
        name_fr: "Bœuf haché et œufs brouillés sur riz",
        name_en: "Scrambled Eggs and Minced Beef on Rice",
        name_zh: "滑蛋免治牛肉飯",
        price: "$21.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C08",
        name_fr: "Poulet sauce aux oignons sur riz",
        name_en: "Chicken with Onion Sauce on Rice",
        name_zh: "洋蔥雞扒飯",
        price: "$21.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C09",
        name_fr: "Côtes de bœuf AAA sauce poivre noir avec œuf au plat sur riz",
        name_en: "Black Pepper Beef Ribs with Sunny Side Up Egg on Rice",
        name_zh: "AAA 黑椒牛仔骨煎蛋飯",
        price: "$26.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C10",
        name_fr: "Nouilles de riz plates sautées au bœuf style Hong Kong",
        name_en: "Hong Kong Style Stir-fried Beef Flat Rice Noodles",
        name_zh: "干炒牛河",
        price: "$23.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C11",
        name_fr: "Pad thaï (poulet / bœuf / crevettes)",
        name_en: "Pad Thai (Chicken / Beef / Shrimp)",
        name_zh: "炒泰式河粉 (雞 / 牛 / 蝦)",
        price: "$12.99 / $23.99 / $23.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "C12",
        name_fr: "Riz frit à l'ananas (poulet / bœuf / crevettes)",
        name_en: "Pineapple Fried Rice (Chicken / Beef / Shrimp)",
        name_zh: "菠蘿炒飯 (雞 / 牛 / 蝦)",
        price: "$23.99 / $25.99",
        desc_fr: "",
        desc_en: ""
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
        name_zh: "焗咖喱牛腩",
        price: "$22.99",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti"
      },
      {
        id: "F02",
        name_fr: "Gratin au poulet sauce crémeuse",
        name_en: "Chicken with Creamy Sauce",
        name_zh: "焗白汁雞皇",
        price: "$19.99",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti"
      },
      {
        id: "F03",
        name_fr: "Gratin au poulet sauce poivre noir",
        name_en: "Black Pepper Chicken Steak",
        name_zh: "焗黑椒雞扒",
        price: "$19.99",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti"
      },
      {
        id: "F04",
        name_fr: "Gratin \\\"duo\\\" – spaghetti bolognaise et poulet sauce tomate sur riz",
        name_en: "Bolognese Spaghetti and Tomato Chicken Steak on Rice",
        name_zh: "鴛鴦兩鬧",
        price: "$21.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "F05",
        name_fr: "Gratin à la sauce bolognaise",
        name_en: "Bolognese",
        name_zh: "焗肉醬意粉",
        price: "$18.99",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti"
      },
      {
        id: "F06",
        name_fr: "Gratin spécial bœuf (cari de bœuf braisé & côtes sauce poivre noir)",
        name_en: "Curry Beef Brisket + Black Pepper Beef Ribs",
        name_zh: "焗牛魔王 (咖喱牛腩 + 黑椒牛仔骨)",
        price: "$24.99",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti"
      },
      {
        id: "F07",
        name_fr: "Gratin de filet de poisson sauce crémeuse aux champignons",
        name_en: "Cutlet Fish Fillet with Creamy Mushroom Sauce",
        name_zh: "焗白汁蘑菇魚柳",
        price: "$21.99",
        desc_fr: "Au choix : riz ou spaghetti",
        desc_en: "Choice of: Rice or Spaghetti"
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
        name_zh: "咖喱牛腩淨食",
        price: "$29.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "E02",
        name_fr: "Cari de côtelettes d'agneau (sans accompagnement)",
        name_en: "Curry Lamb Chop (Only)",
        name_zh: "咖喱羊排淨食",
        price: "$33.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "E03",
        name_fr: "Cari de légumes variés avec œuf sur riz",
        name_en: "Curry Mixed Vegetables with Egg on Rice",
        name_zh: "咖喱雜菜蛋飯",
        price: "$16.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "E04",
        name_fr: "Cari de bœuf braisé sur riz",
        name_en: "Curry Beef Brisket on Rice",
        name_zh: "咖喱牛腩飯",
        price: "$22.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "E05",
        name_fr: "Cari de poulet sur riz",
        name_en: "Curry Chicken Steak on Rice",
        name_zh: "咖喱雞扒飯",
        price: "$18.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "E06",
        name_fr: "Cari de bœuf sur riz",
        name_en: "Curry Beef on Rice",
        name_zh: "咖喱牛肉飯",
        price: "$21.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "E07",
        name_fr: "Cari de cuisse de poulet frit sur riz",
        name_en: "Curry Chicken Leg on Rice",
        name_zh: "咖喱生炸雞腿飯",
        price: "$19.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "E08",
        name_fr: "Cari de côtelettes d'agneau sur riz",
        name_en: "Curry Lamb Chop on Rice",
        name_zh: "咖喱羊排飯",
        price: "$27.99",
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
        name_en: "Sizzling Lamb Chops",
        name_zh: "鐵板羊扒",
        price: "$39.99",
        desc_fr: "préparation env. 20 min",
        desc_en: "prep time approx. 20 min"
      },
      {
        id: "SP02",
        name_fr: "Contre-filet AAA Angus sur plaque chaude",
        name_en: "AAA Angus Striploin Steak",
        name_zh: "AAA安格斯西冷牛扒",
        price: "$36.99",
        desc_fr: "préparation env. 20 min",
        desc_en: "prep time approx. 20 min"
      },
      {
        id: "SP03",
        name_fr: "Poulet à l'ail sur plaque chaude",
        name_en: "Sizzling Garlic Chicken Chop",
        name_zh: "鐵板蒜蓉雞扒",
        price: "$28.99",
        desc_fr: "préparation env. 20 min",
        desc_en: "prep time approx. 20 min"
      },
      {
        id: "SP04",
        name_fr: "Filet de sole pané et poulet sur plaque chaude",
        name_en: "Sizzling Breaded Sole & Chicken Chop",
        name_zh: "鐵板吉列龍利雞扒",
        price: "$31.99",
        desc_fr: "préparation env. 20 min",
        desc_en: "prep time approx. 20 min"
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
        name_zh: "咖喱牛腩湯撈一丁",
        price: "$18.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "M02",
        name_fr: "Nouilles Lo Ding au poulet sauce soja et œufs brouillés",
        name_en: "Soy Sauce Chicken & Scrambled Egg Lo Ding",
        name_zh: "豉油皇雞滑蛋湯撈一丁",
        price: "$15.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "M03",
        name_fr: "Nouilles Lo Ding au bœuf satay et œufs brouillés",
        name_en: "Satay Beef & Scrambled Egg Lo Ding",
        name_zh: "豉油皇沙爹牛肉滑蛋撈一丁",
        price: "$15.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "M04",
        name_fr: "Nouilles Lo Ding au luncheon meat halal et œufs brouillés",
        name_en: "Halal Luncheon Meat & Scrambled Egg Lo Ding",
        name_zh: "Halal午餐肉滑蛋撈一丁",
        price: "$15.99",
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
        name_en: "Vegetarian Stir-fried Rice Vermicelli",
        name_zh: "素炒米粉",
        price: "$14.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "V02",
        name_fr: "Riz frit végétarien (ananas en option)",
        name_en: "Vegetarian Fried Rice (Pineapple Optional)",
        name_zh: "炒飯 (素，可加菠蘿)",
        price: "$13.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "V03",
        name_fr: "Tofu tendre doré poêlé",
        name_en: "Pan-fried Golden Soft Tofu",
        name_zh: "煎黃金嫩豆腐",
        price: "$12.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "V04",
        name_fr: "Mapo tofu végétarien",
        name_en: "Vegetarian Mapo Tofu",
        name_zh: "麻婆豆腐(素)",
        price: "$15.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "V05",
        name_fr: "Tofu braisé à la sauce soya",
        name_en: "Braised Tofu in Soy Sauce",
        name_zh: "紅燒豆腐",
        price: "$13.99",
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
        id: "T01",
        name_fr: "Takoyaki (6 pièces)",
        name_en: "Takoyaki (6 pcs)",
        name_zh: "章魚小丸子(6個)",
        price: "$8.99",
        desc_fr: "Boulettes de poulpe classiques.",
        desc_en: "Classic octopus balls."
      }
    ]
  },
  {
    title_en: "SNACKS & SIDES 小食",
    title_fr: "ENTRÉES & ACCOMPAGNEMENTS 小食",
    items: [
      {
        id: "B01",
        name_fr: "Soupe udon au bœuf braisé au cari",
        name_en: "Curry Beef Brisket Udon in Soup",
        name_zh: "咖喱牛腩湯烏冬",
        price: "$17.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B02",
        name_fr: "Cuisse de poulet frit croustillant avec salade de pommes de terre ou frites",
        name_en: "Crispy Fried Chicken Leg with Potato Salad or Fries",
        name_zh: "生炸雞腿配薯仔沙律或薯條",
        price: "$15.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B03",
        name_fr: "Toast aux crevettes avec salade de pommes de terre ou frites",
        name_en: "Shrimp Toast with Potato Salad or Fries",
        name_zh: "蝦多士配薯仔沙律或薯條",
        price: "$14.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B04",
        name_fr: "Poutine style Hong Kong au double fromage et sauce à la viande",
        name_en: "Poutine in Hong Kong Style (Double Cheese & Meat Sauce)",
        name_zh: "雙重芝士肉醬薯條",
        price: "$16.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B05",
        name_fr: "Ailes de poulet croustillantes avec salade de pommes de terre ou frites",
        name_en: "Crispy Chicken Wings with Potato Salad or Fries",
        name_zh: "香脆炸雞翼配薯仔沙律或薯條",
        price: "$15.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B07",
        name_fr: "Boulettes de poisson au cari style Hong Kong (15 mcx)",
        name_en: "Fish Balls in Hong Kong Style Curry (15 pcs)",
        name_zh: "港式咖喱魚蛋(15粒)",
        price: "$8.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B08",
        name_fr: "Soupe de wontons avec nouilles aux œufs ou nouilles de riz",
        name_en: "Wonton Noodle Soup (Egg Noodles or Flat Rice Noodles)",
        name_zh: "云吞湯麵或河粉",
        price: "$16.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B10",
        name_fr: "Boulettes de bœuf au cari style Hong Kong (12 mcx)",
        name_en: "Beef Balls in Hong Kong Style Curry (12 pcs)",
        name_zh: "港式咖喱牛丸(12粒)",
        price: "$10.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B11",
        name_fr: "Boulettes de poisson et de bœuf au cari style Hong Kong (12 mcx)",
        name_en: "Fish & Beef Balls in Hong Kong Style Curry (12 pcs)",
        name_zh: "港式咖喱魚蛋牛丸(12粒)",
        price: "$12.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B13",
        name_fr: "Ailes de poulet avec frites (sauce beurre ou miel et ail)",
        name_en: "Chicken Wings with Fries (Butter Sauce or Honey Garlic)",
        name_zh: "奶油醬/蒜香蜜糖雞翼配薯條",
        price: "$16.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B16",
        name_fr: "Poulet Général Tao",
        name_en: "General Tso's Chicken",
        name_zh: "左宗棠雞",
        price: "$21.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B17",
        name_fr: "Calmars frits",
        name_en: "Deep Fried Calamari",
        name_zh: "炸魷魚圈",
        price: "$18.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "B18",
        name_fr: "Bouchées de poulet au gingembre et oignons verts",
        name_en: "Ginger and Scallion Chicken Bites",
        name_zh: "薑蔥雞球",
        price: "$19.99",
        desc_fr: "",
        desc_en: ""
      }
    ]
  },
  {
    title_en: "SANDWICHES 三文治",
    title_fr: "SANDWICHS 三文治",
    items: [
      {
        id: "S09",
        name_fr: "Sandwich club (poulet pané, concombre, tomate, fromage)",
        name_en: "Club Sandwich (Chicken Cutlet, Cucumber, Tomato, Cheese)",
        name_zh: "公司三文治(雞扒)",
        price: "$14.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "S14",
        name_fr: "Sandwich au bœuf, oignons verts et œufs",
        name_en: "Scallion Beef and Eggs Sandwich",
        name_zh: "香蔥牛肉蛋三文治",
        price: "$10.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "S19",
        name_fr: "Sandwich au luncheon meat halal et œufs",
        name_en: "Halal Luncheon Meat and Eggs Sandwich",
        name_zh: "清真午餐肉蛋三文治",
        price: "$9.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "S20",
        name_fr: "Sandwich aux tomates et œufs",
        name_en: "Tomato and Eggs Sandwich",
        name_zh: "番茄蛋三文治",
        price: "$9.99",
        desc_fr: "",
        desc_en: ""
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
        name_zh: "五香牛肉滑蛋厚多士",
        price: "$13.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "S11",
        name_fr: "Rôtie épaisse au bœuf satay et œufs brouillés",
        name_en: "Satay Beef and Scrambled Eggs Toast",
        name_zh: "沙爹牛肉滑蛋厚多士",
        price: "$13.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "S15",
        name_fr: "Rôtie au charbon avec beurre d'arachide",
        name_en: "Charcoal Toast with Peanut Butter",
        name_zh: "花生醬黑炭厚多士",
        price: "$8.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "S16",
        name_fr: "Rôtie au charbon avec Milo et lait condensé",
        name_en: "Charcoal Toast with Milo & Condensed Milk",
        name_zh: "美祿煉奶黑炭厚多士",
        price: "$8.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "S17",
        name_fr: "Pain doré au beurre d'arachide et lait condensé",
        name_en: "French Toast with Peanut Butter & Condensed Milk",
        name_zh: "花生煉奶西多士",
        price: "$12.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "S21",
        name_fr: "Rôtie au charbon avec beurre et lait condensé",
        name_en: "Charcoal Toast with Butter & Condensed Milk",
        name_zh: "牛油煉奶黑炭厚多士",
        price: "$8.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "S22",
        name_fr: "Rôtie au charbon avec œufs",
        name_en: "Charcoal Toast with Eggs",
        name_zh: "黑炭厚多士",
        price: "$9.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "S23",
        name_fr: "Rôtie style \\\"Lau Nai Wah\\\" à l'Ovaltine et lait condensé",
        name_en: "Toast with Ovaltine & Condensed Milk",
        name_zh: "漏奶華",
        price: "$9.99",
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
        id: "G03",
        name_fr: "Thé au lait à la hongkongaise",
        name_en: "Hong Kong Style Milk Tea",
        name_zh: "港式奶茶",
        price: "$5.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "G04",
        name_fr: "Café",
        name_en: "Coffee",
        name_zh: "咖啡",
        price: "$4.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "G05",
        name_fr: "Café et thé au lait mélangés (Yuenyeung)",
        name_en: "Coffee & Milk Tea Mix (Yuenyeung)",
        name_zh: "鴛鴦",
        price: "$5.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "G07",
        name_fr: "Thé au citron à la hongkongaise",
        name_en: "Hong Kong Style Lemon Tea",
        name_zh: "港式檸檬茶",
        price: "$5.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "G08",
        name_fr: "Eau au citron",
        name_en: "Lemon Water",
        name_zh: "檸檬水",
        price: "$4.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "G09",
        name_fr: "Limonade au miel",
        name_en: "Honey Lemonade",
        name_zh: "檸檬蜜",
        price: "$5.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "G10",
        name_fr: "Thé au lait \\\"Teddy Bear\\\"",
        name_en: "Teddy Bear Milk Tea",
        name_zh: "熊熊絲襪奶茶",
        price: "$6.99",
        desc_fr: "",
        desc_en: ""
      },
      {
        id: "G11",
        name_fr: "Thé glacé au citron \\\"Teddy Bear\\\"",
        name_en: "Teddy Bear Lemon Tea",
        name_zh: "熊熊檸檬紅茶",
        price: "$6.99",
        desc_fr: "",
        desc_en: ""
      }
    ]
  }
];`;

const miniMenuStr = `const MINI_MENU = [
  { name_en: "Takoyaki (6 pcs)", name_fr: "Takoyaki (6 pièces)", price: "$8.99" },
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
