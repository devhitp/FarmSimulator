const Brush = {

    paintCircle(tiles, centerX, centerY, radius, type) {

        for (let row = centerY - radius; row <= centerY + radius; row++) {

            for (let col = centerX - radius; col <= centerX + radius; col++) {

                if (
                    row < 0 ||
                    row >= WORLD_ROWS ||
                    col < 0 ||
                    col >= WORLD_COLS
                ) {
                    continue;
                }

                const distance = Math.sqrt(
                    (col - centerX) ** 2 +
                    (row - centerY) ** 2
                );

                if (distance <= radius) {

                    // Randomly skip some edge tiles
                    if (distance > radius - 1 && Math.random() < 0.35) {
                        continue;
                    }

                    tiles[row][col].type = type;
                }

            }

        }

    }

};