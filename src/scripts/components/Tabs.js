const Tabs = (() => {

  // handleClick
  const handleClick = () => {
    let _list = '[data-target]',
        _pane = '[data-pane]';

    $(_list).first().addClass('show-tabs');
    $(_pane).first().addClass('show-tabs');

    $(_list).on('click', (e) => {
      let _this = $(e.currentTarget),
       _target = _this.attr('data-target');
      
      if (!_this.hasClass('show-tabs')) {
        _this.siblings().removeClass('show-tabs');
        _this.parents('.js-tabs').find(_pane).removeClass('show-tabs');

        _this.addClass('show-tabs');
        $('[data-pane="'+ _target +'"]').addClass('show-tabs');
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