const BannerCarousel = (() => {

  // runCarousel
  const runCarousel = () => {
    if ($('.main-banner__item').length > 1) {
      $('.js-banner-slider').owlCarousel({
        items: 1,
        loop: false,
        rewind: true,
        autoplay: true,
        nav: false,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        autoplayTimeout: 6500,
      });
    } else {
      $('.js-banner-slider').addClass('single-item');
    }
  }

  // init
  const init = () => {
    runCarousel();
  }

  return {
    init
  }

})();

export default BannerCarousel