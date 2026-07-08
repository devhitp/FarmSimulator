// ===================================================
// FOREST GENERATOR
// ---------------------------------------------------
// Responsible for generating forests.
// ===================================================

const ForestGenerator = {

    BORDER_SIZE: 8,

    generate(tiles) {

        this.generateBorder(tiles);

        this.generateForestEdges(tiles);

        this.generateInteriorTrees(tiles);

    },

    // ===================================================
    // GENERATE BORDER
    // ===================================================

    generateBorder(tiles) {

        const border = this.BORDER_SIZE;

        // Top
        this.paintForest(
            tiles,
            0,
            border,
            0,
            WORLD_COLS
        );

        // Bottom
        this.paintForest(
            tiles,
            WORLD_ROWS - border,
            WORLD_ROWS,
            0,
            WORLD_COLS
        );

        // Left
        this.paintForest(
            tiles,
            border,
            WORLD_ROWS - border,
            0,
            border
        );

        // Right
        this.paintForest(
            tiles,
            border,
            WORLD_ROWS - border,
            WORLD_COLS - border,
            WORLD_COLS
        );

    },

    // ===================================================
    // GENERATE FOREST EDGES
    // ===================================================

    generateForestEdges(tiles) {

        const border = this.BORDER_SIZE;

        const spread = 5;


        // Top edge spread

        for (let i = 0; i < 30; i++) {

            const row = border + Math.floor(Math.random() * spread);
            const col = Math.floor(Math.random() * WORLD_COLS);

            if (tiles[row][col].type === "grass") {

                tiles[row][col].tree = this.createTree();

            }

        }


        // Bottom edge spread

        for (let i = 0; i < 30; i++) {

            const row =
                WORLD_ROWS - border -
                Math.floor(Math.random() * spread);

            const col = Math.floor(Math.random() * WORLD_COLS);

            if (tiles[row][col].type === "grass") {

                tiles[row][col].tree = this.createTree();

            }

        }


        // Left edge spread

        for (let i = 0; i < 30; i++) {

            const row = Math.floor(Math.random() * WORLD_ROWS);
            const col = border + Math.floor(Math.random() * spread);

            if (tiles[row][col].type === "grass") {

                tiles[row][col].tree = this.createTree();

            }

        }


        // Right edge spread

        for (let i = 0; i < 30; i++) {

            const row = Math.floor(Math.random() * WORLD_ROWS);
            const col =
                WORLD_COLS - border -
                Math.floor(Math.random() * spread);

            if (tiles[row][col].type === "grass") {

                tiles[row][col].tree = this.createTree();

            }

        }

    },

    // ===================================================
    // GENERATE INTERIOR TREES
    // ===================================================

    generateInteriorTrees(tiles) {

        // Random trees
        // (We'll build this after the border.)

    },

    // ===================================================
    // CREATE TREE
    // ===================================================

    createTree() {

        const variants = [

            "largeOak",
            "largePine",
            "smallOak",
            "smallPine"

        ];

        return {

            id: variants[
                Math.floor(Math.random() * variants.length)
            ]

        };

    },

    // ===================================================
    // PAINT FOREST
    // ===================================================

    paintForest(tiles, startRow, endRow, startCol, endCol) {

        for (let row = startRow; row < endRow; row++) {

            for (let col = startCol; col < endCol; col++) {

                const tile = tiles[row][col];

                if (tile.type !== "grass") {
                    continue;
                }

                tile.tree = this.createTree();

            }

        }

    },

};