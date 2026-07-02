function getTileAt(x, y) {

    const col = Math.floor(x / TILE_SIZE);
    const row = Math.floor(y / TILE_SIZE);

    if (
        row < 0 ||
        row >= WORLD_ROWS ||
        col < 0 ||
        col >= WORLD_COLS
    ) {
        return null;
    }

    return World.tiles[row][col];

}