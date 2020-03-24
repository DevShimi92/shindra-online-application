var Login = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this);
        window.MENU = this;
    },

    preload: function ()  // Fonction pour chargé toute ressourece du jeu
    {
        this.load.html('nameform', 'resource/loginform.html');
    },

    
    create:function ()
    {
        console.log('Login');

        // On charge l'élement HTML et on l'insert 
        var element = this.add.dom(this.game.config.width / 2, this.game.config.height / 2).createFromCache('nameform');
        
        /// DEBUG console.log(this.game.scale.fullScreenTarget);

        //On place le focus du plein écran sur lui
        this.game.scale.fullScreenTarget = document.getElementById('wrapper');

        // console.log(this.game.scale.fullScreenTarget);
        // console.log(this.game.scale.getFullscreenTarget());

        // On ajoute les événement de l'élément HTML
        element.setPerspective(80);
        element.addListener('click');
        element.on('click', function (event) {
            
            console.log(event.target.name);
            
            if (event.target.name === 'loginButton')
            {
                var inputUsername = this.getChildByName('username');
                var inputPassword = this.getChildByName('password');

                if (inputUsername.value !== '' && inputPassword.value !== '')
                {
                    game.scale.removeFullscreenTarget;
                    console.log(game.scale.fullScreenTarget);
                    session.username = inputUsername.value;
                    session.password = inputPassword.value ;
                    console.log(session);
                    game.scene.start('load',session);
                    
                }

            }

            if (event.target.name === 'donthaveButton')
            {
                game.scale.removeFullscreenTarget;
                game.scene.start('singup'); 
            }

            if (event.target.name === 'forgotButton')
            {
                
                game.scale.removeFullscreenTarget;
                game.scene.start('passwordforgot'); 
            }


        });
       
        
    }


});
