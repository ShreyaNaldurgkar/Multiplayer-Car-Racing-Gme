var database, player;
var form;
var playerCount = 0;
 function setup(){
     createCanvas(600,600);
     database = firebase.database();
     form = new Form()
     form.display();
     player = new Player();
 }

 function draw(){
     background("yellow");
     
 }