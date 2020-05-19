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
        this.load.html('singupform', 'resource/signupForm.html');
    },

    
    create:function ()
    {

        console.log('Singup');
        
         // On charge l'élement HTML et on l'insert 
        var element = this.add.dom(this.game.config.width / 2, this.game.config.height / 2).createFromCache('singupform');
         //On place le focus du plein écran sur lui
        this.game.scale.fullScreenTarget = document.getElementById('wrapper');
        // element2.setVisible('true');
         // On ajoute les événement de l'élément HTML
        element.setPerspective(80);
        element.addListener('click');
        element.on('click', function (event) {
            
            //Debug console.log(event.target.name);
            
            if (event.target.name === 'HaveAccount')
                {
                    game.scale.removeFullscreenTarget;
                    element.destroy();
                    game.scene.start('login'); 

                }
        
        });

    }


});
