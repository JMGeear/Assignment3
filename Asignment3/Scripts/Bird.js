// Bird Class
var Bird = (function () {
    function Bird() {
        this.image = new createjs.Bitmap(queues.getResult("bird"));
        this.height = this.image.getBounds().height;
        this.width = this.image.getBounds().width;
        this.image.regY = this.height * 0.5;
        this.image.regX = this.width * 0.5;

        this.image.x = 400;

        stage.addChild(this.image);
    }
    Bird.prototype.update = function () {
        this.image.x = stage.mouseY;
    };
    return Bird;
})();
//# sourceMappingURL=Bird.js.map
