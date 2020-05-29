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
            
            console.log(event.target.name);
            if (event.target.name === 'createButton')
                {
                    var inputLastName = this.getChildByName('lastName');
                    var inputFirstName = this.getChildByName('firstName');
                    var inputUsername = this.getChildByName('username');
                    var inputEmail = this.getChildByName('email');
                    var inputPassword = this.getChildByName('password');
                    var inputConfirmPassword = this.getChildByName('confirmpassword');

                    if (inputLastName.value !== '' || inputFirstName.value !== ''  || inputUsername.value !== ''  || inputEmail.value !== ''  || inputPassword.value !== ''  || inputConfirmPassword.value !== '')
                        {
                            console.log(inputLastName.value);
                            console.log(inputFirstName.value);
                            console.log(inputUsername.value);
                            console.log(inputEmail.value);
                            console.log(inputPassword.value);
                            console.log(inputConfirmPassword.value);

                            if (inputPassword.value == inputConfirmPassword.value )
                            {

                                socket = io(session.address, {
                                    reconnection: false // Le client n'a pas a se reconncter "tout seul". Si on le reconnecte, sa sera de façon explicite.
                                });
                                socket.emit('CreateAccount', { 
                                    lastname : inputLastName.value,
                                    firstname : inputFirstName.value,
                                    username : inputUsername.value,
                                    email : inputEmail.value,
                                    password : inputPassword.value
                                });
                                socket.on('CreateAccount_reply', (etat) => {
                                    console.log(etat);
                                });
                             }
                        }

                  }
            
            if (event.target.name === 'HaveAccount')
                {
                    game.scale.removeFullscreenTarget;
                    element.destroy();
                    game.scene.start('login'); 

                }
        
        });

    }


});
