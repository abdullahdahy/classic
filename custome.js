/* global $, alert, consol*/

$(document).ready(function () {
    
    'use strict';
    
    //adjust header height
    
    var myHeader = $('.header');
    var mySlider = $('.slider');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
    });
    
    // links add active class
    
    $('.links li a').hover(function () {
       
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    
    // adjust slider
    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
    });
    
    // trigger slider
    mySlider.bxSlider();
    
    // scroll
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
    
    // t-slider
    (function autoSlider() {
        
        $('.t-slider .active').each(function () {
            
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
                
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.t-slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
                
            }
        });
        
    }());
    
    // mixitup

	$('#Container').mixItUp();
    
    //adjust shuffle
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    
    
    //scroll
    
    $(function () {
        $("html").niceScroll( {
            cursorcolor: '#1abc9c',
            cursorwidth: '10px',
            cursorborder: 'none'
        });
    });
    
    
    
    
    
    
    
    
});