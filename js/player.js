const Player = {

    x: 10 * TILE_SIZE,
    y: 10 * TILE_SIZE,

    width: TILE_SIZE,
    height: TILE_SIZE,

    speed: 200, // pixels per second

    update(deltaTime) {

        const moveAmount = this.speed * (deltaTime / 1000);

        if (Input.isKeyDown("w")) this.y -= moveAmount;
        if (Input.isKeyDown("s")) this.y += moveAmount;
        if (Input.isKeyDown("a")) this.x -= moveAmount;
        if (Input.isKeyDown("d")) this.x += moveAmount;

    }

};