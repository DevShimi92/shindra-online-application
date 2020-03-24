var MainMenu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function MainMenu ()
    {
        Phaser.Scene.call(this);
        window.MENU = this;
    },


    preload: function ()  // Fonction pour chargé toute ressourece du jeu
    {
        this.load.script('playmenu','js/playmenu.js');
        // this.load.script('profilemenu','js/profile.js');
        // this.load.script('rankmenu','js/rank.js');
        // this.load.script('shopmenu','js/shop.js');
        this.load.script('optionmenu','js/optionmenu.js');
    },

    create: function () 
    {
        this.scene.add('playmenu'  , PlayMenu , false);
        this.scene.add('optionmenu'  , OptionMenu , false);
        
        console.log('Mainmenu');
        console.log(session);


        var start = this.add.text(100, 100, 'Play', { fontFamily: 'Verdana, "Times New Roman", Tahoma, serif', fontSize: 64, color: '#ffffff' })
        .setInteractive()
        .on('pointerdown', () => game.scene.start('playmenu',session) );

        var option = this.add.text(100, 300, 'Option', { fontFamily: 'Verdana, "Times New Roman", Tahoma, serif', fontSize: 64, color: '#ffffff' })
        .setInteractive()
        .on('pointerdown', () => game.scene.start('optionmenu',session) );
    }

});