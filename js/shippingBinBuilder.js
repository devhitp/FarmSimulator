// ===================================================
// SHIPPING BIN BUILDER
// ---------------------------------------------------
// Builds the shipping bin.
// ===================================================

const ShippingBinBuilder = {

    build(x, y) {

        return {

            id: "shippingBin",

            x,
            y,

            ...FarmObjectRegistry.shippingBin

        };

    }

};