var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Bird Class
    var bird = (function (_super) {
        __extends(bird, _super);
        function bird(game) {
            _super.call(this, "bird", game);
            this.x = 80;

            stage.addChild(this);
        }
        bird.prototype.update = function () {
            this.y = stage.mouseY;
        };
        return bird;
    })(objects.GameObject);
    objects.bird = bird;
})(objects || (objects = {}));
//# sourceMappingURL=bird.js.map
