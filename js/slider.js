$(document).ready(function () {
  $('.products-slider').slick({
    arrows: false,
    dots: true,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1100,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    waitForAnimate: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
});