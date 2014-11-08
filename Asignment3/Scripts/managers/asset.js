var managers;
(function (managers) {
    var Asset = (function () {
        function Asset() {
        }
        Asset.init = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(this.manifest);

            this.atlas = new createjs.SpriteSheet(this.spriteSheetData);
        };
        Asset.spriteSheetData = {
            "images": ["assets/images/atlas.png"],
            "frames": [
                [219, 2, 65, 65],
                [286, 2, 65, 65],
                [219, 69, 65, 65],
                [286, 69, 62, 63],
                [2, 2, 215, 177]
            ],
            "animations": {
                "bird": {
                    frames: [0, 1, 2],
                    speed: 1
                },
                "egg": [3],
                "pig": [4]
            }
        };

        Asset.manifest = [
            { id: "sky", src: "assets/images/sky.jpg" },
            { id: "coin", src: "assets/sounds/coin.mp3" },
            { id: "pig", src: "assets/sounds/Pig.mp3" }
        ];
        return Asset;
    })();
    managers.Asset = Asset;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
