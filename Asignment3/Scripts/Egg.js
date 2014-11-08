// Egg Class
var Egg = (function () {
    function Egg() {
        this.image = new createjs.Bitmap(queues.getResult("egg"));
        this.height = this.image.getBounds().height;
        this.width = this.image.getBounds().width;
        this.image.regY = this.height * 0.5;
        this.image.regX = this.width * 0.5;
        this.dx = 5;
        stage.addChild(this.image);
        this.reset();
    }
    Egg.prototype.reset = function () {
        this.image.y = -this.height;
        this.image.x = Math.floor(Math.random() * stage.canvas.height);
    };

    Egg.prototype.update = function () {
        this.image.y += this.dx;
        if (this.image.y > (this.height + stage.canvas.width)) {
            this.reset();
        }
    };
    return Egg;
})();
//# sourceMappingURL=Egg.js.map
