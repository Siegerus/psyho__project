import $ from "jquery";
$(document).ready(function(){
    
    $('a[href*="#"]').on("click", function(e) {
        e.preventDefault();
        var root = $('body, html');
        let id  = $(this).attr('href');
        let top = $(id).offset().top; 
        $(root).animate({scrollTop: top}, 400); 
    });
});



