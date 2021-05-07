var exJSON = {
  handleLoadData: function() {
    $.get('http://localhost/web-learning/practice/jquery/card.json', function(data, status) {
      var _card ='';
      $.each(data, function(i, v) {
        _card += '<div class="card">' +
                    '<div class="card-image">' +
                      '<img src="assets/img/'+ v.image +'" alt="'+ v.title +'">' +
                    '</div>' +
                    '<div class="card-text">' +
                      '<h2 class="card-title">' + v.title + v.id + '</h2>' +
                      '<p class="card-desc">' + v.description +'</p>' +
                    '</div>' +
                  '</div>';
      });
      $('#js-card').append(_card);
    });
  },

  init: function() {
    exJSON.handleLoadData();
  }
}

exJSON.init();