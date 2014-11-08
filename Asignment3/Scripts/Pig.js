// Pig Class
var Pig = (function () {
    function Pig() {
        this.image = new createjs.Bitmap(queues.getResult("pig"));
        this.width = this.image.getBounds().width;
        this.height = this.image.getBounds().height;
        this.image.regX = this.width * 0.5;
        this.image.regY = this.height * 0.5;

        stage.addChild(this.image);
        this.reset();
    }
    Pig.prototype.reset = function () {
        this.image.x = -this.width;
        this.image.y = Math.floor(Math.random() * stage.canvas.height);
        this.dx = Math.floor(Math.random() * 5 + 5);
        this.dy = Math.floor(Math.random() * 4 - 2);
    };

    Pig.prototype.update = function () {
        this.image.x += this.dx;
        this.image.y += this.dy;

        if (this.image.x > (this.width + stage.canvas.width)) {
            this.reset();
        }
    };
    return Pig;
})();
//# sourceMappingURL=Pig.js.map
