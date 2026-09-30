const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.resolve('public/menu/optimized');

const filesToConvert = [
  { src: 'public/menu/Main Dish/C06 Spaghetti w-Beef BPSauce.png', slug: 'spaghetti-beef-black-pepper-sauce' },
  { src: 'public/menu/Signature Snacks/Condensed Milk Toast.png', slug: 'condensed-milk-toast' },
  { src: 'public/menu/Signature Snacks/Ice cream toast.png', slug: 'ice-cream-toast' },
  { src: 'public/menu/Signature Snacks/ice cream waffles.png', slug: 'ice-cream-waffles' },
  { src: 'public/menu/Signature Snacks/Popcorn Chicken.png', slug: 'popcorn-chicken' },
  { src: 'public/menu/Signature Snacks/Shrimp Toast.png', slug: 'shrimp-toast' },
  { src: 'public/menu/Signature Snacks/Mango Mochi - Signature Snack.png', slug: 'mango-mochi' },
  { src: 'public/menu/Signature Snacks/Matcha Mochi - Signature Snack.png', slug: 'matcha-mochi' },
  { src: 'public/menu/Drinks/Mango passion slush.png', slug: 'mango-passion-slush' },
  { src: 'public/menu/Drinks/Strawberry slush.png', slug: 'strawberry-slush' },
  { src: 'public/menu/Drinks/Red Bull Zero.jpg', slug: 'red-bull-zero' }
];

async function run() {
  for (const item of filesToConvert) {
    if (!fs.existsSync(item.src)) {
      console.warn('File not found:', item.src);
      continue;
    }
    const dest = path.join(outDir, `${item.slug}.webp`);
    await sharp(item.src)
      .resize({ width: 450, withoutEnlargement: true })
      .webp({ quality: 80, effort: 4 })
      .toFile(dest);
    console.log(`Converted ${item.src} -> ${dest}`);
  }
  console.log('All remaining unique items converted!');
}

run();
