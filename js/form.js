class Form{
 constructor(){
     this.title=createElement('h2');
     this.title.html("Mulitple Car Racing Game");
     this.input = createInput("name");
     this.button = createButton("Click me to start")
     this.message= createElement('h2')
 }
 display(){
     this.title.position(550,100);
     this.input.position(600,290);
     this.button.position(630,330);
     this.button.mousePressed(()=>{
         var name=this.input.value();
         console.log(name);
         this.input.hide();
         this.button.hide();
         this.message.html("Hello "+ name+" waiting for other players to join");
         this.message.position(440,330);
     })
 }
}