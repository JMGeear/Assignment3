﻿/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/pig.ts" />
/// <reference path="../objects/egg.ts" />
/// <reference path="../objects/sky.ts" />
/// <reference path="../objects/bird.ts" />
var states;
(function (states) {
    function menuState() {
        sky.update();
        bird.update();
    }
    states.menuState = menuState;

    function Menu() {
        var angryBirdsText;

        game = new createjs.Container();

        sky = new objects.Sky(game);

        bird = new objects.Bird(game);

        angryBirdsText = new createjs.Text("Anger Management", constants.GAME_FONT, constants.FONT_COLOUR);
        angryBirdsText.regY = angryBirdsText.getBounds().height * 0.5;
        angryBirdsText.regX = angryBirdsText.getBounds().width * 0.5;
        angryBirdsText.y = stage.canvas.height * 0.5;
        angryBirdsText.x = stage.canvas.width * 0.5;
        game.addChild(angryBirdsText);

        angryBirdsText.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });

        stage.addChild(game);
    }
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
