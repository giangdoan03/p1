jQuery(function ($) {
    // userAgent
    const ua = navigator.userAgent;
    const uaLowerCase = navigator.userAgent.toLowerCase();
    const isSp = ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0);
    const isTablet = ua.indexOf('iPad') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') == -1) || ua.indexOf('A1_07') > 0 || ua.indexOf('SC-01C') > 0 || uaLowerCase.indexOf('macintosh') > 0 && 'ontouchend' in document;
    const isPc = (!isSp && !isTablet);

  // only IE
  if (ua.indexOf('Trident') !== -1) {
      $('#xxxxxx .sizes').each(function () {
          var objElement = $(this);
          var objOmg = new Image();
          objOmg.src = objElement.attr('src');
          if (objOmg.width != 0) {
              objElement.css({'width': objOmg.width / 2});
          }
      });
  }

  // fadein
  $(document).ready(function() {
      // let section1 = $('.bl-item-1').offset().top;
      // let section2 = $('.bl-item-2').offset().top;
      // let section3 = $('.bl-item-3').offset().top;
      //
      // let scrollOffset = 800;
      //
      //
      // $(window).scroll(function() {
      //
      //     let scroll = $(window).scrollTop() + scrollOffset;
      //
      //
      //     if ( scroll > section1 ) {
      //         $('.introduce-right .box-image img').attr("src", "./images/welfare/welfare_Support3_Bg_pc_s.png");
      //     }
      //     if ( scroll > section2 ) {
      //         $('.introduce-right .box-image img').attr("src", "./images/welfare/welfare_Support3_Bg_pc.png");
      //     }
      //     if ( scroll > section3 ) {
      //         $('.introduce-right .box-image img').attr("src", "./images/welfare/welfare_Support4_Bg_pc.png");
      //     }
      // });




      $(document).ready(function () {
          $(window).on('scroll', function () {
              $('.welfareItem-scroll').each(function () {
                  let ptop = $(this).offset().top;
                  let scroll = $(window).scrollTop();
                  let windowHeight = $(window).height();
                  if (scroll > ptop - windowHeight + 100) {
                      $(".imgScroll").removeClass('fadein');
                      $(".imgScroll").removeClass('active');
                      let attr = $(this).attr('data-scroll');
                      $('#' + attr).addClass("fadein");
                      $('#' + attr).addClass("active");
                  }
              });
              let checkCl = $('#p1');
              if (checkCl.length) {
                  var nav = $('#p1').offset().top;
              }
              let heightBlockP2 = $("#data-scroll-01").height();
              $("#welfare .introduce-right .box-image").css("height", heightBlockP2);

              if ($(window).scrollTop() >= nav + $('#p1').outerHeight()) {
                  $('#checkScroll').addClass("sidebar-scroll");
              } else {
                  $('#checkScroll').removeClass("sidebar-scroll");
              }

              let Y = $(window).height() - $("#data-scroll-01").height() - 110;

              let scroll = $(window).scrollTop();
              let windowHeight = $(window).height();
              let blFooter = $(".bl-footer").offset().top;

              if (scroll > blFooter - windowHeight + Y - 70) {
                  $('#checkScroll').addClass("hide-sidebar");
              } else {
                  $('#checkScroll').removeClass("hide-sidebar");
              }
          });
      });



    $(window).scroll(function () {
      $('#xxxxxx .js-fadein').each(function () {
        var ptop = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > ptop - windowHeight + 100) {
          $(this).addClass('scroll-in');
        }
      });
    });
   
    $('#xxxxxx .js-fadein').each(function(){
      var ptop = $(this).offset().top;
      var firstView = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (firstView > ptop - windowHeight){
        $(this).addClass('scroll-in');
      }
    });
  });
  
  
    //scroll
    $(function(){
        $('.scroll').click(function(event){event.preventDefault();
            var url = $(this).attr('href');
            var dest = url.split('#');var target = dest[1];
            var target_offset = $('#'+target).offset();
            var target_top = target_offset.top;
            $('html, body').animate({scrollTop:target_top}, 500, 'swing');
            return false;});
    });


  
    /*↓jsはここに追記していく↓*/






    if (isSp) {
        // only sp

    } else if (isTablet) {
        // only tablet

    } else if (isPc) {
        // only pc

    }



});

