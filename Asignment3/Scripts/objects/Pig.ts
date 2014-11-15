module objects {
    // Pig Class
    export class pig extends objects.GameObject {
        dy: number;
        dx: number;
        constructor(game: createjs.Container) {
            super("pig",game);

            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * 2 - 1);

        }

        update() {
            this.x -= this.dx;
            this.y -= this.dy;

            if (this.x < -(stage.canvas.width + this.width)) {
                this.reset();
                

            }

        }
    }
}