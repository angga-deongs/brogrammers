/* -------------------------------------------------------------------------- */
/* tabs                                                                       */
/* -------------------------------------------------------------------------- */

$tabs = {

  handleSet: function() {
    $(".js-tab .tab-control li:nth-child(1)").addClass("active");
    $(".js-tab .tab-panel:nth-child(1)").addClass("active");
  },

  handleClick: function() {
    $(".js-tab button").on("click", function() {
      $(this).parents("li").siblings().removeClass("active");
      $(this).parents("li").addClass("active");
      var $target = $(this).attr("data-target");
      $(this).parents(".tabs").find(".tab-panel").removeClass("active");
      $("#"+$target).addClass("active");
    });
  },

  init: function() {
    $tabs.handleSet();
    $tabs.handleClick();
  }
}  