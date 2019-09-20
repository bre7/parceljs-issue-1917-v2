module.exports = {
  "gifsicle": { "optimizationLevel": 2, "interlaced": true },
  "mozjpeg": { "progressive": true, "quality": 80 },
  "pngquant": { "quality": [0.5, 0.75] },
  "svgo": {
    "plugins": [
      { "removeViewBox": false }
    ]
  },
  "webp": { "quality": 40 }
}