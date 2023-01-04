$(document).ready(function () {

    $(window).on('scroll', function () {
        let scr = $(window).scrollTop();
        
        let pg2OffTop = $('.pg2').offset().top;

        if (pg2OffTop - 300 <= scr && pg2OffTop + 800 >= scr) {
            $('.box.pg2').addClass('active');
        } else {
            $('.box.pg2').removeClass('active');
        } //pg2 animate
        
    });

  

    $('.ins-gal li').click(function(e){
        e.preventDefault();
    
            let img =$(this).find('a').html();
    
        $('.ins-view').fadeIn().find('figure').html(img)
    
    });
    
    
    $('.closeWrap').click(function(){
        $('.ins-view').fadeOut()
    });



}); //fin

$(function() {
	

});

var lypop = function(e, _this) { 
   e.preventDefault();
   var _this = $(_this);
   var _thisDataNum = _this.attr("data-num");
   console.log(_thisDataNum);
   var _origin = $(document).find("#lypop");
   
   
   _origin.addClass("on");
   $('body').css('overflow','hidden');
   
   _origin.find(".lypopcont .simg img").attr("src", "img/detail_view0" + _thisDataNum +".jpg");

};

var lypopClose = function(e, _this) { 
   e.preventDefault();
   var _this = $(_this);
   var _origin = $(document).find("#lypop");
   _origin.removeClass("on");
   $('body').removeAttr('style');
};
//pop-up
	