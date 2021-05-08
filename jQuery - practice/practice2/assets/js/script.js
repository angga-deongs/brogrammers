var _post = 0;
$('.js-slide-nav').on('click', function() {
  _post = $(this).hasClass('slide-next') ? _post + 400 : _post - 400;
  // if ($(this).hasClass('slide-next')) {
  //   _post += 400;
  // } else {
  //   _post -= 400;
  // }
  $('.slide-box').animate({
    left: '-' + _post + 'px'
  }, 'slow');
});