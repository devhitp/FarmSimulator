const WorldGenerator = {

    generate() {

        const tiles = [];

        // Fill the world with grass
        for (let row = 0; row < WORLD_ROWS; row++) {

            tiles[row] = [];

            for (let col = 0; col < WORLD_COLS; col++) {

                tiles[row][col] = {
                    type: "grass"
                };

            }

        }

        // Create one random lake
        const lakeX = Math.floor(Math.random() * (WORLD_COLS - 12)) + 6;
        const lakeY = Math.floor(Math.random() * (WORLD_ROWS - 12)) + 6;

        for (let row = lakeY - 3; row <= lakeY + 3; row++) {

            for (let col = lakeX - 3; col <= lakeX + 3; col++) {

                const distance = Math.sqrt(
                    (col - lakeX) ** 2 +
                    (row - lakeY) ** 2
                );

                if (distance <= 3) {
                    tiles[row][col].type = "water";
                }

            }

        }

        return tiles;

    }

};