$(document).ready(function () {
  $(".prod-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    speed: 500,

    asNavFor: ".prod-slider-nav",
  });

  $(".prod-slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".prod-slider",
    dots: false,
    arrows: false,
    focusOnSelect: true,
  });

});
