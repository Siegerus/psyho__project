import $ from "jquery";
$(document).ready(function(){

    $('.diploms__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><div class="arrow_prev"><img src="img/icons/arrow_prev.svg" alt="arrow_prev"></div></button>' ,
        nextArrow: '<button type="button" class="slick-prev"><div class="arrow_next"><img src="img/icons/arrow_next.svg" alt="arrow_prev"></div></button>'
    });

});