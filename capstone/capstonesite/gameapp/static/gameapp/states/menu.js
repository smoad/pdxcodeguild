//menuState displays game title, and start button



var username;
var menuOverlay;
var mainView;
var playBtn;
var instructionView;
var instructionBtn;


var menuState = {
    create: function() {



        background = game.add.tileSprite(0, 0, 800, 600, 'background');
        username = document.getElementById('username').value;
        // main menu
        menuOverlay = document.getElementById('menuOverlay');
        menuOverlay.style.display = 'block';
        mainView = document.getElementById('mainView');
        mainView.style.display = 'block';
        instructionBtn = document.getElementById('instructionBtn').onclick = this.showInstructionView;
        playBtn = document.getElementById('playBtn').onclick = this.loadplayState;
        // instructions
        instructionView = document.getElementById('instructionView').style.display = 'none';







    },
    showInstructionView: function() {
        mainView.style.display = 'none';
        instructionView.style.display = 'block';
        backBtn = document.getElementById('backButton');
        backBtn.style.display = 'block';
        //backBtn.onclick = this.showMainView;
        //console.log(this.showMainView);
        backBtn.onclick = function() {
            instructionView.style.display = 'none';
            mainView.style.display = 'block';
        }



    },
    loadplayState: function() {
        menuOverlay.style.display = 'none';
        game.state.start('play');
    },
    showMainView: function() {
        instructionView.style.display = 'none';
        mainView.style.display = 'block';
    },

    update: function() {
        background.tilePosition.x -= 4;
    }


};