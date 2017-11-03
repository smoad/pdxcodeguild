// var gameoverState= {
//
//     create: function() {
//         var gameOver = game.add.text(400,300, 'GAMEOVER!', {font: '30px ariel', fill:'#fffff'});
//         gameOver.anchor.setTo(0.5,0.5);
//
//         var restart = game.add.text(400, 350, 'Press Enter To Restart', {font: '30px ariel', fill:"#fffff"});
//         restart.anchor.setTo(0.5,0.5);
//
//         var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.Enter);
//         enterKey.onDown.addOnce(this.start, this);
//
//     },
//
//     restart: function() {
//         game.state.start('menu');
//     }
//
// };