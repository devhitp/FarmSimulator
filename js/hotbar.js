const Hotbar = {

    slots: [
        "hoe",
        "turnipSeed"
    ],

    selectedSlot: 0,

    getSelectedItem() {

        return ItemRegistry[this.slots[this.selectedSlot]];

    },
    selectSlot(slot) {

        if (slot >= 0 && slot < this.slots.length) {
            this.selectedSlot = slot;
        }

    },

    getSelectedItemId() {

        return this.slots[this.selectedSlot];

    }

};