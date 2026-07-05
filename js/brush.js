// ===================================================
// BRUSH
// Utility for painting terrain shapes onto the world.
// ===================================================

const Brush = {

    // ===================================================
    // TERRAIN PAINTING
    // ===================================================

    paintCircle(tiles, centerX, centerY, radius, type) {

        for (let row = centerY - radius; row <= centerY + radius; row++) {

            for (let col = centerX - radius; col <= centerX + radius; col++) {

                // -------------------------------------------
                // World Bounds Check
                // -------------------------------------------
                if (
                    row < 0 ||
                    row >= WORLD_ROWS ||
                    col < 0 ||
                    col >= WORLD_COLS
                ) {
                    continue;
                }

                // -------------------------------------------
                // Distance From Brush Center
                // -------------------------------------------
                const distance = Math.sqrt(
                    (col - centerX) ** 2 +
                    (row - centerY) ** 2
                );

                if (distance <= radius) {

                    // Slight randomness around the edge
                    // to make terrain look more natural.
                    if (
                        distance > radius - 1 &&
                        Math.random() < 0.35
                    ) {
                        continue;
                    }

                    tiles[row][col].type = type;

                }

            }

        }

    }

};