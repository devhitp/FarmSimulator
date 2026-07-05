// ===================================================
// GAME
// Main game controller.
// Responsible for initialization and the game loop.
// ===================================================

const Game = {

    // ===================================================
    // CORE
    // ===================================================

    canvas: null,
    ctx: null,
    lastTime: 0,

    // ===================================================
    // INITIALIZATION
    // ===================================================

    init() {

        // Canvas
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;

        // Engine Systems
        Input.init(this.canvas);
        World.init();

        // Starting Inventory
        Inventory.add("hoe", 1);
        Inventory.add("wateringCan", 1);
        Inventory.add("turnipSeed", 10);

        // Start Game Loop
        requestAnimationFrame(this.loop.bind(this));

    },

    // ===================================================
    // GAME LOOP
    // ===================================================

    loop(timestamp) {

        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        // -----------------------------------------------
        // Update Systems
        // -----------------------------------------------

        Player.update(deltaTime);
        World.update(deltaTime);
        Camera.update();

        // -----------------------------------------------
        // Input
        // -----------------------------------------------

        if (Input.wasKeyPressed("1")) {
            Hotbar.selectSlot(0);
        }

        if (Input.wasKeyPressed("2")) {
            Hotbar.selectSlot(1);
        }

        if (Input.wasKeyPressed("3")) {
            Hotbar.selectSlot(2);
        }

        if (Input.wasKeyPressed("e")) {
            Player.useSelectedItem();
        }

        if (Input.wasKeyPressed("i")) {
            InventoryUI.toggle();
        }

        // -----------------------------------------------
        // Render
        // -----------------------------------------------

        Renderer.draw(this.ctx);

        // Next Frame
        requestAnimationFrame(this.loop.bind(this));

    }

};