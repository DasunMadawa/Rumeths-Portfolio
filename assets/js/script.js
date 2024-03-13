// $("#theme").hover( function () {
//     $("#theme-wrapper").css({
//         backgroundColor:"black"
//     });
// } , function () {
//     $("#theme-wrapper").css({
//         backgroundColor: "white"
//     });
// });


$(".social-icons > a > i").hover(
    function () {
        let topVal = $(window).width() < 1600 ? "-40px":"-55px";

        $(this).parent("a").children("span").css(
            {
                opacity: "1",
                top: topVal
            }
        );
    }, function () {
        $(this).parent("a").children("span").css(
            {
                opacity: "0",
                top: "0px"
            }
        );
    }
);

$("#theme-wrapper").on('click' , function () {
    $(':root').css('--white') === "#FFFFFF" ? themeChangeToDark($(this)) : themeChangeToLight($(this));

});

function themeChangeToLight(parent) {
    parent.children("i").removeClass('fa-sun');

    parent.children("i").addClass('fa-moon');

    $(':root').css('--white', '#FFFFFF');
    $(':root').css('--black', '#000000');
    $(':root').css('--grey', '#F0F0F6');
    $(':root').css('--grey_2', '#f8f9fb');
    $(':root').css('--blue_shadow', '#e1e8ff');

}

function themeChangeToDark(parent) {
    parent.children("i").removeClass('fa-moon');

    parent.children("i").addClass('fa-sun');


    $(':root').css('--white', '#000000');
    $(':root').css('--black', '#FFFFFF');
    $(':root').css('--grey', '#00132d');
    $(':root').css('--grey_2', '#00193b');
    $(':root').css('--blue_shadow', '#000000');

}

$(window).resize(function() {
    var viewportWidth = $(window).width();

    if (viewportWidth < 1000) {
        $("#hero-headers > h1:nth-child(2)").find("br").remove();
    } else {
        $("#hero-headers > h1:nth-child(2)").html('<span class="first-word">I\'m</span> Rumeth <br>Sandinu');
    }
});

// Call the function once on page load
$(window).resize();

$("#menu-icon > i:first-child").on("click", () => {
    $("#navbar > a , #theme-wrapper").css({opacity:"1"});
    $("header").addClass("header-size-up");

    $("#menu-icon > i:first-child").addClass("hide");
    $("#menu-icon > i:nth-child(2)").addClass("show");

    setTimeout(navbarTransitionUp , 1800);

});

$("#menu-icon > i:nth-child(2)").on("click", () => {
    $("#navbar > a , #theme-wrapper").css({opacity:"0"});
    $("header").removeClass("header-size-up");

    $("#menu-icon > i:first-child").removeClass("hide");
    $("#menu-icon > i:nth-child(2)").removeClass("show");

    setTimeout(navbarTransitionDown , 1800);

});

function navbarTransitionDown() {
    $("#home").css({transitionDelay: "0s"});
    $("#about-me").css({transitionDelay: "0.1s"});
    $("#services").css({transitionDelay: "0.2s"});
    $("#projects").css({transitionDelay: "0.3s"});
    $("#achievements").css({transitionDelay: "0.4s"});
    $("#contact").css({transitionDelay: "0.5s"});
    $("#theme-wrapper").css({transitionDelay: "0.6s"});

}

function navbarTransitionUp() {
    $("#home").css({transitionDelay: "0.6s"});
    $("#about-me").css({transitionDelay: "0.5s"});
    $("#services").css({transitionDelay: "0.4s"});
    $("#projects").css({transitionDelay: "0.3s"});
    $("#achievements").css({transitionDelay: "0.2s"});
    $("#contact").css({transitionDelay: "0.1s"});
    $("#theme-wrapper").css({transitionDelay: "0s"});

}


