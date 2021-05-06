/* -------------------------------------------------------------------------- */
/* global                                                                     */
/* -------------------------------------------------------------------------- */

$global = {

  isNumber: function(tombol) {
    tombol = (tombol) ? tombol : window.event;
    var charCode = (tombol.which) ? tombol.which : tombol.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
  },

  formatRupiah: function(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    if(ribuan){ 
      separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }
    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? "Rp. " + rupiah : "");
  },

};