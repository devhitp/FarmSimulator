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

        for (

            let row = startRow;

            row < startRow + height;

            row++

        ) {

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

    }

};