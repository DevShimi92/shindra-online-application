class Example2 extends Phaser.Scene {
    constructor() {
        super({key:"Example2"});
        
    }

    create() {
        let clickCount = 0;
        this.clickCountText = this.add.text(100, 200, '');

        this.text = this.add.text(0,0,"Welcome to Example2!", { font: "80px Roboto Condensed"});
    
        const clickButton = this.add.text(100, 100, 'Click me!', { font: "80px Roboto Condensed",fill: '#0f0' })
            .setInteractive()
            .on('pointerdown', () => this.updateClickCountText(++clickCount) );
    
        this.updateClickCountText(clickCount);
        
        this.input.keyboard.on('keyup', function (e) {
            if(e.key == "2") {
                this.scene.start("Example3");
            }
        }, this);
        }


    
        updateClickCountText(clickCount) {
        this.clickCountText.setText(`Button has been clicked ${clickCount} times.`);
        }

        enterButtonHoverState() {
            this.clickButton.setStyle({ fill: '#ff0'});
        }
      
        enterButtonRestState() {
          this.clickButton.setStyle({ fill: '#0f0' });
        
        }

        
//         let clickCount = 0;
//         this.clickCountText = this.add.text(100, 200, '');

        
//         this.text = this.add.text(0,0,"Welcome to Example2!", { font: "80px Roboto Condensed"});
        
//         const helloButton = this.add.text(100, 100, 'Click me !', { font: "80px Roboto Condensed", fill: '#0f0' })
//             .setInteractive()
//             .on('pointerdown', () => this.updateClickCountText(++clickCount) );
        
//         this.updateClickCountText(clickCount);
//     }

//    updateClickCountText(clickCount) {
//        this.clickCountText.setText('Button has been clicked ${clickout} times.');
//    }
}