$(function(){

    //слайдер

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-prev"><img src="img/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn-next"><img src="img/arrow-right.svg" alt=""></button>'
    });

    //поиск

    $('.tab').on('click', function (e) {
        e.preventDefault();
    
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
    
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    
        $('.product-slider').slick('setPosition');
    });

    $('.product-item__favorite').on('click', function () {
        $('.product-item__favorite').toggleClass('product-item__favorite--active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btn-prev"><img src="img/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btn-next"><img src="img/arrow-black-right.svg" alt=""></button>'
    });

    $('.filter-style').styler(); //filter

    $('.filter__item-drop').on('click', function() {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('100');
    });
});