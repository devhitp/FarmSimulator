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
    buildings: [],
    farmObjects: [],
    fences: [],

    spawn: {

        x: 0,
        y: 0

    },

    // ===================================================
    // INITIALIZATION
    // ===================================================

    init() {

        this.buildings = [];
        this.farmObjects = [];
        this.fences = [];

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
    // COLLISION HELPERS
    // ===================================================

    rectanglesOverlap(a, b) {

        return (

            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y

        );

    },

    // ===================================================
    // BUILDING COLLISION
    // ===================================================

    isCollidingWithBuildings(rect) {

        for (const building of this.buildings) {

            const data = BuildingRegistry[building.id];

            if (!data || !data.collision) {
                continue;
            }

            const box = {

                x: building.x + data.collision.x,
                y: building.y + data.collision.y,

                width: data.collision.width,
                height: data.collision.height

            };

            if (this.rectanglesOverlap(rect, box)) {
                return true;
            }

        }

        return false;

    },

    // ===================================================
    // FARM OBJECT COLLISION
    // ===================================================

    isCollidingWithFarmObjects(rect) {

        for (const object of this.farmObjects) {

            const data = FarmObjectRegistry[object.id];

            if (!data || !data.collision) {
                continue;
            }

            const box = {

                x: object.x + data.collision.x,
                y: object.y + data.collision.y,

                width: data.collision.width,
                height: data.collision.height

            };

            if (this.rectanglesOverlap(rect, box)) {
                return true;
            }

        }

        return false;

    },

    // ===================================================
    // FENCE COLLISION
    // ===================================================

    isCollidingWithFences(rect) {

        for (const fence of this.fences) {

            if (!fence.collision) {
                continue;
            }

            const box = {

                x: fence.x,
                y: fence.y,

                width: TILE_SIZE,
                height: TILE_SIZE

            };

            if (this.rectanglesOverlap(rect, box)) {
                return true;
            }

        }

        return false;

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

            }

        }

    }

};