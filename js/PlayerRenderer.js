// ===================================================
// PLAYER RENDERER
// ---------------------------------------------------
// Responsible for drawing the player.
// ===================================================

const PlayerRenderer = {

    draw(ctx) {

        const image = Assets.get("player");

        if (!image) {
            return;
        }

        ctx.drawImage(

            image,

            Player.x,
            Player.y,

            TILE_SIZE,
            TILE_SIZE

        );

    }

};