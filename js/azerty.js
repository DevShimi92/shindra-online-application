// Create a new scene
let gameScene = new Phaser.Scene('Game');
// let titleScene = new titleScene();

// Load assets
gameScene.preload = function() {

    this.load.image('background_image', 'assets/shindra.jpg');
};

// called once after the preload ends
gameScene.create = function() {

    let background = this.add.sprite(0, 0, 'background_image');
        background.setOrigin(0, 0);
        background = this.add.text(50, 50, 'Press A Key to Start');
        // let title_text = this.add.text(100, 100, 'Shindra Online');
}
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
    scene: gameScene
};

let game = new Phaser.Game(config);
// game.scene.add('TitleScene', titleScene);
// game.scene.start('TitleScene');