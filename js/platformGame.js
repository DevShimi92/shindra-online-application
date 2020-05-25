var platformGame = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function platformGame ()
    {
        Phaser.Scene.call(this, { key: 'platformGame' });
    },
    
    // Load assets
    preload: function() {
        this.load.image('background_image', 'assets/shindra.png');
        // this.load.image('play-circle', 'assets/play-circle.png');
        for(let i = 1; i < 10; i++) {
            this.load.image("assets" +i, "assets/cards/c0" + i + ".png");
        }
        
    },

    // called once after the preload ends
    create: function() {
        console.log("Ready");
        // Chargement du fond du jeu
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#3C2C44");
        this.add.text(0, 0, 'ShindraOnline', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });

        this.cardArray=[];

        this.grid = this.add.grid(190, 100, 400, 400, 100,100);
        this.grid.setOrigin(0, 0);

        this.aGrid = new AlignGrid({scene: this, rows:11, cols:11});

        // this.aGrid.showNumbers();

        // Pose une carte
        for (var card = 1; card < 10; card++) {
            this.card = this.add.image(535, 150, "assets"+card);
            // Align.scaleToGameW(card, .25);
            // console.log(card);
            this.card.setScale(0.1);
            // this.aGrid.placeAtIndex(52, this.card);
            
            this.cardArray.push(this.card);
        }

        // Pose une carte
        for (var card = 1; card < 10; card++) {
            this.card = this.add.image(425, 150, "assets"+card);
            // Align.scaleToGameW(card, .25);
            // console.log(card);
            this.card.setScale(0.1);
            // this.aGrid.placeAtIndex(50, this.card);
            this.cardArray.push(this.card);
        }
        // Pose plusieurs cartes 
        for (var card = 1; card < 10; card++) {
            this.card = this.add.image(105, 300, "assets"+card);
            this.card.index=card;
            // Align.scaleToGameW(card, .25);
            // console.log(card);
            this.card.setScale(0.1);
            //Mettre Verticale
            this.card.setX
            this.aGrid.placeAtIndex(12+(card*11), this.card);
            // Mettre Horizontale
            // this.aGrid.placeAtIndex(112+(card/2), this.card);
            this.cardArray.push(this.card);
            this.card.setInteractive();
            
        }
        this.input.on('gameobjectdown', this.cardClick.bind(this));
        window.scene=this;
    },
    cardClick(pointer, card) {
        console.log(card.index);
        this.turnCardOn(card.index);
    },

    AllOff() {
        for (var card = 0; card < 10; card++) {
            this.cardArray[card].visible=false;

        }
    },

    turnCardOn(index) {
        this.AllOff();
        this.cardArray[index-1].visible=true;
    }

})