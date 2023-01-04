$(document).ready(function () {


    let headerHeight = $('header').height();
    
    //첫페이지 스크롤링
    $('.pg1').on('mousewheel',function(e,d){
        let destination = $('.pg2').offset().top;
        if(d<0){
            $('html,body').stop().animate({'scrollTop' :destination - headerHeight})
        }else if(d>0){
            $('html,body').stop().animate({'scrollTop' : 0})
        }
    });

    //두번째 페이지 스크롤링
    $('.pg2').on('mousewheel',function(e,d){

        let destination = $('.pg3').offset().top;

        if(d<0){
            $('html,body').stop().animate({'scrollTop' : destination - headerHeight})
        }else if(d>0){
            $('html,body').stop().animate({'scrollTop' : 0})
        }

    });

    //세번째에서 상단 스크롤링
    $('.pg3').on('mousewheel',function(e,d){
        let y = e.pageY;
        let offsetTop  = $('.pg3').offset().top;
        let destination = $('.pg2').offset().top;

        
        if(y<offsetTop+300){

            if(d>0){
                $('html,body').animate({'scrollTop' : destination - headerHeight})
            }

        }
    });
    

    $('.insta-slider').slick({
        'slidesToShow': 5,
        'slidesToScroll': 3,
        'centerMode': true,
        'infinite' : true,
        'centerPadding': '150px',
        'autoplay' : true,
        'autoplaySpeed' : 2000
    }); //슬라이드


let instaDatas = [
    {
        img : 'insta01',
        location : '노티드 부산 해운대 - Knotted Busan Haeundae',
        txt : `<em>KNOTTED HAEUNDAE GRAND OPEN D-1💓</em><br/>
        내일 11월 11일 노티드가 드디어 부산 해운대에!<br/>
        노티드 부산 해운대 그랜드 오픈을 합니다🙌<br/>
        그랜드 오픈 기념, 해운대점을 방문해주시는<br/>
        고객님들께 준비한 특별한 선물을 드립니다.<br/>
        노티드 부산 해운대 그랜드 오픈에 함께 해주세요!<br/>
        📍노티드 부산 해운대<br/>
        부산광역시 해운대구 구남로 17<br/>
        10:00 ~ 21:00`,
        tag : ['KNOTTED', '노티드']
    },
    {
        img : 'insta02',
        location : '📮아아! 노티드소식통에서 알려드립니다!',
        txt : `<em>노티드 밀키팜 카라멜이 출시되었다고합니다😋</em><br/>
        귀여운 슈가베어 틴 케이스 속 진하고 고소한<br/>
        우유맛을 느낄 수 있는 노티드만의<br/>
        부드러운 카라멜을 만나보세요!<br/>
        💛KNOTTED MILKY FARM CARAMEL💛<br/>
        구성 : 크림 6개 + 솔티드 6개 + 라즈베리 6개<br/>
        옵션 : 옐로우 / 핑크 / 민트 / 체크<br/>
        가격 : 13,900원
        `, //``
        tag : ['KNOTTED', '노티드']
    },
    {
        img : 'insta03',
        location : '노티드가 만든 쿠키! 너를 위해 구웠지!🍪',
        txt : `<em>노티드 스마일 & 슈가베어 버터쿠키😋</em><br/>
        스마일과 슈가베어 얼굴로 더욱 귀엽고,<br/>
        바삭! 고소! 버터의 부드러운 풍미가 느껴져<br/>
        더욱 맛있는 쿠키를 준비했어요 🧸<br/>
        카카오톡 선물하기에 단독 오픈!<br/>
        바로 내일 11/15 8시에 만날 수 있어요🤎<br/>
        `, //``
        tag : ['KNOTTED', '노티드']
    },
    {
        img : 'insta04',
        location : 'WHITE CHOCOLATE MINT TEA🍃',
        txt : `<em>화이트 초콜릿 민트티 (HOT/ICE)</em><br/>
        부드럽고 달콤한 화이트 초콜릿과<br/>
        입 안 가득 화사한 민트티가 어우러진<br/>
        노티드 크리스마스 한정 티 음료 (*NON-CAFFEINE)<br/>
        화이트 크리스마스를 노티드에서<br/>
        제일 먼저 즐겨보세요!☃️<br/>
        판매 기간 : 22.11.15 ~ 22.12.31<br/>
        📍판매 제외 매장 : 압구정 갤러리아점, 광교 갤러리아점,<br/>
        성수점, 부산 롯데점
        `, //``
        tag : ['KNOTTED', '노티드', '노티드크리스마스']
    },
    {
        img : 'insta05',
        location : '하나도 놓치기 아쉬운, 토핑 가득한 노티드 신메뉴 4종!💘✨',
        txt : `레인보우 시리얼 도넛🌈,<br/>
        시나몬 먼치 도넛🤎,<br/>
        헤이즐넛 초코볼 도넛🍫,<br/>
        피스타치오 크림 도넛🥠<br/>
        네 가지 다 너무 맛있어서 포기 못해..<br/>
        노티드 커피와 함께라면 무한 흡입 가능..! 🍩☕️<br/>
        <br/>
        ✔️노티드 청담, 잠실, 강남, 여의도, 삼성 5지점에서<br/>
        만나보실 수 있습니다!
        `, //``
        tag : ['KNOTTED', '노티드']
    },
    {
        img : 'insta06',
        location : '쌀쌀해진 날씨 집에서 따뜻한 스마일 만쥬 한 입😋',
        txt : `한 입 크기로 앙증맞게 구워낸 만쥬에 스마일을 콕!<br/>
        노티드 시그니처 메뉴인 우유생크림도넛과 같이,<br/>
        만쥬 속에는 바닐라빈이 콕콕 박힌 부드럽고 고소한<br/>
        우유크림을 아낌 없이 채워 넣었어요.<br/>
        아이들은 우유와, 어른들은 커피와 곁들여<br/>
        노티드 스마일만쥬와 웃음 가득한<br/>
        간식 시간을 누려보세요!💛<br/>
        <br/>
        <em>마켓컬리</em>에서만 만나볼 수 있습니다🤗<br/>
        `, //``
        tag : ['KNOTTED', '노티드', '마켓컬리']
    },
    {
        img : 'insta07',
        location : '시몬스파머스마켓과 노티드😋오늘부터🥳',
        txt : `오늘부터 시몬스 그로서리 스토어 청담에서<br/>
        노티드를 만나보실 수 있습니다!<br/>
        노티드의 아기자기하고 매력적인 굿즈와<br/> 
        일일 한정으로 진행하는 도넛들,<br/>
        작은 이벤트까지 다양하게 준비하였으니<br/> 
        많이 오셔서 시몬스파머스마켓을 즐겨주세요🤎💛<br/>
        • 일시 : 10월 27일(목) - 10월 30일(일)<br/>
        • 시간 : 12:00 - 18:00 운영<br/>
        • 장소 : 서울시 강남구 청담동 88-25<br/>
        `, //``
        tag : ['KNOTTED', '노티드', '시몬스파머스마켓']
    }
];


    $('.insta-slider .slick-slide').click(function(){

        let i = $(this).data('slickIndex');

    
        let img = instaDatas[i].img;
            img = 'img/'+img+'.png';
        let location = instaDatas[i].location;
        let txt = instaDatas[i].txt;
        let tag = instaDatas[i].tag;

        $('.insta-view').fadeIn();

        $('.instaImg').attr('src',img);
        $('.location').text(location);
        
        $('.view>.txt').html(txt);
        $('.tag').html('');

        for(let m = 0; m<tag.length; m++){

            $('.tag').append(`<a href="javascript:void(0)">${tag[m]}</a>`);

        }
    });//click.slickslide,인스타미리보기


    $('.close-wrap, .close-btn').click(function(){
        $('.insta-view').fadeOut();
    });//인스타미리보기닫기

    $(".menuname").click(function(){
        $(".menuname").removeClass("on");
        $(this).addClass("on");
    });//메뉴 이름 클릭

    $(".news").hover(function(){
        $(".news").removeClass("on");
        $(this).addClass("on");
    });//뉴스 호버
});