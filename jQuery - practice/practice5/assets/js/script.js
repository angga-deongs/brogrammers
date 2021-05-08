var handleTabs = {
  handleClick: function() {
    $('.js-tabs .tab-item').on('click', function() {
      if (!$(this).hasClass('active')) {
        var _target = $(this).attr('data-target');
        $(this).siblings().removeClass('active');
        $(this).parents('.js-tabs').find('.tab-pane').removeClass('active');

        $(this).addClass('active');
        $('[data-pane="'+ _target +'"]').addClass('active');
      }
    });
  },

  init: function() {
    handleTabs.handleClick();
  }
}

var handleAccordion = {
  handleClick: function() {
    $('.js-accordion .accordion-title').on('click', function () {
      if ($(this).parents('.accordion-item').hasClass("show")) {
        $(this).parents('.accordion-item').removeClass("show").find(".accordion-body").slideUp();
      } else {
        // $(this).parents('.accordion-item').siblings('.accordion-item').removeClass("show").find(".accordion-body").slideUp();
        $(this).parents('.js-accordion').find('.accordion-item').removeClass("show").find(".accordion-body").slideUp();
        $(this).parents('.accordion-item').addClass("show").find(".accordion-body").slideDown();
      }
    });
  },

  init: function() {
    handleAccordion.handleClick();
  }
}

handleTabs.init();
handleAccordion.init();