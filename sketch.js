var database;
var form;
 function setup(){
     createCanvas(600,600);
     database = firebase.database();
     form = new Form()
 }

 function draw(){
     background("yellow");
     form.display();
 }