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

        for (const tile of building.tiles) {

            const image = Assets.get(tile.image);

            if (!image) {
                continue;
            }

            let drawY = building.y + tile.row * TILE_SIZE;

            ctx.drawImage(

                image,

                building.x + tile.col * TILE_SIZE,
                drawY,

                TILE_SIZE,
                TILE_SIZE

            );

        }

    }

};