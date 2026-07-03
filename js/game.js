const Game = {
    canvas: null,
    ctx: null,
    lastTime: 0,
    init() {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d")
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        Input.init();
        World.init();

        Inventory.add("hoe", 1);
        Inventory.add("turnipSeed", 10);

        requestAnimationFrame(this.loop.bind(this));
    },
    loop(timestamp) {
        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;
        Player.update(deltaTime);

        if (Input.wasKeyPressed("1")) {
            Hotbar.selectSlot(0);
        }

        if (Input.wasKeyPressed("2")) {
            Hotbar.selectSlot(1);
        }

        if (Input.wasKeyPressed("e")) {
            Player.useSelectedItem();
        }

        Camera.update();
        Renderer.draw(this.ctx);
        requestAnimationFrame(this.loop.bind(this));
    }
};