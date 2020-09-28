$(document).ready(function () {
  $(".delivery__Moscow").click(function (event) {
    $(".delivery__Moscow, .delivery__Piter, .delivery__Russia").removeClass(
      "delivery__dest-active"
    );
    $(".delivery__Moscow").addClass("delivery__dest-active");
    $(
      ".delivery__Moscow-text, .delivery__Piter-text, .delivery__Russia-text"
    ).removeClass("delivery__text-active");
    $(".delivery__Moscow-text").addClass("delivery__text-active");
  });
  $(".delivery__Piter").click(function (event) {
    $(".delivery__Moscow, .delivery__Piter, .delivery__Russia").removeClass(
      "delivery__dest-active"
    );
    $(".delivery__Piter").addClass("delivery__dest-active");
    $(
      ".delivery__Moscow-text, .delivery__Piter-text, .delivery__Russia-text"
    ).removeClass("delivery__text-active");
    $(".delivery__Piter-text").addClass("delivery__text-active");
  });
  $(".delivery__Russia").click(function (event) {
    $(".delivery__Moscow, .delivery__Piter, .delivery__Russia").removeClass(
      "delivery__dest-active"
    );
    $(".delivery__Russia").addClass("delivery__dest-active");
    $(
      ".delivery__Moscow-text, .delivery__Piter-text, .delivery__Russia-text"
    ).removeClass("delivery__text-active");
    $(".delivery__Russia-text").addClass("delivery__text-active");
  });
});
