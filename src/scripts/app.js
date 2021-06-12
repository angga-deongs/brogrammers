import {
  Header,
  BannerCarousel,
  CardCarousel,
  Accordion,
  Tabs,
  Modal,
  Toast,
  Dropdown
} from 'components';

const App = (() => {

  // run transition
  const runTransition = () => {
    $('body').removeClass('hold-transition');
  }

  // run header animate
  const runHeaderAnimate = () => {
    let _width = 991.98;
    if ($(window).width() >= _width) { 
      $('body').addClass('header-show');
    } else {
      $('body').removeClass('header-show');
    }
  }

  // Ready
  const ready = () => {
    (($) => {
      runTransition();
      runHeaderAnimate();
      Header.init();
      BannerCarousel.init();
      CardCarousel.init();
      Accordion.init();
      Tabs.init();
      Modal.init();
      Toast.init();
      Dropdown.init();
    })(jQuery);
  }

  // Load
  const load = () => {
    (($) => {
      $(window).on('load', (e) => {
      });
    })(jQuery);
  }

  // Load
  const resize = () => {
    (($) => {
      $(window).on('resize', (e) => {
        runHeaderAnimate();
      });
    })(jQuery);
  }

  // init
  const init = () => {
    ready();
    load();
    resize();
  }

  return {
    init
  }

})();

App.init();
