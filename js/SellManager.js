// ===================================================
// SELL MANAGER
// Handles selling items.
// ===================================================

const SellManager = {

    sellInventory() {

        let totalCoins = 0;

        // Copy the array because we'll modify Inventory.items
        const inventoryItems = [...Inventory.items];

        for (const inventoryItem of inventoryItems) {

            const itemData = ItemRegistry[inventoryItem.id];

            // Skip items that can't be sold
            if (!itemData || itemData.sellPrice == null) {
                continue;
            }

            const itemValue =
                itemData.sellPrice * inventoryItem.amount;

            totalCoins += itemValue;

            Inventory.remove(
                inventoryItem.id,
                inventoryItem.amount
            );

        }

        if (totalCoins <= 0) {

            console.log("Nothing to sell.");

            return;

        }

        Player.addCoins(totalCoins);

        console.log(
            `Sold items for ${totalCoins} coins.`
        );

    }

};