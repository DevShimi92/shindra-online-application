// Set the configuration of the game
let config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [Example1, Example2 ]
};

let game = new Phaser.Game(config);