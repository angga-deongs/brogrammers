const Accordion = (() => {

  // handleClick
  const handleClick = () => {
    $('.js-accordion .accordion__title').on('click', (e) => {
      let _this = $(e.currentTarget);
      if (_this.parents('.accordion__item').hasClass("show")) {
        _this.parents('.accordion__item').removeClass("show").find(".accordion__body").slideUp();
      } else {
        // _this.parents('.accordion__item').siblings('.accordion__item').removeClass("show").find(".accordion__body").slideUp();
        _this.parents('.js-accordion').find('.accordion__item').removeClass("show").find(".accordion__body").slideUp();
        _this.parents('.accordion__item').addClass("show").find(".accordion__body").slideDown();
      }
    });
  }

  // init
  const init = () => {
    handleClick();
  }

  return {
    init: init
  }

})();

export default Accordion