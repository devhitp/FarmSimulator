// ===================================================
// INTERACTION MANAGER
// Handles all player interactions.
// ===================================================

const InteractionManager = {

    // ===================================================
    // INTERACT
    // ===================================================

    interact() {

        // console.log("Interact");

        if (this.tryShippingBin()) {
            return;
        }

        Player.useSelectedItem();

    },

    // ===================================================
    // SHIPPING BIN
    // ===================================================
    tryShippingBin() {

        // console.log("Trying shipping bin");

        const tile = Player.getFacingTile();

        if (!tile) {
            return false;
        }

        const tileX = tile.col * TILE_SIZE;
        const tileY = tile.row * TILE_SIZE;

        for (const object of World.farmObjects) {

            if (object.id !== "shippingBin") {
                continue;
            }

            if (
                tileX >= object.x &&
                tileX < object.x + object.width &&
                tileY >= object.y &&
                tileY < object.y + object.height
            ) {

                SellManager.sellInventory();

                return true;

            }

        }

        return false;

    }

};