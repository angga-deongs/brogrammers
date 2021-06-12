const Dropdown = (() => {

  // handleClick
  const handleClick = () => {
    $('body').on('click', function() {
      if ($('.js-dropdown').hasClass('dropdown-show')) {
        $('.js-dropdown').removeClass('dropdown-show');
      }
    });

    $('.js-dropdown').on('click', function(e) {
      e.stopPropagation();
    });

    $('.js-dropdown .dropbtn').on('click', (e) => {
      let _this = $(e.currentTarget);
      if (_this.parents('.js-dropdown').hasClass('dropdown-show')) {
        _this.parents('.js-dropdown').removeClass('dropdown-show');
      } else {
        $('.js-dropdown').removeClass('dropdown-show');
        _this.parents('.js-dropdown').addClass('dropdown-show');
      }
    });
  }

  // handle Keyup
  const handleKeyup = () => {
    $('body').on('keyup', (e) => {
      if (e.which == 27 && $('.js-dropdown').hasClass('dropdown-show')) {
        $('.js-dropdown').removeClass('dropdown-show');
      }
    });
  }

  // init
  const init = () => {
    handleClick();
    handleKeyup();
  }

  return {
    init: init
  }

})();

export default Dropdown