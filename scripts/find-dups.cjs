const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/data/menuData.ts', 'utf8');
const start = content.indexOf('export const MENU_CATEGORIES: MenuCategory[] = ');
const jsonStr = content.substring(start + 'export const MENU_CATEGORIES: MenuCategory[] = '.length).trim().replace(/;$/, '');
const categories = eval(jsonStr);

// Collect all current item names normalized
const currentNames = new Map();
categories.forEach(c => {
  c.items.forEach(i => {
    currentNames.set(i.name_en.toLowerCase().replace(/[^a-z0-9]/g, ''), i.name_en);
  });
});

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else {
      results.push({
        fullPath: fullPath.replace(/\\/g, '/'),
        relPath: path.relative('public/menu', fullPath).replace(/\\/g, '/'),
        file
      });
    }
  });
  return results;
}

const nonQuickPos = getFiles('public/menu').filter(f => !f.relPath.startsWith('QuickPOS') && !f.relPath.startsWith('optimized'));

const toAdd = [];
const duplicates = [];

nonQuickPos.forEach(f => {
  let name = f.file
    .replace(/\.(png|jpg|jpeg|webp)$/i, '')
    .replace(/^[A-Za-z0-9]+\s*[-–—]\s*/, '')
    .replace(/\s*[-–—]\s*(Main Dish|Snacks & Sides|Signature Snack|Drink)$/i, '')
    .trim();

  // Strip leading code like B01, C01, SP01, etc.
  name = name.replace(/^[A-Z][0-9]{1,2}\s*/, '').trim();

  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  let matched = null;
  for (const [cNorm, cName] of currentNames.entries()) {
    if (cNorm === norm || (norm.length > 5 && cNorm.includes(norm)) || (cNorm.length > 5 && norm.includes(cNorm))) {
      matched = cName;
      break;
    }
  }

  if (matched) {
    duplicates.push({ file: f.relPath, raw: f.file, matchedWith: matched });
  } else {
    toAdd.push({ file: f.relPath, name, norm });
  }
});

console.log('Duplicates count (same food already in menu):', duplicates.length);
duplicates.forEach(d => console.log('  SAME: ' + d.file + ' == ' + d.matchedWith));

console.log('\nUnique food to ADD count:', toAdd.length);
toAdd.forEach(a => console.log('  ADD: ' + a.file + ' -> ' + a.name));
