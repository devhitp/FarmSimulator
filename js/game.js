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
        requestAnimationFrame(this.loop.bind(this));
    },
    loop(timestamp) {
        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;
        Player.update(deltaTime);

        if (Input.wasKeyPressed("e")) {
            Player.useHoe();
        }

        Camera.update();
        Renderer.draw(this.ctx);
        requestAnimationFrame(this.loop.bind(this));
    }
};