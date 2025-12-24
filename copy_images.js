
import fs from 'fs';
import path from 'path';

const sources = [
    'C:/Users/adria/.gemini/antigravity/brain/a7f0e886-4c3b-4cb5-b3ba-8a7463e14e25/uploaded_image_0_1766620383116.png',
    'C:/Users/adria/.gemini/antigravity/brain/a7f0e886-4c3b-4cb5-b3ba-8a7463e14e25/uploaded_image_1_1766620383116.png',
    'C:/Users/adria/.gemini/antigravity/brain/a7f0e886-4c3b-4cb5-b3ba-8a7463e14e25/uploaded_image_2_1766620383116.png',
    'C:/Users/adria/.gemini/antigravity/brain/a7f0e886-4c3b-4cb5-b3ba-8a7463e14e25/uploaded_image_3_1766620383116.png'
];

const dests = [
    'public/assets/images/history-connaught-vials.png',
    'public/assets/images/history-scientist.png',
    'public/assets/images/history-map.png',
    'public/assets/images/history-building.png'
];

const targetDir = path.dirname(path.resolve(dests[0]));

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

sources.forEach((src, index) => {
    try {
        fs.copyFileSync(src, path.resolve(dests[index]));
        console.log(`Copied ${src} to ${dests[index]}`);
    } catch (err) {
        console.error(`Error copying ${src}:`, err);
    }
});
