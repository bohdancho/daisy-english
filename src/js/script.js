//= component/jquery.js
//= component/slick.js
//= component/smooth-scroll.js
//= component/maskedinput.js
//= component/validate.js

/* 
    Tabs
*/
function tab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab__item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}

/*
    Slider
*/
$('.slider__container').slick({
    prevArrow: '.slider__prev',
    nextArrow: '.slider__next',
    });

$(".slider__container").on("init", function(event, slick){
    $(".slider__count").text(parseInt(slick.currentSlide + 1) + ' из ' + slick.slideCount);
});

$(".slider__container").on("afterChange", function(event, slick, currentSlide){
    $(".slider__count").text(parseInt(slick.currentSlide + 1) + ' из ' + slick.slideCount);
});


$('.slider__readfull').on('click', function() {
    $(this).parent().find( '.slider__fulltext' ).show();
    $(this).parent().find( '.slider__smalltext' ).hide();
    $(this).parent().find( '.slider__readfull' ).fadeOut();
    $(this).parent().find( '.slider__close' ).fadeIn();
})
$('.slider__close').on('click', function() {
    $(this).parent().find( '.slider__fulltext' ).hide();
    $(this).parent().find( '.slider__smalltext' ).show();
    $(this).parent().find( '.slider__readfull' ).fadeIn();
    $(this).parent().find( '.slider__close' ).fadeOut();
})

/*
    Modal
*/

setTimeout(openModal, 20000);
$('.modal__close').on('click', closeModal);
$('.darken-bg').on('click', closeModal);
$('.js-open-modal').on('click', openModal);

function openModal() {
    $('.modal').fadeIn();
    $('.darken-bg').fadeIn();
    $('body').addClass('locked');
};
function closeModal() {
    $('.modal').fadeOut();
    $('.darken-bg').fadeOut();
    $('body').removeClass('locked');
}

/*
    Mask inputs
*/
$('.js-modal__input_tel').mask("+7 (999) 999-99-99", {
    autoclear: false
});
$('.js-register__input_tel').mask("+7 (999) 999-99-99", {
    autoclear: false
});

/*
    Validation
*/
$('.js-register__form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        tel: {
            phone: true
        }
    },
    messages: {
        name: 'Введите, пожалуйста, Ваше имя',
        tel: 'Введите, пожалуйста, Ваш номер телефона'
    },
    errorClass: 'register__error'
});

$('.js-modal__form').validate({
    focusInvalid: false,
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        tel: {
            phone: true
        }
    },
    messages: {
        name: 'Введите, пожалуйста, Ваше имя',
        tel: 'Введите, пожалуйста, Ваш номер телефона'
    },
    errorClass: 'modal__error'
});

jQuery.validator.addMethod('phone', function(value, element) {
    var str = value;
    var tempStr = [];
    for (var i = 0; i < str.length; i++) {
        if ( isNumeric(str[i]) ) {
            tempStr.push(str[i]);
        }
    }
    tempStr = tempStr.join('').toString();
    return tempStr.length == 11;

    function isNumeric(n) { 
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
}, 'Введите, пожалуйста, Ваш номер телефона');  

/*
    Hamburger Menu
*/

$('.js-nav-button').on('click', function() {
    $(this).toggleClass('nav-button_active');
    $('.js-nav').toggleClass('nav_active');
})
$('.js-nav .nav__item').on('click', function() {
    $('.js-nav').toggleClass('nav_active');
    $(' .js-nav-button').toggleClass('nav-button_active');
})