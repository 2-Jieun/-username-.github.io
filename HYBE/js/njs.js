new fullpage("#fullpage",{
    LicenseKey: "",
    navigation: true,
    navigationTooltips: ["NEWJEANS", "PROFILE", "GALLERY","DISCOGRAPHY"],
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

// AOS
AOS.init();

// index-video
$(function(){
    $("#index-video").mouseover(function(){
        if(this.paused){
            this.play()
        }
    })
})

// profile
$(function(){
    $("#njs").click(function(){
        $(".prof-njs").fadeIn().css({"display":"flex"})
        $(".prof-minji, .prof-hanni, .prof-dani, .prof-haerin, .prof-hyein").hide()
    })
    $("#minji").click(function(){
        $(".prof-minji").fadeIn().css({"display":"flex"})
        $(".prof-njs, .prof-hanni, .prof-dani, .prof-haerin, .prof-hyein").hide()
    })
    $("#hanni").click(function(){
        $(".prof-hanni").fadeIn().css({"display":"flex"})
        $(".prof-minji, .prof-njs, .prof-dani, .prof-haerin, .prof-hyein").hide()
    })
    $("#dani").click(function(){
        $(".prof-dani").fadeIn().css({"display":"flex"})
        $(".prof-minji, .prof-hanni, .prof-njs, .prof-haerin, .prof-hyein").hide()
    })
    $("#haerin").click(function(){
        $(".prof-haerin").fadeIn().css({"display":"flex"})
        $(".prof-minji, .prof-hanni, .prof-dani, .prof-njs, .prof-hyein").hide()
    })
    $("#hyein").click(function(){
        $(".prof-hyein").fadeIn().css({"display":"flex"})
        $(".prof-minji, .prof-hanni, .prof-dani, .prof-haerin, .prof-njs").hide()
    })

    $("#njs").click(function(){
        $(".member > li").removeClass("on");
        $(this).addClass("on");
    });
    $("#minji").click(function(){
        $(".member > li").removeClass("on");
        $(this).addClass("on");
    });
    $("#hanni").click(function(){
        $(".member > li").removeClass("on");
        $(this).addClass("on");
    });
    $("#dani").click(function(){
        $(".member > li").removeClass("on");
        $(this).addClass("on");
    });
    $("#haerin").click(function(){
        $(".member > li").removeClass("on");
        $(this).addClass("on");
    });
    $("#hyein").click(function(){
        $(".member > li").removeClass("on");
        $(this).addClass("on");
    });
})

// gallery slider
const swiper = new Swiper(".swiper",{
    speed: 1000,
    loop: true,
    loopAdditionalSlides : 1,
    grabCursor: false,
    slidesPerView: 4.5,
    centeredSlides: false,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1.2
        },
        530: {
            slidesPerView: 1.5
        },
        850: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 2.5
        },
        1200: {
            slidesPerView: 3
        },
        1400: {
            slidesPerView: 3.5
        },
        1600: {
            slidesPerView: 4
        },
        1600: {
            slidesPerView: 4.5
        },
      }
});

// gallery popup
$(function(){
    $(".omg1").click(function(){$("#modal1").stop().fadeIn();});
    $(".omg2").click(function(){$("#modal2").stop().fadeIn();});
    $(".omg3").click(function(){$("#modal3").stop().fadeIn();});
    $(".omg4").click(function(){$("#modal4").stop().fadeIn();});
    $(".omg5").click(function(){$("#modal5").stop().fadeIn();});
    $(".omg6").click(function(){$("#modal6").stop().fadeIn();});
    $(".omg7").click(function(){$("#modal7").stop().fadeIn();});

    $(".ditto1").click(function(){$("#modal8").stop().fadeIn();});
    $(".ditto2").click(function(){$("#modal9").stop().fadeIn();});
    $(".ditto3").click(function(){$("#modal10").stop().fadeIn();});
    $(".ditto4").click(function(){$("#modal11").stop().fadeIn();});
    $(".ditto5").click(function(){$("#modal12").stop().fadeIn();});
    $(".ditto6").click(function(){$("#modal13").stop().fadeIn();});
    $(".ditto7").click(function(){$("#modal14").stop().fadeIn();});

    $(".close").click(function(){$(".modal-wrap").stop().fadeOut();});
})

