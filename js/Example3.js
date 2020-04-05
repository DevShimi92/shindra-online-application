class Example3 extends Phaser.Scene {
    constructor() {
        super({key:"Example3"})
    }

    preload() {
        // http://fa2png.io/r/font-awesome/play-circle-o/ --> generate png font awesome
        this.load.spritesheet('as-black', 'assets/asB01.png', 167, 243);
    }

    create() {
        this.image = this.add.sprite(this.width / 2, this.height / 2,'as-black');

        this.input.keyboard.on('keyup', function (e) {
            if(e.key == "2") {
                this.scene.start("Example3");
            }
        }, this);
    }
}
