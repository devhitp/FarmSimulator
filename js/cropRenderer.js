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

        const imageKey =
            cropData.stages[tile.crop.stage];

        if (!imageKey) {
            return;
        }

        const image = Assets.get(imageKey);

        if (!image) {
            return;
        }

        ctx.drawImage(

            image,

            x,
            y,

            TILE_SIZE,
            TILE_SIZE

        );

    }

};