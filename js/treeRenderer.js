// ===================================================
// TREE RENDERER
// ---------------------------------------------------
// Draws all trees.
// ===================================================

const TreeRenderer = {

    // ===================================================
    // GROUND LAYER
    // ===================================================

    drawGround(ctx, tile, x, y) {

        if (!tile.tree) {
            return;
        }

        const treeData = TreeRegistry[tile.tree.id];

        if (!treeData) {
            return;
        }

        // -----------------------------------------------
        // Large Trees
        // -----------------------------------------------

        if (treeData.trunkImage) {

            const trunk = Assets.get(treeData.trunkImage);

            if (trunk) {

                ctx.drawImage(
                    trunk,
                    x,
                    y,
                    TILE_SIZE,
                    TILE_SIZE
                );

            }

        }

        // -----------------------------------------------
        // Small Trees
        // -----------------------------------------------

        else if (treeData.image) {

            const image = Assets.get(treeData.image);

            if (image) {

                ctx.drawImage(
                    image,
                    x,
                    y,
                    TILE_SIZE,
                    TILE_SIZE
                );

            }

        }

    },

    // ===================================================
    // OVERHEAD LAYER
    // ===================================================

    drawOverhead(ctx, tile, x, y) {

        if (!tile.tree) {
            return;
        }

        const treeData = TreeRegistry[tile.tree.id];

        if (!treeData) {
            return;
        }

        // Small trees have no overhead layer
        if (!treeData.topImage) {
            return;
        }

        const top = Assets.get(treeData.topImage);

        if (!top) {
            return;
        }

        ctx.drawImage(
            top,
            x,
            y - TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE
        );

    }

};