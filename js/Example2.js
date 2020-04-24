class Example2 extends Phaser.Scene {
    constructor() {
        super({key:"Example2"});
        
    }
    preload() {
        // this.load.image('image_back_card', 'assets/Card-Back-04.png');
        for (var card = 1; card < 7; card++ ) {
            this.load.image("image" + card, "assets/cards/c0" + card + ".png");
        }
        // assets/cards/c01.png
        // this.load.image("test_card", 'assets/cards/c01.png');
    }

    create() {
    //     let clickCount = 0;
    //     this.clickCountText = this.add.text(100, 200, '');
        console.log("Ready");

        this.text = this.add.text(0,0,"Welcome to Shindra Online!", { font: "80px Roboto Condensed"});
        
        
        this.cardArray=[];
        //
        //
        //

        // let card = this.add.sprite(0, 0, "test_card");
        this.aGrid = new AlignGrid({scene: this, rows:11, cols:11});

        this.aGrid.showNumbers();

        // var gridConfig = {
        //     'scene': this,
        //     'cols': 4,
        //     'rows': 4
        // }
         
        
        // for (var card = 1; card < 7; card++) {
        //     this.card = this.add.image(0, 0, "image"+card);
        //     this.card.setScale(0.2);
        //     this.aGrid.placeAtIndex(102+(card), this.card);
        //     // 12+(card*11), this.card)
        //     // this.card.setInteractive();
            
        // }
        // Pose une carte
        for (var card = 1; card < 7; card++) {
            this.card = this.add.image(0, 0, "image"+card);
            // Align.scaleToGameW(card, .25);
            // console.log(card);
            this.card.setScale(0.2);
            this.aGrid.placeAtIndex(52, this.card);
            this.cardArray.push(this.card);
        }

          // Pose une carte
          for (var card = 1; card < 7; card++) {
            this.card = this.add.image(0, 0, "image"+card);
            // Align.scaleToGameW(card, .25);
            // console.log(card);
            this.card.setScale(0.2);
            this.aGrid.placeAtIndex(50, this.card);
            this.cardArray.push(this.card);
        }
        

        // Pose plusieurs cartes 
        for (var card = 1; card < 7; card++) {
            this.card = this.add.image(0, 0, "image"+card);
            this.card.index=card;
            // Align.scaleToGameW(card, .25);
            // console.log(card);
            this.card.setScale(0.2);
            //Mettre Verticale
            // this.aGrid.placeAtIndex(23+(card*11), this.card);
            // Mettre Horizontale
            this.aGrid.placeAtIndex(112+(card/2), this.card);
            // this.cardArray.push(this.card);
            this.card.setInteractive();
            
        }
        this.input.on('gameobjectdown', this.cardClick.bind(this));
        window.scene=this;

        // this.image = this.add.sprite(400, 400, 'image_back_card');
        // this.image.setScale(0.3)

        // let clickCount = 0;
        // this.clickCountText = this.add.text(100, 200, '');

        // this.clickButton = this.add.text(100, 100, 'Click me!', { fill: '#0f0' })
        // .setInteractive({ useHandCursor: true })
        // .on('pointerover', () => this.enterButtonHoverState() )
        // .on('pointerout', () => this.enterButtonRestState() )
        // .on('pointerdown', () => this.enterButtonActiveState() )
        // .on('pointerup', () => {
        //     this.updateClickCountText(++clickCount);
        //     this.enterButtonHoverState();
        // });

        // this.updateClickCountText(clickCount);
  

        


    
        // const clickButton = this.add.text(100, 100, 'Click me!', { font: "80px Roboto Condensed",fill: '#0f0' })
        //     .setInteractive()
        //     .on('pointerdown', () => this.updateClickCountText(++clickCount) );
    
        // this.updateClickCountText(clickCount);
        
        // this.input.keyboard.on('keyup', function (e) {
        //     if(e.key == "2") {
        //         this.scene.start("Example3");
        //     }
        // }, this);
        // }


    
        // updateClickCountText(clickCount) {
        // this.clickCountText.setText(`Button has been clicked ${clickCount} times.`);
        // }

        // enterButtonHoverState() {
        //     this.clickButton.setStyle({ fill: '#ff0'});
        // }
      
        // enterButtonRestState() {
        //   this.clickButton.setStyle({ fill: '#0f0' });
        
    }

    cardClick(pointer, card) {
        console.log(card.index);
        this.turnCardOn(card.index);
    }

    AllOff() {
        for (var card = 0; card < 6; card++) {
            this.cardArray[card].visible=false;

        }
    }

    turnCardOn(index) {
        this.AllOff();
        this.cardArray[index-1].visible=true;
    }


    // updateClickCountText(clickCount) {
    //     this.clickCountText.setText(`Button has been clicked ${clickCount} times.`);
    // }

    // enterButtonHoverState() {
    //     this.clickButton.setStyle({ fill: '#ff0'});
    // }

    // enterButtonRestState() {
    //     this.clickButton.setStyle({ fill: '#0f0' });
    // }

    // enterButtonActiveState() {
    //     this.clickButton.setStyle({ fill: '#0ff' });
    // }

        
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

// scene.AllOff()

// scene.turnCardOn(2)