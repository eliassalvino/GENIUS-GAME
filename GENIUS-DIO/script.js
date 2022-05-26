let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Cria ordens aleatórias
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createcolorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);

    }
}

//Acende as próximas cores
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');
    });
}

//Verifica se os botões clicados sãos os mesmos da ordem gerada no jogo
let CheckOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break; 
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuacao: ${score}\nVoce acertou! Iniciando próximo nível!`)
        nextLevel();
    }
}

//Função para o click do usuário

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createcolorElement(color).classList.add('selected');

    setTimeout(() => {
        createcolorElement(color).classList.add('selected');
        CheckOrder();
    }, 250);
    
}

//Função que retorna a cor
let createcolorElement = (color) => {
    if (color == 0){
        return green;
    } else if(color == 1){
        return  red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

//Função para próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função para game Over

let gameOver = () => {
    alert(`Pontuação: ${score}!\n Você perdeu o jogo\n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Genius! \nIniciando um novo jogo!');
    score = 0;
    nextLevel();
}

//Eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Inicio do jogo
playGame();