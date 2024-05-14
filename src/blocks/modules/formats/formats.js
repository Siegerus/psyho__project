import $ from "jquery";
$(document).ready(function(){
    
    $('.formats__sign').each(function(){
        $(this).on('click', function () {
            $('.modal_theme, .overlay, .modal__wrapper').fadeIn('slow')  
            $('body').addClass('modal-open')  
        })
    });
    /* $('#modal-theme-button').on('click', function() {
        $('.modal_theme-succes').fadeIn('slow')
    });  */

    $('[data-modal="instructions"]').on ('click', function(){
        $('.modal_instructions, .overlay, .modal__wrapper').fadeIn('slow')
        $('body').addClass('modal-open')
    })

    $('#modal-instructions-button').on('click', function(){
        $('.modal_instructions-succes .feed-form__radio-block').html($('.modal_instructions input.instructions-radio:checked + .feed-form__radio-block').html());
    });
    
    /* $('#modal-instructions-button').on('click', function(){
        $('.modal_instructions-succes, .overlay').fadeIn('slow')
    }) */

    
});