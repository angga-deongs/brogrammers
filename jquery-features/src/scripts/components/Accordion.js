const Accordion = (() => {

  // handleClick
  const handleClick = () => {
    $('.js-accordion .accordion__title').on('click', (e) => {
      let _this = $(e.currentTarget),
      _parent = _this.parents('.accordion__item');
      if (_parent.hasClass('show')) {
        _parent.removeClass('show').find('.accordion__body').slideUp();
      } else {
        _this.parents('.js-accordion').find('.accordion__item').removeClass('show').find('.accordion__body').slideUp();
        _parent.addClass('show').find('.accordion__body').slideDown();
      }
    });
  }

  const init = () => {
    handleClick();
  }

  return {
    init
  }
})();

export default Accordion