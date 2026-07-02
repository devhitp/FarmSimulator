const Input = {
    keys: {},
    justPressed: {},
    init() {
        window.addEventListener("keydown", (event) => {
            const key = event.key.toLowerCase();

            if (!this.keys[key]) {
                this.justPressed[key] = true;
            }

            this.keys[key] = true;
        });
        window.addEventListener("keyup", (event) => {
            const key = event.key.toLowerCase();

            this.keys[key] = false;
        });
    },
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