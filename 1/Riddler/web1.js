let imageContainer = document.getElementById("web1ImageContainer1");
let btnContainer = document.getElementById("web1BtnContainer1");
let Input1 = document.getElementById("web1Input1");
let Submit1 = document.getElementById("web1Submit1");

Submit1.onclick = function riddle1(){                   // на нажатии запускает проверку ответа
    
    let inputValue = Input1.value;
    let input = String(inputValue)
    let lowerCaseInput = input.toLowerCase();
    

    if (lowerCaseInput == "лампочка"){                  // смотрит правильный ли ответ
        
        document.getElementById("web1H1").textContent = "Как ты угадал!?";
        let answer1 = document.getElementById("web1H1").textContent;
        
        let imgWin = document.createElement("img");
      
            imgWin.src = "riddlerWin.jpg";              // параметры новой картинки
            imgWin.style.width = "30%"; 
            imgWin.style.height = "30%";
            
            
            imageContainer.appendChild(imgWin);

        
        if(answer1 == "Как ты угадал!?"){               // создаёт кнопку при правильном ответе
            
            let newBtn = document.createElement("button")
            newBtn.id = "web1NewBtn1"
            newBtn.textContent = "вернуться";
            btnContainer.appendChild(newBtn);
            newBtn.innerHTML = "<a href = ../web.html> <button id=web1NewNewBtn1>вернуться</button> </a>"

          
            Submit1.remove();           //удаляет кнопку и инпут
            Input1.remove();
           
        
        }
    
    }else{                              // создаёт картинку при неправильном ответе
         
        document.getElementById("web1H1").textContent = "Ты опоздал бетмен, я отдал твой бетмобиль джокеру";
        
        
        let imgLose = document.createElement("img");
      
        imgLose.src = "riddlerLose.jpg"; 
        imgLose.style.width = "50%"; 
        imgLose.style.height = "50%";

        imageContainer.appendChild(imgLose);
      
       if(imgLose){                     //удаляет кнопку и инпут
            Submit1.remove();
            Input1.remove();
       }
    };
}