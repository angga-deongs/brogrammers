/* -------------------------------------------------------------------------- */
/* dropdown                                                                   */
/* -------------------------------------------------------------------------- */

$dropdown = {

  handleClick: function() {
    // close dropdown
    $("body").on("click", function() {
      $dropdown.handleHide();
    });

    // set active dropdown
    $(".js-dropdown-button").on("click", function(e) {
      if ($(this).parents(".has-dropdown").hasClass("active")) {
        $(this).parents(".has-dropdown").removeClass("active");
      } else {
        $(this).parents(".has-dropdown").siblings().removeClass("active");
        $(this).parents(".has-dropdown").addClass("active");
      }
      e.stopPropagation();
    });
  },

  handleKeyup: function() {
    // close dropdown
    $(document).on("keyup", function(e) {
      if (e.which === 27) {
        $dropdown.handleHide();
      }
    });
  },

  handleHide: function() {
    // close dropdown
    if ($(".has-dropdown").hasClass("active")) {
      $(".has-dropdown").removeClass("active");
    }
  },

  init: function() {
    $dropdown.handleClick();
    $dropdown.handleKeyup();
    $dropdown.handleHide();
  }
}