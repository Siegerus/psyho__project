import $ from "jquery";
$(document).ready(function(){

    $('form').submit(function(e) {
        e.preventDefault();
    });

    $('#modal_sign form').validate({
        /* errorElement: "qq"  */
    });

});
