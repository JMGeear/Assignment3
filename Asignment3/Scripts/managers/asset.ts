module managers {

    export class asset {

        static loader;
        static atlas: createjs.SpriteSheet;

        static spriteSheetData = {
            "images": ["assets/images/atlas.png"],
            "frames": [

                [219, 2, 320, 160],
                [541, 2, 320, 160],
                [863, 2, 65, 65],
                [930, 2, 65, 65],
                [863, 69, 65, 65],
                [930, 69, 62, 63],
                [2, 2, 215, 177]
            ],
            "animations": {

                "play": [0],
                "playagain": [1],
                "bird": {
                    frames: [2, 3, 4],
                    speed: 1
                },
                "egg": [5],
                "pig": [6],     

            }

        }

        static manifest = [
            { id: "sky", src: "assets/images/sky.jpg" },
            { id: "coin", src: "assets/sounds/coin.mp3" },
            { id: "anger", src: "assets/sounds/Stupid Girl.mp3" },
            { id: "pig", src: "assets/sounds/Pig.mp3" }
        ];

        static init() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(this.manifest);

            this.atlas = new createjs.SpriteSheet(this.spriteSheetData);

        }

    }
}  