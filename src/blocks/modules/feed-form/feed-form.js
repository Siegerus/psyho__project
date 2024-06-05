import $ from "jquery";
$(document).ready(function(){
  
    $('#sign-form').validate({
        errorPlacement: function(error, element) {
            if (element.hasClass('feed-form__input_date')) {
                error.insertAfter(element);
                error.css('text-align', 'center');
            } else {
                error.insertAfter(element);
              }
        },
        rules: {
            user: {
                required: true,
                rangelength: [2, 30]
            },
            phone: {
                required: true,
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

    $('#sign-time, #sign-date').on('input', function(){
        this.value = this.value.replace(/[^0-9\.\,\:\ ]/g, '');
    });
    $('#sign-time').mask("9?9 : 99", {placeholder: "_"});
    
    
    $('input[name=phone]').on('input', function(){  
        this.value = this.value.replace(/[^0-9\+]/g, '');
    });
    
    $('input[name=phone]').focus( function() {
        let currentPlaceholder = $(this).attr('placeholder');
        $(this).attr('placeholder', '+38099 / 38099 / 8099 / 099');
        $(this).focusout(function() {
            $(this).attr('placeholder', currentPlaceholder)
        }); 
    });
    
 

    $('#modal-sign-button, #modal-theme-button, #modal-reviews-button, #modal-instructions-button').click(function() {
        let radio = $('input.feed-form__radio_social');
        if (radio.is(':checked')) {
            $('input#sign-nickname, input#theme-nickname, input#instructions-nickname, #reviews-nickname').prop('required', true);
        } else {
            $('input#sign-nickname, input#theme-nickname, input#instructions-nickname, #reviews-nickname').prop('required', false);
        }
    });

    $('.feed-form__radio').on('click', function(){
        let input = $('#sign-nickname, #reviews-nickname, #theme-nickname');
        let currentPlaсeholder = input.attr('placeholder');
        let text = $('input.feed-form__radio_social:checked + .feed-form__radio-label').text();
        input.attr('placeholder', 'Как вас найти в ' + text + ' (введите ваш ник или номер телефона)');  
        $('.modal__close').on('click', function(){
            input.attr('placeholder', currentPlaсeholder);
        })
    });


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
            email: {
                required: true,
                justmail: true,
                email: false
            }
        },
        messages: {
            theme: {
                required: "Укажите тему встречи"
            },
            user: {        
                required: "Пожалуйста, введите своё имя",
                rangelength: "Введите от {2} до {30} символов"
            },
            nickname:{
                required:"Пожалуйста, укажите ник или номер телефона",
                rangelength: "Введите от {2} до {30} символов"
            },
            email: {
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
                if (element.hasClass('instructions-radio')) {
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
                    required: true,
                    rangelength: [2, 10]      
                },
                email: {
                    required: true,
                    justmail: true,
                    email: false
                }
            },
            messages: {
                instruction: {
                    required: "Укажите тему инструкции"
                },
                user: {        
                    required: "Пожалуйста, введите своё имя",
                    rangelength: "Введите от {2} до {30} символов"
                },
                social:{
                    required:"Пожалуйста, укажите соц. сеть для связи",
                    rangelength: "Введите от {2} до {10} символов"
                },
                email: {
                    required: "Пожалуйста, введите свою почту",
                    justmail: "Неправильный адрес почты"
                }
            } 
        });

        $('#reviews-form').validate({
            errorPlacement: function(error, element) {
                if (element.hasClass('feed-form__radio')) {
                    error.appendTo('.feed-form__error-box');
                    error.css('margin-bottom', '40px');
                } else {
                    error.insertAfter(element);
                  }
            },
            rules: {
                user: {
                    required: true,
                    rangelength: [2, 30]
                },
                phone: {
                    required: true,
                    rangelength: [10, 13]
                },
                social: {
                    required: true       
                },
                nickname: {
                    rangelength: [3, 30] 
                },
                review: {
                    required: true,
                    rangelength: [7, 500], 
                    justcomment: true                        
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
                social: {
                    required: "если вам это не нужно, то выберите опцию, <br>расположенную ниже"
                },
                review: {
                    required: "Напишите отзыв",
                    rangelength: "Введите от {7} до {500} символов",
                    justcomment: "Ссылки запрещены"
                }
            } 
        });

    $.validator.addMethod("justcomment", function(value, element) {
        return this.optional( element ) || !/(https?:\/\/|ftps?:\/\/|www\.)((?![.,?!;:()]*(\s|$))[^\s]){2,}/gim.test( value );
        });

        $('input#reviews-textarea').on('input', function(){  
            this.value = this.value.replace(/<[^>]*>/g,'');
        });
        
    $('#reviews-denied').on('click', function(){
        if ($('.feed-form__radio_social').prop('checked') == false) {
            $('input#reviews-nickname').prop('disabled', true)
            $('input#reviews-nickname').val('')  
        } 
        $('.feed-form__radio_social, .modal__close').on('click', function(){
            $('input#reviews-nickname').prop('disabled', false)
        })     
    });    


    $('#sign-form').submit(function(e) {
            e.preventDefault();
        if (!$(this).valid()) { 
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/sign-form.php",
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
            url: "mailer/theme-form.php",
            data: $(this).serialize()}).done(function() {
                $('.modal_theme-succes .feed-form__radio-block').html($('.modal_theme input.theme-radio:checked + .feed-form__radio-block').html());
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
            url: "mailer/instructions-form.php",
            data: $(this).serialize()}).done(function() {
                $('.modal_instructions-succes .feed-form__radio-block').html($('.modal_instructions input.instructions-radio:checked + .feed-form__radio-block').html());
                $(this).find("input").val("");
                $('.modal_instructions-succes').fadeIn('slow');
                $('form').trigger('reset');
            })
            return false;        
        });

    $('#reviews-form').submit(function(e) {
            e.preventDefault();
        if (!$(this).valid()) { 
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/reviews-form.php",
            data: $(this).serialize()}).done(function() {
                $(this).find("input").val("");
                $('.modal_reviews-succes').fadeIn('slow')
                $('form').trigger('reset');
            })
            return false;        
         });     
   










    
    });

    
    
    
    


