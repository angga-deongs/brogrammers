/* -------------------------------------------------------------------------- */
/* main                                                                       */
/* -------------------------------------------------------------------------- */

var Main = {

  init: function() {
    $ajax.init();
    $sortingOrder.init();
    $formValidation.init();
    $dataTable.init();
    $productDiscount.init();
    $productCurrency.init();
    $showHide.init();
    $carousel.init();
    $popup.init();
    $todolist.init();
    $sameHeight.init();
    $tabs.init();
    $accordion.init();
    $toast.init();
    $dropdown.init();
    $search.init();
  }

};

$(document).ready(function() {
  Main.init();
});