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



