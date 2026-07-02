const World = {
    tiles: [],
    init() {

        this.tiles = WorldGenerator.generate();

    },
    isWalkable(tile) {

        return tile && TileRegistry[tile.type].walkable;

    }
};