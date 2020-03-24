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
        this.load.html('nameform', 'resource/loginform.html');
    },

    
    create:function ()
    {
        console.log('Login');

        var element = this.add.dom(this.game.config.width / 2, this.game.config.height / 2).createFromCache('nameform');
        console.log(this.game.scale.fullScreenTarget);
        this.game.scale.fullScreenTarget = document.getElementById('wrapper');
        console.log(this.game.scale.fullScreenTarget);
        console.log(this.game.scale.getFullscreenTarget());

        element.setPerspective(80);

        element.addListener('click');

        element.on('click', function (event) {

            if (event.target.name === 'loginButton')
            {
                console.log('Loginc');
                var inputUsername = this.getChildByName('username');
                var inputPassword = this.getChildByName('password');

                if (inputUsername.value !== '' && inputPassword.value !== '')
                {
                    console.log('Logind');
                    game.scale.removeFullscreenTarget;
                    console.log(game.scale.fullScreenTarget);
                    session.username = inputUsername.value;
                    session.password = inputPassword.value ;
                    console.log(session);
                    game.scene.start('load',session);
                    console.log('LoginE');
                    
                }

            }

        });
       
        
    }


});
