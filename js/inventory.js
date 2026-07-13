// ===================================================
// INVENTORY
// Stores all player items and manages inventory data.
// ===================================================

const Inventory = {

    // ===================================================
    // INVENTORY DATA
    // ===================================================

    items: [],
    selectedItem: "hoe",

    // ===================================================
    // ITEM MANAGEMENT
    // ===================================================

    add(itemId, amount = 1) {

        // Debug
        // console.log("ADDING ITEM:", itemId);

        if (!itemId) {

            // console.log("BLOCKED INVALID ITEM ADD:", itemId);
            return;

        }

        const existing = this.items.find(
            item => item.id === itemId
        );

        if (existing) {

            existing.amount += amount;
            return;

        }

        this.items.push({

            id: itemId,
            amount: amount

        });

    },

    // ===================================================
    // ITEM SELECTION
    // ===================================================

    getSelectedItem() {

        return ItemRegistry[this.selectedItem];

    },

    select(itemId) {

        if (ItemRegistry[itemId]) {

            this.selectedItem = itemId;

        }

    }

};