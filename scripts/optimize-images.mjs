import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const IMAGE_DIR = './public/assets/images'
const OUTPUT_DIR = './public/assets/images'

async function optimizeImages() {
  const files = fs.readdirSync(IMAGE_DIR).filter(f => /\.(png|jpg|jpeg)$/i.test(f))
  const blurData = {}

  for (const file of files) {
    const inputPath = path.join(IMAGE_DIR, file)
    const baseName = path.parse(file).name
    const outputPath = path.join(OUTPUT_DIR, `${baseName}.webp`)

    try {
      // Convert to WebP
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)

      console.log(`✓ Converted: ${file} → ${baseName}.webp`)

      // Generate blur placeholder (tiny base64)
      const blurBuffer = await sharp(inputPath)
        .resize(10, 10, { fit: 'cover' })
        .blur(5)
        .webp({ quality: 20 })
        .toBuffer()

      const blurDataURL = `data:image/webp;base64,${blurBuffer.toString('base64')}`
      blurData[baseName] = blurDataURL

      console.log(`✓ Generated blur placeholder for: ${baseName}`)
    } catch (err) {
      console.error(`✗ Error processing ${file}:`, err.message)
    }
  }

  // Write blur data to JSON file
  const blurOutputPath = path.join('./lib', 'blur-data.json')
  fs.writeFileSync(blurOutputPath, JSON.stringify(blurData, null, 2))
  console.log(`\n✓ Blur data written to ${blurOutputPath}`)
  console.log(`  ${Object.keys(blurData).length} images processed`)
}

optimizeImages()
