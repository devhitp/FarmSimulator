const World = {
    tiles: [],
    init() {
        for (let row = 0; row < WORLD_ROWS; row++) {
            this.tiles[row] = [];
            for (let col = 0; col < WORLD_COLS; col++) {
                this.tiles[row][col] = {
                    type: "grass",
                    walkable: true
                };
            }
        }
    }
};