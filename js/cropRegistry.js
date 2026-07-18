// ===================================================
// CROP REGISTRY
// Defines every crop available in the game.
// ===================================================

const CropRegistry = {
  // ===================================================
  // CROPS
  // ===================================================

  cabbage: {
    id: "cabbage",
    name: "Cabbage",

    growthStages: 3,
    growthTime: 30,


    harvestItem: "cabbage",

    stages: ["cabbage_stage1", "cabbage_stage2", "cabbage_stage3"],
    render: {
      width: TILE_SIZE,
      height: TILE_SIZE,

      offsetX: 0,
      offsetY: 0,
    },
  },

  carrot: {
    id: "carrot",
    name: "Carrot",

    growthStages: 3,
    growthTime: 25,

   

    harvestItem: "carrot",

    stages: ["carrot_stage1", "carrot_stage2", "carrot_stage3"],
    render: {
      width: TILE_SIZE,
      height: TILE_SIZE,

      offsetX: 0,
      offsetY: 0,
    },
  },

  corn: {
    id: "corn",
    name: "Corn",

    growthStages: 3,
    growthTime: 25,



    harvestItem: "corn",

    stages: ["corn_stage1", "corn_stage2", "corn_stage3"],
    render: {
      width: TILE_SIZE,
      height: TILE_SIZE,

      offsetX: 0,
      offsetY: 0,
    },
  },

  tomato: {
    id: "tomato",
    name: "Tomato",

    growthStages: 3,
    growthTime: 25,

    

    harvestItem: "tomato",

    stages: ["tomato_stage1", "tomato_stage2", "tomato_stage3"],
    render: {
      width: TILE_SIZE,
      height: TILE_SIZE,

      offsetX: 0,
      offsetY: 0,
    },
  },
};
