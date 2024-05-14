import $ from "jquery";
$(document).ready(function(){
  
    $('#sign-form').validate({
        rules: {
            user: {
                required: true,
                rangelength: [2, 30]
            },
            phone: {
                required: true,
                /* justphone: true, */
                rangelength: [10, 13]
            },
            social: {
                required: false       
            },
            nickname: {
                
                rangelength: [3, 30] 
            },
            date: {
                required: true
            },
            time: {
                required: true,
            }

            },
        messages: {      
            user: {        
                required: "Пожалуйста, введите своё имя",
                rangelength: "Введите от {2} до {30} символов"
            },
            phone: {
                required:"Пожалуйста, введите свой номер",
                /* justphone: "Неверный формат", */
                rangelength: "От 10 до 13 символов, взависимости от формата"
            }, 
            nickname:{
                required:"Пожалуйста, укажите ник или номер телефона",
                rangelength: "Введите от {2} до {30} символов"
            },
            date: {
                required:"Пожалуйста, укажите желаемую дату"
                
            },
            time: {
                required:"Пожалуйста, укажите время"
            }
            }

    });

    $('#sign-time').on('input', function(){
        this.value = this.value.replace(/[^0-9\.\,\:\ ]/g, '');
    });
    $('#sign-time').mask("99 : 99", {placeholder: " "});
    
    
    $('input[name=phone]').on('input', function(){  
        this.value = this.value.replace(/[^0-9\+]/g, '');
    });
    
    $('input[name=phone]').focus( function() {
        $(this).attr('placeholder', '+38099 / 38099 / 8099 / 099');
        $(this).focusout(function() {
            $(this).attr('placeholder', 'Введите номер')
        }); 
    });
 

    $('#modal-sign-button, #modal-theme-button, #modal-reviews-button, #modal-instructions-button').click(function() {
        let radio = $('input.feed-form__radio_social');
        if (radio.is(':checked')) {
            $('input#sign-nickname, input#theme-nickname, input#instruction-nickname').prop('required', true);
        }
    });

    $('.feed-form__radio').on('click', function(){
        let input = $('#sign-nickname, #reviews-nickname, #theme-nickname, #instructions-nickname');
        let text = $('input.feed-form__radio_social:checked + .feed-form__radio-label').text();
        input.attr('placeholder', 'Как вас найти в ' + text + ' (введите ваш ник или номер телефона)');        
    });



    /* jQuery.validator.setDefaults({
        errorPlacement: function(error, element) {
            if(element.attr('name') == 'theme'){
                error.insertAfter('.feed-form__error-box');
                error.css('display', 'none');
                error.css('color', 'red');
                error.fadeIn();
            } else {
                error.insertAfter(element);
              }
        }
    }); */
    $('#theme-form').validate({
        errorPlacement: function(error, element) {
            if (element.hasClass('theme-radio')) {
                error.appendTo('.feed-form__error-box');
            } else {
                error.insertAfter(element);
              }
        },
        ignore: "",
        rules: {
            theme: {
            required: true,
        },
            user: {
                required: true,
                rangelength: [2, 30]
            },
            social: {
                required: false       
            },
            nickname: {
                rangelength: [3, 30] 
            },
            mail: {
                required: true,
                justmail: true,
                email: false
            }

        },
        messages: {
            theme: {
                required: "Выберите тему"
            },
            user: {        
                required: "Пожалуйста, введите своё имя",
                rangelength: "Введите от {2} до {30} символов"
            },
            nickname:{
                required:"Пожалуйста, укажите ник или номер телефона",
                rangelength: "Введите от {2} до {30} символов"
            },
            mail: {
                required: "Пожалуйста, введите свою почту",
                justmail: "Неправильный адрес почты"
            }
        } 
    });

    $.validator.addMethod("justmail", function(value, element) {
        return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
        });

        $('#instructions-form').validate({
            errorPlacement: function(error, element) {
                if (element.hasClass('instructions-radio-radio')) {
                    error.appendTo('.feed-form__error-box');
                } else {
                    error.insertAfter(element);
                  }
            },
            ignore: "",
            rules: {
                instruction: {
                required: true,
            },
                user: {
                    required: true,
                    rangelength: [2, 30]
                },
                social: {
                    required: false       
                },
                nickname: {
                    rangelength: [3, 30] 
                },
                mail: {
                    required: true,
                    justmail: true,
                    email: false
                }
            },
            messages: {
                instruction: {
                    required: "Выберите инструкцию"
                },
                user: {        
                    required: "Пожалуйста, введите своё имя",
                    rangelength: "Введите от {2} до {30} символов"
                },
                nickname:{
                    required:"Пожалуйста, укажите ник или номер телефона",
                    rangelength: "Введите от {2} до {30} символов"
                },
                mail: {
                    required: "Пожалуйста, введите свою почту",
                    justmail: "Неправильный адрес почты"
                }
            } 
        });



















    /* $('form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) { 
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()}).done(function() {
                $(this).find("input").val("");
                $('.modal_sign-succes').fadeIn('slow');
                $('form').trigger('reset');
            })
            return false;
        }); */

        $('#sign-form').submit(function(e) {
            e.preventDefault();
        if (!$(this).valid()) { 
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()}).done(function() {
                $(this).find("input").val("");
                $('.modal_sign-succes').fadeIn('slow');
                $('form').trigger('reset');
            })
            return false;        
         });

        $('#theme-form').submit(function(e) {
            e.preventDefault();
        if (!$(this).valid()) { 
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()}).done(function() {
                $(this).find("input").val("");
                $('.modal_theme-succes').fadeIn('slow');
                $('form').trigger('reset');
            })
            return false;        
         });

         $('#instructions-form').submit(function(e) {
            e.preventDefault();
        if (!$(this).valid()) { 
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()}).done(function() {
                $('.modal_instructions-succes .feed-form__radio-block').html($('.modal_instructions input.instructions-radio:checked + .feed-form__radio-block').html());
                $(this).find("input").val("");
                $('.modal_instructions-succes').fadeIn('slow');
                $('form').trigger('reset');
            })
            return false;        
         });
         
   










    
    });

    
    
    
    


