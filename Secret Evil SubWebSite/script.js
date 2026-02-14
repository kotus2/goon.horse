const mouseX = document.getElementById("mouseX");
const mouseY = document.getElementById("mouseY");

document.onmousemove = function(event){
    mouseX.textContent = event.clientX;
    mouseY.textContent = event.clientY;

}