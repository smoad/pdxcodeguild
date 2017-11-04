var player;
var spaceGems;
var asteroids;
var timer = 0;
var score = 0;
var gameOverText;
var replayBtn;
var background;
var restartKey;

var playState = {

    create: function () {
        //console.log('playstate - create');
        background = game.add.tileSprite(0, 0, 800, 600, 'background');

        // astronaut
        player = game.add.sprite(200, 100, 'astronaut');
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0.8;
        player.body.gravity.y = 250;
        player.body.collideWorldBounds = true;
        keyboard = game.input.keyboard;
        cursors = game.input.keyboard.createCursorKeys();
        scoreText = game.add.text(16, 16, 'score:0', {font: '24px broadway', fill: '#fff'});

        //spaceGems
        spaceGems = game.add.group();
        game.physics.arcade.enable(spaceGems);
        spaceGems.enableBody = true;
        spaceGems.createMultiple(5, 'spaceGem');
        spaceGems.setAll('checkWorldBounds', true);
        spaceGems.setAll('outOfBoundsKill', true);

        this.createSpaceGem();

        asteroids = game.add.group();
        game.physics.arcade.enable(asteroids);
        asteroids.enableBody = true;
        asteroids.createMultiple(8, 'asteroid');
        asteroids.setAll('checkWorldBounds', true);
        asteroids.setAll('outOfBoundsKill', true);
        this.createAsteroids();
    },

    createSpaceGem: function () {
        //console.log('playstate - createspacegem');
        var MIN_SPACING = 300;
        var MAX_SPACING = 3000;
        var SPEED = -200;

        var spaceGem = spaceGems.getFirstExists(false);
        if (spaceGem) {
            spaceGem.reset(game.width, game.rnd.integerInRange(0, game.height));
            spaceGem.body.velocity.x = SPEED;
        }

        game.time.events.add(game.rnd.integerInRange(MIN_SPACING, MAX_SPACING), function() {this.createSpaceGem()}, this);
    },

    createAsteroids: function () {
        //console.log('playstate - createasteroids');
        var MIN_SPACING = 300;
        var MAX_SPACING = 3000;
        var SPEED = -300;

        var asteroid = asteroids.getFirstExists(false);
        if (asteroid) {
            asteroid.reset(game.width, game.rnd.integerInRange(0, game.height));
            asteroid.body.velocity.x = SPEED;
        }

        game.time.events.add(game.rnd.integerInRange(MIN_SPACING, MAX_SPACING), function() {this.createAsteroids()}, this);
    },


    update: function () {
        //console.log('playstate - update');
        if (player.alive) {
            timer++;
            background.tilePosition.x -= 3;
            if (keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                player.body.velocity.y = -100;
            }
            if (timer / 100 % 1 === 0) {
                score += 1;
                scoreText.text = 'score: ' + score;
            }
            game.physics.arcade.overlap(player, spaceGems, this.spaceGemCollision, null, this);
            game.physics.arcade.overlap(player, asteroids, this.asteroidCollision, null, this);
        }
    },

    spaceGemCollision: function (player, spaceGem) {
        //console.log('playstate - gem collision');
        spaceGem.kill();
        score += 10;
        scoreText.text = 'score:' + score;
    },

    asteroidCollision: function (player, asteroid) {
        //console.log('playstate - asteroid collision');
        asteroid.kill();
        player.kill();
        this.gameover();


    },

    gameover: function (player, asteroid) {
        gameOverText = game.add.sprite(400, 175, 'gameOver');
        gameOverText.anchor.setTo(0.5, 0.5);
          // place the reset button
        replayBtn = game.add.sprite(400, 500, 'replayBtn');
        replayBtn.anchor.setTo(0.5, 0.5);

        // Enable input on the button...
        replayBtn.inputEnabled = true;



        // Attach a function to the input down ( click/tap)
        replayBtn.events.onInputDown.add(function() {
            console.log('!!');


            this.game.state.start('play');
        }, this);

    }





    //the "click to restart" handler
//        game.input.onTap.addOnce(restart,this);


};