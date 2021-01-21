var database, player;
var form;
var game;
var gameState=0;
var playerCount = 0;
function setup() {
    createCanvas(600, 600);
    database = firebase.database();
    game = new Game();
    game.getgamestate();
    game.start();
}

function draw() {
    background("yellow");
    if(playerCount === 4){
        game.updategamestate(1);
    }
    if(gameState === 1){
        game.play();
    }

}