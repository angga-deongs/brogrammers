/* -------------------------------------------------------------------------- */
/* datatable                                                                  */
/* -------------------------------------------------------------------------- */

$dataTable = {
  set: function() {
    var barang = [
      {
        nama: "laptop",
        harga: 20000
      },
      {
        nama: "mouse",
        harga: 10000
      },
      {
        nama: "keyboard",
        harga: 10000
      }
    ];
    var content = "";
    function keluarkanData(value, index, data) {
      content += "<tr><td>" + (index + 1) + "</td><td>"+value.nama+"</td><td>"+value.harga+"</td></tr>";
    }
    barang.forEach(keluarkanData);
    document.getElementById("dataBarang").innerHTML = content;
  },
  init: function() {
    $dataTable.set();
  }
};