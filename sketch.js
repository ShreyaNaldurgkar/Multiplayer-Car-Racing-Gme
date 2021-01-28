var database, player;
var form;
var game;
var gameState=0;
var playerCount = 0;
var allPlayers;
var car1, car2, car3, car4, cars;
function setup() {
    createCanvas(1200, 1200);
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