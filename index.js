
// document.querySelector("button").addEventListener("click",myClick);

for(var i=0;i<(document.querySelectorAll(".drum").length);i++){
    document.querySelectorAll("button")[i].addEventListener("click",myClick);
}



function myClick(){
    var buttonClicked = this.innerHTML;

    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);
    
}


// var audio = new Audio('/sounds/tom-1.mp3');
//     audio.play();


// this.style.color = "white";






document.addEventListener("keydown",keybordOne);


function keybordOne(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    // alert("The key which got pressed is "+event.key);
}


function makeSound(buttonClicked){
    switch (buttonClicked) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
             
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;    
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
             
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;   
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
             
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;    

        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;                                  
    
        default:
            
    }
}


function buttonAnimation(buttonClicked){
    var activeButton = document.querySelector("."+buttonClicked);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed",200);
    },100);
}
