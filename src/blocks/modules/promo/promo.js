import $ from "jquery";
$(document).ready(function(){
    
    $('.circle_direction, .circle_register').on('click', function() {
        $('.modal_sign, .modal__wrapper, .overlay').fadeIn('slow');
        $('body').addClass('modal-open');
        /* $('body').css({
            'overflow':'hidden', 
            'padding':'100px'}) */
      });
  
});