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
const goal2 = document.getElementById("goal2");
const randomed = document.getElementById("randomed");
var audioKassa = new Audio("kassa.mp3");
var audioEaster = new Audio("easterEcho.wav");
var audioVolume = audioEaster.volume = 0.2;
var element;

startProcess.onclick = function creditCard()
{
    h1.textContent = "One little thing before we start";

    creditCardInfo.style.display = "flex";
    creditCardInputing.style.display = "block";

    startProcess.remove();

    // makes button after inputs in credit card
    
     function checker(flags){               // checks input box
         for(i = 0; i < flags.length; i++){
             if(!flags[i]){
                 return -1;
             }
         }
         creditCardSubmit.style.display = "flex";
     }
    
    creditCardNumber.addEventListener("input", function()
    {   
        let value = this.value.replace(/\D/g, "");  // this regular expression delets all letter characters
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
            
            wrongAnswer.textContent = "Card number is incorrect"
            
        }
        checker(flags)
    });
    
    creditCardDate.addEventListener("input", function()
    {
        let value = this.value.replace(/\D/g, "");  // this regular expression deletes all letter characters
        this.value = value;
        
        value = value.slice(0, 2) + "/" + value.slice(2);
        this.value = value;

    
        if(this.value.length === 5)                     
        {                   
        
        flag2 = true;
        console.log(flag2)
        wrongAnswer.textContent = "";
        
        flags[1] = flag2

        console.log(flags)
        }else{
        
        flag2 = false;
        wrongAnswer.textContent = "Date is incorrect";
        }
        checker(flags)
    });
    
    creditCardName.addEventListener("input", function()
    {
        let value = this.value.replace(/\d/, "");   // this regular expression deletes all number characters
        this.value = value;
         
        flag3 = true;
        if(this.value === "Gleb"){
            wrongAnswer.textContent = "Wrong name"
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
            wrongAnswer.textContent = "cvv is incorrect";
            
        }
        checker(flags)
    });


   
    creditCardSubmit.onclick = function ruolette()
    {
        creditCardInfo.remove();
        creditCardSubmit.remove();
        
        audioKassa.play();

        h1.textContent = "Why so mad?";
        

        let rouletteSpin = document.createElement("button")

        rouletteSpin.textContent = "Spin roulette";
        rouletteSpin.style.border.style = "2px solid black";
        rouletteSpin.id = "rouletteSpin";
        creditCardContainer.appendChild(rouletteSpin);
        let rouletteSpinButton = document.getElementById("rouletteSpin");
        

        let money = document.createElement("img");
        money.src = "1000Rubles.gif";
        money.id = "money";
        document.getElementById("body").appendChild(money);

        

        let rouletteNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        rouletteSpinButton.onclick = function rouletteCheck(element)
        {           
            
            let randomer = Math.floor(Math.random()*13);
        
            if(element == randomer){   // comparing random number with the array and gets from there one that is the same
                console.log(element);
                goal.textContent = `You must get ${answer}`
            }
            rouletteNumbers.forEach(function(element)
            { 
                
                if(element == randomer){
                    var answer = element;
                    console.log(answer);
                    
                    
                }
            let randomer2 =  Math.floor(Math.random()*13);
            
         
                    if(answer == randomer2)
                    {
                       
                        
                        console.log("win");
                        win = true;
                        rouletteSpin.remove();
                        money.remove();
                        h1.textContent = "Oh no!"
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