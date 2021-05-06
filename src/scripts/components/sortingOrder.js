/* -------------------------------------------------------------------------- */
/* sortingorder                                                               */
/* -------------------------------------------------------------------------- */

$sortingOrder = {
  set: function() {
    var siswa = [
      {
        nama: "angga",
        nilai: 90
      },
      {
        nama: "dendi",
        nilai: 85
      },
      {
        nama: "erwan",
        nilai: 95
      },
      {
        nama: "alvin",
        nilai: 100
      }
    ];
    var dataSiswa = document.getElementById("dataSiswa"),
        dataSort = document.getElementById("dataSort"), 
        dataSiswaList = document.getElementById("dataSiswaList");
        l = siswa.length;
        resetSiswa = new Array(l);
    for (var i=0; i<l; i++) {
      resetSiswa[i] = siswa[i];
    }
    function asc( a, b ) {
      if ( a.nilai > b.nilai ){
        return -1;
      }
    }
    function desc( a, b ) {
      if ( a.nilai < b.nilai ){
        return -1;
      }
    }
    function keluarkanData(totalShow, element) {
      var content = "",
          i;
      for (i = 0; i < totalShow; i++) {
        content += "<li>Nama: "+element[i].nama+" Nilai: "+element[i].nilai+"</li>";
      }
      dataSiswaList.innerHTML = content;
    }
    function totalData(totalShow) {
      var content = "",
          i;
      for (i = 0; i < totalShow; i++) {
        content += "<li>Nama: "+siswa[i].nama+" Nilai: "+siswa[i].nilai+"</li>";
      }
      dataSiswaList.innerHTML = content;
    }
    keluarkanData(dataSiswa.value, siswa);
    dataSort.onchange = function() {
      if (this.value === "") {
        keluarkanData(dataSiswa.value, resetSiswa);
      }
      if (this.value === "asc") {
        siswa.sort(asc);
        keluarkanData(dataSiswa.value, siswa);
      }
      if (this.value === "desc") {
        siswa.sort(desc);
        keluarkanData(dataSiswa.value, siswa);
      }
    }
    dataSiswa.onchange = function() {
      totalData(this.value)
    }
  },
  init: function() {
    $sortingOrder.set();
  }
}  