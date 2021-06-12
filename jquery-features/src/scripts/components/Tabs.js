const Tabs = (() => {

  // handleClick
  const handleClick = () => {
    $('.js-tab .tabs__item').on('click', (e) => {
      let _this = $(e.currentTarget);
      if (!_this.hasClass('active')) {
        let _target = _this.attr('data-target');
        _this.siblings('li').removeClass('active');
        _this.parents('.js-tab').find('.tabs__pane').removeClass('active');

        _this.addClass('active');
        $('[data-pane="'+ _target +'"]').addClass('active');
      }
    });
  }

  // init 
  const init = () => {
    handleClick();
  }

  return {
    init
  }
})();

export default Tabs