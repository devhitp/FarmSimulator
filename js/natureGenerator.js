// ===================================================
// NATURE GENERATOR
// ---------------------------------------------------
// Responsible for generating world decorations.
// ===================================================

const NatureGenerator = {

    generate(tiles) {

        this.generateFlowers(tiles);

        this.generateMushrooms(tiles);

        this.generateBushes(tiles);

        this.generateGrass(tiles);

    },

    // ===================================================
    // GENERATE GRASS
    // ===================================================

    generateGrass(tiles) {

        const patchCount = 50;

        for (let i = 0; i < patchCount; i++) {

            const row =
                Math.floor(Math.random() * WORLD_ROWS);

            const col =
                Math.floor(Math.random() * WORLD_COLS);

            if (this.isNearForest(tiles, row, col)) {
                continue;
            }

            this.paintPatch(

                tiles,
                row,
                col,
                2,

                Math.random() < 0.8
                    ? "grass"
                    : "grassFlower"

            );

        }

    },

    // ===================================================
    // GENERATE FLOWERS
    // ===================================================

    generateFlowers(tiles) {

        const patchCount = 25;

        for (let i = 0; i < patchCount; i++) {

            const row =
                Math.floor(Math.random() * WORLD_ROWS);

            const col =
                Math.floor(Math.random() * WORLD_COLS);

            this.paintPatch(

                tiles,
                row,
                col,
                2,
                "flower"

            );

        }

    },

    // ===================================================
    // GENERATE MUSHROOMS
    // ===================================================

    generateMushrooms(tiles) {

        const patchCount = 35;

        for (let i = 0; i < patchCount; i++) {

            const row =
                Math.floor(Math.random() * WORLD_ROWS);

            const col =
                Math.floor(Math.random() * WORLD_COLS);

            if (!this.isNearForest(tiles, row, col)) {
                continue;
            }

            this.paintPatch(

                tiles,
                row,
                col,
                1,
                "mushroom"

            );

        }

    },

    // ===================================================
    // GENERATE BUSHES
    // ===================================================

    generateBushes(tiles) {

        const patchCount = 20;

        for (let i = 0; i < patchCount; i++) {

            const row =
                Math.floor(Math.random() * WORLD_ROWS);

            const col =
                Math.floor(Math.random() * WORLD_COLS);

            if (!this.isNearForest(tiles, row, col)) {
                continue;
            }

            this.paintPatch(

                tiles,
                row,
                col,
                2,
                Math.random() < 0.8
                    ? "bush"
                    : "cherryBush"

            );

        }

    },

    // ===================================================
    // PAINT PATCH
    // ===================================================

    paintPatch(tiles, centerRow, centerCol, radius, decorationId) {

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

                const tile = tiles[row][col];

                if (tile.type !== "grass") {
                    continue;
                }

                if (tile.tree) {
                    continue;
                }

                // Don't place decorations too close to trees

                let nearTree = false;

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

                        if (tiles[checkRow][checkCol].tree) {

                            nearTree = true;

                        }

                    }

                }

                if (nearTree) {
                    continue;
                }

                const dx = col - centerCol;
                const dy = row - centerRow;

                if (dx * dx + dy * dy > radius * radius) {
                    continue;
                }

                if (Math.random() < 0.45) {

                    if (tile.decoration) {
                        continue;
                    }

                    tile.decoration = {

                        id: decorationId

                    };

                }

            }

        }

    },

    // ===================================================
    // IS NEAR FOREST
    // ===================================================

    isNearForest(tiles, row, col) {

        for (let r = -3; r <= 3; r++) {

            for (let c = -3; c <= 3; c++) {

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

                if (tiles[checkRow][checkCol].tree) {
                    return true;
                }

            }

        }

        return false;

    },

};