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
        login_cover.fadeOut();
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

    let do_login = $('#do-login');
    let login_cover = $('.login-cover');
    let show_login_form = function () {
        let height = $(window).height();
        let width = $(window).width();
        let login_top = (height-login_cover.height())/2;
        let login_left = (width-login_cover.width())/2;
        login_cover.css('top', login_top);
        login_cover.css('left', login_left);        
    };
    do_login.on('click', function () {
        mask.fadeIn();
        show_login_form();
        login_cover.fadeIn();
    });
    $(window).on('resize', function () {
        show_login_form();
    });
});