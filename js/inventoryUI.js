const InventoryUI = {

    visible: false,
    tooltip: null,

    toggle() {
        this.visible = !this.visible;
    },

    draw(ctx) {

        if (!this.visible) return;

        ctx.save();

        // ===================================================
        // RESET TOOLTIP EACH FRAME
        // ===================================================
        this.tooltip = null;

        // ===================================================
        // DARK OVERLAY
        // ===================================================
        ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        const width = 500;
        const height = 350;

        const x = (GAME_WIDTH - width) / 2;
        const y = (GAME_HEIGHT - height) / 2;

        // ===================================================
        // WINDOW BACKGROUND
        // ===================================================
        ctx.fillStyle = "#2C2C2C";
        ctx.fillRect(x, y, width, height);

        // Header background
        ctx.fillStyle = "#3A3A3A";
        ctx.fillRect(x, y, width, 55);

        // Border
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 3;
        ctx.strokeRect(x, y, width, height);

        // ===================================================
        // TITLE
        // ===================================================
        ctx.fillStyle = "#FFF";
        ctx.font = "bold 24px Arial";
        ctx.textAlign = "center";

        ctx.fillText("🎒 Inventory", x + width / 2, y + 35);

        // Divider line
        ctx.strokeStyle = "#666";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(x, y + 55);
        ctx.lineTo(x + width, y + 55);
        ctx.stroke();

        // ===================================================
        // GRID CONFIG (ONLY ONCE)
        // ===================================================
        const columns = 4;
        const rows = 3;

        const slotSize = 64;
        const gap = 12;

        const startX = x + 40;
        const startY = y + 80;

        // ===================================================
        // TRACK HOVER (FIXED APPROACH)
        // ===================================================
        let hoveredItem = null;

        // ===================================================
        // DRAW GRID
        // ===================================================
        for (let row = 0; row < rows; row++) {

            for (let col = 0; col < columns; col++) {

                const slotX = startX + col * (slotSize + gap);
                const slotY = startY + row * (slotSize + gap);

                const slotIndex = row * columns + col;
                const inventoryItem = Inventory.items[slotIndex];

                // ================================
                // HOVER CHECK
                // ================================
                const isMouseOver =
                    Input.mouse.x >= slotX &&
                    Input.mouse.x <= slotX + slotSize &&
                    Input.mouse.y >= slotY &&
                    Input.mouse.y <= slotY + slotSize;

                if (isMouseOver && inventoryItem) {
                    hoveredItem = inventoryItem;
                }

                // ================================
                // SLOT STYLE
                // ================================
                if (inventoryItem) {
                    ctx.fillStyle = "#575757";
                    ctx.strokeStyle = "#FFD54A";
                } else {
                    ctx.fillStyle = "#3A3A3A";
                    ctx.strokeStyle = "#777";
                }

                ctx.lineWidth = 2;

                ctx.fillRect(slotX, slotY, slotSize, slotSize);
                ctx.strokeRect(slotX, slotY, slotSize, slotSize);

                if (!inventoryItem) continue;

                const item = ItemRegistry[inventoryItem.id];

                if (isMouseOver) {
                    console.log(
                        "Hovering slot:",
                        row,
                        col,
                        inventoryItem ? inventoryItem.id : "empty"
                    );
                }

                // ================================
                // ICON
                // ================================
                ctx.font = "30px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "#FFF";

                ctx.fillText(
                    item.icon,
                    slotX + slotSize / 2,
                    slotY + slotSize / 2 - 4
                );

                // ================================
                // QUANTITY
                // ================================
                ctx.fillStyle = "#222";
                ctx.fillRect(
                    slotX + slotSize - 22,
                    slotY + slotSize - 18,
                    20,
                    16
                );

                ctx.fillStyle = "#FFF";
                ctx.font = "11px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";

                ctx.fillText(
                    inventoryItem.amount,
                    slotX + slotSize - 12,
                    slotY + slotSize - 10
                );
            }
        }

        // ===================================================
        // SET TOOLTIP ONCE (IMPORTANT FIX)
        // ===================================================
        this.tooltip = hoveredItem;

        // ===================================================
        // FOOTER
        // ===================================================
        ctx.fillStyle = "#AAA";
        ctx.font = "16px Arial";
        ctx.textAlign = "center";

        ctx.fillText(
            "Press I to Close",
            x + width / 2,
            y + height - 20
        );

        // ===================================================
        // TOOLTIP RENDER
        // ===================================================
        if (this.tooltip) {

            const item = ItemRegistry[this.tooltip.id];

            const tx = Input.mouse.x + 15;
            const ty = Input.mouse.y + 15;

            ctx.fillStyle = "rgba(0,0,0,0.85)";
            ctx.fillRect(tx, ty, 180, 80);

            ctx.strokeStyle = "#FFD54A";
            ctx.strokeRect(tx, ty, 180, 80);

            ctx.fillStyle = "#FFF";
            ctx.font = "16px Arial";
            ctx.textAlign = "left";
            ctx.textBaseline = "top";

            ctx.fillText(
                item.icon + " " + item.name,
                tx + 10,
                ty + 10
            );

            ctx.font = "12px Arial";
            ctx.fillStyle = "#AAA";

            ctx.fillText(
                "Qty: " + this.tooltip.amount,
                tx + 10,
                ty + 35
            );
        }

        ctx.restore();
    }
};