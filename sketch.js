var database, player;
var form;
var game;
var gameState=0;
var playerCount = 0;
var allPlayers;
var car1, car2, car3, car4, cars, ground;
var car1img, car2img, car3img, car4img, trackimg, groundImg;

function preload(){
    car1img = loadImage("images/car1.png");
    car2img = loadImage("images/car2.png");
    car3img = loadImage("images/car3.png");
    car4img = loadImage("images/car4.png");
    trackimg = loadImage("images/track.jpg");
    groundImg = loadImage("images/ground.png");


}


function setup() {
    createCanvas(displayWidth, displayHeight);
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