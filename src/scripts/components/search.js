/* -------------------------------------------------------------------------- */
/* search                                                                     */
/* -------------------------------------------------------------------------- */

var dataSearch = ['Kuningan', 'Majalengka', 'Cirebon', 'Bandung', 'Tegal', 'Ciamis'];

$search = {

  handleSetData: function() {
    // append list
    $.each(dataSearch, function(i, v) {
      $('.ax-practice-search__result').append('<li><a href="#">'+v+'</a></li>')
    });
  },

  handleFocus: function() {
    // show search result on focus
    $('.js-search-data').on('focus', function() {
      $(this).parents('.ax-practice-search').find('.ax-practice-search__result').show();
    });
  },

  handleBlur: function() {
    // hide search result on blur
    $('.js-search-data').on('blur', function() {
      $(this).parents('.ax-practice-search').find('.ax-practice-search__result').hide();
    });
  },

  handleInput: function() {
    $('.js-search-data').on('input', function() {
      // set value input to variable
      var _this = $(this),
      _val = _this.val();

      // hide search result oninput
      _this.parents('.ax-practice-search').find('.ax-practice-search__result li').hide();

      // show search data 
      $.each(dataSearch, function(i, v) {
        if (v.toLowerCase().indexOf(_val.toLowerCase()) > -1) {
          _this.parents('.ax-practice-search').find('.ax-practice-search__result li').eq(i).show();
        }
      });
    });
  },

  handleKeyup: function() {
    // hide search result on click ESC
    $(document).on("keyup", function(e) {
      if (e.which === 27) {
        $('.ax-practice-search__result').hide();
        $('.js-search-data').blur();
      }
    });
  },

  init: function() {
    $search.handleFocus();
    $search.handleBlur();
    $search.handleSetData();
    $search.handleInput();
    $search.handleKeyup();
  }
}