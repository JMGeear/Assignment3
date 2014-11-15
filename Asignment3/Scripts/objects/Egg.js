var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Egg Class
    var egg = (function (_super) {
        __extends(egg, _super);
        function egg(game) {
            _super.call(this, "egg", game);
            this.dx = 7;
            stage.addChild(this);
            this.reset();
        }
        egg.prototype.reset = function () {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
        };

        egg.prototype.update = function () {
            this.x -= this.dx;
            if (this.x < -(stage.canvas.width + this.width)) {
                this.reset();
            }
        };
        return egg;
    })(objects.GameObject);
    objects.egg = egg;
})(objects || (objects = {}));
//# sourceMappingURL=egg.js.map
