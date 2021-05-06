/* -------------------------------------------------------------------------- */
/* carousel                                                                   */
/* -------------------------------------------------------------------------- */

$carousel = {

  set: function() {
    var _post = 0;
    $(".js-slide-nav").on("click", function() {
      if ($(this).hasClass("slide-c__btn--next")) {
        _post += 280;
      } else {
        _post -= 280;
      }
      $(".slide-c__list").animate({
        left: "-" + _post + "px"
      }, "slow");
    });
  },

  init: function() {
    $carousel.set();
  }
}