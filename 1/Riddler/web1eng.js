let imageContainer = document.getElementById("web1ImageContainer1");
let btnContainer = document.getElementById("web1BtnContainer1");
let Input1 = document.getElementById("web1Input1");
let Submit1 = document.getElementById("web1Submit1");

let hintButton = document.getElementById("hintButton");
let hintText = document.getElementById("hintText");

hintButton.onclick = function hint(){
    hintButton.style.display = "none";
    hintText.textContent = "all of them";
    
}

Submit1.onclick = function riddle1(){                   
    
    let inputValue = Input1.value;
    let input = String(inputValue)
    let lowerCaseInput = input.toLowerCase();
    

    if (lowerCaseInput == "all of them"){                  
        
        document.getElementById("web1H1").textContent = "I couldn't guess that!";
        let answer1 = document.getElementById("web1H1").textContent;
        
        let imgWin = document.createElement("img");
      
            imgWin.src = "riddlerWin.jpg";              
            imgWin.style.width = "30%"; 
            imgWin.style.height = "30%";
            
            
            imageContainer.appendChild(imgWin);

        
        if(answer1 == "I couldn't guess that!"){          
            
            let newBtn = document.createElement("button")
            newBtn.id = "web1NewBtn1"
            newBtn.textContent = "Go back";
            btnContainer.appendChild(newBtn);
            newBtn.innerHTML = "<a href = ../webeng.html> <button id=web1NewNewBtn1>Go back</button> </a>"

          
            Submit1.remove();           
            Input1.remove();
            hintText.remove();
            hintButton.remove();
        
        }
    
    }else{                              // создаёт картинку при неправильном ответе
         
        document.getElementById("web1H1").textContent = "You lost, I gave away your batmobile to Joker";
        
        
        let imgLose = document.createElement("img");
      
        imgLose.src = "riddlerLose.jpg"; 
        imgLose.style.width = "50%"; 
        imgLose.style.height = "50%";

        imageContainer.appendChild(imgLose);
        hintText.remove();
        hintButton.remove();
        Input1.remove();
      
       if(imgLose){                     
            Submit1.remove();
            Input1.remove();
            hintButton.remove();
            hintText.remove();
       }
    };
}