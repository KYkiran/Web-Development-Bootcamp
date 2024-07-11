let buttons = document.querySelectorAll('.drum');    

for(i = 0; i < buttons.length;i++){    

           buttons[i].addEventListener('click', function(){

           but=this.innerHTML;
           makeSound(but) 
            buttonAnimation(but)
            });

}

document.addEventListener('keypress',function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1=new Audio("sounds/tom-2.mp3");
            tom1.play();
            break; 
        case "s":
            var tom1=new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1=new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1=new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "k":
            var tom1=new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "l":
            var tom1=new Audio("sounds/snare.mp3");
            tom1.play();
            break;      
           
        default: console.log(but);
       }
}

function buttonAnimation(key){
    var active=document.querySelector("."+key);
    active.classList.add("pressed");
    window.setInterval(function(){active.classList.remove("pressed")},1000);
}