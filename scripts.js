let userScore= 0;
let compScore= 0;
const userScore_span= document.getElementById('user-score')
const compScore_span= document.getElementById('comp-score')
const scoreBoard_div= document.querySelector('scoreboard')
const result_div= document.querySelector('.result p')
const rock_div=document.getElementById('r')
const paper_div=document.getElementById('p')
const scissors_div=document.getElementById('s')

function cpuMove(){
    const options= ['r', 'p','s'];
    const random= Math.floor(Math.random() * 3);
    const move= options[random];
    return move;
}

function  transform(options){
    if (options == 'r'){
        return 'rock';}
        else if(options == 'p'){
        return 'paper'}
        else {
            return 'scissors'
        }
}


function win(optionUser, optionPc){
userScore++;
userScore_span.innerHTML= userScore;
result_div.innerHTML= transform(optionUser)+' beats '+transform(optionPc)+' ¡¡you win!!'
}

function lose(optionUser, optionPc){
    compScore++;
    compScore_span.innerHTML= compScore;
    result_div.innerHTML= transform(optionPc)+' beats '+transform(optionUser)+',you lose :('
    }

    function tie(optionUser){
        result_div.innerHTML= 'both picks '+transform(optionUser)+ " ,it's a tie :/"
        }

function game(option){
    const compMove= cpuMove();
    const userMove= option;
   switch (userMove+compMove){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userMove, compMove)
        break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userMove, compMove)
            break;
            case 'rr':
            case 'pp':
            case 'ss':
                tie(userMove)
        default:
    }

}

function main(){
    rock_div.addEventListener('click', ()=> game('r'))
    paper_div.addEventListener('click', ()=> game('p'))
    scissors_div.addEventListener('click', ()=> game('s'))
}
main();
