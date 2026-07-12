// ===================================================
// BUILDING RENDERER
// ---------------------------------------------------
// Draws all world buildings.
// ===================================================

const BuildingRenderer = {

    // ===================================================
    // DRAW BUILDING BASE
    // ===================================================

    drawBase(ctx, building) {

        for (const tile of building.tiles) {

            // Skip roof tiles
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

    },

    // ===================================================
    // DRAW BUILDING ROOF
    // ===================================================

    drawRoof(ctx, building) {

        for (const tile of building.tiles) {

            // Draw only roof tiles
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