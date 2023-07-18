// hamburger menu
$(function(){
    var a=0
    var b=0

    $(".hamburger").click(function(){
        a++
        b=a%2
        if(b==1){
            $(this).children(".hb-top, .hb-bottom").addClass("on");
        }else{
            $(this).children(".hb-top, .hb-bottom").removeClass("on");
        }

        $(".nav .menu").stop().fadeToggle(500).addClass("on");
    });
});

// AOS
AOS.init();

// con3 slick slider
$(function(){
    $(".slider").slick({
        slide: "div",
        infinity: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        speed: 500,
        autoplay: false,
        draggable: true,
        arrows: false,
        dots: true,
        appendDots: (".custom-slide-dots"),
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    centerMode:false
                }
            },
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});

// discography text
$(function(){
    $("#proof").click(function(){
        $("#scroll1").stop().show();
        $("#scroll2,#scroll3,#scroll4,#scroll5,#scroll6,#scroll7").stop().hide();
    });
    $("#butter").click(function(){
        $("#scroll2").stop().show();
        $("#scroll1,#scroll3,#scroll4,#scroll5,#scroll6,#scroll7").stop().hide();
    });
    $("#dynamite").click(function(){
        $("#scroll3").stop().show();
        $("#scroll1,#scroll2,#scroll4,#scroll5,#scroll6,#scroll7").stop().hide();
    });
    $("#soul7").click(function(){
        $("#scroll4").stop().show();
        $("#scroll1,#scroll2,#scroll3,#scroll5,#scroll6,#scroll7").stop().hide();
    });
    $("#persona").click(function(){
        $("#scroll5").stop().show();
        $("#scroll1,#scroll2,#scroll3,#scroll4,#scroll6,#scroll7").stop().hide();
    });
    $("#tear").click(function(){
        $("#scroll6").stop().show();
        $("#scroll1,#scroll2,#scroll3,#scroll4,#scroll5,#scroll7").stop().hide();
    });
    $("#her").click(function(){
        $("#scroll7").stop().show();
        $("#scroll1,#scroll2,#scroll3,#scroll4,#scroll5,#scroll6").stop().hide();
    });
});