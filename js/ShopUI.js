// ===================================================
// SHOP UI
// Handles drawing and input for shops.
// ===================================================

const ShopUI = {

    isOpen: false,

    currentShop: null,

    selectedIndex: 0,
    open(shopId) {

        this.currentShop = ShopRegistry[shopId];

        this.selectedIndex = 0;

        this.isOpen = true;

    },

    close() {

        this.isOpen = false;

        this.currentShop = null;

    },

    update() {

        if (!this.isOpen) {
            return;
        }

        if (Input.wasKeyPressed("Escape")) {

            this.close();

            return;

        }

        if (Input.wasKeyPressed("ArrowDown")) {

            this.selectedIndex++;

            if (this.selectedIndex >= this.currentShop.items.length) {
                this.selectedIndex = 0;
            }

        }
        if (Input.wasKeyPressed("ArrowUp")) {

            this.selectedIndex--;

            if (this.selectedIndex < 0) {
                this.selectedIndex = this.currentShop.items.length - 1;
            }

        }
        if (Input.wasKeyPressed("Enter")) {

            const itemId =
                this.currentShop.items[this.selectedIndex];

            ShopManager.buy(itemId);

        }

    },
    draw(ctx) {

        if (!this.isOpen) {
            return;
        }

        ctx.save();

        ctx.fillStyle = "rgba(0,0,0,0.8)";

        ctx.fillRect(

            180,
            60,

            440,
            360

        );

        ctx.fillStyle = "white";

        ctx.font = "30px Arial";

        ctx.fillText(

            this.currentShop.name,

            220,
            110

        );
        let y = 170;

        for (let i = 0; i < this.currentShop.items.length; i++) {

            const itemId = this.currentShop.items[i];
            const item = ItemRegistry[itemId];

            ctx.fillStyle =
                i === this.selectedIndex
                    ? "#FFD54A"
                    : "white";

            const prefix =
                i === this.selectedIndex
                    ? "► "
                    : "   ";

            ctx.fillText(

                `${prefix}${item.icon} ${item.name} - ${item.buyPrice} 🪙`,

                220,

                y

            );

            y += 40;

        }

        ctx.restore();

    },

};