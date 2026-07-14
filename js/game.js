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
        this.ctx.imageSmoothingEnabled = false;

        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;

        // Engine Systems
        Input.init(this.canvas);
        World.init();
        Player.x = World.spawn.x;
        Player.y = World.spawn.y;

        Assets.loadImage("roof_peak", "assets/buildings/roof_peak.png");

        Assets.loadImage("roof_top_left", "assets/buildings/roof_top_left.png");
        Assets.loadImage("roof_top_center", "assets/buildings/roof_top_center.png");
        Assets.loadImage("roof_top_right", "assets/buildings/roof_top_right.png");

        Assets.loadImage("roof_upper_left", "assets/buildings/roof_upper_left.png");
        Assets.loadImage("roof_upper_center", "assets/buildings/roof_upper_center.png");
        Assets.loadImage("roof_upper_right", "assets/buildings/roof_upper_right.png");

        Assets.loadImage("roof_lower_left", "assets/buildings/roof_lower_left.png");
        Assets.loadImage("roof_lower_center", "assets/buildings/roof_lower_center.png");
        Assets.loadImage("roof_lower_right", "assets/buildings/roof_lower_right.png");

        Assets.loadImage("roof_bottom_left", "assets/buildings/roof_bottom_left.png");
        Assets.loadImage("roof_bottom_center", "assets/buildings/roof_bottom_center.png");
        Assets.loadImage("roof_bottom_right", "assets/buildings/roof_bottom_right.png");

        Assets.loadImage("wall_top_left", "assets/buildings/wall_top_left.png");
        Assets.loadImage("wall_top_center", "assets/buildings/wall_top_center.png");
        Assets.loadImage("wall_top_right", "assets/buildings/wall_top_right.png");

        Assets.loadImage("wall_upper_left", "assets/buildings/wall_upper_left.png");
        Assets.loadImage("wall_upper_center", "assets/buildings/wall_upper_center.png");
        Assets.loadImage("wall_upper_right", "assets/buildings/wall_upper_right.png");

        Assets.loadImage("wall_lower_left", "assets/buildings/wall_lower_left.png");
        Assets.loadImage("wall_lower_center", "assets/buildings/wall_lower_center.png");
        Assets.loadImage("wall_lower_right", "assets/buildings/wall_lower_right.png");

        Assets.loadImage("wall_bottom_left", "assets/buildings/wall_bottom_left.png");
        Assets.loadImage("door", "assets/buildings/door.png");
        Assets.loadImage("window", "assets/buildings/window.png");
        Assets.loadImage("player", "assets/player/player_1.png");

        Assets.loadImage(

            "shippingBin",

            "assets/farmObjects/shipping_bin.png"

        );
        Assets.loadImage(

            "mailbox",

            "assets/farmObjects/mailbox.png"

        );

        Assets.loadImage("fence_corner_tl", "assets/fence/fence_corner_tl.png");
        Assets.loadImage("fence_corner_tr", "assets/fence/fence_corner_tr.png");
        Assets.loadImage("fence_corner_bl", "assets/fence/fence_corner_bl.png");
        Assets.loadImage("fence_corner_br", "assets/fence/fence_corner_br.png");

        Assets.loadImage("fence_start_horizontal", "assets/fence/fence_start_horizontal.png");
        Assets.loadImage("fence_middle_horizontal", "assets/fence/fence_middle_horizontal.png");
        Assets.loadImage("fence_end_horizontal", "assets/fence/fence_end_horizontal.png");

        Assets.loadImage("fence_start_vertical", "assets/fence/fence_start_vertical.png");
        Assets.loadImage("fence_middle_vertical", "assets/fence/fence_middle_vertical.png");
        Assets.loadImage("fence_end_vertical", "assets/fence/fence_end_vertical.png");

        Assets.loadImage("fence_loop_middle", "assets/fence/fence_loop_middle.png");

        Assets.loadImage("fence_gate", "assets/fence/fence_gate.png");

        // =====================================
        // Terrain Assets
        // =====================================

        Assets.loadImage(
            "grass",
            "assets/tiles/grass.png"
        );

        Assets.loadImage(
            "dirt",
            "assets/tiles/dirt.png"
        );

        // =====================================
        // Decoration Assets
        // =====================================

        Assets.loadImage(
            "flower",
            "assets/decorations/flower.png"
        );

        Assets.loadImage(
            "mushroom",
            "assets/decorations/mushroom.png"
        );

        Assets.loadImage(
            "bush",
            "assets/decorations/bush.png"
        );

        Assets.loadImage(
            "cherryBush",
            "assets/decorations/cherry_bush.png"
        );

        Assets.loadImage(
            "stone",
            "assets/decorations/stone.png"
        );

        Assets.loadImage(
            "smallStones",
            "assets/decorations/small_stones.png"
        );
        Assets.loadImage(
            "grassDecoration",
            "assets/decorations/grass.png"
        );

        Assets.loadImage(
            "grassDecorationFlower",
            "assets/decorations/grass1.png"
        );

        // =====================================
        // Tree Assets
        // =====================================

        Assets.loadImage(
            "oakTop",
            "assets/trees/oak_top.png"
        );

        Assets.loadImage(
            "oakTrunk",
            "assets/trees/oak_trunk.png"
        );

        Assets.loadImage(
            "pineTop",
            "assets/trees/pine_top.png"
        );

        Assets.loadImage(
            "pineTrunk",
            "assets/trees/pine_trunk.png"
        );

        Assets.loadImage(
            "smallOak",
            "assets/trees/small_oak.png"
        );

        Assets.loadImage(
            "smallPine",
            "assets/trees/small_pine.png"
        );

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
        ParticleManager.update(deltaTime);
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