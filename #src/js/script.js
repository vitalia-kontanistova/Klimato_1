@@include("webp.js");
@@include("slick.min.js");
@@include("payment.js");
@@include("filter.js");

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(
      ".header__burger, .header__callback, .header__contacts, .header__menu, .header__burger-bg"
    ).toggleClass("active");
  });

  $(".main").click(function (event) {
    $(
      ".header__burger, .header__callback, .header__contacts, .header__menu, .header__burger-bg"
    ).removeClass("active");
  });

  $(".footer").click(function (event) {
    $(
      ".header__burger, .header__callback, .header__contacts, .header__menu, .header__burger-bg"
    ).removeClass("active");
  });

  $(".header__burger").click(function (event) {
    $(".header__menu-list").removeClass("hidden");
    $(".header__category-list").removeClass("active");
    $(".header__burger-bg").removeClass("long");
  });

  $(".header__category").click(function (event) {
    $(".header__menu-list").addClass("hidden");
    $(".header__category-list").addClass("active");
    $(".header__burger-bg").addClass("long");
  });

  $(".header__category-back").click(function (event) {
    $(".header__menu-list").removeClass("hidden");
    $(".header__category-list").removeClass("active");
    $(".header__burger-bg").removeClass("long");
  });

  $(".catalog__item-btn").on("click", function (event) {
    $(this).toggleClass("active");
    $(this)
      .parents(".catalog__item")
      .siblings(".catalog__subcatalog")
      .toggleClass("active");
  });

  function SaleRestructure() {
    if (document.documentElement.clientWidth <= 1024) {
      $(".main__sale").after($(".main__request"));
      $(".main__request").after($(".main__calculations"));
    } else {
      $(".main__right-panel").prepend($(".main__calculations"));
      $(".main__right-panel").prepend($(".main__request"));
    }
  }

  $(window).resize(SaleRestructure());

  $(".partners__slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    infinite: true,
    responsive: [
      {
        breakpoint: 1487,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".intro-slider").slick({
    arrows: true,
    // arrows: false,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    infinite: true,
  });

  $(window).on("resize", function () {
    setTimeout(function () {
      location.reload();
    }, 500);
  });
});
