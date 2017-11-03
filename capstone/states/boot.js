// define bootState, boot state will simply start physics system and call the loadState
var bootState = {
    create: function() {

        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.state.start('load');

    }
};