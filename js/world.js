const World = {
    tiles: [],
    init() {

        this.tiles = WorldGenerator.generate();

    },
    isWalkable(tile) {

        return tile && TileRegistry[tile.type].walkable;

    },
    worldToTile(x, y) {

        return {
            row: Math.floor(y / TILE_SIZE),
            col: Math.floor(x / TILE_SIZE)
        };

    },

    tileToWorld(row, col) {

        return {
            x: col * TILE_SIZE,
            y: row * TILE_SIZE
        };

    }
};