// ===================================================
// FARM GENERATOR
// ---------------------------------------------------
// Responsible for generating the player's farm.
// ===================================================

const FarmGenerator = {

    generate(tiles) {

        this.reserveFarmArea(tiles);

        const house = this.generateHouse();

        this.generateShippingBin(house);

        this.generateMailbox(house);

    },

    // ===================================================
    // RESERVE FARM AREA
    // ===================================================

    reserveFarmArea(tiles) {

        const farmWidth = 24;
        const farmHeight = 18;

        const startRow =
            Math.floor(WORLD_ROWS / 2) -
            Math.floor(farmHeight / 2);

        const startCol =
            Math.floor(WORLD_COLS / 2) -
            Math.floor(farmWidth / 2);

        for (let row = startRow; row < startRow + farmHeight; row++) {

            for (let col = startCol; col < startCol + farmWidth; col++) {

                const tile = tiles[row][col];

                // Clear everything
                tile.tree = null;
                tile.decoration = null;

                // Replace water with grass
                if (tile.type === "water") {

                    tile.type = "grass";

                }

            }

        }

    },

    // ===================================================
    // GENERATE HOUSE
    // ===================================================

    generateHouse() {

        const house = HouseBuilder.build(

            (
                Math.floor(WORLD_COLS / 2) - 2
            ) * TILE_SIZE,

            (
                Math.floor(WORLD_ROWS / 2) - 8
            ) * TILE_SIZE

        );

        World.buildings.push(house);

        World.spawn.x = house.x + 2 * TILE_SIZE;
        World.spawn.y = house.y + 9 * TILE_SIZE;

        return house;

    },

    // ===================================================
    // GENERATE SHIPPING BIN
    // ===================================================

    generateShippingBin(house) {

        const shippingBin = ShippingBinBuilder.build(

            house.x - TILE_SIZE * 0.5,

            house.y + TILE_SIZE * 6

        );

        World.farmObjects.push(shippingBin);


    },
    // ===================================================
    // GENERATE MAILBOX
    // ===================================================

    generateMailbox(house) {

        const mailbox = MailboxBuilder.build(

            house.x + TILE_SIZE * 4,

            house.y + TILE_SIZE * 5

        );

        World.farmObjects.push(mailbox);

    },

};