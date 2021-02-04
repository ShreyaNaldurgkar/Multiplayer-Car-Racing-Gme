class Game {
    constructor() {

    }
    getgamestate() {
        //to get the value of gamestate from the database
        var gamestateref = database.ref('gameState');
        gamestateref.on("value", function (data) {
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
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getPlayerCount()

            }


            form = new Form();
            form.display();

        }
        car1 = createSprite(100, 200, 50, 50);
        car1.addImage(car1img);

        car2 = createSprite(300, 200, 50, 50);
        car2.addImage(car2img);

        car3 = createSprite(500, 200, 50, 50);
        car3.addImage(car3img);

        car4 = createSprite(700, 200, 50, 50);
        car4.addImage(car4img);

        cars = [car1, car2, car3, car4]


    }
    play() {
        console.log("game has started");
        form.hide();
        Player.getAllPlayers();
        console.log(allPlayers)

        image(trackimg,0,-displayHeight*4,displayWidth, displayHeight*5)

        if (allPlayers !== undefined) {
            var index = 0;
            var x = 200;
            var y;
            for (var plr in allPlayers) {
                index = index + 1;
                x = x + 220
                y = displayHeight - allPlayers[plr].distance
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if (index == player.index) {
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y
                    cars[index - 1].shapeColor = "red"
                    stroke ("green");
                    strokeWeight(4);
                    ellipse(x,y,60,60);

                }

            }




        }

        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance = player.distance + 10
            player.updateInfo();

        }
        drawSprites();
    }
    end() {

    }
}
