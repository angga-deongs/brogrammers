const Toast = (() => {

  // runToast

  const handleClick = () => {
    $('.js-hide-toast').on('click', (e) => {
      let _this = $(e.currentTarget);
      _this.parents('.js-toast').fadeOut(300);
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

export default Toast