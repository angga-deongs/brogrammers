/* -------------------------------------------------------------------------- */
/* accordion                                                                  */
/* -------------------------------------------------------------------------- */

$accordion = {

  handleSet: function() {
    $(".js-accordion .accordion-item:first-child").addClass("active");
    $(".js-accordion .accordion-item:first-child .accordion-collapse").slideDown();
  },

  handleClick: function() {
    $(".js-accordion .accordion-button").on("click", function() {
      if ($(this).parents(".accordion-item").hasClass("active")) {
        $(this).parents(".accordion-item").removeClass("active").find(".accordion-collapse").slideUp();
      } else {
        $(this).parents(".accordion-item").siblings().removeClass("active").find(".accordion-collapse").slideUp();
        $(this).parents(".accordion-item").addClass("active").find(".accordion-collapse").slideDown();
      }
    });
  },

  init: function() {
    $accordion.handleSet();
    $accordion.handleClick();
  }
}  