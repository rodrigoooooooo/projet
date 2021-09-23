const Jimp = require('jimp') ;

async function imageOverlay(imageOverlay) { // Function name is same as of filename
// Reading watermark Image
   let watermark = await Jimp.read(imageOverlay);
  //  watermark = watermark.resize(150,150); // Resizing watermark image
// Reading original image
   const image = await Jimp.read('../assets/input.png');
   watermark = await watermark
   image.composite(watermark, 0, 0, {
      mode: Jimp.BLEND_SOURCE_OVER,
      opacityDest: 1,
      opacitySource: 1
   })
   await image.writeAsync('../assets/output.png');
}

// Calling this function using async
imageOverlay('../assets/overlay.png');
console.log("Image is processed successfully");