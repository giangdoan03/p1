jQuery(function ($) {
  // userAgent
  const ua = navigator.userAgent;
  const uaLowerCase = navigator.userAgent.toLowerCase();
  const isSp = ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0);
  const isTablet = ua.indexOf('iPad') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') == -1) || ua.indexOf('A1_07') > 0 || ua.indexOf('SC-01C') > 0 || uaLowerCase.indexOf('macintosh') > 0 && 'ontouchend' in document;
  const isPc = (!isSp && !isTablet);


  // only IE
  if (ua.indexOf('Trident') !== -1) {
    $('.sizes').each(function () {
      var objElement = $(this);
      var objOmg = new Image();
      objOmg.src = objElement.attr('src');
      if (objOmg.width != 0) {
        objElement.css({ 'width': objOmg.width / 2 });
      }
    });
  }


  // fadein
  $(window).on('load', function () {
    
    $(window).scroll(function () {
      $('.js-fadein').each(function () {
        var ptop = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
       
        if (scroll > ptop - windowHeight + 100) {
          $(this).addClass('scroll-in');
        }
      });
    });

    $('.js-fadein').each(function () {
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

});