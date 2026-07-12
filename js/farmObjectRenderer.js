// ===================================================
// FARM OBJECT RENDERER
// ---------------------------------------------------
// Draws all farm objects.
// ===================================================

const FarmObjectRenderer = {

    draw(ctx, object) {

        const image = Assets.get(object.image);

        if (!image) {
            return;
        }

        const width = object.width ?? image.width;
        const height = object.height ?? image.height;

        ctx.drawImage(

            image,

            object.x,
            object.y,

            width,
            height

        );

    }

};