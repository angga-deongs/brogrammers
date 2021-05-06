/* -------------------------------------------------------------------------- */
/* productdiscount                                                            */
/* -------------------------------------------------------------------------- */

$productDiscount = {
  set: function() {
    var product = [
      {
        image: "",
        title: "product 1",
        price: 50000
      },
      {
        image: "",
        title: "product 2",
        discount: 40,
        price: 60000
      }
    ];
    var content = "",
    discount = "";
    function keluarkanData(value, index, data) {
      if(value.discount !== undefined) {
        discount = "<p class='product-discount'>" +
                      "<span class='product-percentage'>" + value.discount + "% </span>" +
                      "<s>" + $global.formatRupiah(value.price.toString(), "Rp. ") + "</s>" +
                    "</p>" +
                    "<p class='product-price'>" + $global.formatRupiah((value.price - (value.discount * value.price / 100)).toString(), "Rp. ") + "</p>";
      } else {
        discount = "<p class='product-price'>" + $global.formatRupiah((value.price).toString(), "Rp. ") + "</p>";
      }
      content += "<div class='product-item'>" +
                    "<div class='product-image'>" +
                      "<img src=''/>" +
                    "</div>" +
                    "<div class='product-text'>" +
                      "<h5 class='product-title'>" + value.title + "</h5>" +
                        discount +
                    "</div>" +
                  "</div>";
    }
    product.forEach(keluarkanData);
    document.getElementById("dataProductList").innerHTML = content;
  },
  init: function() {
    $productDiscount.set();
  }
}