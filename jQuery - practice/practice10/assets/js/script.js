var Header = {

  handleClick: function() {
    $('.js-burger-menu').on('click', function() {
      if ($(this).parents('.header').hasClass('show-menu')) {
        $(this).parents('.header').removeClass('show-menu');
        $('body').removeClass('rm-scroll');
      } else {
        $(this).parents('.header').addClass('show-menu');
        $('body').addClass('rm-scroll');
      }
    });
  },

  handleKeyup: function() {
    $('body').on('keyup', function(e) {
      if (e.which === 27 && $('.header').hasClass('show-menu')) {
        $('.header').removeClass('show-menu');
        $('body').removeClass('rm-scroll');
      }
    });
  },

  init: function() {
    Header.handleClick();
    Header.handleKeyup();
  }
}

Header.init();