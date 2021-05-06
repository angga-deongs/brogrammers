/* -------------------------------------------------------------------------- */
/* toast                                                                      */
/* -------------------------------------------------------------------------- */

$toast = {

  handleClick: function() {
    $(".js-remove-toast").on("click", function() {
      $(this).parents(".alert").fadeOut();
    });
  },

  init: function() {
    $toast.handleClick();
  }
}