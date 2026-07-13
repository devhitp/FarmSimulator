// ===================================================
// PLAYER
// Handles movement, tools, farming, and interactions
// ===================================================

const Player = {

    // ===================================================
    // PROPERTIES
    // ===================================================

    x: 0,
    y: 0,
    width: TILE_SIZE,
    height: TILE_SIZE,

    speed: 200, // pixels per second
    facing: "down",

    toolCooldown: 0,
    toolDelay: 200,

    // ===================================================
    // UPDATE LOOP
    // ===================================================

    update(deltaTime) {

        // Cooldown timer
        if (this.toolCooldown > 0) {
            this.toolCooldown -= deltaTime;
        }

        const moveAmount = this.speed * (deltaTime / 1000);

        let moveX = 0;
        let moveY = 0;

        // ===================================================
        // INPUT HANDLING
        // ===================================================

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

        // ===================================================
        // X AXIS MOVEMENT + COLLISION
        // ===================================================

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

        const playerBoxX = {

            x: newX,
            y: this.y,

            width: this.width,
            height: this.height

        };

        canMoveX =
            canMoveX &&
            !World.isCollidingWithBuildings(playerBoxX) &&
            !World.isCollidingWithFarmObjects(playerBoxX);

        if (canMoveX) {
            this.x = newX;
        }

        // ===================================================
        // Y AXIS MOVEMENT + COLLISION
        // ===================================================

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

        const playerBoxY = {

            x: this.x,
            y: newY,

            width: this.width,
            height: this.height

        };

        canMoveY =
            canMoveY &&
            !World.isCollidingWithBuildings(playerBoxY) &&
            !World.isCollidingWithFarmObjects(playerBoxY);

        if (canMoveY) {
            this.y = newY;
        }

        // ===================================================
        // WORLD BOUNDARIES
        // ===================================================

        const maxX = WORLD_COLS * TILE_SIZE - this.width;
        const maxY = WORLD_ROWS * TILE_SIZE - this.height;

        this.x = Math.max(0, Math.min(this.x, maxX));
        this.y = Math.max(0, Math.min(this.y, maxY));
    },

    // ===================================================
    // ITEM USAGE CONTROLLER
    // ===================================================

    useSelectedItem() {

        const item = Hotbar.getSelectedItem();

        switch (item.type) {

            case "tool":

                switch (item.toolType) {

                    case "hoe":
                        this.useHoe();
                        break;

                    case "wateringCan":
                        this.waterTile();
                        break;
                }

                return;

            case "seed":
                this.plantSeed(item);
                return;
        }
    },

    // ===================================================
    // TILE DETECTION
    // ===================================================

    getFacingTile() {

        const tilePos = getPlayerTile();

        let row = tilePos.row;
        let col = tilePos.col;

        switch (this.facing) {

            case "up": row--; break;
            case "down": row++; break;
            case "left": col--; break;
            case "right": col++; break;
        }

        if (
            row < 0 ||
            row >= WORLD_ROWS ||
            col < 0 ||
            col >= WORLD_COLS
        ) {
            return null;
        }

        return World.tiles[row][col];
    },

    // ===================================================
    // FARMING TOOLS
    // ===================================================

    useHoe() {

        const tile = this.getFacingTile();
        if (!tile) return;

        if (tile.crop) {
            this.harvestCrop();
            return;
        }

        if (tile.type === "grass") {
            tile.type = "soil";
        }

        // console.log("Hoe tile:", tile);
    },

    waterTile() {

        if (this.toolCooldown > 0) return;

        this.toolCooldown = this.toolDelay;

        const tile = this.getFacingTile();
        if (!tile) return;

        if (tile.type !== "soil") return;

        tile.watered = true;

        const worldPos = World.tileToWorld(
            World.worldToTile(Player.x, Player.y).row,
            World.worldToTile(Player.x, Player.y).col
        );

        ParticleManager.spawn(
            worldPos.x + TILE_SIZE / 2,
            worldPos.y + TILE_SIZE / 2,
            "#4DA6FF",
            6
        );
    },

    // ===================================================
    // SEED PLANTING
    // ===================================================

    plantSeed(item) {

        const tilePos = getPlayerTile();

        let row = tilePos.row;
        let col = tilePos.col;

        switch (this.facing) {

            case "up": row--; break;
            case "down": row++; break;
            case "left": col--; break;
            case "right": col++; break;
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
            plantedAt: Date.now()
        };
    },

    // ===================================================
    // HARVEST SYSTEM
    // ===================================================

    harvestCrop() {

        if (this.toolCooldown > 0) return;

        this.toolCooldown = this.toolDelay;

        const tile = this.getFacingTile();
        if (!tile || !tile.crop) return;

        const cropData = CropRegistry[tile.crop.cropId];

        if (tile.crop.stage < cropData.growthStages - 1) {
            return;
        }

        Inventory.add(cropData.harvestItem, 1);

        const tilePos = World.worldToTile(
            Player.x,
            Player.y
        );

        const worldPos = World.tileToWorld(
            tilePos.row,
            tilePos.col
        );

        const x = worldPos.x + TILE_SIZE / 2;
        const y = worldPos.y + TILE_SIZE / 2;

        Effects.harvest(x, y);

        tile.crop = null;
        tile.watered = false;
        tile.type = "soil";

        // console.log("Harvest tile:", this.getFacingTile());
    }
};