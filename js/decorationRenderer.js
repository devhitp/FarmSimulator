// ===================================================
// DECORATION RENDERER
// ---------------------------------------------------
// Draws all world decorations.
// ===================================================

const DecorationRenderer = {

    // ===================================================
    // GROUND DECORATIONS
    // ===================================================

    drawGround(ctx, tile, x, y) {

        if (!tile.decoration) {
            return;
        }

        const decoration =
            DecorationRegistry[tile.decoration.id];

        if (!decoration) {
            return;
        }

        // Bushes render later
        if (
            decoration.id === "bush" ||
            decoration.id === "cherryBush"
        ) {
            return;
        }

        const image = Assets.get(decoration.image);

        if (!image) {
            return;
        }

        ctx.drawImage(
            image,
            x + decoration.offsetX,
            y + decoration.offsetY,
            TILE_SIZE,
            TILE_SIZE
        );

    },

    // ===================================================
    // TALL DECORATIONS
    // ===================================================

    drawTall(ctx, tile, x, y) {

        if (!tile.decoration) {
            return;
        }

        const decoration =
            DecorationRegistry[tile.decoration.id];

        if (!decoration) {
            return;
        }

        if (
            decoration.id !== "bush" &&
            decoration.id !== "cherryBush"
        ) {
            return;
        }

        const image = Assets.get(decoration.image);

        if (!image) {
            return;
        }

        ctx.drawImage(
            image,
            x + decoration.offsetX,
            y + decoration.offsetY,
            TILE_SIZE,
            TILE_SIZE
        );

    },

};