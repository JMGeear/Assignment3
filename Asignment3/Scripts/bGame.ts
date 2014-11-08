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

var stage: createjs.Stage;
var game: createjs.Container;

// game objects
var bird: objects.Bird;
var egg: objects.Egg;
var pigs = [];
var sky: objects.Sky;
var scoreboard: objects.Scoreboard;

var currentState: number;
var currentStateFunction;


// Preload function
function preload(): void {
    managers.Asset.init();
    managers.Asset.loader.addEventListener("complete", init);

}

function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);

    currentState = constants.MENU_STATE;
    changeState(currentState);

    gameStart();
}

// Game Loop
function gameLoop(event): void {

    currentStateFunction();

    stage.update();
}

function changeState(state: number) {

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

function distance(point1: createjs.Point, point2: createjs.Point): number {
    var p1: createjs.Point;
    var p2: createjs.Point;
    var theXs: number;
    var theYs: number;
    var result: number;

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
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();

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
function birdAndPig(thePig: objects.Pig) {
    var p1: createjs.Point = new createjs.Point();
    var p2: createjs.Point = new createjs.Point();
    var pig: objects.Pig = new objects.Pig(game);

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

function gameStart(): void {

    }