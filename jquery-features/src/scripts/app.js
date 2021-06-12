import { Header, Popup, Carousel, Tabs, Accordion } from 'components';


// - App
const App = (() => {
  // -- Run Transition
  const runTransition = () => {
    $('body').removeClass('hold-transition');
  }

  // - ready
  const ready = () => {
    (($) => {
      // -- Global

      // -- Project
      runTransition();
      Header.init();
      Popup.init();
      Carousel.init();
      Tabs.init();
      Accordion.init();
    })(jQuery)
  }

  // - load
  const load = () => {
    (($) => {
      $(window).on('load', () => {
        // run function finished
        
      });
    })(jQuery)
  }

  // - init
  const init = () => {
    ready();
    load();
  }

  return {
    init
  }
})();

// - Run
App.init();