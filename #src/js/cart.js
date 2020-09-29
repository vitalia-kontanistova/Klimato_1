$(document).ready(function () {
  $(".contact-info__header_natural-person").click(function (event) {
    $(".contact-info__header").removeClass("contact-info__header_active");
    $(".contact-info__header_natural-person").addClass("contact-info__header_active");
    $(".contact-info__body").removeClass("contact-info__body_active");
    $(".contact-info__body_natural-person").addClass("contact-info__body_active");
  });

  $(".contact-info__header_legal-entity").click(function (event) {
    $(".contact-info__header").removeClass("contact-info__header_active");
    $(".contact-info__header_legal-entity").addClass("contact-info__header_active");
    $(".contact-info__body").removeClass("contact-info__body_active");
    $(".contact-info__body_legal-entity").addClass("contact-info__body_active");
  });
});
