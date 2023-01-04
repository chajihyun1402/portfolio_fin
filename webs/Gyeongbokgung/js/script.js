$(document).ready(function () {

 $('.slidebox').slick({
        autoplay: true,
        dots: true,
        slidesToShow: 1,
        
    }); //슬라이드
    $('.ba-slide').slick({
        autoplay: true,
        slidesToShow: 1,
        prevArrow: $('.ba-prev > a'),
        nextArrow: $('.ba-next > a'),
        
    }); //슬라이드

    function mobile(){
        
    $('.btn_menu').click(function(){

        $('nav').toggleClass('active');

        $(this).toggleClass('active');

    });

    $('.subtit > li > a').click(function(){
        $('.subtit ul').stop().slideUp();
        $(this).next('ul').stop().slideToggle(500);
    });

   

    }
    function pc(){
        
        $('.gnb > li > a').on('mouseover', function () {
            $('.pc-subnav').stop().slideDown().css({'display':'flex'})
        });
    
        $('.pc-subnav').on('mouseleave', function () {
            $('.pc-subnav').stop().slideUp();
        });

    }




   $(window).resize(function(){

    let winWidth = $(window).width();
    if(winWidth < 1500){
        location.reload();

        mobile();
    }else{
        location.reload();
        pc();
    }


   });





    let winWidth = $(window).width();
    if(winWidth < 1500){

        mobile();
    }else{
        pc();
    }




});