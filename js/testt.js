// Create a new scene
let gameScene = new Phaser.Scene('Game');
// let titleScene = new titleScene();

// Load assets
gameScene.preload = function() {

    // this.load.setBaseURL('http://labs.phaser.io');
    // Load images
    // this.load.image('sky', 'assets/skies/space3.png');
    // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    // this.load.image('red', 'assets/particles/red.png');
    this.load.image('background_image', 'assets/shindra.jpg');
    this.load.image('play-circle', 'assets/play-circle.png');
};

// called once after the preload ends
gameScene.create = function() {
    // this.add.image(400, 300, 'sky');

    //     var particles = this.add.particles('red');

    //     var emitter = particles.createEmitter({
    //         speed: 100,
    //         scale: { start: 1, end: 0 },
    //         blendMode: 'ADD'
    //     });

    //     var logo = this.physics.add.image(400, 100, 'logo');

    //     logo.setVelocity(100, 200);
    //     logo.setBounce(1, 1);
    //     logo.setCollideWorldBounds(true);

    //     emitter.startFollow(logo);
        this.background = this.add.sprite(0, 0, 'background_image');
        this.background.setOrigin(0, 0);
        this.background = this.add.text(400, 550, 'Press A Key to Start...');
        this.image = this.add.sprite(500, 450, 'play-circle');
        this.image.setScale(0.4);

        // let title_text = this.add.text(100, 100, 'Shindra Online');
}



// game.scene.add('TitleScene', titleScene);
// game.scene.start('TitleScene');