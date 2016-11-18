$(function () {
    'use strict';

    // Initialize HighlightingJS
    hljs.initHighlightingOnLoad();
    
    let menubar = $('.menubar');
    let sidebar = $('.sidebar');
    let mask = $('.mask');
    let backtop = $('.back-top');
    let nav = $('nav');
    let search = $('.search input');

    // Login\Search 居中显示
    let show_center = function (item) {
        let height = $(window).height();
        let width = $(window).width();
        let p_top = (height-item.height())/2;
        let p_left = (width-item.width())/2;
        item.css('top', p_top - p_top/100 * 20);
        item.css('left', p_left);        
    };
    // Search bar
    menubar.on('click', function () {
        mask.fadeIn();
        // sidebar.css('right', 0);
        // sidebar.animate({'right': 0});
        show_center(sidebar);
        sidebar.fadeIn();
        // search.focus();
    });
    // 关闭登录框、Search Bar
    mask.on('click', function () {
        mask.fadeOut();
        login_cover.fadeOut();
        // sidebar.animate({'right': -sidebar.width()})
        sidebar.fadeOut();

    });
    // 回到顶部
    backtop.on('click', function () {
        $('body').animate({
            'scrollTop': 0,
        }, 1000);
    });
    // 滚动的高度大于窗口的高度时显示菜单
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            backtop.fadeIn();
            nav.addClass('scroll-nav');
        } else {
            backtop.fadeOut();
            nav.removeClass('scroll-nav');
        }
    });
    // 页面加载即触发scroll, 隐藏backtop-btn
    $(window).scroll();
    // Login Form
    let do_login = $('#do-login');
    let login_cover = $('.login-cover');
    let username = $('#username');
    do_login.on('click', function () {
        mask.fadeIn();
        show_center(login_cover);
        login_cover.fadeIn();
        username.focus();
    });
    // 适应改变窗口大小时保持居中
    $(window).on('resize', function () {
        show_center(login_cover);
        show_center(sidebar);
    });
});