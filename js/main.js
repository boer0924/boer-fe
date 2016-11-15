$(function () {
    'use strict';
    let menubar = $('.menubar');
    let sidebar = $('.sidebar');
    let mask = $('.mask');

    menubar.on('click', function () {
        console.log('sadg');
        mask.fadeIn();
        // sidebar.css('right', 0);
        sidebar.animate({'right': 0});
    });
    mask.on('click', function () {
        mask.fadeOut();
        sidebar.animate({'right': '-280px'})
    })
});