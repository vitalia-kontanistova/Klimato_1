$(document).ready(function () {
  let rangeLeft = $(".range__input-left");
  let rangeRight = $(".range__input-right");

  let thumbLeft = $(".th-left");
  let thumbRight = $(".th-right");

  let range = $(".range__slider-interval");

  let inputLeft = $(".price__left");
  let inputRight = $(".price__right");

  function setLeftRange() {
    let _this = rangeLeft;
    let min = parseInt(_this.attr("min"));
    let max = parseInt(_this.attr("max"));

    _this.val(Math.min(parseInt(_this.val()), parseInt(rangeRight.val()) - 10)); // зачем здесь - 1

    let percent = ((_this.val() - min) / (max - min)) * 100 + "%";

    thumbLeft.css("left", percent);
    range.css("left", percent);

    inputLeft.val(_this.val());
  }
  setLeftRange();

  function setRightRange() {
    let _this = rangeRight;
    let min = parseInt(_this.attr("min"));
    let max = parseInt(_this.attr("max"));

    _this.val(Math.max(parseInt(_this.val()), parseInt(rangeLeft.val()) + 10)); // зачем здесь + 1

    let percent = 100 - ((_this.val() - min) / (max - min)) * 100 + "%";

    thumbRight.css("right", percent);
    range.css("right", percent);

    inputRight.val(_this.val());
  }
  setRightRange();

  rangeLeft.on("input", setLeftRange);
  rangeRight.on("input", setRightRange);

  function setLeftVal() {
    rangeLeft.val(inputLeft.val());
    setLeftRange();
  }
  function setRightVal() {
    rangeRight.val(inputRight.val());
    setRightRange();
  }

  inputLeft.on("input", setLeftVal);
  inputRight.on("input", setRightVal);

  function FilterRestructure() {
    if (document.documentElement.clientWidth <= 1024) {
      $(".category__intro").after($(".main__filter"));
    } else {
      $(".main__right-panel").prepend($(".main__filter"));
    }
  }

  $(window).resize(FilterRestructure());

  $(".filter__btn").click(function () {
    $(".filter").toggleClass("filter__folded");
    $(".filter__body-line").toggleClass("hidden");
  });
});
