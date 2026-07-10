// ===================================================
// HOUSE BUILDER
// ---------------------------------------------------
// Builds houses from individual building tiles.
// ===================================================

const HouseBuilder = {

    build(x, y) {

        const house = {

            x,
            y,

            width: 5,
            height: 9,

            tiles: []

        };

        this.buildRoof(house);

        this.buildWalls(house);

        this.buildFoundation(house);

        return house;

    },

    // ===================================================
    // ADD TILE
    // ===================================================

    addTile(house, image, row, col) {

        house.tiles.push({

            image,
            row,
            col

        });

    },

    // ===================================================
    // BUILD ROOF
    // ===================================================

    buildRoof(house) {

        this.addTile(

            house,

            "roof_peak",

            0,

            2

        );
        this.addTile(

            house,

            "roof_top_left",

            1,

            1

        );
        this.addTile(

            house,

            "roof_top_center",

            1,

            2

        );

        this.addTile(

            house,

            "roof_top_right",

            1,

            3

        );

        this.addTile(

            house,

            "roof_upper_left",

            2,

            1

        );


        this.addTile(

            house,

            "roof_upper_center",

            2,

            2

        );

        this.addTile(

            house,

            "roof_upper_right",

            2,

            3

        );

        this.addTile(

            house,

            "roof_lower_left",

            3,

            1

        );

        this.addTile(

            house,

            "roof_lower_center",

            3,

            2

        );

        this.addTile(

            house,

            "roof_lower_right",

            3,

            3

        );

        this.addTile(

            house,

            "roof_bottom_left",

            4,

            1

        );

        this.addTile(

            house,

            "roof_bottom_center",

            4,

            2

        );

        this.addTile(

            house,

            "roof_bottom_right",

            4,

            3

        );




    },

    // ===================================================
    // BUILD WALLS
    // ===================================================

    buildWalls(house) {

        // Top
        this.addTile(house, "wall_top_left", 4, 1);
        this.addTile(house, "wall_top_center", 4, 2);
        this.addTile(house, "wall_top_right", 4, 3);

        // Upper
        this.addTile(house, "wall_upper_left", 5, 1);
        this.addTile(house, "wall_upper_center", 5, 2);
        this.addTile(house, "wall_upper_right", 5, 3);

        // Lower
        this.addTile(house, "wall_lower_left", 6, 1);
        this.addTile(house, "wall_lower_center", 6, 2);
        this.addTile(house, "wall_lower_right", 6, 3);

        // Bottom
        this.addTile(house, "wall_bottom_left", 7, 1);
        this.addTile(house, "wall_bottom_center", 7, 2);
        this.addTile(house, "wall_bottom_right", 7, 3);

    },

    // ===================================================
    // BUILD FOUNDATION
    // ===================================================

    buildFoundation(house) {

    }

};