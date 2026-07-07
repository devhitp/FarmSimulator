// ===================================================
// WORLD GENERATOR
// Responsible for generating the initial game world.
// ===================================================

const WorldGenerator = {

    // ===================================================
    // GENERATE WORLD
    // ===================================================

    generate() {

        const tiles = [];

        // -----------------------------------------------
        // Generate Base Terrain
        // -----------------------------------------------

        for (let row = 0; row < WORLD_ROWS; row++) {

            tiles[row] = [];

            for (let col = 0; col < WORLD_COLS; col++) {

                tiles[row][col] = {

                    type: "grass",

                    watered: false,

                    crop: null,

                    tree: null,

                    variation: Math.floor(Math.random() * 4)

                };

            }

        }

        // -----------------------------------------------
        // Generate Lakes
        // -----------------------------------------------

        const lakeCount = 3;

        for (let i = 0; i < lakeCount; i++) {

            const lakeX =
                Math.floor(Math.random() * (WORLD_COLS - 12)) + 6;

            const lakeY =
                Math.floor(Math.random() * (WORLD_ROWS - 12)) + 6;

            const radius =
                Math.floor(Math.random() * 2) + 3;

            Brush.paintCircle(

                tiles,
                lakeX,
                lakeY,
                radius,
                "water"

            );

        }

        // -----------------------------------------------
        // Generate Trees
        // -----------------------------------------------

        const treeCount = 80;

        for (let i = 0; i < treeCount; i++) {

            const row = Math.floor(Math.random() * WORLD_ROWS);
            const col = Math.floor(Math.random() * WORLD_COLS);

            const tile = tiles[row][col];

            // Trees only grow on grass
            if (tile.type !== "grass") {
                continue;
            }

            // Don't place trees too close to water
            let nearWater = false;

            for (let r = -1; r <= 1; r++) {

                for (let c = -1; c <= 1; c++) {

                    const checkRow = row + r;
                    const checkCol = col + c;

                    if (
                        checkRow < 0 ||
                        checkRow >= WORLD_ROWS ||
                        checkCol < 0 ||
                        checkCol >= WORLD_COLS
                    ) {
                        continue;
                    }

                    if (tiles[checkRow][checkCol].type === "water") {
                        nearWater = true;
                    }

                }

            }

            if (nearWater) {
                continue;
            }

            tile.tree = {
                id: "oak"
            };

        }

        return tiles;

    }

};