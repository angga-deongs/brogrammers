/* -------------------------------------------------------------------------- */
/* productcurrency                                                            */
/* -------------------------------------------------------------------------- */

$productCurrency = {
  set: function() {
    // get form
    var $hargaBarang = document.getElementById("hargaBarang"),
        $diskonBarang = document.getElementById("diskonBarang"),
        $hitungBarang = document.getElementById("hitungBarang"),
        $hitungHarga = document.getElementById("hitungHarga"),
        $hitungDiskon = document.getElementById("hitungDiskon"),
        $hitungHargaSebenarnya = document.getElementById("hitungHargaSebenarnya");
    // harga barang
    $hargaBarang.onkeypress = function(tombol) {
      if($global.isNumber(tombol)) {
        return true;
      } else {
        return false;
      }
    }
    $hargaBarang.oninput = function() {
      $hargaBarang.value = $global.formatRupiah(this.value, "Rp. ");
    }
    // diskon barang
    $diskonBarang.onkeypress = function(tombol) {
      if($global.isNumber(tombol)) {
        return true;
      } else {
        return false;
      }
    }
    // hitung barang
    $hitungBarang.onclick = function() {
      // replace character to ""
      var $hargaBarangNumber = $hargaBarang.value.replace(/\D/g,""),
          $diskonBarangNumber = $diskonBarang.value.replace(/\D/g,""),
          $totalDiskon = $diskonBarangNumber * $hargaBarangNumber / 100,
          $totalDiskonInRupiah = $global.formatRupiah($totalDiskon.toString(), "Rp. "),
          $totalYangSebenarnya = $hargaBarangNumber - $totalDiskon;
      // set
      $hitungHarga.innerText = " " + $hargaBarang.value;
      $hitungDiskon.innerText = " " + $diskonBarang.value + "% / " + $totalDiskonInRupiah;
      $hitungHargaSebenarnya.innerText = $global.formatRupiah($totalYangSebenarnya.toString(), "Rp. ");
    }
  },
  init: function() {
    $productCurrency.set();
  }
}