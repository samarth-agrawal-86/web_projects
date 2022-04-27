var started = false;
var level = 0;
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(document).keypress(function () {
    if(!started){
        $('h1').text("Level "+level) ;
        nextSequence();
        started = true;
    }
})

$('.btn').click(function(event){
    // 'this' Returns the button clicked:
    // <input id="btn1" type="button" value="Add">
    // You can bling this to get the jQuery object of the button clicked
    // e.g.: $(this).attr('id'); to get the ID: #btn1
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);
    
    playSound(userChosenColor);

    checkAnswer(userClickedPattern.length-1);

});

function nextSequence(){
    userClickedPattern =[];

    level=level+1;
    $('h1').text("Level "+level) ;

    randomNumber = Math.floor( Math.random()*4);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $('#'+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);
    
}



function checkAnswer(currentLevel){
if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("Success");
    console.log(userClickedPattern);
    console.log(gamePattern);

    if (userClickedPattern.length == gamePattern.length) {
        setTimeout(function(){
            nextSequence();
        }, 1000) ;
    }
    
    
}
else{
    console.log('Wrong');
    $('h1').text('Game over, Press any key to restart');
    playSound("wrong");
    $('body').addClass('game-over');
    setTimeout(function(){
        $('body').removeClass('game-over');
    }, 200);
    startOver();
}
}

function animatePress(currentColor){
    $('#'+currentColor).addClass('pressed');
    setTimeout(function(){
        $('#'+currentColor).removeClass('pressed');
    }, 100);
}

function playSound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
}

function startOver(params) {
    level = 0;
    gamePattern=[];
    started=false;
}