const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const alacarteOptDir = path.resolve('public/menu/optimized/alacarte');
const ayceOptDir = path.resolve('public/menu/optimized/ayce');

fs.mkdirSync(alacarteOptDir, { recursive: true });
fs.mkdirSync(ayceOptDir, { recursive: true });

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

async function optimizeFile(srcPath, destPath) {
  if (!fs.existsSync(srcPath)) {
    console.error('Source file does not exist:', srcPath);
    return false;
  }
  try {
    await sharp(srcPath)
      .resize({ width: 450, withoutEnlargement: true })
      .webp({ quality: 80, effort: 4 })
      .toFile(destPath);
    return true;
  } catch (err) {
    console.error(`Error optimizing ${srcPath}:`, err.message);
    return false;
  }
}

async function run() {
  console.log('--- OPTIMIZING AYCE (QUICKPOS) IMAGES ---');
  const ayceReport = JSON.parse(fs.readFileSync('public/menu/QuickPOS menu - 2026-09-29/download-report.json', 'utf8'));

  for (const item of ayceReport.items) {
    if (!item.localFile) continue;
    const src = path.join('public/menu/QuickPOS menu - 2026-09-29', item.localFile);
    let cleanName = item.name.replace(/^[A-Za-z0-9]+\s*[-–—]\s*/, '').trim();
    cleanName = cleanName.replace(/[\(（](?:(?:\d+)\s*(?:pcs|p|piece|pieces)?|(?:\d+))[\)）]/gi, '').trim();
    const slug = slugify(cleanName);
    const dest = path.join(ayceOptDir, `${slug}.webp`);
    await optimizeFile(src, dest);
  }

  console.log('--- OPTIMIZING À LA CARTE IMAGES ---');
  function getAlacarteFiles(dir) {
    let list = [];
    fs.readdirSync(dir).forEach(f => {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) {
        if (!p.includes('QuickPOS') && !p.includes('optimized')) {
          list = list.concat(getAlacarteFiles(p));
        }
      } else {
        if (!p.includes('QuickPOS') && !p.includes('optimized')) {
          list.push(p);
        }
      }
    });
    return list;
  }

  const alacarteSources = getAlacarteFiles('public/menu');
  for (const src of alacarteSources) {
    const filename = path.basename(src, path.extname(src));
    let cleanName = filename.replace(/^[A-Za-z0-9]+\s*[-–—]\s*/, '').trim();
    cleanName = cleanName.replace(/^[A-Z][0-9]{1,2}\s*/, '').trim();
    cleanName = cleanName.replace(/[\(（](?:(?:\d+)\s*(?:pcs|p|piece|pieces)?|(?:\d+))[\)）]/gi, '').trim();
    cleanName = cleanName.replace(/\s*[-–—]\s*(Main Dish|Snacks & Sides|Signature Snack|Drink)$/i, '').trim();
    const slug = slugify(cleanName);
    const dest = path.join(alacarteOptDir, `${slug}.webp`);
    await optimizeFile(src, dest);
  }

  console.log('Image optimization finished!');
}

run();
