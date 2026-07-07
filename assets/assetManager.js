// ===================================================
// ASSET MANAGER
// ---------------------------------------------------
// Responsibility:
// - Load images
// - Store loaded assets
// - Provide access to assets
//
// Future:
// - Audio
// - Sprite sheets
// - Animations
// - Loading screen
// ===================================================

const Assets = {

    images: {},

    loadImage(name, path) {

        const image = new Image();

        image.src = path;

        this.images[name] = image;

    },

    get(name) {

        return this.images[name];

    }

};