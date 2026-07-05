// ===================================================
// ITEM REGISTRY
// Defines every item available in the game.
// ===================================================

const ItemRegistry = {

    // ===================================================
    // TOOLS
    // ===================================================

    hoe: {

        id: "hoe",
        name: "Hoe",

        type: "tool",
        toolType: "hoe",

        icon: "🪓"

    },

    wateringCan: {

        id: "wateringCan",
        name: "Watering Can",

        type: "tool",
        toolType: "wateringCan",

        icon: "💧"

    },

    // ===================================================
    // SEEDS
    // ===================================================

    turnipSeed: {

        id: "turnipSeed",
        name: "Turnip Seed",

        type: "seed",
        cropId: "turnip",

        icon: "🌱"

    },

    // ===================================================
    // CROPS
    // ===================================================

    turnip: {

        id: "turnip",
        name: "Turnip",

        type: "crop",

        icon: "🥕"

    }

};