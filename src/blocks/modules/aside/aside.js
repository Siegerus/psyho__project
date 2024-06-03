import $ from "jquery";
$(document).ready(function(){
    
    $('.aside__close' && '.aside__close-circle').on('click', function (){
        $('.aside__menu').toggleClass('aside__menu_active'),
        $('.overlay').fadeOut('slow');
    });
    function toggleClassMenu(item) {
        $(item).on('click', function () {
        $('.aside__menu').toggleClass('aside__menu_active'),
        $('.overlay').fadeToggle('slow');
        $('.modal__wrapper').fadeOut();
        });
    };
    toggleClassMenu('.header__hamburger');
    toggleClassMenu('.header__menu');
    toggleClassMenu('.aside__link');

    $('.overlay').click(function(){
        let $menu = $('.aside__menu.aside__menu_active');

        if ($menu.hasClass('aside__menu_active')) {
            $(this).fadeOut('slow'),
            $menu.removeClass('aside__menu_active');
        }
    });
});