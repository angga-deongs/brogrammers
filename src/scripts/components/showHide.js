/* -------------------------------------------------------------------------- */
/* showhide                                                                   */
/* -------------------------------------------------------------------------- */

$showHide = {
  set: function() {
    $(".js-show-hide").on("click", function() {
      if ($(this).hasClass("show")) {
        $(this).removeClass("show");
        $(this).text("Hide");
        $(".banner").fadeIn();
      } else {
        $(this).text("Show");
        $(this).addClass("show")
        $(".banner").fadeOut();
      }
    });
  },
  init: function() {
    $showHide.set();
  }
}  