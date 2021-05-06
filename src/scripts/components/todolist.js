/* -------------------------------------------------------------------------- */
/* popup                                                                      */
/* -------------------------------------------------------------------------- */

var WHITESPACE = /^ *$/;
$todolist = {
  event: function() {
    $(".js-todolist").keypress(function(e) {
      var text = $(this).val(),
      content = "";
      if (e.which == 13) {
        e.preventDefault();
        if (text.replace(WHITESPACE, "").length !== 0) {
          content += "<div class='todolist__item alert alert-success'>" +
                        "<button class='close js-remove' type='button'>&times;</button>" +
                        "<p class='mb-0'>"+ text +"</p>" +
                      "</div>";
          $(".todolist__list").prepend(content);
          var text = $(this).val('');
        }
      }
    });
    $("body").on("click", ".js-remove", function() {
      $(this).parent().remove();
    });
  },
  init: function() {
    $todolist.event();
  }
}  