// gallery popup arrows
$(function(){
    $("#modal1 .prev").click(function(){
        $("#modal1").hide()
        $("#modal7").fadeIn()})
    $("#modal1 .next").click(function(){
        $("#modal1").hide()
        $("#modal2").fadeIn()})

    $("#modal2 .prev").click(function(){
        $("#modal2").hide()
        $("#modal1").fadeIn()})
    $("#modal2 .next").click(function(){
        $("#modal2").hide()
        $("#modal3").fadeIn()})

    $("#modal3 .prev").click(function(){
        $("#modal3").hide()
        $("#modal2").fadeIn()})
    $("#modal3 .next").click(function(){
        $("#modal3").hide()
        $("#modal4").fadeIn()})

    $("#modal4 .prev").click(function(){
        $("#modal4").hide()
        $("#modal3").fadeIn()})
    $("#modal4 .next").click(function(){
        $("#modal4").hide()
        $("#modal5").fadeIn()})

    $("#modal5 .prev").click(function(){
        $("#modal5").hide()
        $("#modal4").fadeIn()})
    $("#modal5 .next").click(function(){
        $("#modal5").hide()
        $("#modal6").fadeIn()})

    $("#modal6 .prev").click(function(){
        $("#modal6").hide()
        $("#modal5").fadeIn()})
    $("#modal6 .next").click(function(){
        $("#modal6").hide()
        $("#modal7").fadeIn()})

    $("#modal7 .prev").click(function(){
        $("#modal7").hide()
        $("#modal6").fadeIn()})
    $("#modal7 .next").click(function(){
        $("#modal7").hide()
        $("#modal1").fadeIn()})

    $("#modal8 .prev").click(function(){
        $("#modal8").hide()
        $("#modal14").fadeIn()})
    $("#modal8 .next").click(function(){
        $("#modal8").hide()
        $("#modal9").fadeIn()})

    $("#modal9 .prev").click(function(){
        $("#modal9").hide()
        $("#modal8").fadeIn()})
    $("#modal9 .next").click(function(){
        $("#modal9").hide()
        $("#modal10").fadeIn()})

    $("#modal10 .prev").click(function(){
        $("#modal10").hide()
        $("#modal9").fadeIn()})
    $("#modal10 .next").click(function(){
        $("#modal10").hide()
        $("#modal11").fadeIn()})

    $("#modal11 .prev").click(function(){
        $("#modal11").hide()
        $("#modal10").fadeIn()})
    $("#modal11 .next").click(function(){
        $("#modal11").hide()
        $("#modal12").fadeIn()})

    $("#modal12 .prev").click(function(){
        $("#modal12").hide()
        $("#modal11").fadeIn()})
    $("#modal12 .next").click(function(){
        $("#modal12").hide()
        $("#modal13").fadeIn()})

    $("#modal13 .prev").click(function(){
        $("#modal13").hide()
        $("#modal12").fadeIn()})
    $("#modal13 .next").click(function(){
        $("#modal13").hide()
        $("#modal14").fadeIn()})

    $("#modal14 .prev").click(function(){
        $("#modal14").hide()
        $("#modal13").fadeIn()})
    $("#modal14 .next").click(function(){
        $("#modal14").hide()
        $("#modal8").fadeIn()})
})

// discography
$(function(){
    $(".al-newjeans").click(function(){
        $(".al-omg, .al-zero").hide()
        $(".newjeans-ex").fadeIn()
        $(".back-btn").fadeIn()
    })
    $(".al-omg").click(function(){
        $(".al-newjeans, .al-zero").hide()
        $(".omg-ex").fadeIn()
        $(".back-btn").fadeIn()
    })
    $(".al-zero").click(function(){
        $(".al-newjeans, .al-omg").hide()
        $(".zero-ex").fadeIn()
        $(".back-btn").fadeIn()
    })
    $(".back-btn").click(function(){
        $(this).fadeOut()
        $(".album-ex").hide()
        $(".al-newjeans, .al-omg, .al-zero").fadeIn()
    })
})