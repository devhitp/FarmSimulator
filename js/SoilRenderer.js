// ===================================================
// SOIL RENDERER
// ---------------------------------------------------
// Responsible for drawing soil tiles.
// Handles:
// - Dry soil
// - Watered soil
// - Horizontal connections
// - Vertical connections
// ===================================================

const SoilRenderer = {


    // ===================================================
    // DRAW SOIL
    // ===================================================

    draw(ctx, tile, x, y) {


        const position = this.getSoilPosition(tile);


        let imageKey;


        // =====================================
        // Watered Soil
        // =====================================

        if (tile.watered) {

            imageKey = this.getWateredImage(position);

        }


        // =====================================
        // Dry Soil
        // =====================================

        else {

            imageKey = this.getDryImage(position);

        }


        const image = Assets.get(imageKey);


        if (!image) {
            return;
        }


        ctx.drawImage(

            image,

            x,
            y,

            TILE_SIZE,
            TILE_SIZE

        );

    },


    // ===================================================
    // FIND SOIL POSITION
    // ===================================================

    getSoilPosition(tile) {


        const row = tile.row;
        const col = tile.col;


        const left =
            this.isSoil(row, col - 1);


        const right =
            this.isSoil(row, col + 1);


        const up =
            this.isSoil(row - 1, col);


        const down =
            this.isSoil(row + 1, col);



        // Horizontal row

        if (left || right) {

            if (!left) {
                return "horizontal_start";
            }

            if (!right) {
                return "horizontal_end";
            }

            return "horizontal_middle";

        }


        // Vertical row

        if (up || down) {

            if (!up) {
                return "vertical_start";
            }

            if (!down) {
                return "vertical_end";
            }

            return "vertical_middle";

        }


        return "single";

    },


    // ===================================================
    // CHECK SOIL
    // ===================================================

    isSoil(row, col) {


        if (
            row < 0 ||
            row >= WORLD_ROWS ||
            col < 0 ||
            col >= WORLD_COLS
        ) {
            return false;
        }


        return World.tiles[row][col].type === "soil";

    },


    // ===================================================
    // DRY SOIL IMAGE
    // ===================================================

    getDryImage(position) {


        if (position === "single") {
            return "dirt";
        }


        return "dirt_" + position;

    },


    // ===================================================
    // WATERED SOIL IMAGE
    // ===================================================

    getWateredImage(position) {


        if (position === "single") {
            return "dirt";
        }


        return "dirt_watered_" + position;

    }

};