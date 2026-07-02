const Renderer = {

    draw(ctx){

        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        // Draw World
        for(let row = 0; row < WORLD_ROWS; row++){

            for(let col = 0; col < WORLD_COLS; col++){

                const tile = World.tiles[row][col];

                if(tile.type === "grass"){
                    ctx.fillStyle = "#63B95D";
                }

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

    }

};