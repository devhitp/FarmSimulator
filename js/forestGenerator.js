// ===================================================
// FOREST GENERATOR
// ---------------------------------------------------
// Responsible for generating forests.
// ===================================================

const ForestGenerator = {

    BORDER_SIZE: 8,

    generate(tiles) {

        this.generateCoreForest(tiles);

        this.generateForestEdge(tiles);

        this.generateMeadowTrees(tiles);

    },

    // ===================================================
    // GENERATE CORE FOREST
    // ===================================================

    generateCoreForest(tiles) {

        const border = 5;

        // -----------------------------
        // Top Forest
        // -----------------------------

        this.paintForest(
            tiles,
            0,
            border,
            0,
            WORLD_COLS,
            "large"
        );

        // -----------------------------
        // Bottom Forest
        // -----------------------------

        this.paintForest(
            tiles,
            WORLD_ROWS - border,
            WORLD_ROWS,
            0,
            WORLD_COLS,
            "large"
        );

        // -----------------------------
        // Left Forest
        // -----------------------------

        this.paintForest(
            tiles,
            border,
            WORLD_ROWS - border,
            0,
            border,
            "large"
        );

        // -----------------------------
        // Right Forest
        // -----------------------------

        this.paintForest(
            tiles,
            border,
            WORLD_ROWS - border,
            WORLD_COLS - border,
            WORLD_COLS,
            "large"
        );

    },

    // ===================================================
    // GENERATE FOREST EDGE
    // ===================================================

    generateForestEdge(tiles) {

    },

    // ===================================================
    // GENERATE MEADOW TREES
    // ===================================================

    generateMeadowTrees(tiles) {

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
    // GENERATE FOREST EDGE
    // ===================================================

    generateForestEdge(tiles) {

        const border = 5;

        const blobCount = 45;

        for (let i = 0; i < blobCount; i++) {

            const side = Math.floor(Math.random() * 4);

            let row;
            let col;

            switch (side) {

                // Top
                case 0:

                    row = border + Math.floor(Math.random() * 5);
                    col = Math.floor(Math.random() * WORLD_COLS);

                    break;

                // Bottom
                case 1:

                    row =
                        WORLD_ROWS - border - 1 -
                        Math.floor(Math.random() * 5);

                    col = Math.floor(Math.random() * WORLD_COLS);

                    break;

                // Left
                case 2:

                    row = Math.floor(Math.random() * WORLD_ROWS);

                    col =
                        border + Math.floor(Math.random() * 5);

                    break;

                // Right
                default:

                    row = Math.floor(Math.random() * WORLD_ROWS);

                    col =
                        WORLD_COLS - border - 1 -
                        Math.floor(Math.random() * 5);

                    break;

            }

            this.paintForestBlob(

                tiles,
                row,
                col,
                Math.floor(Math.random() * 2) + 1

            );

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
    // PAINT EDGE TREE
    // ===================================================

    paintEdgeTree(tile) {

        const trees = [

            "largeOak",
            "largePine",
            "smallOak",
            "smallPine",
            "smallOak",
            "smallPine"

        ];

        tile.tree = {

            id: trees[
                Math.floor(Math.random() * trees.length)
            ]

        };

    },

    // ===================================================
    // PAINT FOREST BLOB
    // ===================================================

    paintForestBlob(tiles, centerRow, centerCol, radius) {

        for (let row = centerRow - radius; row <= centerRow + radius; row++) {

            for (let col = centerCol - radius; col <= centerCol + radius; col++) {

                if (
                    row < 0 ||
                    row >= WORLD_ROWS ||
                    col < 0 ||
                    col >= WORLD_COLS
                ) {
                    continue;
                }

                const dx = col - centerCol;
                const dy = row - centerRow;

                if (dx * dx + dy * dy > radius * radius) {
                    continue;
                }

                const tile = tiles[row][col];

                if (tile.type !== "grass") {
                    continue;
                }

                tile.tree = {

                    id: Math.random() < 0.8
                        ? (Math.random() < 0.5
                            ? "largeOak"
                            : "largePine")
                        : (Math.random() < 0.5
                            ? "smallOak"
                            : "smallPine")

                };

            }

        }

    },

    // ===================================================
    // PAINT FOREST
    // ===================================================

    paintForest(
        tiles,
        startRow,
        endRow,
        startCol,
        endCol,
        size = "large"
    ) {

        for (let row = startRow; row < endRow; row++) {

            for (let col = startCol; col < endCol; col++) {

                const tile = tiles[row][col];

                if (tile.type !== "grass") {
                    continue;
                }

                if (size === "large") {

                    const largeTrees = [
                        "largeOak",
                        "largePine"
                    ];

                    tile.tree = {

                        id: largeTrees[
                            Math.floor(
                                Math.random() * largeTrees.length
                            )
                        ]

                    };

                } else {

                    const smallTrees = [
                        "smallOak",
                        "smallPine"
                    ];

                    tile.tree = {

                        id: smallTrees[
                            Math.floor(
                                Math.random() * smallTrees.length
                            )
                        ]

                    };

                }

            }

        }

    },

};