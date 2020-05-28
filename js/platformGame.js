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
        this.load.image('cardExample', 'assets/asB01.png');
        
    },

    // called once after the preload ends
    create: function() {
        console.log("Ready");

        this.zone = new Zone(this);
        this.dropZone = this.zone.renderZone();
        this.outline = this.zone.renderOutline(this.dropZone);
        
        // Chargement du fond du jeu
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#3C2C44");
        this.add.text(0, 0, 'ShindraOnline', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        //-------------------------------------------------------------------------
        // # variable
        let self = this; // default fonction

        // this.card = this.add.image(300, 300, 'as').setScale(0.3, 0.3).setInteractive();
        // exemple d'une carte drag 
        // this.card = this.add.image(300, 300, 'cardExample').setScale(0.1, 0.1).setInteractive();

        // this.input.setDraggable(this.card);
        //---------------------------Initialise 9 cartes ----------------------------------------------//
        this.dealCards = () => {
            for (let i = 0; i < 9; i++) {
                // Appel de la classe card 
                let playerCard = new Card(this);
                //abscisse (=x) + (i * écart des cartes), ordonnée (=y)
                // avec la division, on peut faire une pioche.
                playerCard.render(100 , 165 + (i * 30), 'cardExample');
            }
        }

        //---------------------------Clique sur deal cards pour initialiser ----------------------------------------------//
        this.dealText = this.add.text(50, 50, ['DEAL CARDS']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();

        this.dealText.on('pointerdown', function() {
            self.dealCards();
        })

        this.dealText.on('pointerover', function() {
            self.dealText.setColor('#ff69b4');
        })

        this.dealText.on('pointerout', function() {
            self.dealText.setColor('#00fff');
        })
        // On drag et change de couleur
        this.input.on('dragstart', function(pointer, gameObject) {
            gameObject.setTint(0xff69b4);
            self.children.bringToTop(gameObject);
        })

        this.input.on('dragend', function(pointer, gameObject, dropped) {
            gameObject.setTint();
            if(!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

        this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })

        this.input.on('drop', function(pointer, gameObject, dropZone) {
            dropZone.data.values.cards++;
            gameObject.x = (dropZone.x - 350) + (dropZone.data.values.cards * 50);
            gameObject.y = dropZone.y;
            gameObject.disableInteractive();
            // self.socket.emit('cardPlayed', gameObject, self.isPlayerA);
        })
    }, // fin create()
})