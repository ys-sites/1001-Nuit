import fs from "fs";
import path from "path";
import sharp from "sharp";

const MENU_DIR = path.resolve("public/menu");

async function optimizeMenuImages() {
  console.log("Starting menu image optimization...");

  if (!fs.existsSync(MENU_DIR)) {
    console.error(`Error: Menu directory not found at ${MENU_DIR}`);
    return;
  }

  const files = fs.readdirSync(MENU_DIR);

  for (const file of files) {
    const fullPath = path.join(MENU_DIR, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) continue;

    const ext = path.extname(file).toLowerCase();
    
    // Parse index from filename like imgi_12_12720020260709083346092.png or imgi_72_default.svg
    const match = file.match(/^imgi_(\d+)_/);
    if (!match) {
      console.log(`Skipping non-matching file: ${file}`);
      continue;
    }

    const index = match[1];

    if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
      const destFileName = `imgi_${index}.webp`;
      const destPath = path.join(MENU_DIR, destFileName);

      try {
        console.log(`Optimizing: ${file} -> ${destFileName}`);
        
        await sharp(fullPath)
          .resize(500) // Resize to 500px width (preserving aspect ratio)
          .webp({ quality: 80 })
          .toFile(destPath);

        const origStats = fs.statSync(fullPath);
        const optStats = fs.statSync(destPath);
        const savings = (((origStats.size - optStats.size) / origStats.size) * 100).toFixed(1);

        console.log(`  Size: ${(origStats.size / 1024).toFixed(1)} KB -> ${(optStats.size / 1024).toFixed(1)} KB (${savings}% savings)`);
        
        // Remove original file
        fs.unlinkSync(fullPath);
      } catch (err) {
        console.error(`Error optimizing ${file}:`, err);
      }
    } else if (ext === ".svg") {
      const destFileName = `imgi_${index}.svg`;
      const destPath = path.join(MENU_DIR, destFileName);
      
      try {
        console.log(`Renaming SVG: ${file} -> ${destFileName}`);
        fs.renameSync(fullPath, destPath);
      } catch (err) {
        console.error(`Error renaming SVG ${file}:`, err);
      }
    }
  }

  console.log("Menu image optimization complete!");
}

optimizeMenuImages();
