var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload(){
    // carrega todas as imagens
    
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('vasco', 'assets/vasco.png')
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/Peixes/tubarao.png');
    this.load.image('tesouro', 'assets/treasure-chest-312239_1280.png');
    this.load.image('alga', 'assets/sea.png');
    this.load.image('submarino', 'assets/submarine.png');

}
function create(){  
    //cria todas as imagens no jogo
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    submarino = this.add.image(500, 205, 'submarino').setScale(0.3);
    this.add.image(700, 570, 'tesouro').setScale(0.1);
    this.add.image(100, 570, 'tesouro').setScale(0.1);
    this.add.image(80, 590, 'vasco').setScale(0.02);
    this.add.image(600, 550, 'alga').setScale(0.1);
    this.add.image(200, 550, 'alga').setScale(0.1);
    peixinho = this.add.image(400, 300, 'peixe');
    peixinho.setFlip(true, false);
    submarino.setFlip(true, false);

}
function update(){ 
    //determina a velocidade do submarino
   var velocidade = 3;
    submarino.x += velocidade;
    //faz o peixe seguir o cursor do computador
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
    //traz o submarino de volta quando ele sai da tela
    if (submarino.x > 1000) {
        submarino.x = -200
    }
}
