$(function(){

    //слайдер

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-prev"><img src="img/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-next"><img src="img/arrow-right.svg" alt=""></button>'
    });

    //поиск

    $('.search__tabs-item').on('click', function(e) {
        e.preventDefault();
        $('.search__tabs-item').removeClass('search__tabs-item--active');
        $('.search__content-item').removeClass('search__content-item--active');

        $(this).addClass('search__tabs-item--active');
        $($(this).attr('href')).addClass('search__content-item--active');
    })
});