/*global $, alert ,console */


$(document).ready(function() {

    // trigger slider 
    $('.carousel').carousel({
        interval: 4000
    });

    //trigger nicescroll 

    $("html").niceScroll( {
        cursorcolor: "#ff6a0a",
        cursorwidth: "8px",
        cursorborder: "1px solid #ff6a0a",
        cursorborderradius: "2px",
        scrollspeed: 80,
    });

    // trigger buttom icons 
    $(".nav-item .abon").click(function(){
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000)
    });

});