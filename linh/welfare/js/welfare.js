jQuery(function ($) {
    // userAgent
    const ua = navigator.userAgent;
    const uaLowerCase = navigator.userAgent.toLowerCase();
    const isSp = ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0);
    const isTablet = ua.indexOf('iPad') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') == -1) || ua.indexOf('A1_07') > 0 || ua.indexOf('SC-01C') > 0 || uaLowerCase.indexOf('macintosh') > 0 && 'ontouchend' in document;
    const isPc = (!isSp && !isTablet);


    // only IE
    if (ua.indexOf('Trident') !== -1) {
        $('#interview .sizes').each(function () {
            var objElement = $(this);
            var objOmg = new Image();
            objOmg.src = objElement.attr('src');
            if (objOmg.width != 0) {
                objElement.css({'width': objOmg.width / 2});
            }
        });
    }


    // fadein
    $(window).on('load', function () {
        $(window).scroll(function () {
            $('#interview .js-fadein').each(function () {
                var ptop = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ptop - windowHeight + 100) {
                    $(this).addClass('scroll-in');
                }
            });
        });

        $('#interview .js-fadein').each(function () {
            var ptop = $(this).offset().top;
            var firstView = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (firstView > ptop - windowHeight) {
                $(this).addClass('scroll-in');
            }
        });
    });


    if (isSp) {
        // only sp

    } else if (isTablet) {
        // only tablet

    } else if (isPc) {
        // only pc

    }


    //scroll
    $(function () {
        $('.scroll').click(function (event) {
            event.preventDefault();
            var url = $(this).attr('href');
            var dest = url.split('#');
            var target = dest[1];
            var target_offset = $('#' + target).offset();
            var target_top = target_offset.top - 100;
            $('html, body').animate({scrollTop: target_top}, 500, 'swing');
            return false;
        });
    });


    // JavaScript scrollc div
    // const scrollContainer = document.getElementById('scrollContainer');
    // const changingImage = document.getElementById('changingImage');
    // const imageSources = [
    //     './images/welfare/welfare_pic_02_pc.png',
    //     './images/welfare/welfare_pic_03_pc.png',
    //     './images/welfare/welfare_pic_04_pc.png'
    // ];
    //
    // function handleScroll() {
    //     const scrollTop = scrollContainer.scrollTop;
    //     const scrollIndex = Math.floor(scrollTop / 600);
    //     //  scrollIndex
    //     if (scrollIndex >= 0 && scrollIndex < imageSources.length) {
    //         changingImage.src = imageSources[scrollIndex];
    //
    //         // changingImage.classList.remove("showimg");
    //         // setTimeout(function () {
    //         //     changingImage.src = imageSources[scrollIndex];
    //         //     changingImage.classList.add("showimg");
    //         // }, 50);
    //     }
    //
    // }
    //
    // scrollContainer.addEventListener('scroll', handleScroll);
    // // Khởi tạo ảnh ban đầu
    //
    // changingImage.src = imageSources[0];
    // // changingImage.classList.add("showimg");


    $(document).ready(function () {
        $(window).on('scroll', function () {

            $('.welfareItem-scroll').each(function () {
                var ptop = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ptop - windowHeight + 100) {
                    $(".imgScroll").removeClass('fadein');
                    $(".imgScroll").removeClass('active');
                    var attr = $(this).attr('data-scroll');
                    $('#' + attr).addClass("fadein");
                    $('#' + attr).addClass("active");
                }
            });
        });
    });


    $(document).ready(function () {
        $(window).on('scroll', function () {
            var checkCl = $('#p1');
            if (checkCl.length) {
                var nav = $('#p1').offset().top;
            }
            var heightBlockP2 = $("#data-scroll-01").height();
            $("#welfare .block-main .block-img .max-width-img").css("height", heightBlockP2);

            if ($(window).scrollTop() >= nav + $('#p1').outerHeight()) {
                $('#checkScroll').addClass("sidebar-scroll");
            } else {
                $('#checkScroll').removeClass("sidebar-scroll");
            }

            var Y = $(window).height() - $("#data-scroll-01").height() - 110;

            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var subfooter = $(".subfooter").offset().top;

            if (scroll > subfooter - windowHeight + Y - 70) {
                $('#checkScroll').addClass("hide-sidebar");
            } else {
                $('#checkScroll').removeClass("hide-sidebar");
            }
        });
    });


});