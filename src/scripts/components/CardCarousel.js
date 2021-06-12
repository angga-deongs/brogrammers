const CardCarousel = (() => {

  // runCarousel
  const runCarousel = () => {
    if ($(window).width() > 767.98) {
      $('.js-card-slider').owlCarousel({
        nav: true,
        navText: ["<i class='bro-chevron-left'></i>","<i class='bro-chevron-right'></i>"],
        dots: false,
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

export default CardCarousel