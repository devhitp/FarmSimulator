// ===================================================
// WORLD
// Handles world generation, tile utilities,
// collision queries and crop updates.
// ===================================================

const World = {

    // ===================================================
    // WORLD DATA
    // ===================================================

    tiles: [],

    // ===================================================
    // INITIALIZATION
    // ===================================================

    init() {

        this.tiles = WorldGenerator.generate();

    },

    // ===================================================
    // TILE UTILITIES
    // ===================================================

    isWalkable(tile) {

        if (!tile) {
            return false;
        }

        // Water blocks movement
        if (tile.type === "water") {
            return false;
        }

        // Trees block movement
        if (tile.tree) {

            const treeData = TreeRegistry[tile.tree.id];

            if (treeData && treeData.solid) {
                return false;
            }

        }

        return true;

    },

    worldToTile(x, y) {

        return {
            row: Math.floor(y / TILE_SIZE),
            col: Math.floor(x / TILE_SIZE)
        };

    },

    tileToWorld(row, col) {

        return {
            x: col * TILE_SIZE,
            y: row * TILE_SIZE
        };

    },

    // ===================================================
    // WORLD UPDATE
    // ===================================================

    update(deltaTime) {

        for (let row = 0; row < WORLD_ROWS; row++) {

            for (let col = 0; col < WORLD_COLS; col++) {

                const tile = this.tiles[row][col];

                // Skip empty tiles
                if (!tile.crop) {
                    continue;
                }

                // Crops only grow when watered
                if (!tile.watered) {
                    continue;
                }

                const cropData = CropRegistry[tile.crop.cropId];

                const elapsed =
                    (Date.now() - tile.crop.plantedAt) / 1000;

                const stage = Math.min(

                    Math.floor(
                        elapsed /
                        (cropData.growthTime / cropData.growthStages)
                    ),

                    cropData.growthStages - 1

                );

                tile.crop.stage = stage;

                // Debug
                console.log(tile.crop.stage);

            }

        }

    }

};