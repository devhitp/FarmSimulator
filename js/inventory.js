const Inventory = {

    items: [],

    selectedItem: "hoe",

    add(itemId, amount = 1) {

        const existing = this.items.find(item => item.id === itemId);

        if (existing) {
            existing.amount += amount;
            return;
        }

        this.items.push({
            id: itemId,
            amount: amount
        });

    },
    
    getSelectedItem() {

        return ItemRegistry[this.selectedItem];

    },
    select(itemId) {

    if (ItemRegistry[itemId]) {
        this.selectedItem = itemId;
    }

}

};