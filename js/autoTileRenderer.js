// ===================================================
// AUTO TILE RENDERER
// ---------------------------------------------------
// Responsible for drawing 3×3 autotiles.
//
// Used by:
// - Path Renderer
// - Future road systems
// - Rivers
// - Connected terrain
// ===================================================

const AutoTileRenderer = {

    draw(

        ctx,

        x,
        y,

        images

    ) {

        const half = TILE_SIZE / 2;

        // -------------------------
        // Top Left
        // -------------------------

        ctx.drawImage(

            Assets.get(images.tl),

            x,
            y,

            half,
            half

        );

        // -------------------------
        // Top Middle
        // -------------------------

        ctx.drawImage(

            Assets.get(images.tm),

            x + half,
            y,

            half,
            half

        );

        // -------------------------
        // Top Right
        // -------------------------

        ctx.drawImage(

            Assets.get(images.tr),

            x + TILE_SIZE,
            y,

            half,
            half

        );

        // -------------------------
        // Middle Left
        // -------------------------

        ctx.drawImage(

            Assets.get(images.ml),

            x,
            y + half,

            half,
            half

        );

        // -------------------------
        // Middle
        // -------------------------

        ctx.drawImage(

            Assets.get(images.mm),

            x + half,
            y + half,

            half,
            half

        );

        // -------------------------
        // Middle Right
        // -------------------------

        ctx.drawImage(

            Assets.get(images.mr),

            x + TILE_SIZE,
            y + half,

            half,
            half

        );

        // -------------------------
        // Bottom Left
        // -------------------------

        ctx.drawImage(

            Assets.get(images.bl),

            x,
            y + TILE_SIZE,

            half,
            half

        );

        // -------------------------
        // Bottom Middle
        // -------------------------

        ctx.drawImage(

            Assets.get(images.bm),

            x + half,
            y + TILE_SIZE,

            half,
            half

        );

        // -------------------------
        // Bottom Right
        // -------------------------

        ctx.drawImage(

            Assets.get(images.br),

            x + TILE_SIZE,
            y + TILE_SIZE,

            half,
            half

        );

    }

};