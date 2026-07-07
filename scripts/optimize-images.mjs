import fs from "fs";
import path from "path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve("public");
const SUSHI_DIR = path.resolve("public/sushi");

const HERO_IMAGES = [
  "HeroShot.jpg",
  "reservation.jpg",
  "reservation.png",
  "hero.jpeg",
  "hero.webp.png",
  "event.png"
];

const LOGO_IMAGES = [
  "logo.jpg",
  "YS.png"
];

async function optimizeImage(filePath, fileName, destDir) {
  const isHero = HERO_IMAGES.includes(fileName);
  const isLogo = LOGO_IMAGES.includes(fileName);

  let targetWidth = 800;
  let targetQuality = 75;

  if (isHero) {
    targetWidth = 1920;
    targetQuality = 78;
  } else if (isLogo) {
    targetWidth = 400;
    targetQuality = 85;
  }

  // Determine output filename: keep original base but swap/append extension to .webp
  // To avoid dual extensions like .webp.webp for hero.webp.png, let's clean it up
  let baseName = fileName;
  if (fileName === "hero.webp.png") {
    baseName = "hero.webp";
  } else {
    // replace trailing extension
    baseName = fileName.replace(/\.(png|jpg|jpeg)$/i, "");
  }
  const destFileName = `${baseName}.webp`;
  const destPath = path.join(destDir, destFileName);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = image;
    // Only resize if original width is larger than target
    if (metadata.width && metadata.width > targetWidth) {
      pipeline = pipeline.resize(targetWidth);
    }

    await pipeline
      .webp({ quality: targetQuality })
      .toFile(destPath);

    const origStats = fs.statSync(filePath);
    const optStats = fs.statSync(destPath);
    const savings = ((origStats.size - optStats.size) / origStats.size * 100).toFixed(1);

    console.log(`Optimized: ${fileName} -> ${destFileName}`);
    console.log(`  Size: ${(origStats.size / 1024).toFixed(1)} KB -> ${(optStats.size / 1024).toFixed(1)} KB (${savings}% savings)`);
  } catch (err) {
    console.error(`Error optimizing ${fileName}:`, err);
  }
}

async function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      continue; // We only process flat folders, we'll call processDir for specific directories
    }

    const ext = path.extname(file).toLowerCase();
    if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
      await optimizeImage(fullPath, file, dir);
    }
  }
}

async function run() {
  console.log("Starting image optimization...");
  // Process root public dir
  await processDir(PUBLIC_DIR);
  // Process sushi subfolder
  if (fs.existsSync(SUSHI_DIR)) {
    await processDir(SUSHI_DIR);
  }
  console.log("Image optimization complete!");
}

run();
