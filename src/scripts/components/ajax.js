/* -------------------------------------------------------------------------- */
/* ajax                                                                       */
/* -------------------------------------------------------------------------- */

$ajax = {
  handleLoad: function() {
    $(".cards").load("assets/js/data/products.json", function(responseTxt, statusTxt, xhr){
      console.log("responseTxt"+ responseTxt);
      console.log("statusTxt"+ statusTxt);
      console.log("xhr"+ xhr);
    });
  },

  handleGet: function() {
    $.get("assets/js/data/products.json", function(data, status){
      var dataList;
      $.each(data.list, function(i, v){
        dataList += "<div class='ax-card'>" +
                      "<div class='ax-card__image'>" +
                        "<img src='" + v.image + "'/>" +
                      "</div>" +
                      "<div class='ax-card__title'>" +
                        "<p>" + v.title + "</p>" +
                      "</div>" +
                      "<div class='ax-card__description'>" +
                        "<p>" + v.description + "</p>" +
                      "</div>" +
                    "</div>";
      });
      $(".ax-cards").append(dataList);
    });
  },

  init: function() {
    // $ajax.handleLoad();
    $ajax.handleGet();
  }
}