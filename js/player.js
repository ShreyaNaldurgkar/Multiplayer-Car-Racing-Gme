class Player {
    constructor() {
        this.distance = 0;
        this.name = null;
        this.index = null;
        this.rank = null;
    }
    getPlayerCount() {
        database.ref('playerCount').on("value", (data) => {
            playerCount = data.val();
        })
    }

    getCarsAtEnd(){
        database.ref('carAtEnd').on("value", (data) =>{
            this.rank = data.val();

        })
    }
    updatePlayerCount(count) {
        database.ref('/').update({
            playerCount: count
        })

    }
    updateInfo() {
        var playersRef = database.ref("players/player" + this.index);
        playersRef.update({
            name: this.name,
            distance: this.distance
        });
    }

     
    static getAllPlayers() {
    
        var playersRef = database.ref("players")
        playersRef.on("value", (data) => { allPlayers = data.val() })


    }

    static updateCarsAtEnd(rank){
        database.ref('/').update({
            carAtEnd:rank
        })
        
        


    }

}