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

        var element = this.add.dom(400, 300).createFromCache('nameform');
        
        element.setPerspective(800);

        element.addListener('click');

        element.on('click', function (event) {

            if (event.target.name === 'loginButton')
            {
                var inputUsername = this.getChildByName('username');
                var inputPassword = this.getChildByName('password');

                if (inputUsername.value !== '' && inputPassword.value !== '')
                {
                    session.username = inputUsername.value;
                    session.password = inputPassword.value ;
                    game.scene.start('load',session);
                    
                }

            }

        });
       
        
    }


});
