new fullpage("#fullpage",{
    LicenseKey: "",
    navigation: true,
    navigationTooltips: ["HYBE", "BTS", "LE-SSERAFIM", "NewJeans", "Seventeen"],
    scrollingSpeed: 1000,
});

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

// page s0 slider
const swiper = new Swiper(".swiper",{
    speed: 1500,
    loop: true,
    grabCursor: false,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    effect: "fade",
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    allowTouchMove: false,
    touchRatio: 0,
    observer: true,
    observeParents: true,
});

// bts, lsp, njs slider
const swiper2 = new Swiper(".swiper2",{
    speed: 500,
    loop: true,
    slidesPerView: 5,
    grabCursor: true,
    centerMode: true,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 35,
        stretch: -80,
        depth: 100,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
        type: "fraction"
    },
    observer: true,
    observeParents: true,
    breakpoints: {
        1501 : {
            slidesPerView: 5,
        },
        981 : {
            slidesPerView: 3,
            coverflowEffect: {
                stretch: -100,
            },
        },
        500 : {
            slidesPerView: 1,
        },
    },
});