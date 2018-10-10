
/* global $ */


$(document).ready(function() {
    
   
 /* Scroll on buttons */ 
$('.js--scroll-to-content').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-topic').offset().top}, 1000);
});
    
 $('.js--scroll-to-promo-code').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-promo-code').offset().top}, 1000);
});   
    
    
});