var Main = {
  setHeight: function() {
    var _height = 0;
    $('.card').each(function(i, e) {
      if (_height < $(e).outerHeight()) {
        _height = $(e).outerHeight();
      }
    });
    $('.card').height(_height);
  },

  init: function() {
    Main.setHeight();
  }
}

Main.init();