var Passwordforgot = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this);
        window.MENU = this;
    },

    preload: function ()  // Fonction pour chargé toute ressourece du jeu
    {
        this.load.html('forgotform', 'resource/forgotform.html');
    },

    
    create:function ()
    {
        console.log('Passwordforgot');
         // On charge l'élement HTML et on l'insert 
         var element = this.add.dom(this.game.config.width / 2, this.game.config.height / 2).createFromCache('forgotform');
         //On place le focus du plein écran sur lui
        this.game.scale.fullScreenTarget = document.getElementById('wrapper');
         // On ajoute les événement de l'élément HTML
        element.setPerspective(80);
        element.addListener('click');
        element.on('click', function (event) {
            
           console.log(event.target.name);
            if (event.target.name === 'forgotMailButton')
                {
                    var inputForgotMail = this.getChildByName('forgotMail');

                    if (inputForgotMail.value !== '' )
                        {
                            console.log(inputForgotMail.value);
                            socket = io(session.address, {
                                reconnection: false // Le client n'a pas a se reconncter "tout seul". Si on le reconnecte, sa sera de façon explicite.
                            });
                            socket.emit('ForgotPassword', { email : inputForgotMail.value });
                            socket.on('ForgotPassword_reply', (etat) => {
                                console.log(etat);
                            });
                        }

                }
            if (event.target.name === 'HaveAccount')
                {
                    game.scale.removeFullscreenTarget;
                    element.destroy();
                    game.scene.start('login'); 

                }
            
            if (event.target.name === 'NotAccount')
                {
                    game.scale.removeFullscreenTarget;
                    element.destroy();
                    game.scene.start('singup'); 
                }
        
        });
    }


});
