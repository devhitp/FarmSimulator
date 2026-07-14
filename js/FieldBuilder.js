// ===================================================
// FIELD BUILDER
// ---------------------------------------------------
// Builds farm fields.
// ===================================================

const FieldBuilder = {

    // ===================================================
    // BUILD FIELD
    // ===================================================

    build(

        tiles,

        startRow,
        startCol,

        width,
        height

    ) {

        this.buildHorizontalRows(

            tiles,

            startRow,
            startCol,

            width,
            height

        );

    },

    // ===================================================
    // BUILD HORIZONTAL ROWS
    // ===================================================

    buildHorizontalRows(

        tiles,

        startRow,
        startCol,

        width,
        height

    ) {

        for (

            let row = startRow;

            row < startRow + height;

            row++

        ) {

            // Grass path
            if ((row - startRow) % 2 !== 0) {
                continue;
            }

            for (

                let col = startCol;

                col < startCol + width;

                col++

            ) {

                const tile = tiles[row][col];

                tile.type = "soil";

                tile.watered = false;

                tile.crop = null;

            }

        }

    },

};