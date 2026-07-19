// ===================================================
// SHOP MANAGER
// Handles purchasing items.
// ===================================================

const ShopManager = {

    buy(itemId) {

        const item = ItemRegistry[itemId];

        if (!item) {
            return;
        }

        if (item.buyPrice == null) {
            return;
        }

        if (!Player.removeCoins(item.buyPrice)) {

            console.log("Not enough coins.");

            return;

        }

        Inventory.add(itemId);

        console.log(
            `Bought ${item.name}`
        );

    }

};