class Example1 extends Phaser.Scene {
    constructor() {
        super({key:"Example1"})
    }

    preload() {
        // http://fa2png.io/r/font-awesome/play-circle-o/ --> generate png font awesome
        this.load.image('play-circle', 'assets/play-circle.png');
    }

    create() {
        this.image = this.add.image(400,300,'play-circle');

        this.input.keyboard.on('keyup', function (e) {
            if(e.key == "2") {
                this.scene.start("Example2");
            }
        }, this);
    }
}
