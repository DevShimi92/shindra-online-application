var Login = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Preloader (session)
    {
        Phaser.Scene.call(this);
        window.MENU = this;
    },

    preload: function ()  // Fonction pour chargé toute ressourece du jeu
    {
        this.load.script('mainmenu','js/mainmenu.js');
    },

    create: function () // Fonction pour créer toute objet du jeu
    {
        console.log('Login');  

        //socket.connect();

        this.scene.start('mainmenu',session);
    
    }

});
