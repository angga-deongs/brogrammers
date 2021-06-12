const Header = (() => {

  // handleScroll
  const handleScroll = () => {
    let _header = $('.js-header-scroll');
    $(window).scroll(function() {
      if ( $(window).scrollTop() <= 30 ) {
        _header.removeClass('header__fixed');
      } else {
        _header.addClass('header__fixed');
      }
    });
  }

  const handleClick = () => {
    $('.js-burger-menu').on('click', function() {
      if ($(this).parents('.header').hasClass('header__show-menu')) {
        $(this).parents('.header').removeClass('header__show-menu');
        $('body').removeClass('rm-scroll');
      } else {
        $(this).parents('.header').addClass('header__show-menu');
        $('body').addClass('rm-scroll');
      }
    });
  }

  // handleKeyup
  const handleKeyup = () => {
    $('body').on('keyup', function(e) {
      if (e.which === 27 && $('.header').hasClass('header__show-menu')) {
        $('.header').removeClass('header__show-menu');
        $('body').removeClass('rm-scroll');
      }
    });
  }

  // init
  const init = () => {
    handleScroll();
    handleClick();
    handleKeyup();
  }

  return {
    init: init
  }

})();

export default Header