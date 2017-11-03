// create phaser game

var game = new Phaser.Game(800, 600, Phaser.Auto, 'gameDiv');

// add game states, start boot state
game.state.add('boot', bootState);
game.state.add('load', loadState);

game.state.add('play', playState);


game.state.start('boot');

