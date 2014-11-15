module objects {
    // Bird Class
    export class bird extends objects.GameObject {
        constructor(game: createjs.Container) {
            super("bird", game);
            this.x = 80;

            stage.addChild(this);
        }

        update() {
            this.y = stage.mouseY;
        }
    }
}