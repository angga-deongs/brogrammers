$('#js-effect').on('click', function() {
  $(this).text() === 'hide' ? $(this).text("show") && $('.box').hide(300) : $(this).text('hide') && $('.box').show(300);
  // if($(this).text() === 'hide'){
  //   $(this).text("show");
  //   $('.box').hide(300);
  // }else {
  //   $(this).text('hide');
  //   $('.box').show(300);
  // }
});