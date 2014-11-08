﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Pig Class
    var Pig = (function (_super) {
        __extends(Pig, _super);
        function Pig(game) {
            _super.call(this, "pig", game);

            this.game.addChild(this);
            this.reset();
        }
        Pig.prototype.reset = function () {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * 4 - 2);
        };

        Pig.prototype.update = function () {
            this.x -= this.dx;
            this.y -= this.dy;

            if (this.x < -(stage.canvas.width + this.width)) {
                this.reset();
            }
        };
        return Pig;
    })(objects.GameObject);
    objects.Pig = Pig;
})(objects || (objects = {}));
//# sourceMappingURL=Pig.js.map
