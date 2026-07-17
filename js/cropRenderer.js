// ===================================================
// CROP RENDERER
// ---------------------------------------------------
// Draws every crop using sprite assets.
// ===================================================

const CropRenderer = {
  // ===================================================
  // DRAW
  // ===================================================

  draw(ctx, tile, x, y) {
    if (!tile.crop) {
      return;
    }

    const cropData = CropRegistry[tile.crop.cropId];

    if (!cropData) {
      return;
    }

    const imageKey = cropData.stages[tile.crop.stage];

    if (!imageKey) {
      return;
    }

    const image = Assets.get(imageKey);
    const render = cropData.render;

    if (!image) {
      return;
    }

    ctx.drawImage(
      image,

      x + render.offsetX,
      y + render.offsetY,

      render.width,
      render.height,
    );
  },
};
