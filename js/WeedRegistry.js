// ===================================================
// WEED GENERATOR
// Generates weeds throughout the world.
// ===================================================

const WeedGenerator = {

    // ===================================================
    // GENERATE
    // ===================================================

    generate() {

        for (let row = 0; row < WORLD_ROWS; row++) {

            for (let col = 0; col < WORLD_COLS; col++) {

                const tile = World.tiles[row][col];

                // Only place weeds on grass
                if (tile.type !== "grass") {
                    continue;
                }

                // 5% chance
                if (Math.random() < 0.05) {

                    tile.weed = {

                        id: "grassWeed"

                    };

                }

            }

        }

    }

};