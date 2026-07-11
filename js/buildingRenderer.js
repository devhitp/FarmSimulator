// ===================================================
// BUILDING RENDERER
// ---------------------------------------------------
// Draws all world buildings.
// ===================================================

const BuildingRenderer = {

    // ===================================================
    // DRAW BUILDING
    // ===================================================

    draw(ctx, building) {

        // -----------------------------
        // Draw Walls
        // -----------------------------

        for (const tile of building.tiles) {

            if (tile.image.startsWith("roof_")) {
                continue;
            }

            const image = Assets.get(tile.image);

            if (!image) {
                continue;
            }

            ctx.drawImage(

                image,

                building.x + tile.col * TILE_SIZE,
                building.y + tile.row * TILE_SIZE,

                TILE_SIZE,
                TILE_SIZE

            );

        }

        // -----------------------------
        // Draw Roof
        // -----------------------------

        for (const tile of building.tiles) {

            if (!tile.image.startsWith("roof_")) {
                continue;
            }

            const image = Assets.get(tile.image);

            if (!image) {
                continue;
            }

            ctx.drawImage(

                image,

                building.x + tile.col * TILE_SIZE,
                building.y + tile.row * TILE_SIZE,

                TILE_SIZE,
                TILE_SIZE

            );

        }

    }

};