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

// leadership slider
const swiper = new Swiper(".swiper",{
    speed: 500,
    loop: false,
    grabCursor: true,
    slidesPerView: 1,
    centeredSlides: false,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});

// AOS
AOS.init();