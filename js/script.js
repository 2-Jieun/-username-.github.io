// fullpage
new fullpage("#fullpage",{
    LicenseKey: "",
    navigation: true,
    /* navigationTooltips: ["MAIN", "PROFILE", "EXPERIENCE","PORTFOLIO","CONTACT"], */
    scrollingSpeed: 1000,
});

// ex section button.on effect
$(function(){
    $(".ex-button > button:first-child").click(function(){
        $(".ex-button > button").removeClass("on");
        $(this).addClass("on");
    })
    $(".ex-button > button:last-child").click(function(){
        $(".ex-button > button").removeClass("on");
        $(this).addClass("on");
    })

    $(".ex-button > button:first-child").click(function(){
        $(".international").removeClass("on");
        $(".domestic").addClass("on");
    })
    $(".ex-button > button:last-child").click(function(){
        $(".domestic").removeClass("on");
        $(".international").addClass("on");
    })
})