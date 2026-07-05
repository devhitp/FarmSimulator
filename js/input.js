// ===================================================
// INPUT
// Handles keyboard and mouse input.
// ===================================================

const Input = {

    // ===================================================
    // STATE
    // ===================================================

    keys: {},
    justPressed: {},

    mouse: {
        x: 0,
        y: 0
    },

    // ===================================================
    // INITIALIZATION
    // ===================================================

    init(canvas) {

        // ---------------------------
        // Key Down
        // ---------------------------
        window.addEventListener("keydown", (event) => {

            const key = event.key.toLowerCase();

            if (!this.keys[key]) {
                this.justPressed[key] = true;
            }

            this.keys[key] = true;

        });

        // ---------------------------
        // Key Up
        // ---------------------------
        window.addEventListener("keyup", (event) => {

            const key = event.key.toLowerCase();
            this.keys[key] = false;

        });

        // ---------------------------
        // Mouse Move
        // ---------------------------
        window.addEventListener("mousemove", (event) => {

            const rect = canvas.getBoundingClientRect();

            this.mouse.x =
                (event.clientX - rect.left) *
                (canvas.width / rect.width);

            this.mouse.y =
                (event.clientY - rect.top) *
                (canvas.height / rect.height);

        });

    },

    // ===================================================
    // KEYBOARD HELPERS
    // ===================================================

    isKeyDown(key) {

        return this.keys[key.toLowerCase()] || false;

    },

    wasKeyPressed(key) {

        key = key.toLowerCase();

        if (this.justPressed[key]) {

            this.justPressed[key] = false;
            return true;

        }

        return false;

    }

};