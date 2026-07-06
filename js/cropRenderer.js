// ===================================================
// CROP RENDERER
// Draws every crop in the game.
// ===================================================

const CropRenderer = {

    draw(ctx, tile, x, y) {

        if (!tile.crop) return;

        switch (tile.crop.cropId) {

            case "turnip":
                this.drawTurnip(ctx, tile, x, y);
                break;

        }

    },

    drawTurnip(ctx, tile, x, y) {

        switch (tile.crop.stage) {

            case 0:

                // Stem
                ctx.fillStyle = "#3E8E41";

                ctx.fillRect(
                    x + 15,
                    y + 18,
                    2,
                    8
                );

                // Left Leaf
                ctx.fillStyle = "#6FCF65";

                ctx.fillRect(
                    x + 12,
                    y + 15,
                    4,
                    4
                );

                // Right Leaf
                ctx.fillRect(
                    x + 17,
                    y + 15,
                    4,
                    4
                );

                break;

            case 1:

                ctx.fillStyle = "#3E8E41";

                ctx.fillRect(
                    x + 15,
                    y + 12,
                    2,
                    14
                );

                ctx.fillStyle = "#6FCF65";

                ctx.fillRect(
                    x + 11,
                    y + 13,
                    5,
                    5
                );

                ctx.fillRect(
                    x + 17,
                    y + 13,
                    5,
                    5
                );

                ctx.fillRect(
                    x + 13,
                    y + 8,
                    6,
                    4
                );

                break;

            case 2:

                ctx.fillStyle = "#3E8E41";

                ctx.fillRect(
                    x + 15,
                    y + 8,
                    2,
                    18
                );

                ctx.fillStyle = "#5FCF65";

                ctx.fillRect(
                    x + 10,
                    y + 9,
                    6,
                    6
                );

                ctx.fillRect(
                    x + 17,
                    y + 9,
                    6,
                    6
                );

                ctx.fillRect(
                    x + 12,
                    y + 4,
                    8,
                    5
                );

                break;

            case 3:

                // Leaves

                ctx.fillStyle = "#2E8B57";

                ctx.fillRect(
                    x + 14,
                    y + 5,
                    4,
                    8
                );

                ctx.fillRect(
                    x + 10,
                    y + 9,
                    4,
                    4
                );

                ctx.fillRect(
                    x + 18,
                    y + 9,
                    4,
                    4
                );

                // Turnip

                ctx.fillStyle = "#D9E6D2";

                ctx.beginPath();

                ctx.arc(
                    x + 16,
                    y + 20,
                    6,
                    0,
                    Math.PI * 2
                );

                ctx.fill();

                break;

        }

    }

};