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

        ParticleManager.draw(ctx);

        this.drawPlayer(ctx);

        // =====================================
        // Building Roof Layer
        // =====================================

        for (const building of World.buildings) {

            BuildingRenderer.drawRoof(
                ctx,
                building
            );

        }

        for (let row = 0; row < WORLD_ROWS; row++) {

            for (let col = 0; col < WORLD_COLS; col++) {

                const tile = World.tiles[row][col];

                DecorationRenderer.drawTall(

                    ctx,

                    tile,

                    col * TILE_SIZE,

                    row * TILE_SIZE

                );

            }

        }

        // =====================================
        // Overhead Layer
        // =====================================

        for (let row = 0; row < WORLD_ROWS; row++) {

            for (let col = 0; col < WORLD_COLS; col++) {

                const tile = World.tiles[row][col];

                TreeRenderer.drawOverhead(
                    ctx,
                    tile,
                    col * TILE_SIZE,
                    row * TILE_SIZE
                );

            }

        }

        ctx.restore();

        // Draw UI
        this.drawCoins(ctx);
        this.drawHotbar(ctx);
        InventoryUI.draw(ctx);
        ShopUI.draw(ctx);

    },

    // ===================================================
    // WORLD RENDERING
    // ===================================================

    drawWorld(ctx) {

        TerrainRenderer.draw(ctx);

        for (const building of World.buildings) {

            BuildingRenderer.drawBase(
                ctx,
                building
            );

        }

        for (const object of World.farmObjects) {

            FarmObjectRenderer.draw(
                ctx,
                object
            );

        }

        // =====================================
        // Fences
        // =====================================

        // console.log("Fence count:", World.fences.length);

        for (const fence of World.fences) {

            FenceRenderer.draw(
                ctx,
                fence
            );

        }

        for (let row = 0; row < WORLD_ROWS; row++) {

            for (let col = 0; col < WORLD_COLS; col++) {

                const tile = World.tiles[row][col];

                const x = col * TILE_SIZE;
                const y = row * TILE_SIZE;

                DecorationRenderer.drawGround(
                    ctx,
                    tile,
                    x,
                    y
                );

                TreeRenderer.drawGround(
                    ctx,
                    tile,
                    x,
                    y
                );

                CropRenderer.draw(
                    ctx,
                    tile,
                    x,
                    y
                );

            }

        }

    },

    // ===================================================
    // PLAYER RENDERING
    // ===================================================

    drawPlayer(ctx) {

        PlayerRenderer.draw(ctx);

    },

    // ===================================================
    // COIN UI
    // ===================================================

    drawCoins(ctx) {

        ctx.save();

        ctx.fillStyle = "#E3B341";
        ctx.font = "bold 28px Arial";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";

        ctx.fillText(
            "🪙 " + Player.coins,
            20,
            20
        );

        ctx.restore();

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

        ctx.restore();

    }

};