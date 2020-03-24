var Load = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:
    
    function Load (session)
    {
        Phaser.Scene.call(this);
        window.MENU = this;
    },


    preload: function ()  // Fonction pour chargé toute ressourece du jeu
    {
        // On charge le fichier de config
        this.load.json('configJson', 'config.json ');
        this.load.image('logoLoad', 'resource/picture/RouageVert.png');   
    },

    create: function () 
    {
        console.log('Load');
        
        // console.log(game.device.os); DEBUG

        logoLoad = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'logoLoad');
        
        // On charge le fichier de config

        let configJSON = this.cache.json.get('configJson');

        // Variable de présence
        var LoadForm = true;

        // EN MODE DESKTOP, SEUL L'ADRESSE DOIT ETRE CHARGER PAR DEFAUT 
        session.address  = configJSON.address; 
        
        if ( game.device.os.desktop == false ) 
            {
                session.username = configJSON.id;
                session.password = configJSON.password ;
                console.log(configJSON.id);
                console.log(configJSON.password );
                console.log(session.username);
                console.log(session.password);
            }

        // On démarre le sockect de connexion 
        socket = io(session.address, {
            reconnection: false // Le client n'a pas a se reconncter "tout seul". Si on le reconnecte, sa sera de façon explicite.
        });

        // ** Event de socket ** 

        // Event de test ( ping pong )
        socket.on('Pong', function() {
            console.log('Pong');
        });

        socket.on('connect', function() {
            console.log('Connection OK');

        });
        
        socket.on('connect_error', function(err) {
            console.log('Connection error');
           if (err ) {
            console.log(err.toString());
        }
        });

        socket.on('connect_failed', function() {
            console.log('Connection failed');
        });

        socket.on('disconnect', function() {
            console.log('Connection disconnect');
        });
        

        socket.on('authentification', function () {
            socket.emit('authentification', { username: session.username , password: session.password });
          });

        socket.on('authentification_Data', (etat, data) => {
           
           // console.log(etat); Debug
           // console.log(data);
           
           if (( etat === 'error') && (LoadForm === true)){
            console.log('Authentification failed ');
            LoadForm=false
            this.scene.start('login',session); //Scene pour l'identification
            
            }
            else if ( etat === 'error') {
                console.log('Authentification failed ');
                this.scene.start('login',session); 
                this.scene.stop();

            
            }
            else
            {
                console.log('Authentification OK');
                this.scene.remove('login');
                this.scene.start('mainmenu',session);
            }

          });
    },
    update: function()
    {
        logoLoad.rotation += 0.10;
    }



});