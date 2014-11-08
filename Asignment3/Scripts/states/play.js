﻿/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/pig.ts" />
/// <reference path="../objects/egg.ts" />
/// <reference path="../objects/sky.ts" />
/// <reference path="../objects/bird.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    function playState() {
        sky.update();
        egg.update();
        bird.update();

        for (var count = 0; count < constants.PIG_NUM; count++) {
            pigs[count].update();
        }

        collisionCheck();

        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    function Play() {
        game = new createjs.Container();

        sky = new objects.Sky(game);
        egg = new objects.Egg(game);
        bird = new objects.Bird(game);

        for (var count = 0; count < constants.PIG_NUM; count++) {
            pigs[count] = new objects.Pig(game);
        }

        scoreboard = new objects.Scoreboard(game);

        stage.addChild(game);
    }
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
