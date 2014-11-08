var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Bird Class
    var Bird = (function (_super) {
        __extends(Bird, _super);
        function Bird(game) {
            _super.call(this, "bird", game);
            this.x = 80;

            stage.addChild(this);
        }
        Bird.prototype.update = function () {
            this.y = stage.mouseY;
        };
        return Bird;
    })(objects.GameObject);
    objects.Bird = Bird;
})(objects || (objects = {}));
//# sourceMappingURL=Bird.js.map
