var burgerMenu = {
  handleClick: function() {
    $('.js-burger-menu').on('click', function() {
      if ($(this).parents('.header').hasClass('show-menu')) {
        $(this).parents('.header').removeClass('show-menu')
      } else {
        $(this).parents('.header').addClass('show-menu');
      }
    });
  },

  init: function() {
    burgerMenu.handleClick();
  }
}

burgerMenu.init();