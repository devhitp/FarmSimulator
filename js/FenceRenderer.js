// ===================================================
// FENCE RENDERER
// ---------------------------------------------------
// Draws all fences.
// ===================================================

const FenceRenderer = {

    // ===================================================
    // DRAW FENCE
    // ===================================================

    draw(ctx, fence) {
        // console.log(fence);

        const image = Assets.get(fence.image);

        if (!image) {
            return;
        }

        // console.log(fence.image);

        ctx.drawImage(

            image,

            fence.x,
            fence.y,

            TILE_SIZE,
            TILE_SIZE

        );

    }

};