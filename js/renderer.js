const Renderer = {
    draw(ctx) {
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        ctx.save();
        ctx.translate(-Camera.x, -Camera.y);
        // Draw World
        for (let row = 0; row < WORLD_ROWS; row++) {
            for (let col = 0; col < WORLD_COLS; col++) {
                const tile = World.tiles[row][col];
                const tileData = TileRegistry[tile.type];

                ctx.fillStyle = tileData.color;
                ctx.fillRect(
                    col * TILE_SIZE,
                    row * TILE_SIZE,
                    TILE_SIZE,
                    TILE_SIZE
                );
                ctx.strokeStyle = "#4BA048";
                ctx.strokeRect(
                    col * TILE_SIZE,
                    row * TILE_SIZE,
                    TILE_SIZE,
                    TILE_SIZE
                );
                if (tile.crop) {

                    ctx.fillStyle = "#7ED957";

                    ctx.beginPath();

                    ctx.arc(
                        col * TILE_SIZE + TILE_SIZE / 2,
                        row * TILE_SIZE + TILE_SIZE / 2,
                        6,
                        0,
                        Math.PI * 2
                    );

                    ctx.fill();

                }
            }
        }
        // Draw Player
        ctx.fillStyle = "#3498db";
        ctx.fillRect(
            Player.x,
            Player.y,
            Player.width,
            Player.height
        );
        ctx.restore();
    }
};