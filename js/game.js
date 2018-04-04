var gameProperties = {
    screenWidth: 640,
    screenHeight: 480,
};

var states = {
    game: "game",
};

var gameState = function(game){

};

gameState.prototype = {

    preload: function () {

    },

    // Used to preload all game assets, incl. images, sound, data etc.

    create: function () {

    },

    // This is the first function to run once a game has been created.

    update: function () {

    },

    // This is out game looop. As we are using the Phaser framework, it runs
    // at 60 fps.
};

// This is where we declare the gameState object.  It will contain all logic
// for the game.

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
// Notice the game object requires four arguments.
// (1) The first argument is the canvas width.
// (2) The second argument is the canvas height.
// (3) The third argument is the renderer that will be used. Here, Phaser.AUTO
//     is used to automatically detect whether to use the WebGL or Canvas
//     renderer.
// (4) The fourth argument is the element id we will use, in this case it is
//     gameDiv, which is the element id we used above in the index.html file
//     where the canvas element is inserted.

game.state.add(states.game, gameState);
// Adding a state to the game object requires two arguments.
// (1) The first argument is the state name that will is used when switching
//     between states.
// (2) The second argument is the declared object that will used when a state
//     name is called.

game.state.start(states.game);
