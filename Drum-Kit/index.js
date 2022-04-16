var allButtons = document.querySelectorAll('.drum')

for (var i =0; i<allButtons.length; i++){
    document.addEventListener('keydown', function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    })
    document.querySelectorAll('.drum')[i].addEventListener('click' ,function () {
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML);
    })
}

function makeSound(key){
    if (key =='w') {
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    }
    else if (key =='a') {
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    }
    else if (key =='s') {
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    }
    else if (key =='d') {
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    }
    else if (key =='j') {
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    }
    else if (key =='k') {
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
    }
    else if (key =='l') {
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);

    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}