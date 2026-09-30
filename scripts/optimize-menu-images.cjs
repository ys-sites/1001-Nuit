const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.resolve('public/menu/optimized');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const report = JSON.parse(fs.readFileSync('public/menu/QuickPOS menu - 2026-09-29/download-report.json', 'utf8'));

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function run() {
  let totalOrig = 0;
  let totalOpt = 0;
  let successCount = 0;

  console.log('Optimizing QuickPOS menu images...');

  for (const item of report.items) {
    if (!item.localFile) continue;
    const srcPath = path.join('public/menu/QuickPOS menu - 2026-09-29', item.localFile);
    if (!fs.existsSync(srcPath)) {
      console.warn('File not found:', srcPath);
      continue;
    }

    // Clean name
    let cleanName = item.name.replace(/^[A-Za-z0-9]+\s*[-–—]\s*/, '').trim();
    // remove portions from slug
    cleanName = cleanName.replace(/[\(（](?:(?:\d+)\s*(?:pcs|p|piece|pieces)?|(?:\d+))[\)）]/gi, '').trim();
    const slug = slugify(cleanName);
    const destPath = path.join(outDir, `${slug}.webp`);

    try {
      const origSize = fs.statSync(srcPath).size;
      totalOrig += origSize;

      await sharp(srcPath)
        .resize({ width: 450, withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(destPath);

      const optSize = fs.statSync(destPath).size;
      totalOpt += optSize;
      successCount++;
    } catch (err) {
      console.error(`Error optimizing ${srcPath}:`, err.message);
    }
  }

  // Also optimize special existing combo images and dishes
  const extraImages = [
    { src: 'public/menu/Sushi Combo/SS1.png', slug: 'sushi-combo-ss1' },
    { src: 'public/menu/Sushi Combo/SS2.png', slug: 'sushi-combo-ss2' },
    { src: 'public/menu/Sushi Combo/SS3.png', slug: 'sushi-combo-ss3' },
    { src: 'public/menu/Sushi Combo/SS4.png', slug: 'sushi-combo-ss4' },
    { src: 'public/menu/Sushi Combo/Boat 1.png', slug: 'sushi-boat-1' },
    { src: 'public/menu/Sushi Combo/Boat2.png', slug: 'sushi-boat-2' },
    { src: 'public/menu/SIZZLING PLATES/SP01 Sizzling Lamb Chops.png', slug: 'sizzling-lamb-chops' },
    { src: 'public/menu/SIZZLING PLATES/SP02 AAA Angus Beef Ribs.png', slug: 'sizzling-aaa-angus-beef-ribs' },
    { src: 'public/menu/SIZZLING PLATES/SP03 Garlic Chicken Chop.jpg', slug: 'sizzling-garlic-chicken-chop' },
    { src: 'public/menu/SIZZLING PLATES/SP04 BreadSole&ChickenChop.jpg', slug: 'sizzling-breaded-sole-and-chicken-chop' },
    { src: 'public/menu/DUMPLINGS/Lamb&Cilantro Soup Dumplings.jpg', slug: 'lamb-and-cilantro-soup-dumplings' },
    { src: 'public/menu/DUMPLINGS/Shrimp egg & zucchini.jpg', slug: 'shrimp-egg-and-zucchini-dumplings' },
    { src: 'public/menu/DUMPLINGS/Vegetables Dumpling.jpg', slug: 'vegetables-dumplings' },
    { src: 'public/menu/CURRY STYLE HK/E06 Curry Beef on Rice.jpg', slug: 'curry-beef-on-rice' },
    { src: 'public/menu/CURRY STYLE HK/E08 Curry Lamb Chops on Rice.jpg', slug: 'curry-lamb-chops-on-rice' },
    { src: 'public/menu/Chicken & ScrambleEgg LoDing.jpeg', slug: 'chicken-and-scrambled-egg-lo-ding' },
    { src: 'public/menu/Curry Beef Brisket Lo Ding - Copy.jpeg', slug: 'curry-beef-brisket-lo-ding' },
    { src: 'public/menu/Signature Snacks/Ice Cream.jpg', slug: 'ice-cream' },
    { src: 'public/menu/Main Dish/C01 Sakura Shrimp&Chicken FR.png', slug: 'sakura-shrimp-chicken-fried-rice' },
    { src: 'public/menu/Main Dish/C09 AAA Beef Ribs SunnyEggRice.png', slug: 'aaa-beef-ribs-sunny-egg-rice' },
    { src: 'public/menu/Main Dish/C10 HK style Beef Noodles.png', slug: 'hk-style-beef-noodles' },
    { src: 'public/menu/Main Dish/C12 Pineapple Fried Rice.png', slug: 'pineapple-fried-rice' },
    { src: 'public/menu/Main Dish/Stir-fried Beef udon.jpg', slug: 'stir-fried-beef-udon' },
    { src: 'public/menu/VEGETARIAN/V01 Veg Stir Vermicelli.jpg', slug: 'veg-stir-vermicelli' },
    { src: 'public/menu/VEGETARIAN/V05 Braised Tofu in Soy Sauce.png', slug: 'braised-tofu-in-soy-sauce' },
    { src: 'public/menu/VEGETARIAN/Stir-Fried Mixed Vegetables.jpg', slug: 'stir-fried-mixed-vegetables' },
    { src: 'public/menu/SNACKS & SIDES/B09 Spicy Chill Beef.png', slug: 'spicy-chili-beef' },
    { src: 'public/menu/SNACKS & SIDES/B01 Curry Beef Udon Soup.jpg', slug: 'curry-beef-udon-soup' },
    { src: 'public/menu/SNACKS & SIDES/B03 General Tao’s Shrimp.jpg', slug: 'general-taos-shrimp' },
    { src: 'public/menu/SNACKS & SIDES/B05Chicken wing with Fries.jpg', slug: 'chicken-wings-with-fries' }
  ];

  for (const extra of extraImages) {
    if (!fs.existsSync(extra.src)) continue;
    const destPath = path.join(outDir, `${extra.slug}.webp`);
    try {
      const origSize = fs.statSync(extra.src).size;
      totalOrig += origSize;

      await sharp(extra.src)
        .resize({ width: 450, withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(destPath);

      const optSize = fs.statSync(destPath).size;
      totalOpt += optSize;
      successCount++;
    } catch (err) {
      console.error(`Error optimizing ${extra.src}:`, err.message);
    }
  }

  console.log(`\nSuccessfully optimized ${successCount} images.`);
  console.log(`Original total size: ${(totalOrig / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Optimized total size: ${(totalOpt / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Bandwidth savings: ${(((totalOrig - totalOpt) / totalOrig) * 100).toFixed(1)}%`);
}

run();
