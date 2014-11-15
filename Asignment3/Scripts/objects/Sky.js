var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Sky Class
    var sky = (function (_super) {
        __extends(sky, _super);
        function sky(game) {
            _super.call(this, managers.asset.loader.getResult("sky"));
            this.height = this.getBounds().height;
            this.width = this.getBounds().width;
            this.game = game;
            this.dx = 5;
            stage.addChild(this);
            this.reset();
        }
        sky.prototype.reset = function () {
            this.x = stage.canvas.width * 3 - this.width;
        };

        sky.prototype.update = function () {
            this.x -= this.dx;
            if (this.x <= -1600) {
                this.reset();
            }
        };
        return sky;
    })(createjs.Bitmap);
    objects.sky = sky;
})(objects || (objects = {}));
//# sourceMappingURL=sky.js.map
