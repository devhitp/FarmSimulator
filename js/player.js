const Player = {
    x: 10 * TILE_SIZE,
    y: 10 * TILE_SIZE,
    width: TILE_SIZE,
    height: TILE_SIZE,
    speed: 200, // pixels per second
    facing: "down",
    toolCooldown: 0,
    toolDelay: 200,
    update(deltaTime) {

        if (this.toolCooldown > 0) {
            this.toolCooldown -= deltaTime;
        }

        const moveAmount = this.speed * (deltaTime / 1000);

        let moveX = 0;
        let moveY = 0;

        if (Input.isKeyDown("w")) {
            moveY -= moveAmount;
            this.facing = "up";
        }

        if (Input.isKeyDown("s")) {
            moveY += moveAmount;
            this.facing = "down";
        }

        if (Input.isKeyDown("a")) {
            moveX -= moveAmount;
            this.facing = "left";
        }

        if (Input.isKeyDown("d")) {
            moveX += moveAmount;
            this.facing = "right";
        }

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

    },
    useSelectedItem() {

        const item = Inventory.getSelectedItem();

        switch (item.type) {

            case "tool":
                break;

            case "seed":
                this.plantSeed(item);
                return;

        }

        if (this.toolCooldown > 0) return;

        this.toolCooldown = this.toolDelay;

        const tilePos = getPlayerTile();

        let row = tilePos.row;
        let col = tilePos.col;

        switch (this.facing) {

            case "up":
                row--;
                break;

            case "down":
                row++;
                break;

            case "left":
                col--;
                break;

            case "right":
                col++;
                break;

        }

        if (
            row < 0 ||
            row >= WORLD_ROWS ||
            col < 0 ||
            col >= WORLD_COLS
        ) {
            return;
        }

        const tile = World.tiles[row][col];

        if (tile.type === "grass") {
            tile.type = "soil";
        }

    },
    plantSeed(item) {

        const tilePos = getPlayerTile();

        let row = tilePos.row;
        let col = tilePos.col;

        switch (this.facing) {

            case "up":
                row--;
                break;

            case "down":
                row++;
                break;

            case "left":
                col--;
                break;

            case "right":
                col++;
                break;

        }

        if (
            row < 0 ||
            row >= WORLD_ROWS ||
            col < 0 ||
            col >= WORLD_COLS
        ) {
            return;
        }

        const tile = World.tiles[row][col];

        if (
            tile.type !== "soil" ||
            tile.crop
        ) {
            return;
        }

        tile.crop = {

            cropId: item.cropId,

            stage: 0,

            watered: false,

            plantedAt: Date.now()

        };

    }
};