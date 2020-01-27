var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    //parent: 'Nom_de_la_balise',
    scene: {
        preload: preload,
        create: create
    },
    version: "0.0.0"
};

var game = new Phaser.Game(config);

function preload () // Fonction pour chargé toute ressourece du jeu
{
    this.load.image("phaserLogo", "resource/picture/phaser_logo.png");
}

function create () // Fonction pour créer toute objet du jeu
{
    // On fait apparaitre le logo phaser puis on le fait disparaitre en effet fondu grâce a la caméra 
    
    image = this.add.image(400, 300, 'phaserLogo');
    image.setDisplaySize(250,250);
    
    this.cameras.main.fadeIn(600);
    this.time.addEvent({
        delay: 500,
        callback: ()=>{
            this.cameras.main.fadeOut(600);
        },
        loop: false
    })
    



}