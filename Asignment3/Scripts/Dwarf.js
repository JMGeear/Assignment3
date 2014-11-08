var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Dwarf = (function (_super) {
    __extends(Dwarf, _super);
    function Dwarf(img, doc) {
        _super.call(this, new createjs.SpriteSheet({
            images: [img],
            frames: utils.SpriteSheet.getData(doc),
            animations: {
                stand: 0,
                fire: {
                    frames: 1,
                    next: 'stand',
                    speed: 0.8
                },
                run: [2, 11, true, 0.5],
                crouch: 15
            }
        }), 'stand');
    }
    return Dwarf;
})(createjs.Sprite);
//# sourceMappingURL=Dwarf.js.map
