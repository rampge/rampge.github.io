

var is_scrolling = false;
var page = 1;
var total_page = 6;
var scroll_wrap = $('.scroll_wrap')
var contentsHeight = 0;
var pageCheck = [false, false, false, false, false, false]

document.addEventListener('DOMContentLoaded', function () {
    contentsHeight = window.innerHeight;
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    // 창 높이 변경 감지를 위한 이벤트 리스너
    window.addEventListener('resize', function() {
        // var windowHeight = window.innerHeight;
        var location = $("#page" + page).get(0).offsetTop;
        scroll_wrap.stop().animate({ top: -location });
    });


    typeWriter(1, "김도경과/손승일의/결혼식에/여러분을/초대합니다.", 0, 100, function () {
        // Callback function after typing finished
        $('#page1 > .scroll-indicator').fadeIn(200);
    });

    var mapOptions = {
        center: new naver.maps.LatLng(37.54220795057724, 126.95224350253976),
        zoom: 16
    };

    var map = new naver.maps.Map('map', mapOptions);

    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.54220795057724, 126.95224350253976), // 마커의 위치
        map: map
    });

    $('.gallery').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.gallery').on("swipe",function(){
        $('.gallery').slick('slickPause');
    })


    $(window).on("scroll", function (e) {
        var page_2 = document.getElementById('page2');
        var position_2 = page_2.getBoundingClientRect();
        var page_3 = document.getElementById('page3');
        var position_3 = page_3.getBoundingClientRect();

        var dis = $('.page').height() / 2;
        // console.log(position_2)
        // Checking if the element is within the viewport
        if(position_2.top + dis < window.innerHeight && position_2.bottom >= 0) {
            if (!pageCheck[2]) {
                pageCheck[2] = true;
                typeWriter(2, '"당신은 내가 더 좋은 사람이고/싶게 만들어요." //영화 <이보다 더 좋을 순 없다> 중에서', 0, 80, function () {
                    // Callback function after typing finished
                });
            }
        }
        if(position_3.top + dis < window.innerHeight && position_3.bottom >= 0) {
            if (!pageCheck[3]) {
                pageCheck[3] = true;
                typeWriter(3, "저희 두 사람/첫 걸음을 내딛는/뜻 깊은 자리에/귀한 걸음으로/축하하여 주시면/더없는 격려와 기쁨으로/간직하겠습니다.", 0, 80, function () {
                    // Callback function after typing finished
                });
            }
        }
    })
});

function scrollDownFade(_move, _animate) {
    console.log(_move)
    is_scrolling = true;
    setTimeout(function () {
        // var location = $("#page" + page).get(0).offsetTop;
        // // $('.conso').html(location)
        // scroll_wrap.animate({ top: -location });
        is_scrolling = false
    }, 100);

    contentsHeight = window.innerHeight;
    if (_move == 'next') page++;
    else if (_move == 'prev') page--;
    var posTop = (page - 1) * - contentsHeight;
    var location = $("#page" + page).get(0).offsetTop;
    scroll_wrap.stop().animate({ top: -location });
    // $('.conso').html(location)
    // clearTimeout(timer)

    if (page == 2) {
        if (pageCheck[2]) return false;
        pageCheck[2] = true;
        typeWriter(2, "최고의 사랑은 영혼을 일깨우고/더 많이 소망하게 하고/가슴에는 열정을,/마음에는 평화를 주지//영화 <노트북> 중에서", 0, 80, function () {
            $('#page2 > .scroll-indicator').fadeIn(200);
        });
    }
    if (page == 3) {
        if (pageCheck[3]) return false;
        pageCheck[3] = true;
        typeWriter(3, "저희 두 사람/첫 걸음을 내딛는/뜻 깊은 자리에/귀한 걸음으로/축하하여 주시면/더없는 격려와 기쁨으로/간직하겠습니다.", 0, 80, function () {
            $('#page3 > .scroll-indicator').fadeIn(200);
        });
    }
}

function typeWriter(page, text, i, speed, fnCallback) {
    if (i < (text.length)) {
        _$ = $('#page' + page + ' > .overlay > h1')
        // Add next character to h1
        _text = text.substring(0, i + 1).replaceAll("/", "<br>");
        _$.html(_text + '<span aria-hidden="true"></span>')

        // Wait before adding next character
        timer = setTimeout(function () {
            typeWriter(page, text, i + 1, speed, fnCallback)
        }, speed);
    }
    else if (typeof fnCallback == 'function') {
        // Text finished, call callback if there is a callback function
        timer = setTimeout(fnCallback, 700);
    }
}