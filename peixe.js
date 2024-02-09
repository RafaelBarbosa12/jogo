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
var SubPos;

function preload(){
    //carrega todas as imagens
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('vasco', 'assets/vasco.png')
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/Peixes/tubarao.png');
    this.load.image('tesouro', 'assets/treasure-chest-312239_1280.png');
    this.load.image('alga', 'assets/sea.png');
    this.load.image('submarino', 'assets/submarine.png');

}
function create(){  
    // cria todas as imagens
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
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
    // velocidade com que o submarino se move
    var velocidade = 3;

    // O submarino se move na vertical
    submarino.x += velocidade;

    // Se o submarino atingir a borda direita, ele volta pra borda esquerda
    if (submarino.x >= 1000) {
        submarino.x = -200;
    }
    //O peixinho troca a posição andando sempre para frente
    if (peixinho.x < SubPos) {
        peixinho.setFlip(false, false);
    } else if (peixinho.x > SubPos) {
        peixinho.setFlip(true, false);
    }
    
}