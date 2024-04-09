

var is_scrolling = false;
var page = 1;
var total_page = 6;
var scroll_wrap = $('.scroll_wrap')
var contentsHeight = 0;
var pageCheck = [false, false, false, false, false, false]

// $('.main_video').on('loadeddata', function() {
//     $('.first').addClass('visible');
//     $('.second').addClass('visible');
// });
document.addEventListener('DOMContentLoaded', function () {
    $('.first').addClass('visible');
    $('.second').addClass('visible');
    contentsHeight = window.innerHeight;
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    var mapOptions = {
        center: new naver.maps.LatLng(37.54220795057724, 126.95224350253976),
        zoom: 16
    };
    var map = new naver.maps.Map('map', mapOptions);
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.54220795057724, 126.95224350253976), // 마커의 위치
        map: map
    });


    $(window).on("scroll", function (e) {
        console.log('elementPos')
        $('.page').each(function () {
            var tmpdepth = 100;

            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            // if (elementPos + tmpdepth < bottomOfWindow && elementPos - tmpdepth > topOfWindow) {
            if (elementPos + tmpdepth < bottomOfWindow) {
                $(this).find(".overlay > .paragraph").addClass('visible');
            }
        });
    });

    $('.account_open').on('click', function () {
        if ($(this).siblings('.account_wrap').attr("data-set") != "open") {
            $(this).siblings('.account_wrap').attr("data-set", "open");
            $(this).siblings('.open_button').attr("data-set", "open");
            $(this).attr("data-set", "open");
        }
        else {
            $(this).siblings('.account_wrap').attr("data-set", "close");
            $(this).siblings('.open_button').attr("data-set", "close");
            $(this).attr("data-set", "close");
        }
    })
    $('.copy_button').on('click', function () {
        var temp_account = $(this).attr("data-set");
        window.navigator.clipboard.writeText(temp_account).then(() => {
            alert("클립보드에 저장 되었습니다.")
        });
    })
});
