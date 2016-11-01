$(document).ready(function(){
  $('.top-banner__slider').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2500,
    fade: true,
    pauseOnFocus: false
  });

  $('.partners-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    dots: true,
    dotsClass: 'partners-slider__dots',
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 300,
    fade: false,
    pauseOnFocus: false,
    responsive:[{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });

  $('.awards-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    dotsClass: 'awards-slider__dots',
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 300,
    fade: false,
    pauseOnFocus: false,
    responsive:[{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });

  $('.feedback-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    dotsClass: 'awards-slider__dots',
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 300,
    fade: false,
    pauseOnFocus: false,
    responsive:[{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });

  var wow = new WOW(
    {
      mobile: false,
      callback: function(){
        console.log('animation detected');
      }
    }
  );
  wow.init();

});
