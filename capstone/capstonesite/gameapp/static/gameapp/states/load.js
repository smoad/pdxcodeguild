// loadState will display loading label, preload assets and call menuState

var loadState = {
    preload: function () {
        var loadingLabel = game.add.text(400, 300, 'loading', {font: '30px Courier', fill: "#fffff"});
        loadingLabel.anchor.setTo(0.5, 0.5);

        game.load.image('astronaut', "{% 'static/assets/astronaut.png' %}");
        game.load.image('spaceGem', "{% 'gameapp/static/assets/spaceGem.png' %}");
        game.load.image('background', "{% 'gameapp/static/assets/background.png' %}");
        game.load.image('gametitle', "{% 'gameapp/static/assets/gametitle.png' %}");
        game.load.image('playbtn', "{% 'gameapp/static/assets/playbtn.png' %}");
        game.load.image('replayBtn', "{% 'gameapp/static/assets/replayBtn.png' %}");
        game.load.image('backBtn', "{% 'gameapp/static/assets/backBtn.png' %}");
        game.load.image('gameOver', "{% 'gameapp/static/assets/gameover.png' %}");
        game.load.image('ground', "{% 'gameapp/static/assets/ground.png' %}");
        game.load.image('asteroid', "{% 'gameapp/static/assets/asteroid.png' %}");


    },

    create: function() {
        game.state.start('username');
    }
};