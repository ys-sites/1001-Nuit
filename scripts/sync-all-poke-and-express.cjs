const fs = require('fs');
const path = require('path');

const menuDataPath = path.resolve('src/data/menuData.ts');
let content = fs.readFileSync(menuDataPath, 'utf8');

// Fix empty Artisanal Ice Cream image in AYCE if present
content = content.replace(
  /("name_en":\s*"Artisanal Ice Cream"[\s\S]*?"image":\s*)"\s*"/,
  '$1"/menu/optimized/alacarte/ice-cream.webp"'
);

// POKE BOWL category items
const pokeBowlCategory = {
  title_en: "POKE BOWL",
  title_fr: "BOLS POKE",
  items: [
    {
      name_en: "Sashimi Poke Bowl",
      name_fr: "Bol Poke au Sashimi",
      desc_en: "Fresh assorted sashimi cuts over seasoned sushi rice with avocado, edamame, and house poke dressing",
      desc_fr: "Assortiment de sashimis frais du chef sur riz vinaigré, avocat crémeux, edamame et marinade poke maison",
      price: "$21.99",
      image: "/menu/optimized/lunch-express/sashimi-poke-bowl.webp"
    },
    {
      name_en: "Eel Poke Bowl",
      name_fr: "Bol Poke à l'Anguille Grillée",
      desc_en: "Tender glazed Japanese barbecue unagi eel over seasoned sushi rice with avocado and cucumber",
      desc_fr: "Anguille grillée laquée à la sauce unagi sur lit de riz vinaigré avec avocat et lamelles de concombre",
      price: "$19.99",
      image: "/menu/optimized/lunch-express/eel-poke-bowl.webp"
    },
    {
      name_en: "Spicy Salmon Poke Bowl",
      name_fr: "Bol Poke au Saumon Épicé",
      desc_en: "Fresh Atlantic salmon tossed with sriracha spicy mayo, avocado, edamame, and masago",
      desc_fr: "Dés de saumon frais relevés à la mayonnaise épicée sriracha, avocat, edamame et masago",
      price: "$20.99",
      image: "/menu/optimized/lunch-express/spicy-salmon-poke-bowl.webp"
    },
    {
      name_en: "Tuna Poke Bowl",
      name_fr: "Bol Poke au Thon Rouge",
      desc_en: "High-grade ruby red tuna slices with avocado, crisp cucumber, sesame, and signature poke glaze",
      desc_fr: "Lamelles de thon rouge de première fraîcheur, avocat mûr, concombre croquant et sésame grillé",
      price: "$20.99",
      image: "/menu/optimized/lunch-express/tuna-poke-bowl.webp"
    },
    {
      name_en: "Vegetarian Poke Bowl",
      name_fr: "Bol Poke Végétarien",
      desc_en: "Silken tofu squares, Haas avocado, edamame, seasoned seaweed salad, and cucumber over sushi rice",
      desc_fr: "Cubes de tofu soyeux, avocat Haas, fèves d'edamame, salade d'algues et concombre sur riz vinaigré",
      price: "$16.99",
      image: "/menu/optimized/lunch-express/vegetarian-poke-bowl.webp"
    }
  ]
};

// Check if ALACARTE_MENU_CATEGORIES has POKE BOWL; if not, prepend it
const alacarteStart = content.indexOf('export const ALACARTE_MENU_CATEGORIES: MenuCategory[] = [');
const lunchStart = content.indexOf('export const LUNCH_EXPRESS_MENU_CATEGORIES: MenuCategory[] = [');

if (alacarteStart !== -1 && lunchStart !== -1) {
  const alacarteJsonStr = content.substring(
    alacarteStart + 'export const ALACARTE_MENU_CATEGORIES: MenuCategory[] = '.length,
    lunchStart
  ).trim().replace(/;$/, '');

  const alacarteCats = JSON.parse(alacarteJsonStr);
  const hasPoke = alacarteCats.some(c => c.title_en === 'POKE BOWL');
  if (!hasPoke) {
    alacarteCats.unshift(pokeBowlCategory);
    console.log('Added POKE BOWL category to ALACARTE_MENU_CATEGORIES!');
  }

  // Ensure all image replacements in alacarteCats
  for (const cat of alacarteCats) {
    for (const item of cat.items) {
      if (item.name_en.includes('Boat 1')) item.image = '/menu/optimized/lunch-express/boat-1.webp';
      if (item.name_en.includes('Boat 2') || item.name_en.includes('Boat2')) item.image = '/menu/optimized/lunch-express/boat-2.webp';
      if (item.name_en.includes('Stir Vermicelli')) item.image = '/menu/optimized/lunch-express/veg-stir-vermicelli.webp';
      if (item.name_en.includes('Veg Fried Rice') || item.name_en.includes('Vegetarian Fried Rice')) item.image = '/menu/optimized/lunch-express/veg-fried-rice.webp';
      if (item.name_en.includes('Braised Tofu')) item.image = '/menu/optimized/lunch-express/braised-tofu-in-soy-sauce.webp';
      if (item.name_en.includes('Mixed Vegetables')) item.image = '/menu/optimized/lunch-express/stir-fried-mixed-vegetables.webp';
      if (item.name_en.includes('Vegetable Dumpling') || item.name_en.includes('Vegetables Dumpling')) item.image = '/menu/optimized/lunch-express/vegetables-dumpling.webp';
      if (item.name_en.includes('Coconut Water')) item.image = '/menu/optimized/lunch-express/coconut-water.webp';
      if (item.name_en.includes('Oolong Tea')) item.image = '/menu/optimized/lunch-express/oolong-tea.webp';
      if (item.name_en.includes('Mexican Coca-Cola')) item.image = '/menu/optimized/lunch-express/coca-cola-mexican-bottled.webp';
      if (item.name_en.includes('Diet Coke')) item.image = '/menu/optimized/lunch-express/diet-coke.webp';
      if (item.name_en.includes('Milkis')) item.image = '/menu/optimized/lunch-express/milkis.webp';
      if (item.name_en.includes('Sparkling Mineral Water') || item.name_en.includes('Sparkling Water')) item.image = '/menu/optimized/lunch-express/sparkling-water.webp';
      if (item.name_en.includes('Yuzu Cheesecake') || item.name_en.includes('Cheese cake Yuzu')) item.image = '/menu/optimized/lunch-express/cheese-cake-yuzu.webp';
      if (item.name_en.includes('Mango Mochi')) item.image = '/menu/optimized/lunch-express/mango-mochi.webp';
      if (item.name_en.includes('Matcha Mochi')) item.image = '/menu/optimized/lunch-express/matcha-mochi.webp';
      if (item.name_en.includes('Strawberry Mochi')) item.image = '/menu/optimized/lunch-express/strawberry-mochi.webp';
      if (item.name_en.includes('Ayran')) item.image = '/menu/optimized/lunch-express/ayran.webp';
    }
  }

  const beforeAlacarte = content.substring(0, alacarteStart);
  const lunchSection = content.substring(lunchStart);

  content = beforeAlacarte + 'export const ALACARTE_MENU_CATEGORIES: MenuCategory[] = ' + JSON.stringify(alacarteCats, null, 2) + ';\n\n' + lunchSection;
}

fs.writeFileSync(menuDataPath, content, 'utf8');
console.log('Successfully updated menuData.ts with Poke Bowl in À La Carte!');
