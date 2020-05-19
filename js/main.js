var Preloader = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this, { key: 'preloader' });
    },

    preload: function ()  // Fonction pour chargé toute ressourece du jeu
    {
            // fix the height to 720
            if (game.device.os.desktop == false )
            {
                const DEFAULT_HEIGHT = 10;
            } else
            {
                const DEFAULT_HEIGHT = window.innerHeight;
            }

            // adjust the width dynamically based on the device screen ratio
            const DEFAULT_WIDTH = (window.innerWidth / window.innerHeight) * DEFAULT_HEIGHT
        
            const config = {
              type: Phaser.AUTO,
              scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: DEFAULT_WIDTH,
                height: DEFAULT_HEIGHT
              },
              parent: 'gameForm',
              scene: [ Preloader ],
              dom: {
                createContainer: true
                },
            version: "0.0.0"
              //...
            }
    
            
            console.log(DEFAULT_WIDTH);
            console.log(this.game.config.width);


        if (( game.device.os.desktop == false ) && ( DEFAULT_WIDTH !== this.game.config.width))
        {
            game.destroy(true);   
            this.game = new Phaser.Game(config);
            console.log('Resize');
            
        }
            


        // On charge les prochaines potentiels scenes
        this.load.script('accueilShindra', 'js/accueilShindra.js');
        this.load.script('platformGame', 'js/platformGame.js');
        this.load.script('load','js/load.js');
        this.load.script('mainmenu','js/mainmenu.js');
        this.load.script('login','js/login.js');
        this.load.script('passwordforgot','js/passwordforgot.js');
        this.load.script('singup','js/singup.js');

        // Puis les resources
        this.load.image("phaserLogo", "resource/picture/phaser_logo.png");
    },

    create: function () // Fonction pour créer toute objet du jeu
    {
        console.log('Main');
       
        image = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'phaserLogo');
        

        if ( game.device.os.desktop == false ) // Si on est sur un apparail mobile 
            {
                // Attention la gestion de l'orientation se gere dans le config.xml du projet android
                image.setDisplaySize(this.game.config.width / 2, this.game.config.height / 3);
            

            }
        else{

                image.setDisplaySize(this.game.config.width / 2, this.game.config.height / 1.5);
        
        
            }

            console.log(game.device.os.desktop);
            console.log(this.scale.orientation);


        this.scene.add('accueilShindra', accueilShindra, false);
        this.scene.add('platformGame', platformGame, false);
        this.scene.add('load'  , Load , false);
        this.scene.add('mainmenu'  , MainMenu , false);
        this.scene.add('login'  , Login , false);
        this.scene.add('passwordforgot'  , Passwordforgot , false);
        this.scene.add('singup'  , Singup , false);

        // On fait apparaitre le logo phaser puis on le fait disparaitre en effet fondu grâce a la caméra 

        this.cameras.main.fadeIn(500);
        this.time.addEvent({
            delay: 1000,
            callback: ()=>{
                this.cameras.main.fadeOut(500);
                setTimeout(() => { this.scene.start('load',session); }, 1000);
                
                setTimeout(() => { this.scene.start('accueilShindra',session); }, 3000);
                setTimeout(() => { this.scene.remove('load',session); }, 2000);
            },
            loop: false
        })
        
        this.cameras.main.fadeIn(500);
        
    
    }

});


const DEFAULT_WIDTH  = 800
const DEFAULT_HEIGHT = 600


var config = {
    type: Phaser.AUTO,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    parent: 'gameForm',
    dom: {
        createContainer: true
    },
    scene: [ Preloader ],
    version: "0.0.0",
};

var game = new Phaser.Game(config);

var session = { // Note : pour les login/password, faudra tenté de les stocké dans les sesionStorage

    username : '', 
    password : '',
    forgotLink : '',

    address : '',
    token : ''

}