let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('marcador');
const result_div = document.querySelector('result p');
const piedra_div = document.getElementById('r');
const papel_div = document.getElementById('p');
const tijera_div = document.getElementById('t');

function game(opcion){
    alert(opcion);
}

function main(){
    piedra_div.addEventListener('click', () => game("r"));
    papel_div.addEventListener('click', () => game("p"));
    tijera_div.addEventListener('click', () => game("t"));
}

main();