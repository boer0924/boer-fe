$(function () {
    'use strict';
    let menubar = $('.menubar');
    let sidebar = $('.sidebar');
    let mask = $('.mask');
    let backtop = $('.back-top');

    menubar.on('click', function () {
        console.log('sadg');
        mask.fadeIn();
        // sidebar.css('right', 0);
        sidebar.animate({'right': 0});
    });
    mask.on('click', function () {
        mask.fadeOut();
        sidebar.animate({'right': -sidebar.width()})
    });

    backtop.on('click', function () {
        $('body').animate({
            'scrollTop': 0,
        }, 1000);
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            backtop.fadeIn();
        } else {
            backtop.fadeOut();
        }
    });
    $(window).scroll();
    
    // Initialize HighlightingJS
    hljs.initHighlightingOnLoad();
});