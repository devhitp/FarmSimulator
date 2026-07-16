// ===================================================
// PATH BUILDER
// ---------------------------------------------------
// Builds dirt paths.
// ===================================================

const PathBuilder = {

    // ===================================================
    // BUILD VERTICAL PATH
    // ===================================================

    buildVertical(

        tiles,

        startRow,
        startCol,

        length

    ) {

        for (

            let row = startRow;

            row < startRow + length;

            row++

        ) {

            tiles[row][startCol].type = "path";

        }

    },

    // ===================================================
    // BUILD HORIZONTAL PATH
    // ===================================================

    buildHorizontal(

        tiles,

        startRow,
        startCol,

        length

    ) {

        for (

            let col = startCol;

            col < startCol + length;

            col++

        ) {

            tiles[startRow][col].type = "path";

        }

    }

};