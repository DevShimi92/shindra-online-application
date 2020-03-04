var Preloader = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this, { key: 'preloader' });
    },

    preload: function ()  // Fonction pour chargé toute ressourece du jeu
    {
        // On charge les prochaines potentiels scenes
        this.load.script('load','js/load.js');
        this.load.script('mainmenu','js/mainmenu.js');
        this.load.script('login','js/login.js');

        // Puis les resources
        this.load.image("phaserLogo", "resource/picture/phaser_logo.png");
    },

    create: function () // Fonction pour créer toute objet du jeu
    {
        console.log('Main');
        
        this.scene.add('load'  , Load , false);
        
        this.scene.add('mainmenu'  , MainMenu , false);
        this.scene.add('login'  , Login , false);

        // On fait apparaitre le logo phaser puis on le fait disparaitre en effet fondu grâce a la caméra 

        image = this.add.image(360, 240, 'phaserLogo');
        image.setDisplaySize(250,250);
        this.cameras.main.fadeIn(500);
        this.time.addEvent({
            delay: 1000,
            callback: ()=>{
                this.cameras.main.fadeOut(500);
                setTimeout(() => { this.scene.start('load',session); }, 1000);
            },
            loop: false
        })
        
        this.cameras.main.fadeIn(500);
    
    }

});



var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'gameForm',
    dom: {
        createContainer: true
    },
    scene: [ Preloader ],
    version: "0.0.0"
};

var game = new Phaser.Game(config);

var session = { // Note : pour les login/password, faudra tenté de les stocké dans les sesionStorage

    username : '', 
    password : '',
    forgotLink : '',

    address : '',
    token : ''

}