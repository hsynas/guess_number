

let Secretnumber = Math.trunc(Math.random()*20)+1

document.querySelector('.number').textContent =Secretnumber;
let message = document.querySelector('.message')

let score =20

let highscore = 0

const displaymessage = function (message) {

    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener("click", function(){
    
    const guess = Number(document.querySelector('.guess').value)
if(!guess){
    displaymessage("there is no number");
   
}else if(guess===Secretnumber){

    displaymessage("BASARDIN")
  


    document.querySelector('body').style.backgroundColor ="#60b347";

    if(score>highscore){

        highscore=score;
        document.querySelector('.highscore').textContent = highscore;

    }



    }else if(guess!==Secretnumber){
       if(score>1){

        displaymessage(guess>Secretnumber ? "too high":"too low");

       }
    }


});


document.querySelector('.again').addEventListener("click", function(){

    

    Secretnumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent =Secretnumber

    document.querySelector('body').style.backgroundColor ="#222";

    score=20;
    document.querySelector('.score').textContent=score;

    (document.querySelector('.guess').value)="";

    document.querySelector('.number').textContent= "?";

    message.textContent="Start guessing ... ";







});