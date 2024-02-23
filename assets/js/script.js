// $("#theme").hover( function () {
//     $("#theme-wrapper").css({
//         backgroundColor:"black"
//     });
// } , function () {
//     $("#theme-wrapper").css({
//         backgroundColor: "white"
//     });
// });


$("#social-icons > a > i").hover(
    function () {
        $(this).parent("a").children("span").css(
            {
                opacity: "1",
                top: "-55px"
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

