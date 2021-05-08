const WHITESPACE = /^ *$/;

var addItem = {
  jsInputAdd: function() {
    $('.js-input').on('keypress', function(e) {
      if (e.keyCode === 13 && !WHITESPACE.test($(this).val())) {
        var _val = $(this).val(),
        _item = '<div class="alert">' + '<span>' + _val + '</span>' +
                  '<buton type="button" class="btn js-remove"><i class="fas fa-trash"></i></buton>' +
                '</div>';
        $('.js-list').prepend(_item);
        $(this).val('');
      }
    });
  },

  jsRemove: function() {
    $('body').on('click', '.js-remove', function(e) {
      $(this).parent().remove();
    });
  },

  init: function() {
    this.jsInputAdd();
    this.jsRemove();
  }
}

addItem.init();