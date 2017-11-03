// menuState displays game title, and start button

// var menuState = {
//     create: function() {
//         console.log('test456');
//         var gameTitle = game.add.text(400, 300, 'Space Explorer', {font: '30px Courier', fill:'#fffff'});
//         gameTitle.anchor.setTo(0.5,0.5);
//
//         var playBtn = game.add.text(400, 350, 'Press Enter to Play', {font:'30px Courier', fill:'#fffff'});
//         playBtn.anchor.setTo(0.5,0.5);
//
//         // define enter key with phaser and call start function when user presses it
//         var Enterkey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
//         Enterkey.onDown.addOnce(this.start, this);
//         //this.start();
//     },
//     start: function() {
//         console.log('test789');
//         game.state.start('play');
//     }
// };