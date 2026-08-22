import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve('src/assets/images');
const files = fs.readdirSync(imagesDir);

async function optimize() {
  const placeholders = {};

  for (const file of files) {
    if (!file.endsWith('.jpg') && !file.endsWith('.jpeg') && !file.endsWith('.png')) continue;
    if (file.includes('_thumb') || file.includes('.webp')) continue;

    const filePath = path.join(imagesDir, file);
    const baseName = path.parse(file).name;

    console.log(`Processing: ${file}`);

    // Generate responsive webp (high quality, web optimized)
    const webpPath = path.join(imagesDir, `${baseName}.webp`);
    await sharp(filePath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(webpPath);

    // Generate optimized mobile webp
    const webpMobilePath = path.join(imagesDir, `${baseName}_mobile.webp`);
    await sharp(filePath)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(webpMobilePath);

    // Generate tiny blur placeholder (20px width base64)
    const blurBuffer = await sharp(filePath)
      .resize({ width: 20 })
      .webp({ quality: 20 })
      .toBuffer();
    
    placeholders[baseName] = `data:image/webp;base64,${blurBuffer.toString('base64')}`;

    console.log(`Optimized ${file} -> webp & mobile webp generated`);
  }

  // Save placeholders to a json file
  fs.writeFileSync(
    path.join(imagesDir, 'placeholders.json'),
    JSON.stringify(placeholders, null, 2)
  );
  console.log('Placeholders generated successfully!');
}

optimize().catch(err => {
  console.error('Optimization error:', err);
  process.exit(1);
});
