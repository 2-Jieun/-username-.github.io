// top header menu slide
$(function(){
    
    $("#top-h .bnc").mouseenter(function(){
        $(this).children(".bnc-menu").stop().slideDown();
    });
    $("#top-h .bnc").mouseleave(function(){
        $(this).children(".bnc-menu").stop().slideUp();
    });
});

// bottom header gnb menu slide
$(function(){
    $("#men").mouseenter(function(){
        $(this).children(".gnb-m").stop().slideDown();
    });
    $("#men").mouseleave(function(){
        $(this).children(".gnb-m").stop().slideUp();
    });
    $("#women").mouseenter(function(){
        $(this).children(".gnb-w").stop().slideDown();
    });
    $("#women").mouseleave(function(){
        $(this).children(".gnb-w").stop().slideUp();
    });
    $("#shoes").mouseenter(function(){
        $(this).children(".gnb-s").stop().slideDown();
    });
    $("#shoes").mouseleave(function(){
        $(this).children(".gnb-s").stop().slideUp();
    });
    $("#gears").mouseenter(function(){
        $(this).children(".gnb-g").stop().slideDown();
    });
    $("#gears").mouseleave(function(){
        $(this).children(".gnb-g").stop().slideUp();
    });
    $("#bac").mouseenter(function(){
        $(this).children(".gnb-b").stop().slideDown();
    });
    $("#bac").mouseleave(function(){
        $(this).children(".gnb-b").stop().slideUp();
    });
    $("#dns").mouseenter(function(){
        $(this).children(".gnb-d").stop().slideDown();
    });
    $("#dns").mouseleave(function(){
        $(this).children(".gnb-d").stop().slideUp();
    });
});

// bottom header search button
$(function(){
    $(".side-menu button.open").on("click", function(){
        $(".search-open").addClass("on");
    });
    $(".search-bar button.close").on("click", function(){
        $(".search-open").removeClass("on");
    });
    $(".side-menu button.open").on("click", function(){
        $(".gnb").addClass("on");
        $(".search-open .search-box.on .s-box,.search-open .search-box.on hr,.search-open .search-box.on .s-btm").fadeIn(750);
    });
    $(".search-bar button.close").on("click", function(){
        $(".gnb").removeClass("on");
    });

    $(".s-btm button.close-sub").on("click", function(){
        $(".search-box").addClass("on");
    });
    $(".side-menu button.open").on("click", function(){
        $(".search-box").removeClass("on");
    });
    $(".s-btm button.close-sub").on("click", function(){
        $(".search-box").addClass("on");
        $(".search-open .search-box.on .s-box,.search-open .search-box.on hr,.search-open .search-box.on .s-btm").fadeOut(750);
    });
});

// bottom header grid menu
$(function(){
    $("button.grid").click(function(){
        $(".grid-menu").stop().slideDown();
    });
    $(".grid-menu li i").click(function(){
        $(".grid-menu").stop().slideUp();
    });
});
    
// visual slick slide
$(function(){
    $(".v-slide").slick({
        slide: "div",
        infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        draggable: false,
        arrows: true,
        prevArrow: (".prev-arrow"),
        nextArrow: (".next-arrow"),
        dots: true,
        appendDots: (".dots"),
        fade: true,
    });
});

// con1 swiper slide
const swiper = new Swiper(".swiper",{
    speed: 500,
    loop: false,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 15,
    centeredSlides: false,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    }
});

// con2 slick slide
$(function(){
    $(".con2 .con2-menu li").click(function(){
        $(".con2 .con2-menu li").removeClass("on");
        $(this).addClass("on");
    });

    $(".con2 .con2-menu li:nth-child(1)").click(function(){
        $(".con2 .slide-wrap > .con2-slide").removeClass("on");
        $(".con2 .slide-wrap > .con2-all").addClass("on");
    });
    $(".slide-all").slick({
        slide: "div",
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        draggable: false,
        arrows: true,
        prevArrow: (".con2-prev-arrow.arrow-all"),
        nextArrow: (".con2-next-arrow.arrow-all"),
        dots: true,
        appendDots: (".con2-dots.dots-all"),
    });
    $(".con2 .con2-menu li:nth-child(2)").click(function(){
        $(".con2 .slide-wrap > .con2-slide").removeClass("on");
        $(".con2 .slide-wrap > .con2-men").addClass("on");
    });
    $(".slide-men").slick({
        slide: "div",
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        draggable: false,
        arrows: true,
        prevArrow: (".con2-prev-arrow.arrow-men"),
        nextArrow: (".con2-next-arrow.arrow-men"),
        dots: true,
        appendDots: (".con2-dots.dots-men"),
    });
    $(".con2 .con2-menu li:nth-child(3)").click(function(){
        $(".con2 .slide-wrap > .con2-slide").removeClass("on");
        $(".con2 .slide-wrap > .con2-women").addClass("on");
    });
    $(".slide-women").slick({
        slide: "div",
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        draggable: false,
        arrows: true,
        prevArrow: (".con2-prev-arrow.arrow-women"),
        nextArrow: (".con2-next-arrow.arrow-women"),
        dots: true,
        appendDots: (".con2-dots.dots-women"),
    });
    $(".con2 .con2-menu li:nth-child(4)").click(function(){
        $(".con2 .slide-wrap > .con2-slide").removeClass("on");
        $(".con2 .slide-wrap > .con2-shoes").addClass("on");
    });
    $(".slide-shoes").slick({
        slide: "div",
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        draggable: false,
        arrows: true,
        prevArrow: (".con2-prev-arrow.arrow-shoes"),
        nextArrow: (".con2-next-arrow.arrow-shoes"),
        dots: true,
        appendDots: (".con2-dots.dots-shoes"),
    });
});

// con3 event
$(function(){
    $(".con3-men .con3-btn button:first-child").click(function(){
        $(".con3-men .con3-btn button").removeClass("on");
        $(this).addClass("on");
    });
    $(".con3-women .con3-btn button:last-child").click(function(){
        $(".con3-women .con3-btn button").removeClass("on");
        $(this).addClass("on");
    });

    $(".con3 .con3-btn button:first-child").click(function(){
        $(".con3 .con3-women").removeClass("on");
        $(".con3 .con3-men").addClass("on");
    });
    $(".con3 .con3-btn button:last-child").click(function(){
        $(".con3 .con3-men").removeClass("on");
        $(".con3 .con3-women").addClass("on");
    });
});