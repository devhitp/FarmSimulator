// ===================================================
// RENDERER
// Handles all game rendering.
// ===================================================

const Renderer = {

    // ===================================================
    // MAIN DRAW LOOP
    // ===================================================

    draw(ctx) {

        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        ctx.save();
        ctx.translate(-Camera.x, -Camera.y);

        this.drawWorld(ctx);
        this.drawPlayer(ctx);

        ctx.restore();

        this.drawHotbar(ctx);
        InventoryUI.draw(ctx);

    },

    // ===================================================
    // WORLD RENDERING
    // ===================================================

    drawWorld(ctx) {

        for (let row = 0; row < WORLD_ROWS; row++) {

            for (let col = 0; col < WORLD_COLS; col++) {

                const tile = World.tiles[row][col];
                const tileData = TileRegistry[tile.type];

                if (tile.type === "grass") {

                    const grassColors = [
                        "#63B95D",
                        "#67BF61",
                        "#5EB357",
                        "#6CC468"
                    ];

                    ctx.fillStyle = grassColors[tile.variation];

                }
                else if (tile.type === "soil" && tile.watered) {

                    ctx.fillStyle = "#6B4423";

                }
                else {

                    ctx.fillStyle = tileData.color;

                }

                ctx.fillRect(
                    col * TILE_SIZE,
                    row * TILE_SIZE,
                    TILE_SIZE,
                    TILE_SIZE
                );

                // ======================================
                // Soil Texture
                // ======================================

                if (tile.type === "soil") {

                    ctx.fillStyle = tile.watered
                        ? "#5A361C"
                        : "#70431F";

                    for (let i = 0; i < 6; i++) {

                        const px = col * TILE_SIZE + 4 + (i * 4) % 24;
                        const py = row * TILE_SIZE + 5 + ((i * 7) % 20);

                        ctx.fillRect(px, py, 2, 2);

                    }

                }

                ctx.strokeStyle = "#4BA048";

                ctx.strokeRect(
                    col * TILE_SIZE,
                    row * TILE_SIZE,
                    TILE_SIZE,
                    TILE_SIZE
                );

                // Crop
                CropRenderer.draw(

                    ctx,
                    tile,
                    col * TILE_SIZE,
                    row * TILE_SIZE

                );

            }

        }

    },

    // ===================================================
    // CROP RENDERING
    // ===================================================

    drawCrop(ctx, row, col, tile) {

        const colors = [
            "#7ED957",
            "#5FCF65",
            "#42B84A",
            "#2E8B57"
        ];

        ctx.fillStyle = colors[tile.crop.stage];

        ctx.beginPath();

        ctx.arc(
            col * TILE_SIZE + TILE_SIZE / 2,
            row * TILE_SIZE + TILE_SIZE / 2,
            6 + tile.crop.stage * 2,
            0,
            Math.PI * 2
        );

        ctx.fill();

    },

    // ===================================================
    // PLAYER RENDERING
    // ===================================================

    drawPlayer(ctx) {

        ctx.fillStyle = "#3498db";

        ctx.fillRect(
            Player.x,
            Player.y,
            Player.width,
            Player.height
        );

    },


    // ===================================================
    // HOTBAR UI
    // ===================================================

    drawHotbar(ctx) {

        ctx.save();

        const slotSize = 50;
        const gap = 10;

        const totalWidth =
            Hotbar.slots.length * slotSize +
            (Hotbar.slots.length - 1) * gap;

        const startX = Math.round((GAME_WIDTH - totalWidth) / 2);
        const y = GAME_HEIGHT - 70;

        for (let i = 0; i < Hotbar.slots.length; i++) {

            const isSelected = i === Hotbar.selectedSlot;

            const size = isSelected ? 56 : 50;

            const x = Math.round(
                startX + i * (slotSize + gap) - (size - slotSize) / 2
            );

            const drawY = Math.round(
                y - (size - slotSize) / 2
            );

            ctx.fillStyle = isSelected
                ? "#E3B341"
                : "#3A3A3A";

            ctx.fillRect(
                x,
                drawY,
                size,
                size
            );

            const item = ItemRegistry[Hotbar.slots[i]];

            ctx.font = "24px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#FFF";

            ctx.fillText(
                item.icon,
                x + size / 2,
                drawY + size / 2
            );

            const inventoryItem = Inventory.items.find(
                inventoryItem => inventoryItem.id === item.id
            );

            if (inventoryItem && inventoryItem.amount > 1) {

                ctx.font = "12px Arial";
                ctx.textAlign = "right";
                ctx.textBaseline = "bottom";

                ctx.fillText(
                    "×" + inventoryItem.amount,
                    x + size - 4,
                    drawY + size - 4
                );

            }

            ctx.strokeStyle = isSelected
                ? "#FFE97A"
                : "#DDD";

            ctx.lineWidth = isSelected
                ? 3
                : 2;

            ctx.strokeRect(
                x,
                drawY,
                size,
                size
            );

        }
        ParticleManager.draw(ctx);

        ctx.restore();

    }

};