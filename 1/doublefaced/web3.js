const heads = document.getElementById("heads");
const tails = document.getElementById("tails");
var chosen;

const text = document.getElementById("coinThrowH1");

const throwButton = document.getElementById("throwButton");
let coinSound = new Audio("coin.mp3");

const returnButton = document.getElementById("returnButton");

function tailsHeads(){
    throwButton.style.display = "flex";
    
    tails.remove() 
    heads.remove()

    text.textContent = "Бросай монетку";
}

tails.onclick = () => {chosen = 0, tailsHeads()};
heads.onclick = () => {chosen = 1, tailsHeads()};

throwButton.onclick = function coinThrow(){
    answer = Math.floor(Math.random()*2);
    console.log(answer);

    if(chosen == answer){
        coinSound.play();
        console.log("win")
        throwButton.remove();
        returnButton.style.display = "block";
   }else{
       throwButton.remove();
       text.textContent = "you lost";
       pistolSound.play();

       
   }    
}