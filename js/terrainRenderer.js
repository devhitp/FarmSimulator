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

                // ========================================
                // Watered Soil Overlay
                // ========================================

                if (tile.type === "soil" && tile.watered) {

                    ctx.fillStyle = "rgba(40,30,20,0.35)";

                    ctx.fillRect(
                        x,
                        y,
                        TILE_SIZE,
                        TILE_SIZE
                    );

                }

                // ========================================
                // Soil Texture
                // ========================================

                if (tile.type === "soil") {

                    ctx.fillStyle = tile.watered
                        ? "#5A361C"
                        : "#70431F";

                    for (let i = 0; i < 6; i++) {

                        const px = x + 4 + (i * 4) % 24;
                        const py = y + 5 + ((i * 7) % 20);

                        ctx.fillRect(
                            px,
                            py,
                            2,
                            2
                        );

                    }

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