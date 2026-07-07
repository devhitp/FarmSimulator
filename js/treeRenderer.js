// ===================================================
// TREE RENDERER
// Draws all trees.
// ===================================================

const TreeRenderer = {

    draw(ctx, tile, x, y) {

        if (!tile.tree) return;

        const tree = TreeRegistry[tile.tree.id];

        // -----------------------------
        // Trunk
        // -----------------------------

        ctx.fillStyle = tree.trunkColor;

        ctx.fillRect(
            x + 12,
            y + 14,
            8,
            18
        );

        // -----------------------------
        // Leaves
        // -----------------------------

        ctx.fillStyle = tree.color;

        ctx.beginPath();

        ctx.arc(
            x + 16,
            y + 10,
            12,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }

};