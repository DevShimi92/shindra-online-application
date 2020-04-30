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
        
    },

    // called once after the preload ends
    create: function() {
        
        this.background = this.add.sprite(-80, -80, 'background_image');
        this.background.setOrigin(0, 0);
        this.background = this.add.text(300, 550, 'Press A Key to Start...');
        this.tween = this.tweens.add({
            targets: this.background,
            alpha: { from: 0, to: 1 },
            // alpha: { start: 0, to: 1 },
            // alpha: 1,
            // alpha: '+=1',
            ease: 'Circ.easeIn',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 2000,
            repeat: -1,            // -1: infinity
            yoyo: false
        });
        this.image = this.add.sprite(400, 350, 'play-circle');
        this.image.setScale(0.2);

        this.input.keyboard.on('keyup', function (e) {
            if(e.key == "a") {
                this.scene.start("Example2");
            }
        }, this);
    //     this.title_text = this.add.title_text(100, 100, 'Press A Key to Start');
    }
})
    

    

// export default Example1
