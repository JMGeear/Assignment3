var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Pig Class
    var pig = (function (_super) {
        __extends(pig, _super);
        function pig(game) {
            _super.call(this, "pig", game);

            this.game.addChild(this);
            this.reset();
        }
        pig.prototype.reset = function () {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * 2 - 1);
        };

        pig.prototype.update = function () {
            this.x -= this.dx;
            this.y -= this.dy;

            if (this.x < -(stage.canvas.width + this.width)) {
                this.reset();
            }
        };
        return pig;
    })(objects.GameObject);
    objects.pig = pig;
})(objects || (objects = {}));
//# sourceMappingURL=pig.js.map
