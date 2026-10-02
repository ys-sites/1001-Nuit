const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/data/menuData.ts', 'utf8');

const regex = /"image":\s*"([^"]+)"/g;
let match;
let missing = 0;
let total = 0;

while ((match = regex.exec(content)) !== null) {
  total++;
  const imgUrl = match[1];
  const diskPath = path.join('public', imgUrl.replace(/^\//, ''));
  if (!fs.existsSync(diskPath)) {
    console.error('MISSING:', imgUrl);
    missing++;
  }
}

console.log(`Checked ${total} image references in menuData.ts. Missing: ${missing}`);

// Also list all lunch-express images
const lunchDir = path.resolve('public/menu/optimized/lunch-express');
const lunchFiles = fs.readdirSync(lunchDir);
console.log(`Optimized Lunch Express files (${lunchFiles.length}):`, lunchFiles);
