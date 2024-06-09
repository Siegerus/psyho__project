import $ from "jquery";
$(document).ready(function(){
    
      $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd-mm-yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: '',
        showOtherMonths: true,
        minDate:"+0d",
        maxDate:"+3m"  
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $("#datepicker").datepicker({
        onSelect: function(date) {
            $('#sign-date').val(date)
        }
    });
    
    $("#datepicker").datepicker("setDate", $('#sign-date').val());
    

    /* $('#sign-time').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        minHour: '8',
        maxHour: '20',
        defaultTime: '',
        startTime: '',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    }); */
    

    function closeModal(item) {
        $(item).on('click', function(){
            $('.modal, .overlay').fadeOut('slow');
            $('body').removeClass('modal-open');
            $('.aside__menu').removeClass('aside__menu_active');
            $('form').trigger('reset');
            $('label.error').css('display', 'none');
            
            
        });
    };
    closeModal('.modal__close');
    closeModal('.button_succes');

    $('.button_succes').on('click', function(e) {
        e.preventDefault();
    }); 

    $('.overlay').click(function (e) {
        if ($(e.target).is('.modal__wrapper, .overlay')) {
            $('.modal__wrapper, .modal, .overlay').fadeOut('slow');
            $('body').removeClass('modal-open');
        }
    }); 

});



