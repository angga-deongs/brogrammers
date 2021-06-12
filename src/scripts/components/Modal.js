const Modal = (() => {

  // handleClick
  const handleClick = () => {
    $('.js-modal').on('click', (e) => {
      let _this = $(e.currentTarget),
      _target = _this.attr('data-target'),
      _parents = _this.parents('body');

      if (_parents.hasClass('modal-show')) {
        _parents.removeClass('modal-show').removeClass('rm-scroll');
        $('.modal').removeClass('show');
      } else {
        _parents.addClass('modal-show').addClass('rm-scroll');
        $('[data-modal="'+ _target +'"]').fadeIn('slow');
      }

    });

    $('body').on('click', function() {
      if ($('body').hasClass('modal-show')) {
        $('body').removeClass('modal-show').removeClass('rm-scroll');
        $('.modal').fadeOut('slow');
      }
    });

    $('body').on('click', '.js-modal, .modal__content', function(e) {
      e.stopPropagation();
    });

    $('body').on('click', '.js-hide-modal', function() {
      if ($('body').hasClass('modal-show')) {
        $('body').removeClass('modal-show').removeClass('rm-scroll');
        $('.modal').fadeOut('show');
      }
    });
  }

  const handleKeyup = () => {
    $('body').on('keyup', (e) => {
      if (e.which == 27 && $('body').hasClass('modal-show')) {
        $('body').removeClass('modal-show').removeClass('rm-scroll');
        $('.modal').fadeOut('show');
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

export default Modal