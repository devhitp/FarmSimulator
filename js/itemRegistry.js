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

    cabbageSeed: {

        id: "cabbageSeed",

        name: "Cabbage Seed",

        type: "seed",

        cropId: "cabbage",

        icon: "🥬",

        buyPrice: 10

    },

    carrotSeed: {

        id: "carrotSeed",
        name: "Carrot Seed",

        type: "seed",
        cropId: "carrot",

        icon: "🥕",
        buyPrice: 10

    },

    cornSeed: {

        id: "cornSeed",
        name: "Corn Seed",

        type: "seed",
        cropId: "corn",

        icon: "🌽",
        buyPrice: 10

    },

    tomatoSeed: {

        id: "tomatoSeed",
        name: "Tomato Seed",

        type: "seed",
        cropId: "tomato",

        icon: "🍅",
        buyPrice: 10

    },

    // ===================================================
    // CROPS
    // ===================================================

    cabbage: {

        id: "cabbage",
        name: "Cabbage",

        type: "crop",

        icon: "🥬",

        sellPrice: 20

    },

    carrot: {

        id: "carrot",
        name: "Carrot",

        type: "crop",

        icon: "🥕",

        sellPrice: 20

    },

    corn: {

        id: "corn",
        name: "Corn",

        type: "crop",

        icon: "🌽",

        sellPrice: 20

    },

    tomato: {

        id: "tomato",
        name: "Tomato",

        type: "crop",

        icon: "🍅",

        sellPrice: 20

    },

};