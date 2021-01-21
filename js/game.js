class Game {
    constructor() {

    }
    getgamestate() {
        //to get the value of gamestate from the database
        var gamestateref = database.ref('gameState');
        gamestateref.on("value", function(data)  {
            gameState = data.val();
        })
    }
    updategamestate(state) {
        //to update the value of gamestate in database
        database.ref('/').update({
            gameState: state
        });

    }
    async start() {
        if(gameState===0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getPlayerCount()

            }

            form = new Form();
            form.display();

        }

    }
    play() {
    console.log("game has started");
    }
    end() {

    }
}
