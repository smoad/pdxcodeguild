var usernameState = {

    create: function() {
        var usernameOverlay;
        var submitbtn;
        background = game.add.tileSprite(0, 0, 800, 600, 'background');
        usernameOverlay = document.getElementById('usernameOverlay').style.display = 'block';
        submitbtn = document.getElementById('usernameBtn').onclick = this.loadState;



    },
    loadState: function() {
        usernameOverlay.style.display = 'none';
        game.state.start('menu')
    },
    update: function() {
        background.tilePosition.x -= 4;
    }

};







    // }



