// ===================================================
// ASSET MANAGER
// ---------------------------------------------------
// Responsibility:
// - Load images
// - Store loaded assets
// - Provide asset lookup
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