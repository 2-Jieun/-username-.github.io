new fullpage("#fullpage",{
    LicenseKey: "",
    navigation: true,
    navigationTooltips: ["LE SSERAFIM", "DEBUT", "PROFILE","DISCOGRAPHY"],
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

// index-video
$(function(){
    $("#index-video").mouseover(function(){
        if(this.paused){
            this.play()
        }
    })
})

// photo pop up
$(function(){
    $(".prof-chw img").click(function(){
        $(".popup.popup-chw").fadeIn(500);
    });
    $(".prof-sakura img").click(function(){
        $(".popup.popup-sakura").fadeIn(500);
    });
    $(".prof-yunjin img").click(function(){
        $(".popup.popup-yunjin").fadeIn(500);
    });
    $(".prof-kazuha img").click(function(){
        $(".popup.popup-kazuha").fadeIn(500);
    });
    $(".prof-ech img").click(function(){
        $(".popup.popup-ech").fadeIn(500);
    });
    $(".popup .close-btn").click(function(){
        $(".popup").fadeOut(500);
    });
})

// photo slider
const swiper = new Swiper(".swiper",{
    speed: 1000,
    loop: true,
    grabCursor: false,
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});

// AOS
AOS.init();

// discography
$(function(){
    $(".disco-main img").eq(0).click(function(){
        $("#scroll2").stop().fadeIn(500)
        $("#scroll3").hide()
    })
    $(".disco-main img").eq(1).click(function(){
        $("#scroll3").stop().fadeIn(500)
        $("#scroll2").hide()
    })

    $(".disco-btn").click(function(){
        $(".disco-detail").stop().slideUp(1000)
    })
})