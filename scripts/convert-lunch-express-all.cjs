const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.resolve('public/menu/optimized/lunch-express');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// All 23 downloaded items in public/menu/lunch express
const itemsToConvert = [
  // Poke Bowls
  { src: 'public/menu/lunch express/Poke Bowl/S09 - Sashimi Poke Bowl.jpg', slug: 'sashimi-poke-bowl' },
  { src: 'public/menu/lunch express/Poke Bowl/S20 - Eel Poke Bowl.jpg', slug: 'eel-poke-bowl' },
  { src: 'public/menu/lunch express/Poke Bowl/S14 - Spicy Salmon Poke Bowl.png', slug: 'spicy-salmon-poke-bowl' },
  { src: 'public/menu/lunch express/Poke Bowl/S19 - Tuna Poke Bowl.png', slug: 'tuna-poke-bowl' },
  { src: 'public/menu/lunch express/Poke Bowl/0301 - Vegetarian Poke Bowl.png', slug: 'vegetarian-poke-bowl' },

  // Sushi
  { src: 'public/menu/lunch express/Sushi/1509 - Boat 1.png', slug: 'boat-1' },
  { src: 'public/menu/lunch express/Sushi/1510 - Boat2.png', slug: 'boat-2' },

  // Vegetarian
  { src: 'public/menu/lunch express/Vegetarian/V01 - V01 Veg Stir Vermicelli.jpg', slug: 'veg-stir-vermicelli' },
  { src: 'public/menu/lunch express/Vegetarian/V02 - V02 Veg Fried Rice.png', slug: 'veg-fried-rice' },
  { src: 'public/menu/lunch express/Vegetarian/V05 - V05 Braised Tofu in Soy Sauce.png', slug: 'braised-tofu-in-soy-sauce' },
  { src: 'public/menu/lunch express/Vegetarian/0901 - Stir-Fried Mixed Vegetables.jpg', slug: 'stir-fried-mixed-vegetables' },
  { src: 'public/menu/lunch express/Vegetarian/1204 - Vegetables Dumpling.jpg', slug: 'vegetables-dumpling' },

  // Drink & Desserts
  { src: 'public/menu/lunch express/Drink/06015 - coconut water.png', slug: 'coconut-water' },
  { src: 'public/menu/lunch express/Drink/06018 - Oolong Tea(no sugar).png', slug: 'oolong-tea' },
  { src: 'public/menu/lunch express/Drink/0608 - Coca cola mexican bottled.png', slug: 'coca-cola-mexican-bottled' },
  { src: 'public/menu/lunch express/Drink/0610 - Diet Coke.jpg', slug: 'diet-coke' },
  { src: 'public/menu/lunch express/Drink/06017 - Milkis.png', slug: 'milkis' },
  { src: 'public/menu/lunch express/Drink/06016 - Sparkling Water.jpg', slug: 'sparkling-water' },
  { src: 'public/menu/lunch express/Drink/2101 - Cheese cake Yuzu.png', slug: 'cheese-cake-yuzu' },
  { src: 'public/menu/lunch express/Drink/2104 - Mango Mochi.png', slug: 'mango-mochi' },
  { src: 'public/menu/lunch express/Drink/2105 - Matcha Mochi.png', slug: 'matcha-mochi' },
  { src: 'public/menu/lunch express/Drink/06021 - Ayran.png', slug: 'ayran' },
  { src: 'public/menu/lunch express/Drink/2106 - Strawberry Mochi.png', slug: 'strawberry-mochi' }
];

async function run() {
  console.log(`Starting conversion of ${itemsToConvert.length} images for Lunch Express...`);

  for (const item of itemsToConvert) {
    if (!fs.existsSync(item.src)) {
      console.warn(`Source not found: ${item.src}`);
      continue;
    }

    const dest = path.join(outDir, `${item.slug}.webp`);
    await sharp(item.src)
      .resize({ width: 450, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(dest);

    const stats = fs.statSync(dest);
    console.log(`✓ Converted ${item.src} -> ${dest} (${Math.round(stats.size / 1024)} KB)`);
  }

  console.log('All 23 Lunch Express images converted successfully!');
}

run().catch(err => {
  console.error('Conversion failed:', err);
  process.exit(1);
});
