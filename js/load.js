var Load = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Load ()
    {
        Phaser.Scene.call(this);
        window.MENU = this;
    },


    preload: function ()  // Fonction pour chargé toute ressourece du jeu
    {
        this.load.script('mainmenu','js/mainmenu.js');
    },

    create: function () 
    {
        console.log('Load');
        this.scene.add('mainmenu'  , MainMenu , false);
        this.scene.start('mainmenu');
    
    }

});