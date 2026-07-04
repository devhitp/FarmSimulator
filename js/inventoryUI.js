const InventoryUI = {

    visible: true,

    draw(ctx) {

        if (!this.visible) return;

        const items = Inventory.items;

        const x = 20;
        const y = 20;
        const size = 40;
        const gap = 10;

        ctx.font = "16px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";

        for (let i = 0; i < items.length; i++) {

            const item = ItemRegistry[items[i].id];

            if (!item) {
                console.log("Missing item in registry:", items[i].id);
                continue;
            }

            const drawY = y + i * (size + gap);

            // slot background
            ctx.fillStyle = "#333";
            ctx.fillRect(x, drawY, size, size);

            // icon
            ctx.fillStyle = "#fff";
            ctx.fillText(item.icon, x + 10, drawY + size / 2);

            // amount
            ctx.fillText(
                "x" + items[i].amount,
                x + 50,
                drawY + size / 2
            );

        }

    }

};