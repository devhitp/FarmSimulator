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

                    decoration: null

                };

                // Future:
                // WorldDecorator.decorate(tile);

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
        // Generate Forest
        // -----------------------------------------------

        ForestGenerator.generate(tiles);
        NatureGenerator.generate(tiles);
        FarmGenerator.generate(tiles);

        return tiles;

    }

};