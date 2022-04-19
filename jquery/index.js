$('h1').addClass('big-title margin-50');
//.removeClass()
//.hasClass()

$('button').text("Don't click me");
//$('button').html('<em>hey</em>');

//.attr()

//event listener
$('button').click(function(){
    $('h1').css('color', 'purple');
})

$(document).keypress(function(event){
$('h1').text(event.key);
})

$('h1').on('mouseover', function(){
    $('h1').css('color', 'red');
})

$('button').on('click', function(){
    $('h1').slideToggle();
})