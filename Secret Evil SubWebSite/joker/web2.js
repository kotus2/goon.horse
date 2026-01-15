const h1 = document.getElementById("h1");
const creditCardContainer = document.getElementById("creditCardContainer");
const startProcess = document.getElementById("startProcess");
const whySoSerious = document.getElementById("whySoSerious");
const returnButton = document.getElementById("returnButton");


const creditCardInputing = document.getElementById("creditCardInputing");
const creditCardInfo = document.getElementById("creditCardInfo");
const creditCardSubmit = document.getElementById("creditCardSubmit");

var creditCardNumber = document.getElementById("cardNumber");
var creditCardDate = document.getElementById("expirationDate");
var creditCardName = document.getElementById("ownerName");
var creditCardCvv = document.getElementById("cvv");

var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
const wrongAnswer = document.getElementById("wrongAnswer");

let flags = [flag1, flag2, flag3, flag4];

var win;
const goal = document.getElementById("goal");
const randomed = document.getElementById("randomed");
var audioKassa = new Audio("kassa.mp3");
var audioEaster = new Audio("easterEcho.wav");
var element;

startProcess.onclick = function creditCard()
{
    h1.textContent = "Но сначала...";

    creditCardInfo.style.display = "flex";
    creditCardInputing.style.display = "block";

    startProcess.remove();

    // хрень которая проявляет кнопку после инпута
    
     function checker(flags){     // создаёт кнопку если флаги верны
         for(i = 0; i < flags.length; i++){
             if(!flags[i]){
                 return -1;
             }
         }
         creditCardSubmit.style.display = "flex";
     }
    
    creditCardNumber.addEventListener("input", function()
    {   
        let value = this.value.replace(/\D/g, "");
        this.value = value;
        
            if(this.value.length === 16)
        {               
            flag1 = true;
            console.log(flag1);
            wrongAnswer.textContent = "";
            
            
            flags[0] = flag1
            console.log(flags)
        }else{
        
            flag1 = false;
            
            wrongAnswer.textContent = "номер карточки введён не корректно"
            
        }
        checker(flags)
    });
    
    creditCardDate.addEventListener("input", function()
    {
        let value = this.value.replace(/\D/g, "");
        this.value = value;
        
        value = value.slice(0, 2) + "/" + value.slice(2);
        this.value = value;

    
        if(this.value.length === 5)                     // если дата карточки != 4 флаг не считает
        {                   
        
        flag2 = true;
        console.log(flag2)
        wrongAnswer.textContent = "";
        
        flags[1] = flag2

        console.log(flags)
        }else{
        
        flag2 = false;
        wrongAnswer.textContent = "дата введена не корректно";
        }
        checker(flags)
    });
    
    creditCardName.addEventListener("input", function()
    {
        let value = this.value.replace(/\d/, "");
        this.value = value;
         
        flag3 = true;
        if(this.value === "Gleb"){
            wrongAnswer.textContent = "Неправильное имя."
        }else{
            flag3 = true; 
            wrongAnswer.textContent = ""
            
            flags[2] = flag3

            
            
            console.log(flags)
        }
        checker(flags)
    });

    creditCardCvv.addEventListener("input", function()
    {
        if(this.value.length === 3){
            
            flag4 = true;
            console.log(flag4)
            wrongAnswer.textContent = "";
            flags[3] = flag4
            
            console.log(flags)
        }else{

            flag4 = false;
            wrongAnswer.textContent = "cvv введён не корректно";
            
        }
        checker(flags)
    });



//
   
    creditCardSubmit.onclick = function ruolette()
    {
        creditCardInfo.remove();
        creditCardSubmit.remove();
        
        audioKassa.play();

        h1.textContent = "Ладно, не злись ты так";
        

        let rouletteSpin = document.createElement("button")

        rouletteSpin.textContent = "крутить рулетку";
        rouletteSpin.style.border.style = "2px solid black";
        rouletteSpin.id = "rouletteSpin";
        creditCardContainer.appendChild(rouletteSpin);
        let rouletteSpinButton = document.getElementById("rouletteSpin");
        

        let money = document.createElement("img");
        money.src = "1000Rubles.gif";
        money.id = "money";
        document.getElementById("body").appendChild(money);

        
        // тут начинается цирк с конями, медведями, лосями, лососями, волками, оленями и т.д. и т.п.

        let rouletteNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        rouletteSpinButton.onclick = function rouletteCheck(element)
        {           
            
            let randomer = Math.floor(Math.random()*13);
        
            if(element == randomer){ // сверяет зарандомленный номер с массивом и выкладывает тот который подходит 
                console.log(element);
                goal.textContent = `нужно выбить ${answer}`
            }
            rouletteNumbers.forEach(function(element)
            { 
                
                if(element == randomer){
                    var answer = element;
                    console.log(answer);
                    goal.textContent = `нужно выбить ${answer}`
                }
            let randomer2 =  Math.floor(Math.random()*13);
                    
                    if(answer == randomer2)
                    {
                        goal.textContent = `ты выбил ${answer}`;
                        console.log("победа")
                        win = true;
                        rouletteSpin.remove();
                        money.remove();
                        h1.textContent = "о нет!"
                        document.createElement("button");
                        returnButton.style.display = "block";
                        
       
                        
                    }else{
                        whySoSerious.style.display = "block";
                        
                        setTimeout(() => {whySoSerious.style.display = "none", audioEaster.play()}, 500)


                    }     
                }           
            )
        }
    }   
}