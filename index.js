let header = document.querySelector(".header")
window.onscroll = function(){
    
if(window.scrollY > 100){
header.style.background = "#000"
}
else{
header.style.background = "rgba(0, 0, 0, 0)" 
}
}