const Jimp = require("jimp");

async function imageOverlay(imageOverlay) {
  let watermark = await Jimp.read(imageOverlay);
  const image = await Jimp.read("../assets/input.png"); // Reading original image
  watermark = await watermark;
  image.composite(watermark, 0, 0, {
    mode: Jimp.BLEND_SOURCE_OVER,
    opacityDest: 1,
    opacitySource: 1,
  });
  await image.writeAsync("../assets/output.png");
}

// Calling this function using async
imageOverlay("../assets/overlay.png");
console.log("Image is processed successfully");
