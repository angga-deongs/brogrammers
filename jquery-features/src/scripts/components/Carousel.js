const Carousel = (() => {
  const runCarousel = () => {
    // Slider for banner
    if ($('.banner__item').length > 1) {
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
        autoplayTimeout: 8000,
      });
    } else {
      $('.js-banner-slider').addClass('single-item');
    }

    // slide features
    if ($(window).width() > 767.98) {
      $('.js-features').owlCarousel({
        nav: true,
        dots: true,
        smartSpeed: 1500,
        autoWidth:true,
      });
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

export default Carousel
