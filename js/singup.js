var Singup = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this);
        window.MENU = this;
    },

    preload: function ()  // Fonction pour chargé toute ressourece du jeu
    {
        //this.load.html('nameform', 'resource/loginform.html');
    },

    
    create:function ()
    {
        console.log('Singup');

        
    }


});
