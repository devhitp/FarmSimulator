// ===================================================
// HOUSE BUILDER
// ---------------------------------------------------
// Builds houses from individual building tiles.
// ===================================================


// ===================================================
// HOUSE LAYOUT
// ---------------------------------------------------
// Defines the farmhouse blueprint.
// ===================================================

const HOUSE_LAYOUT = {

    roof: [

        ["roof_peak"],

        [
            "roof_top_left",
            "roof_top_center",
            "roof_top_right"
        ],

        [
            "roof_upper_left",
            "roof_upper_center",
            "roof_upper_right"
        ],

        [
            "roof_lower_left",
            "roof_lower_center",
            "roof_lower_right"
        ],

        [
            "roof_bottom_left",
            "roof_bottom_center",
            "roof_bottom_right"
        ]

    ],

    walls: [
        [
            "wall_top_left",
            "wall_top_center",
            "wall_top_right"
        ],

        [
            "wall_upper_left",
            "wall_upper_center",
            "wall_upper_right"
        ],

        [
            "wall_lower_left",
            "wall_lower_center",
            "wall_lower_right"
        ],

        // [
        //     "wall_bottom_left",
        //     "wall_bottom_center",
        //     "wall_bottom_right"
        // ]
    ]

};

const HouseBuilder = {

    build(x, y) {

        const house = {

            id: "house",

            x,
            y,

            width: 5,
            height: 9,

            tiles: []

        };

        this.buildRoof(house);

        this.buildWalls(house);

        this.buildDoor(house);

        // this.buildWindow(house);

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
    // ADD ROW
    // ===================================================

    addRow(house, images, row, startCol) {

        for (let i = 0; i < images.length; i++) {

            this.addTile(

                house,

                images[i],

                row,

                startCol + i

            );

        }

    },

    // ===================================================
    // BUILD ROOF
    // ===================================================

    buildRoof(house) {

        for (let row = 0; row < HOUSE_LAYOUT.roof.length; row++) {

            const tiles = HOUSE_LAYOUT.roof[row];

            const startCol =
                row === 0
                    ? 2
                    : 1;

            this.addRow(

                house,

                tiles,

                row,

                startCol

            );

        }

    },

    // ===================================================
    // BUILD WALLS
    // ===================================================

    buildWalls(house) {

        for (let row = 0; row < HOUSE_LAYOUT.walls.length; row++) {

            this.addRow(

                house,

                HOUSE_LAYOUT.walls[row],

                row + 3,

                1

            );

        }

    },

    // ===================================================
    // BUILD DOOR
    // ===================================================

    buildDoor(house) {

        this.addTile(

            house,

            "door",

            5,

            2

        );

    },

    // ===================================================
    // BUILD WINDOW
    // ===================================================

    buildWindow(house) {

        this.addTile(

            house,

            "window",

            5,

            1

        );

    },

    // ===================================================
    // BUILD FOUNDATION
    // ===================================================

    buildFoundation(house) {

        // Foundation assets will be added here.

    },



};