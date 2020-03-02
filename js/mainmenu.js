var MainMenu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function MainMenu (session)
    {
        Phaser.Scene.call(this);
        window.MENU = this;
    },


    preload: function ()  // Fonction pour chargé toute ressourece du jeu
    {
        this.load.script('playmenu','js/playmenu.js');
        this.load.script('profilemenu','js/profile.js');
        this.load.script('rankmenu','js/rank.js');
        this.load.script('shopmenu','js/shop.js');
        this.load.script('optionmenu','js/option.js');
    },

    create: function () 
    {
        console.log('Mainmenu');
        //socket.emit('Ping');
        console.log(session);
    }

});