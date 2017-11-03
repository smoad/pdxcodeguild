var player;
var spaceGems;
var asteroids;
var timer = 0;
var score = 0;
var gameOverText;
var background;

var playState = {

    create: function () {
        console.log('playstate - create');
        background = game.add.tileSprite(0, 0, 800, 600, 'background');

        // astronaut
        player = game.add.sprite(200, 100, 'astronaut');
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 150;
        player.body.collideWorldBounds = true;
        keyboard = game.input.keyboard;
        cursors = game.input.keyboard.createCursorKeys();
        scoreText = game.add.text(16, 16, 'score:0', {font: '24px arial', fill: '#fff'});

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
        asteroids.createMultiple(5, 'asteroid');
        asteroids.setAll('checkWorldBounds', true);
        asteroids.setAll('outOfBoundsKill', true);
        this.createAsteroids();
    },

    createSpaceGem: function () {
        console.log('playstate - createspacegem');
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
        console.log('playstate - createasteroids');
        var MIN_SPACING = 300;
        var MAX_SPACING = 3000;
        var SPEED = -250;

        var asteroid = asteroids.getFirstExists(false);
        if (asteroid) {
            asteroid.reset(game.width, game.rnd.integerInRange(0, game.height));
            asteroid.body.velocity.x = SPEED;
        }

        game.time.events.add(game.rnd.integerInRange(MIN_SPACING, MAX_SPACING), function() {this.createAsteroids()}, this);
    },


    update: function () {
        console.log('playstate - update');
        if (player.alive) {
            timer++;
            background.tilePosition.x -= 3;
            if (keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                player.body.velocity.y = -100;
            }
            if (timer / 100 % 1 === 0) {
                score += 1;
                scoreText.text = 'score:' + score;
            }
            game.physics.arcade.overlap(player, spaceGems, this.spaceGemCollision, null, this);
            game.physics.arcade.overlap(player, asteroids, this.asteroidCollision, null, this);
        }
    },

    spaceGemCollision: function (player, spaceGem) {
        console.log('playstate - gem collision');
        spaceGem.kill();
        score += 10;
        scoreText.text = 'score:' + score;
    },

    asteroidCollision: function (player, asteroid) {
        console.log('playstate - asteroid collision');
        asteroid.kill();
        player.kill();
        this.gameover();


    },

    gameover: function (player, asteroid) {
        gameOverText = game.add.text(400, 300, 'GAME OVER!\n      score:' + score, {
            font: '80px arial',
            fill: '#fff',});
        gameOverText.anchor.setTo(0.5,0.5);
        restartText = game.add.text(400, 500, 'Press Enter To Restart', {font: '40px arial', fill: '#fff'});
        restartText.anchor.setTo(0.5, 0.5);
    }


    // restart: function() {
    //
    // }

    //the "click to restart" handler
//        game.input.onTap.addOnce(restart,this);


};