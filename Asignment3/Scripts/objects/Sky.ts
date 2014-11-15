module objects {
    // Sky Class
    export class sky extends createjs.Bitmap {
        width: number;
        height: number;
        game: createjs.Container;
        dx: number;
        constructor(game: createjs.Container) {
            super(managers.asset.loader.getResult("sky"));
            this.height = this.getBounds().height;
            this.width = this.getBounds().width;
            this.game = game;
            this.dx = 5;
            stage.addChild(this);
            this.reset();
        }

        reset() {
            this.x = stage.canvas.width * 3 - this.width;

        }

        update() {
            this.x -= this.dx;
            if (this.x <= -1600) {
                this.reset();
            }

        }
    }
}