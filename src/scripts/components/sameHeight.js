/* -------------------------------------------------------------------------- */
/* sameheight                                                                 */
/* -------------------------------------------------------------------------- */

$sameHeight = {
  set: function() {
    var height = 0;
    $(".card-item").each(function(index, element){
      if (height < $(element).outerHeight()) {
        height = $(element).outerHeight();
      }
    });
    $(".card-item").height(height);
  },

  init: function() {
    $sameHeight.set();
  }
}