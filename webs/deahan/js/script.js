$(document).ready(function () {

    $('.navlist').on('mouseover', function () {
        $('nav').stop().slideDown()
    });

    $('header').on('mouseleave', function () {
        $('nav').stop().slideUp();
    });

    $('.btn_menu').click(function(){

        $('.all-menu').fadeIn(500);
        $('.menu-wrap').animate({
            'opacity':1
        },800)
    });

    $('.all-menubtn').click(function(){
        $('.all-menu').fadeOut();
        $('.menu-wrap').animate({
            'opacity':0
        },800)
    });


    $(window).on('scroll', function () {
        let scr = $(window).scrollTop();
        let pg2 = $('.pg2').offset().top;

        if (scr >= pg2) {
            $('header').addClass('on')
        } else {
            $('header').removeClass('on')
        }
    });
    
    window.scroll({
        top: 0,
        left: 100,
        behavior: 'smooth'
      });


    $('.product-all').slick({
        'slidesToShow': 3,
        'slidesToScroll': 1,
        'centerMode': true,
        'infinite' : true,
        'centerMode' : true,
        'centerPadding': '300px',
        'autoplay' : true,
        'autoplaySpeed' : 2000,
        
        
    }); //슬라이드




    $('.locationWrap span').click(function (e) {
        e.preventDefault();
        let i = $(this).index();

        $('.addwrap').children().eq(i).show().siblings().hide();
    }); //지도








    $(window).on('scroll', function () {
        let scr = $(window).scrollTop();
        let pg2OffTop = $('.pg2').offset().top;

        if (pg2OffTop - 300 <= scr && pg2OffTop + 800 >= scr) {
            $('.box.pg2').addClass('active');
        } else {
            $('.box.pg2').removeClass('active');
        } //pg2 animate

        let pg4OffTop = $('.pg4').offset().top;

        if(pg4OffTop - 300 <= scr && pg4OffTop + 1200 >= scr){
            $('.pg4').addClass('animate')
        }else {
            $('.pg4').removeClass('animate');
        }
        
        let pg5OffTop = $('.pg5').offset().top;
        if(pg5OffTop - 200 <= scr && pg5OffTop + 700 >= scr){
            $('.pg5').addClass('animate')
        }else {
            $('.pg5').removeClass('animate');
        }


    });

    famchk = 0;
	$(".family>a").click(function(){
		if(famchk == 0){
			$(this).next("ul").slideDown();
			famchk = 1;
		}else{
			$(this).next("ul").slideUp();
			famchk = 0;
		}
	});//패밀리사이트


    new kursor({
        el:'.pg4 >.cursors',
        type:4,
    }); //마우스 커서

    new kursor({
        el:'.recruitwrap  > .cursors',
        type:4,
    });//마우스 커서
    
    


    $('.pg4 >.cursors','.recruitwrap > .cursors').on('mouseenter',function(){
        $("div[class*='kursor'].kursor--4").addClass('animate');
    }).on('mouseleave',function(){
        $("div[class*='kursor'].kursor--4").removeClass('animate');
    });

    

    //첫페이지 스크롤링
    $('.pg1').on('mousewheel',function(e,d){
        
        if(d<0){
            $('html,body').animate({'scrollTop' : window.innerHeight})
        }
    });
    
    

}); //fin