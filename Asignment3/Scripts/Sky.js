// Sky Class
var Sky = (function () {
    function Sky() {
        this.image = new createjs.Bitmap(queues.getResult("sky"));
        this.height = this.image.getBounds().height;
        this.width = this.image.getBounds().width;
        this.dx = 5;
        stage.addChild(this.image);
        this.reset();
    }
    Sky.prototype.reset = function () {
        this.image.x = -this.height + stage.canvas.width;
    };

    Sky.prototype.update = function () {
        this.image.y += this.dx;
        if (this.image.y >= 0) {
            this.reset();
        }
    };
    return Sky;
})();
//# sourceMappingURL=Sky.js.map
