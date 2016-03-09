/*$(document).ready(function(){
    $(".row .square").hover(function(){
        $(this).css("background", "#003e80");
    }, function(){
        $(this).css("background", "#6666ff");
    });
});


$(".button").click(function() {
    $('html,body').animate({
        scrollTop: $(".adress").offset().top},
        'slow');
});

*/

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

