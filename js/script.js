$(".tab li:eq(0) a").click(
    function(){
        $(".tab a").removeClass("on");
        $(this).addClass("on");

       $(".tabcontent").hide();
       $(".tab1").css("display","flex");
    }
);
$(".tab li:eq(1) a").click(
    function(){
        $(".tab a").removeClass("on");
        $(this).addClass("on");

       $(".tabcontent").hide();
       $(".tab2").css("display","flex");
    }
);
$(".tab li:eq(2) a").click(
    function(){
        $(".tab a").removeClass("on");
        $(this).addClass("on");

       $(".tabcontent").hide();
       $(".tab3").css("display","flex");
    }
);



$('.main-slide').slick({
    slide: 'li',
    dots:true,
    // fade:true,
    prevArrow : $('.prev'),     // 이전 화살표 모양 설정
    nextArrow : $('.next'),     // 다음 화살표 모양 설정
    autoplay : true,            // 자동 스크롤 사용 여부
    autoplaySpeed : 2000,       // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,        // 슬라이드 이동  시 마우스 호버하면 슬라이더 멈추게 설정
});


$(".hit-slide").slick({
    slidesToShow : 4,         // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,      //스크롤 한번에 움직일 컨텐츠 개수
    prevArrow : $('.hit-prev'),     // 이전 화살표 모양 설정
    nextArrow : $('.hit-next'),     // 다음 화살표 모양 설정
    autoplay : true,            // 자동 스크롤 사용 여부
    autoplaySpeed : 2000,       // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,        // 슬라이드 이동  시 마우스 호버하면 슬라이더 멈추게 설정

    responsive: [ // 반응형 웹 구현 옵션
    { 
        breakpoint: 721, //화면 사이즈 720px 부터
        settings: { //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
            slidesToShow:2 
        } 
    }
]
});



// 네비드롭다운
$(".gnb li:eq(0) a").click(
    function(){
        $("#dropdown").slideToggle(300);
    }
);

// 서브메뉴
$(".introtab li:eq(0) a").click(
    function(){
        $(".introtabcontent").hide();
        $(".tab01").show();
    }
);
$(".introtab li:eq(1) a").click(
    function(){
        $(".introtabcontent").hide();
        $(".tab02").show();
    }
);
$(".introtab li:eq(2) a").click(
    function(){
        $(".introtabcontent").hide();
        $(".tab03").show();
    }
);

// 햄버거
$(".burger").click(
    function(){
        $(this).toggleClass("on");
        $(".popup_nav").toggleClass("on");
    }
);