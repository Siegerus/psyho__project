import $ from "jquery";
$(document).ready(function(){

    $ ('.reviews__button').on ('click', function (){
        $('.overlay, .modal_reviews, .modal__wrapper').fadeIn('slow')
        $('body').addClass('modal-open')
    });
    /* $('#modal-reviews-button').on('click', function() {
        $('.modal_reviews-succes').fadeIn('slow')
    }); */

    $(".reviews__arrow-prev, .reviews__arrow-next").click(function() {
        let $reviews = $(".reviews__wrapper .reviews__content");
        let currentActiveElementIndex = $reviews.index($(".reviews__wrapper .reviews__content.reviews__content_active"));
        let newActiveElementIndex = 0;
    
        if ($(this).hasClass('reviews__arrow-next')) {
        newActiveElementIndex = currentActiveElementIndex + 1 === $reviews.length ? 0 : currentActiveElementIndex + 1;
        } else {
        newActiveElementIndex = currentActiveElementIndex - 1 < 0 ? $reviews.length - 1 : currentActiveElementIndex - 1;
        }
    
        $reviews.removeClass('reviews__content_active');
        $reviews.eq(newActiveElementIndex).addClass('reviews__content_active');
    });

    


});
