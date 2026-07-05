// ===================================================
// HOTBAR
// Manages the player's quick-access item slots.
// ===================================================

const Hotbar = {

    // ===================================================
    // HOTBAR DATA
    // ===================================================

    slots: [
        "hoe",
        "turnipSeed",
        "wateringCan"
    ],

    selectedSlot: 0,

    // ===================================================
    // ITEM ACCESS
    // ===================================================

    getSelectedItem() {

        return ItemRegistry[
            this.slots[this.selectedSlot]
        ];

    },

    getSelectedItemId() {

        return this.slots[this.selectedSlot];

    },

    // ===================================================
    // SLOT MANAGEMENT
    // ===================================================

    selectSlot(slot) {

        if (
            slot >= 0 &&
            slot < this.slots.length
        ) {

            this.selectedSlot = slot;

        }

    }

};