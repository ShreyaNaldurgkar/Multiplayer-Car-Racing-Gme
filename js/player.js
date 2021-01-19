class Player {
    constructor() {
        this.distance = 0;
        this.name = null;
        this.index = null;
    }
    getPlayerCount() {
        database.ref('playerCount').on("value", (data) => {
            playerCount = data.val();
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
}