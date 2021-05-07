var dataSearch = ['Kuningan', 'Majalengka', 'Cirebon', 'Bandung', 'Tegal'];

var Toast = {
  handleLoad: function() {
    $(window).on('load', function() {
      $('.js-toast').slideDown();
    });
  },

  handleClick: function() {
    $('.js-close').on('click', function() {
      $(this).parents('.js-toast').slideUp();
    });
  },

  init: function() {
    Toast.handleLoad();
    Toast.handleClick();
  }
}

var Search = {
  handleLoadData: function() {
    $.each(dataSearch, function(i, v) {
      $('.js-search .search-result-list').append('<li><a href="#">' + v +'</a></li>');
    });
  },

  handleClick: function() {
    $('body').on('click', function() {
      if ($('.js-search').hasClass('show')) {
        $('.search-result').hide();
      }
    });

    $('.search').on('click', function(e) {
      e.stopPropagation();
    });
  },

  handleKeyup: function() {
    // Close Toast
    $('body').on('keyup', function(e) {
      if (e.which === 27) {
        if ($('.js-search').hasClass('show')) {
          $('.search-result').hide();
          $('.js-search-data').blur();
        }
      }
    });
  },

  handleInput: function() {
    // Show search result when input on focus
    $('.js-search-data').on('focus', function() {
      $(this).parents('.js-search').addClass('show').find('.search-result').show();
    });

    $('.js-search-data').on('input', function() {
      var _this = $(this),
      _val = _this.val(),
      _dataSearched = 0;

      $('.search-result p').hide();
      _this.parents('.js-search').removeClass('show').find('.search-result-list li').hide();

      $.each(dataSearch, function(i, v) {
       if (v.toLowerCase().indexOf(_val.toLowerCase()) > -1) {
        _this.parents('.js-search').find('.search-result-list li').eq(i).show();
        _dataSearched++;
      }
    });

      if (_dataSearched === 0) {
        $('.search-result p').show();
      }

    });
  },

  init: function() {
    Search.handleLoadData();
    Search.handleClick();
    Search.handleKeyup();
    Search.handleInput();
  }
}

Toast.init();
Search.init();

