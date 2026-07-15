// ===================================================
// TERRAIN RENDERER
// ---------------------------------------------------
// Responsibility:
// - Draw all terrain tiles
// - Draw watered soil overlay
// - Draw soil details
//
// Dependencies:
// - World
// - TileRegistry
// - Assets
// ===================================================

const TerrainRenderer = {

    draw(ctx) {

        for (let row = 0; row < WORLD_ROWS; row++) {

            for (let col = 0; col < WORLD_COLS; col++) {

                const tile = World.tiles[row][col];
                const tileData = TileRegistry[tile.type];

                const x = col * TILE_SIZE;
                const y = row * TILE_SIZE;

                // ========================================
                // Soil Rendering
                // ========================================

                if (tile.type === "soil") {

                    SoilRenderer.draw(
                        ctx,
                        tile,
                        x,
                        y
                    );

                    continue;

                }

                // ========================================
                // Terrain Sprite
                // ========================================

                const image = tileData.image
                    ? Assets.get(tileData.image)
                    : null;

                if (image) {

                    ctx.drawImage(
                        image,
                        x,
                        y,
                        TILE_SIZE,
                        TILE_SIZE
                    );

                } else {

                    ctx.fillStyle = tileData.color;

                    ctx.fillRect(
                        x,
                        y,
                        TILE_SIZE,
                        TILE_SIZE
                    );

                }

                

                // // ========================================
                // // Grid
                // // ========================================

                // ctx.strokeStyle = "#4BA048";

                // ctx.strokeRect(
                //     x,
                //     y,
                //     TILE_SIZE,
                //     TILE_SIZE
                // );

            }

        }

    }

};