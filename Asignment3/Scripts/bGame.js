/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/bird.ts" />
/// <reference path="objects/egg.ts" />
/// <reference path="objects/pig.ts" />
/// <reference path="objects/sky.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/*bGame.ts
* Author: Jeff Geear
* Last Modified by: Jeff Geear
* Date last modified: Nov. 1/2014
* Description:
* Version #1
* Instructor Tom Tsiliopoulos
*/
var stage;
var game;

// game objects
var bird;
var egg;
var pigs = [];
var sky;
var scoreboard;

var currentState;
var currentStateFunction;

// Preload function
function preload() {
    managers.Asset.init();
    managers.Asset.loader.addEventListener("complete", init);
}

function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);

    currentState = constants.MENU_STATE;
    changeState(currentState);

    gameStart();
}

// Game Loop
function gameLoop(event) {
    currentStateFunction();

    stage.update();
}

function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            currentStateFunction = states.menuState;
            states.Menu();
            break;
        case constants.PLAY_STATE:
            currentStateFunction = states.playState;
            states.Play();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            states.GameOver();
            break;
        case constants.INSTRUCTIONS_STATE:
            break;
    }
}

function distance(point1, point2) {
    var p1;
    var p2;
    var theXs;
    var theYs;
    var result;

    p1 = new createjs.Point();
    p2 = new createjs.Point();

    p1.x = point1.x;
    p1.y = point1.y;
    p2.x = point2.x;
    p2.y = point2.y;

    theXs = p2.x - p1.x;
    theYs = p2.y - p1.y;

    theXs = theXs * theXs;
    theYs = theYs * theYs;

    result = Math.sqrt(theXs + theYs);

    return result;
}

// Check Collision with Bird and Egg
function birdAndEgg() {
    var p1 = new createjs.Point();
    var p2 = new createjs.Point();

    p1.x = bird.x;
    p1.y = bird.y;
    p2.x = egg.x;
    p2.y = egg.y;

    if (distance(p1, p2) <= ((bird.width * 0.5) + (egg.width * 0.5))) {
        createjs.Sound.play("coin");
        scoreboard.score += 100;
        egg.reset();
    }
}

// Check Collision with Bird and Pig
function birdAndPig(thePig) {
    var p1 = new createjs.Point();
    var p2 = new createjs.Point();
    var pig = new objects.Pig(game);

    pig = thePig;

    p1.x = bird.x;
    p1.y = bird.y;
    p2.x = pig.x;
    p2.y = pig.y;

    if (distance(p1, p2) <= ((bird.width * 0.5) + (bird.width * 0.5))) {
        createjs.Sound.play("pig");
        scoreboard.lives -= 1;
        pig.reset();
    }
}

function collisionCheck() {
    birdAndEgg();

    for (var count = 0; count < constants.PIG_NUM; count++) {
        birdAndPig(pigs[count]);
    }
}

function gameStart() {
}
//# sourceMappingURL=bGame.js.map
