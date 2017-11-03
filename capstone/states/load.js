// loadState will display loading label, preload assets and call menuState
var loadState = {
    preload: function () {
        var loadingLabel = game.add.text(400, 300, 'loading', {font: '30px Courier', fill: "#fffff"});
        loadingLabel.anchor.setTo(0.5, 0.5);

        game.load.image('astronaut', 'assets/astronaut.png');
        game.load.image('spaceGem', 'assets/spaceGem.png');
        game.load.image('background', 'assets/background.png');
        game.load.image('gametitle', 'assets/gametitle.png');
        game.load.image('ground', 'assets/ground.png');
        game.load.image('asteroid', 'assets/asteroid.png');

    },

    create: function() {
        console.log('test123');
        game.state.start('play');
    }
};