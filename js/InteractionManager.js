// ===================================================
// INTERACTION MANAGER
// Handles all player interactions.
// ===================================================

const InteractionManager = {

    // ===================================================
    // INTERACT
    // ===================================================

    interact() {

        const tile = Player.getFacingTile();

        const object = this.getFarmObjectAtTile(tile);

        if (object) {

            if (this.handleFarmObjectInteraction(object)) {
                return;
            }

        }

        Player.useSelectedItem();

    },

    // ===================================================
    // SHIPPING BIN
    // ===================================================
    tryShop() {

        const tile = Player.getFacingTile();

        if (!tile) {
            return false;
        }

        const tileX = tile.col * TILE_SIZE;
        const tileY = tile.row * TILE_SIZE;

        for (const object of World.farmObjects) {

            if (object.id !== "seedShop") {
                continue;
            }

            if (
                tileX >= object.x &&
                tileX < object.x + object.width &&
                tileY >= object.y &&
                tileY < object.y + object.height
            ) {

                ShopUI.open("seedShop");

                return true;

            }

        }

        return false;

    },

    getFarmObjectAtTile(tile) {

        if (!tile) {
            return null;
        }

        const tileX = tile.col * TILE_SIZE;
        const tileY = tile.row * TILE_SIZE;

        for (const object of World.farmObjects) {

            if (
                tileX >= object.x &&
                tileX < object.x + object.width &&
                tileY >= object.y &&
                tileY < object.y + object.height
            ) {
                return object;
            }

        }

        return null;

    },

    handleFarmObjectInteraction(object) {

        const data = FarmObjectRegistry[object.id];

        if (!data || !data.interaction) {
            return false;
        }

        switch (data.interaction.type) {

            case "sell":

                SellManager.sellInventory();
                return true;

            case "mail":

                console.log("Open mailbox");
                return true;

        }

        return false;

    },

};