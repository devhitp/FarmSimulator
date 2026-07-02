const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Canvas Size
canvas.width = 960;
canvas.height = 640;

// Size of one tile
const TILE_SIZE = 32;

// World size (in tiles)
const MAP_ROWS = 20;
const MAP_COLS = 30;

// Build the world
const world = [];

for (let row = 0; row < MAP_ROWS; row++) {

    world[row] = [];

    for (let col = 0; col < MAP_COLS; col++) {

        world[row][col] = {

            type: "grass"

        };

    }

}

// Draw the map
function drawWorld(){

    for(let row=0;row<MAP_ROWS;row++){

        for(let col=0;col<MAP_COLS;col++){

            ctx.fillStyle="#58b74b";

            ctx.fillRect(

                col*TILE_SIZE,

                row*TILE_SIZE,

                TILE_SIZE,

                TILE_SIZE

            );

            ctx.strokeStyle="#4aa53d";

            ctx.strokeRect(

                col*TILE_SIZE,

                row*TILE_SIZE,

                TILE_SIZE,

                TILE_SIZE

            );

        }

    }

}

// Game Loop
function gameLoop(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawWorld();

    requestAnimationFrame(gameLoop);

}

gameLoop();