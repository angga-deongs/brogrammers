const Popup = (() => {

  // handleClick
  const handleClick = () => {
    $('.js-popup').on('click', (e) => {
      console.log($(e.currentTarget).attr('data-value'));
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

export default Popup
