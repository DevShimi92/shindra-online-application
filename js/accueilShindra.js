var accueilShindra = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function accueilShindra ()
    {
        Phaser.Scene.call(this, { key: 'accueilShindra' });
    },
    
    // Load assets
    preload: function() {
        this.load.image('background_image', 'assets/shindra.png');
        this.load.image('play-circle', 'assets/play-circle.png');
        this.load.image('background', 'assets/background.png');
        
    },

    // called once after the preload ends
    create: function() {
        this.add.image(800/2, 600/2,'background');
        this.background = this.add.sprite(-80, -80, 'background_image');
        this.background.setOrigin(0, 0);
        this.background = this.add.text(300, 550, 'Press A Key to Start...', {font: '25px Arial', fill: '#ffffff'});
        this.tween = this.tweens.add({
            targets: this.background,
            alpha: { from: 0, to: 1 },

            ease: 'Circ.easeIn',
            duration: 2000,
            repeat: -1,
            yoyo: false
        });
        this.image = this.add.sprite(400, 350, 'play-circle');
        this.image.setScale(0.2);

        this.input.keyboard.on('keyup', function (e) {
            if(e.key == "a") {
                this.scene.start("platformGame");
            }
        }, this);
    },
    start: function() {
        this.scene.start("platformGame");
    }
})