// Scoreboard Class
var Scoreboard = (function () {
    function Scoreboard() {
        this.labelString = "";
        this.lives = PLAYER_LIVES;
        this.score = 0;
        this.label = new createjs.Text(this.labelString, GAME_FONT, FONT_COLOUR);
        this.update();
        this.width = this.label.getBounds().width;
        this.height = this.label.getBounds().height;

        stage.addChild(this.label);
    }
    Scoreboard.prototype.update = function () {
        this.labelString = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
        this.label.text = this.labelString;
    };
    return Scoreboard;
})();
//# sourceMappingURL=Scoreboard.js.map
