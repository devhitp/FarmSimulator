// ===================================================
// FENCE BUILDER
// ---------------------------------------------------
// Builds fence structures.
// ===================================================

const FenceBuilder = {

    // ===================================================
    // CREATE FENCE TILE
    // ===================================================

    createTile(x, y, type) {

        const data = FenceRegistry[type];

        return {

            x,
            y,

            type,

            image: data.image,

            collision: data.collision

        };

    },

    // ===================================================
    // BUILD HORIZONTAL FENCE
    // ===================================================

    buildHorizontal(x, y, length) {

        const fence = [];

        for (let i = 0; i < length; i++) {

            let type = "middleHorizontal";

            if (i === 0) {
                type = "startHorizontal";
            }

            else if (i === length - 1) {
                type = "endHorizontal";
            }

            fence.push(

                this.createTile(

                    x + i * TILE_SIZE,

                    y,

                    type

                )

            );

        }

        return fence;

    },

    // ===================================================
    // BUILD VERTICAL FENCE
    // ===================================================

    buildVertical(x, y, length) {

        const fence = [];

        for (let i = 0; i < length; i++) {

            let type = "middleVertical";

            if (i === 0) {
                type = "startVertical";
            }

            else if (i === length - 1) {
                type = "endVertical";
            }

            fence.push(

                this.createTile(

                    x,

                    y + i * TILE_SIZE,

                    type

                )

            );

        }

        return fence;

    },

    // ===================================================
    // BUILD RECTANGLE FENCE
    // ===================================================

    buildRectangle(

        x,
        y,

        width,
        height,

        options = {}

    ) {
        const openingSide = options.opening ?? null;

        const openingOffset = options.openingOffset ?? Math.floor(width / 2);

        const openingWidth = options.openingWidth ?? 2;

        const fence = [];

        // =====================================
        // Top Row
        // =====================================

        fence.push(

            this.createTile(

                x,
                y,

                "cornerTL"

            )

        );

        for (let col = 1; col < width - 1; col++) {

            fence.push(

                this.createTile(

                    x + col * TILE_SIZE,

                    y,

                    "loopMiddle"

                )

            );

        }

        fence.push(

            this.createTile(

                x + (width - 1) * TILE_SIZE,

                y,

                "cornerTR"

            )

        );

        // =====================================
        // Left & Right Sides
        // =====================================

        for (let row = 1; row < height - 1; row++) {

            fence.push(

                this.createTile(

                    x,

                    y + row * TILE_SIZE,

                    "middleVertical"

                )

            );

            fence.push(

                this.createTile(

                    x + (width - 1) * TILE_SIZE,

                    y + row * TILE_SIZE,

                    "middleVertical"

                )

            );

        }

        // =====================================
        // Bottom Row
        // =====================================

        fence.push(

            this.createTile(

                x,

                y + (height - 1) * TILE_SIZE,

                "cornerBL"

            )

        );

        for (let col = 1; col < width - 1; col++) {

            // =====================================
            // Opening
            // =====================================

            if (openingSide === "bottom") {

                // Left side of entrance
                if (col === openingOffset - 1) {

                    fence.push(

                        this.createTile(

                            x + col * TILE_SIZE,

                            y + (height - 1) * TILE_SIZE,

                            "endHorizontal"

                        )

                    );

                    continue;

                }

                // Entrance gap
                if (

                    col >= openingOffset &&
                    col < openingOffset + openingWidth

                ) {

                    continue;

                }

                // Right side of entrance
                if (col === openingOffset + openingWidth) {

                    fence.push(

                        this.createTile(

                            x + col * TILE_SIZE,

                            y + (height - 1) * TILE_SIZE,

                            "startHorizontal"

                        )

                    );

                    continue;

                }

            }

            // Normal fence
            fence.push(

                this.createTile(

                    x + col * TILE_SIZE,

                    y + (height - 1) * TILE_SIZE,

                    "loopMiddle"

                )

            );

        }

        fence.push(

            this.createTile(

                x + (width - 1) * TILE_SIZE,

                y + (height - 1) * TILE_SIZE,

                "cornerBR"

            )

        );

        return fence;

    }

};