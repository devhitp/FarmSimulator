// ===================================================
// PARTICLE MANAGER
// Handles all particle effects in the game.
// ===================================================

const ParticleManager = {

    particles: [],

    spawn(x, y, color, count = 8) {

        for (let i = 0; i < count; i++) {

            this.particles.push({

                x: x,
                y: y,

                vx: (Math.random() - 0.5) * 80,
                vy: (Math.random() - 0.5) * 80,

                size: Math.random() * 4 + 2,

                life: 0.5,

                color: color

            });

        }

    },

    update(deltaTime) {

        const dt = deltaTime / 1000;

        for (let i = this.particles.length - 1; i >= 0; i--) {

            const p = this.particles[i];

            p.x += p.vx * dt;
            p.y += p.vy * dt;

            p.life -= dt;

            if (p.life <= 0) {
                this.particles.splice(i, 1);
            }

        }

    },

    draw(ctx) {

        for (const p of this.particles) {

            ctx.fillStyle = p.color;

            ctx.fillRect(
                p.x,
                p.y,
                p.size,
                p.size
            );

        }

    }

};