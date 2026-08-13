import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";

const buf = readFileSync("/home/z/my-project/upload/favicon.ico");
console.log("ICO file size:", buf.length, "bytes");

// Extract all PNG-encoded images from the ICO (skip the 6-byte header + 16-byte dir entries)
const count = buf.readUInt16LE(4);
console.log("Icon count in ICO:", count);
const images = [];
for (let i = 0; i < count; i++) {
  const dirOff = 6 + i * 16;
  const w = buf.readUInt8(dirOff) || 256;
  const h = buf.readUInt8(dirOff + 1) || 256;
  const size = buf.readUInt32LE(dirOff + 8);
  const off = buf.readUInt32LE(dirOff + 12);
  const imgBuf = buf.subarray(off, off + size);
  // ICO entries can be PNG or BMP. Check PNG signature.
  const isPng = imgBuf[0] === 0x89 && imgBuf[1] === 0x50; // \x89P
  console.log(`  [${i}] ${w}x${h} size=${size} format=${isPng ? "PNG" : "BMP"}`);
  if (isPng) images.push({ w, h, buf: imgBuf });
}
if (images.length === 0) throw new Error("No PNG images in ICO — BMP-encoded, needs different extraction");

// Pick the largest image as the source for resizing
images.sort((a, b) => b.w - a.w);
const largest = images[0];
console.log(`Using largest: ${largest.w}x${largest.h} (${largest.buf.length}b) as source`);

// src/app/icon.png — 48x48 for crisp retina at 16/24px display
const icon48 = await sharp(largest.buf).resize(48, 48, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
writeFileSync("/home/z/my-project/src/app/icon.png", icon48);
console.log("src/app/icon.png (48x48):", icon48.length, "b");

// src/app/apple-icon.png — 180x180 on white for iOS
const apple = await sharp(largest.buf)
  .resize(160, 160, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .flatten({ background: "#ffffff" })
  .resize(180, 180, { fit: "pad", background: "#ffffff", position: "center" })
  .png().toBuffer();
writeFileSync("/home/z/my-project/src/app/apple-icon.png", apple);
console.log("src/app/apple-icon.png (180x180):", apple.length, "b");

// public/favicon.ico — copy the original real ICO (it's already perfect: 48+32 multi-size)
writeFileSync("/home/z/my-project/public/favicon.ico", buf);
console.log("public/favicon.ico (original ICO):", buf.length, "b");

// public/favicon.png — 32x32 PNG
const png32 = await sharp(largest.buf).resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
writeFileSync("/home/z/my-project/public/favicon.png", png32);
console.log("public/favicon.png (32x32):", png32.length, "b");

import { execSync } from "child_process";
console.log("\n--- verification ---");
console.log(execSync("file /home/z/my-project/src/app/icon.png /home/z/my-project/src/app/apple-icon.png /home/z/my-project/public/favicon.ico /home/z/my-project/public/favicon.png").toString());
