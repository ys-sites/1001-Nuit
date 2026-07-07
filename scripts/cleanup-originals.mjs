import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.resolve("public");
const SUSHI_DIR = path.resolve("public/sushi");
const BACKUP_DIR = path.resolve("originals_backup");
const BACKUP_SUSHI_DIR = path.resolve("originals_backup/sushi");

// Ensure backup directories exist
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR);
}
if (!fs.existsSync(BACKUP_SUSHI_DIR)) {
  fs.mkdirSync(BACKUP_SUSHI_DIR);
}

// Rename hero.webp.webp to hero.webp in public/
const doubleWebp = path.join(PUBLIC_DIR, "hero.webp.webp");
const singleWebp = path.join(PUBLIC_DIR, "hero.webp");
if (fs.existsSync(doubleWebp)) {
  fs.renameSync(doubleWebp, singleWebp);
  console.log("Renamed hero.webp.webp -> hero.webp");
}

function moveFile(srcPath, destPath, fileName) {
  try {
    fs.renameSync(srcPath, destPath);
    console.log(`Moved original: ${fileName} -> backup/`);
  } catch (err) {
    console.error(`Failed to move ${fileName}:`, err);
  }
}

function backupDir(sourceDir, destDir) {
  const files = fs.readdirSync(sourceDir);
  for (const file of files) {
    const fullPath = path.join(sourceDir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) continue;

    const ext = path.extname(file).toLowerCase();
    if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
      // Exclude favicon files
      if (file.startsWith("favicon") || file === "site.webmanifest") {
        continue;
      }
      const destPath = path.join(destDir, file);
      moveFile(fullPath, destPath, file);
    }
  }
}

console.log("Starting cleanup of original images...");
backupDir(PUBLIC_DIR, BACKUP_DIR);
if (fs.existsSync(SUSHI_DIR)) {
  backupDir(SUSHI_DIR, BACKUP_SUSHI_DIR);
}
console.log("Cleanup complete!");
