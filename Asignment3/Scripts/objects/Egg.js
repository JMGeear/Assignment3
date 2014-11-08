var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Egg Class
    var Egg = (function (_super) {
        __extends(Egg, _super);
        function Egg(game) {
            _super.call(this, "egg", game);
            this.dx = 5;
            stage.addChild(this);
            this.reset();
        }
        Egg.prototype.reset = function () {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
        };

        Egg.prototype.update = function () {
            this.x -= this.dx;
            if (this.x < -(stage.canvas.width + this.width)) {
                this.reset();
            }
        };
        return Egg;
    })(objects.GameObject);
    objects.Egg = Egg;
})(objects || (objects = {}));
//# sourceMappingURL=Egg.js.map
