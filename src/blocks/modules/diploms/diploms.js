import $ from "jquery";
$(document).ready(function(){

    $('.diploms__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><div class="arrow_prev"><img src="img/icons/arrow_prev.svg" alt="arrow_prev"></div></button>' ,
        nextArrow: '<button type="button" class="slick-next"><div class="arrow_next"><img src="img/icons/arrow_next.svg" alt="arrow_prev"></div></button>'
        
    });


    $('.popup-link').magnificPopup({
        type: 'image',
        image: {
            verticalFit: false,
            cursor: null,
            titleSrc: 'title',
            tError: 'Не удаётся загрузить изображение',
            markup: '<div class="mfp-figure">'+
            '<div class="mfp-close"></div>'+
            '<div class="mfp-img"></div>'+
            '<div class="mfp-bottom-bar">'+
            '<div class="mfp-title"></div>'+
            '<div class="mfp-counter"></div>'+
            '</div>'+
            '</div>'
        },
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"><img src="img/icons/close.svg" alt="close"></button>', 
        showCloseBtn: true,
        closeBtnInside: false,
        verticalFit: true,
        zoom: {
            enabled: true,
            duration: 300
        },
        disableOn: function() {
            if( $(window).width() < 320) {
              return false;
            }
            return true;
          }
                
    });


      /* '<div class="modal__close modal__close_popup"></div>' */
      /* '<button title="%title%" type="button" class="mfp-close"></button>' */








});

