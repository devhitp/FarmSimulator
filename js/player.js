const Player = {
    x: 10 * TILE_SIZE,
    y: 10 * TILE_SIZE,
    width: TILE_SIZE,
    height: TILE_SIZE,
    speed: 200, // pixels per second
    update(deltaTime) {

        const moveAmount = this.speed * (deltaTime / 1000);

        let moveX = 0;
        let moveY = 0;

        if (Input.isKeyDown("w")) moveY -= moveAmount;
        if (Input.isKeyDown("s")) moveY += moveAmount;
        if (Input.isKeyDown("a")) moveX -= moveAmount;
        if (Input.isKeyDown("d")) moveX += moveAmount;

        // Normalize diagonal movement
        if (moveX !== 0 && moveY !== 0) {
            moveX *= Math.SQRT1_2;
            moveY *= Math.SQRT1_2;
        }

        // ---------- X Movement ----------
        let newX = this.x + moveX;

        let topLeft = getTileAt(newX, this.y);
        let topRight = getTileAt(newX + this.width - 1, this.y);
        let bottomLeft = getTileAt(newX, this.y + this.height - 1);
        let bottomRight = getTileAt(newX + this.width - 1, this.y + this.height - 1);

        let canMoveX =
            World.isWalkable(topLeft) &&
            World.isWalkable(topRight) &&
            World.isWalkable(bottomLeft) &&
            World.isWalkable(bottomRight);

        if (canMoveX) {
            this.x = newX;
        }

        // ---------- Y Movement ----------
        let newY = this.y + moveY;

        topLeft = getTileAt(this.x, newY);
        topRight = getTileAt(this.x + this.width - 1, newY);
        bottomLeft = getTileAt(this.x, newY + this.height - 1);
        bottomRight = getTileAt(this.x + this.width - 1, newY + this.height - 1);

        let canMoveY =
            World.isWalkable(topLeft) &&
            World.isWalkable(topRight) &&
            World.isWalkable(bottomLeft) &&
            World.isWalkable(bottomRight);

        if (canMoveY) {
            this.y = newY;
        }

        const maxX = WORLD_COLS * TILE_SIZE - this.width;
        const maxY = WORLD_ROWS * TILE_SIZE - this.height;

        this.x = Math.max(0, Math.min(this.x, maxX));
        this.y = Math.max(0, Math.min(this.y, maxY));

    }
};