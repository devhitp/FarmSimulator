// ===================================================
// CAMERA
// Handles camera position and follows the player.
// ===================================================

const Camera = {

    // ===================================================
    // CAMERA DATA
    // ===================================================

    x: 0,
    y: 0,

    // ===================================================
    // UPDATE
    // ===================================================

    update() {

        // -----------------------------------------------
        // Follow Player
        // -----------------------------------------------

        this.x =
            Player.x -
            GAME_WIDTH / 2 +
            Player.width / 2;

        this.y =
            Player.y -
            GAME_HEIGHT / 2 +
            Player.height / 2;

        // -----------------------------------------------
        // World Bounds
        // -----------------------------------------------

        const maxX =
            WORLD_COLS * TILE_SIZE - GAME_WIDTH;

        const maxY =
            WORLD_ROWS * TILE_SIZE - GAME_HEIGHT;

        this.x = Math.max(
            0,
            Math.min(this.x, maxX)
        );

        this.y = Math.max(
            0,
            Math.min(this.y, maxY)
        );

    }

};