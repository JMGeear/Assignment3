/*game.ts
* Author: Jeff Geear
* Last Modified by: Jeff Geear
* Date last modified: Nov. 1/2014
* Description:
* Version #1
* Instructor Tom Tsiliopoulos
*/
var stage;
var queue;

// game objects
var bird;
var egg;
var pigs = [];
var sky;
var scoreboard;

// game constants
var PIG_NUM = 3;
var PLAYER_LIVES = 3;
var GAME_FONT = "40px Consolas";
var FONT_COLOUR = "#FFFF00";

// Preload function
function preload() {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", init);
    queue.loadManifest([
        { id: "bird", src: "images/angry-bird-icon.png" },
        { id: "egg", src: "images/egg.png" },
        { id: "pig", src: "images/pig angry birds.png" },
        { id: "sky", src: "images/sky.png" },
        { id: "yay", src: "sounds/yay.ogg" },
        { id: "thunder", src: "sounds/thunder.ogg" }
    ]);
}

function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    gameStart();
}

// Game Loop
function gameLoop(event) {
    sky.update();
    egg.update();
    bird.update();

    for (var count = 0; count < PIG_NUM; count++) {
        pigs[count].update();
    }

    collisionCheck();

    scoreboard.update();

    stage.update();
}

//function gameStart(): void {
//    // Add code here
//    // Some example code here - to be replaced
//    var placeholder = new createjs.Bitmap(queue.getResult('loading'));
//    placeholder.regX = placeholder.image.width / 2;
//    placeholder.regY = placeholder.image.height / 2;
//    placeholder.x = stage.canvas.width / 2;
//    placeholder.y = stage.canvas.height / 2;
//    stage.addChild(placeholder);
//    createjs.Sound.play("yay");
//}
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

// Check Collision with Plane and Island
function birdAndEgg() {
    var p1 = new createjs.Point();
    var p2 = new createjs.Point();

    p1.x = bird.image.x;
    p1.y = bird.image.y;
    p2.x = egg.image.x;
    p2.y = egg.image.y;

    if (distance(p1, p2) <= ((bird.height * 0.5) + (egg.height * 0.5))) {
        createjs.Sound.play("yay");
        scoreboard.score += 100;
        egg.reset();
    }
}

// Check Collision with Plane and Cloud
function birdAndPig(thePig) {
    var p1 = new createjs.Point();
    var p2 = new createjs.Point();
    var pig = new Pig();

    pig = thePig;

    p1.x = bird.image.x;
    p1.y = bird.image.y;
    p2.x = pig.image.x;
    p2.y = pig.image.y;

    if (distance(p1, p2) <= ((bird.height * 0.5) + (bird.height * 0.5))) {
        createjs.Sound.play("thunder");
        scoreboard.lives -= 1;
        pig.reset();
    }
}

function collisionCheck() {
    birdAndEgg();

    for (var count = 0; count < PIG_NUM; count++) {
        birdAndPig(pigs[count]);
    }
}

function gameStart() {
    sky = new Sky();
    egg = new Egg();
    bird = new Bird();

    for (var count = 0; count < PIG_NUM; count++) {
        pigs[count] = new Pig();
    }

    scoreboard = new Scoreboard();
}
//# sourceMappingURL=game.js.map
