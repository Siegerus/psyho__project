import $ from "jquery";
$('#footer-link').on('click', function(e){
    e.preventDefault();
    location.href = $(this).attr('href');
   })