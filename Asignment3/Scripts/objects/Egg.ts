﻿module objects {
    // Egg Class
    export class Egg extends objects.GameObject {
        dx: number;
        constructor(game: createjs.Container) {
            super("egg", game);
            this.dx = 5;
            stage.addChild(this);
            this.reset();
        }

        reset() {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
        }

        update() {
            this.x -= this.dx;
            if (this.x < -(stage.canvas.width + this.width)) {
                this.reset();
            }

        }
    }
}