const Header = (() => {
  // handleScroll
  const handleScroll = () => {
    let scroll = $(document).scrollTop(),
    headerHeight = $('.header').outerHeight();
    $(window).scroll(function() {
      let scrolled = $(document).scrollTop();
      if (scrolled > headerHeight){
        $('.header').addClass('header-scroll');
      } else {
        $('.header').removeClass('header-scroll');
      }

      if (scroll > scrolled){
        $('.header').removeClass('header-scroll');
      }          
      scroll = $(document).scrollTop(); 
    });
  }

  // handleClick
  const handleClick = () => {
    $('.js-mobile-menu').on('click', (e) => {
      let _this = $(e.currentTarget);
      if (_this.parents('.header').hasClass('header-show')) {
        _this.parents('.header').removeClass('header-show');
        _this.parents('body').removeClass('remove-scroll');
      } else {
        _this.parents('.header').addClass('header-show');
        _this.parents('body').addClass('remove-scroll');
      }
    });
  }

  // init
  const init = () => {
    handleScroll();
    handleClick();
  }

  return {
    init
  }
})();

export default Header
