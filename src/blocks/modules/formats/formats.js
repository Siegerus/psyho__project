import $ from "jquery";
$(document).ready(function(){
    
    /* $('.formats__sign').each(function(){
        $(this).on('click', function () {
            $('.modal_sign, .overlay, .modal__wrapper').fadeIn('slow')  
            $('body').addClass('modal-open')  
        })
    }); */

    $('[data-modal="sign"]').on ('click', function(){
        $('.modal_sign, .overlay, .modal__wrapper').fadeIn('slow')
        $('body').addClass('modal-open')
    })

    $('[data-modal="instructions"]').on ('click', function(){
        $('.modal_instructions, .overlay, .modal__wrapper').fadeIn('slow')
        $('body').addClass('modal-open')
    })

    $('[data-modal="theme"]').on ('click', function(){
        $('.modal_theme, .overlay, .modal__wrapper').fadeIn('slow')
        $('body').addClass('modal-open')
    })
    
});