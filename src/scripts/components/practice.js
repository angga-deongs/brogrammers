/* -------------------------------------------------------------------------- */
/* javascript datatype                                                        */
/* -------------------------------------------------------------------------- */

// const { regExpLiteral } = require("babel-types")

// const { expressionStatement } = require("babel-types")

// a. string;

//     result typeof string;

//     var nama = "angga";

// b. numbers;

//     result typeof numbers;

//     var nilai = 100;
//     var nilai = 100.25;

// c. booleans;

//     result typeof booleans;

//     true
//     false

// d. undefined;

//     result typeof undefined;

//     var x;
//     var x = undefined;

// e. empty values

//     result typeof string;

//     var x = "";

// f. NULL;

//     result typeof objects;

//     var x = "jhon doe";
//     x = null;

// g. function

//     result typeof function;

//     function fullName(firstName, lastName) {

//         console.log(firstName + '' + lastName);

//     }

//     fullName("angga","deongs");

// h. arrays

//     result typeof objects;

//     var namaMahasiswa = ["andi", "budi"];

// i. objects

//     result typeof objects;

//     var rumah = {

//         luas: 120,
//         lantai: 5,
//         warna: "abu abu",
//         kota: ["kuningan", "majalengka"]

//     }

//     jika text

//     rumah.key
//     rumah["key"]

//     jika numbers

//     rumah[key]

//     function kota(params) {
//         var dataKota = {
//             jawa_barat: "bandung",
//             jawa_tengah: "semarang",
//             jawa_timur: "surabaya"
//         }
//         console.log(dataKota[params]);
//     }
    
//     kota("jawa_barat"); // bandung
    
//     function luasLingkaran(params) {
//         console.log(22/7 * (params * params));
//     }
    
//     luasLingkaran(14);

// /* -------------------------------------------------------------------------- */
// /* getter                                                                     */
// /* -------------------------------------------------------------------------- */

// // 1. innerText

// var x = document.getElementById("value id").innerText;

// // 2. innerHTML

// var x = document.getElementById("value id").innerHTML;

// // 3. value input

// var x = document.getElementById("value id").value;

// // 4. get value from attribute

// var x = document.getElementById("value id").getAttribute("attribute");



// /* -------------------------------------------------------------------------- */
// /* setter                                                                     */
// /* -------------------------------------------------------------------------- */

// // 1. innerText

// var x = document.getElementById("value id").innerText =  "string";

// // 2. innerHTML

// var x = document.getElementById("value id").innerHTML = "HTML string tag";

// // 3. value input

// var x = document.getElementById("value id").value = value;

// // 4. set value from attribute

// var x = document.getElementById("value id").setAttribute("class", "red");


// /* -------------------------------------------------------------------------- */
// /* string                                                                     */
// /* -------------------------------------------------------------------------- */

// var text = "angga de'ongs";

// var text = "angga de\'ongs";

// var text = "lorem ipsum"+
//             "string"+
//             "string";



// /* -------------------------------------------------------------------------- */
// /* finding a string in a string                                               */
// /* -------------------------------------------------------------------------- */

// indexOf: mencari nilai index di awal
// lastIndexOf: mencari nilai index di akhir
// search: mencari nilai 

// result:

// -1 not found
// 1 found

// function setList(){
//     var contentList = "";
//     data.forEach(function(val, idx){
//         contentList += "<li>"+val+"</li>";
//     });
// }

// foodData = ["jagung", "mangga", "jeruk"];

// document.getElementById("keyword"),oninput = function(event){
//     var value = this.value;
//     var newData = [];
//     foodData.forEach(function(val, idx)){
//         if(val.toLowercase().indexOf(value.toLowercase()) > -1){
//             newData.push(val);
//         }
//     });

//     setList(newData); 
// }


// /* -------------------------------------------------------------------------- */
// /* string to array                                                            */
// /* -------------------------------------------------------------------------- */

// var nama = "angga erwan dendi";

// nama.split(" ")[0]; // angga

// var nama = "angga, erwan, dendi";

// nama.split(", ")[0]; // angga

// /* -------------------------------------------------------------------------- */
// /* string to object                                                           */
// /* -------------------------------------------------------------------------- */

// var nama = "angga";

// newNama = new String(nama);


// // 20 - 02 - 2021

// /* -------------------------------------------------------------------------- */
// /* javascript number method                                                   */
// /* -------------------------------------------------------------------------- */

// toString() = konversi dari number ke string
// toEkponential() = konversi dari number ke ekponent
// toFixed() = pembulatan ke atas dari decimal ke integer
// toPrecision() = pembulatan keatas number di awal
// Number() = konversi dari string ke number
// parseFloat() = konversi dari string ke number
// parseInt() = konversi dari string ke bilangan bulat


// /* -------------------------------------------------------------------------- */
// /* javascript array                                                           */
// /* -------------------------------------------------------------------------- */

// var array = ["a","b","c"];
// var array = new Array("a","b","c");


// array.length = menghitung jumlah data
// array.toString() = konversi array ke string
// array.join("-"); menambahkan string ke array
// array.pop() = menghapus data terakhir
// array.shift() = menghapus data awal
// array.unshift() = menyisipkan data ke yg paling awal
// array.push() = menyisipkan data ke yg paling terakhir
// array[index] = "new"  = menyisipkan value baru ke array
// delete array[index] = menghapus index dan value 
// array.concat(array2, array3, dst..) = menggabungkan beberapa array
// array.slice(start index) = menghapus array dari awalan
// array.slice(start index, end index)

// // sort string
// array.sort() = mengurutkan array string "a - z"
// array.reverse() = mengurutkan array string "z - a"

// // sort number
// array.sort(function(a, b){

//     return a - b

// });

// array.sort(function(a, b){

//     return b - a

// });


// /* -------------------------------------------------------------------------- */
// /* array iteraion                                                             */
// /* -------------------------------------------------------------------------- */

// array.forEach() = mengeluarkan data sebanyak data array

// var barang = [
//     {
//         nama: "laptop",
//         harga: 20000
//     },
//     {
//         nama: "mouse",
//         harga: 10000
//     },
//     {
//         nama: "keyboard",
//         harga: 10000
//     }
// ];
// var content = "";
// function keluarkanData(value, index, data){

//     content += "<tr><td>" + (index + 1) + "</td><td>"+value.nama+"</td><td>"+value.harga+"</td></tr>";
// }
// barang.forEach(keluarkanData);
// document.getElementById("dataBarang").innerHTML = content;


// array.map() = mengeluarkan data & membuat array baru

// var x = [100, 90, 2, 5, 10, 90];
// var b = x.map(function(value, index, array){
//     return value + 10
// });

// array.filter() = mengeluarkan data atau memfilter value 

// var x = [100, 90, 2, 5, 10, 90];
// var b = x.filter(function(value, index, array){
//     return value + 10
// });


// /* -------------------------------------------------------------------------- */
// /* date                                                                       */
// /* -------------------------------------------------------------------------- */

// new Date();
// new Date(year, month, day, hours, minuts, seconds, milliseconds);
// new Date(milliseconds);
// new Date(milliseconds);
// new Date(date string);
//     new Date("september 3, 1999 11:20:20.00");

// /* -------------------------------------------------------------------------- */
// /* javascript date get methods                                                */
// /* -------------------------------------------------------------------------- */

// date.getFullYear(); // > yyyy
// date.getMonth(); // > 0.11 (januari 0 - desember 11)
// date.getDate(); // > 1.31
// date.getHours(); // > 0.23
// date.getMinuts(); // > 0.59
// date.getSeconds(); // > 0.59
// date.getMilliSeconds(); // > 0.999
// date.getTime(); // > total milliseconds sejak tanggal january, 1 1970
// date.getDay(); // > 0.6
// Date.now(); // > milliseconds per hari ini

// /* -------------------------------------------------------------------------- */
// /* javascript date set methods                                                */
// /* -------------------------------------------------------------------------- */

// date.setFullYear(n); // > menetapkan tahun
// date.setMonth(n); // > menetapkan bulan 1.12
// date.setDate(n); // > menetapkan tanggal 1.31
// date.setHours(n); // > menetapkan jam 1.24
// date.setMinuts(n); // > menetapkan menit 1.60
// date.setSeconds(n); // > menetapkan detik 1.60
// date.setMilliSeconds(n); // > menetapkan millidetik
// date.setTime(n); // > menetapkan waktu
// date.setDay(n); // > menetapkan hari

// /* -------------------------------------------------------------------------- */
// /* javascript date format                                                     */
// /* -------------------------------------------------------------------------- */

// ISO Date    => "yyyy,MM,DD" or "MM,DD,yyyy"
// short Date  => "YYYY,MM,DD" or "MM,DD,YYYY"
// long Date   => "september 3, 1990 11:29:00"
//             => "september 3 1990 11:29:00"
//             => "3 september 1990 11:29:00"

// /* -------------------------------------------------------------------------- */
// /* javascript vonditional                                                     */
// /* -------------------------------------------------------------------------- */

// var nilai = 90;
// var text = "";

// if(nilai > 60){
//     text += "Lulus";
// } else {
//     text += "Tidak Lulus";
// }


// /* -------------------------------------------------------------------------- */
// /* javascript boolean                                                         */
// /* -------------------------------------------------------------------------- */

// var x = 1;

// if(x){
//     console.log("benar");
// } else {
//     console.log("salah");
// }

// /* -------------------------------------------------------------------------- */
// /* object                                                                     */
// /* -------------------------------------------------------------------------- */


// // if value = 0; false;
// // if value = ""; false;

// Boolean(value);

// new Boolean(value); // default class object javascript
// var y = new Boolean(1);


// /* -------------------------------------------------------------------------- */
// /* javaascript conditional                                                    */
// /* -------------------------------------------------------------------------- */

// if(condition){
//     // run
// } else {
//     // run
// }

// if(condition){
//     // run
// } else if (conditon){
//     // run
// } else {
//     // run
// }


// var nilai = 100;

// (nilai > 80) ? "true" : "false";


// var toggleButton = documentGetElementsById("toggleButton");
// var show = false;
// toggleButton.onClick = function(){
//     if(show){
//         show = false;
//         // run
//     } else {
//         show = true;
//         // run
//     }
// }

// var body = documentGetElementsByTagName("toggleButton")[0];
// // add Class
// body.classList.add("class");
// // remove Class
// body.classList.remove("class");









// /* -------------------------------------------------------------------------- */
// /* javascript switch                                                          */
// /* -------------------------------------------------------------------------- */

// switch(expression) {
//     // cek value1 or value 2
//     case value1:
//     case value2:
//         // code
//         break;
//     case value:
//         // code
//         break;
//     case value:
//         // code
//         break;
//     case value:
//         // code
//         break;
//     case value:
//         // code
//         break;
//     default:
//         break;
// }


// /* -------------------------------------------------------------------------- */
// /* javascript loop for                                                        */
// /* -------------------------------------------------------------------------- */

// for( statement 1; statement 2; statement 3){
//     // code
// }

// var content = "";
// for(var nomor:1; nomor < 100; nomor++){
//     content += "<p>"+nomor+"</p>";
// }

// console.log(content);


// /* -------------------------------------------------------------------------- */
// /* javascript loop while                                                      */
// /* -------------------------------------------------------------------------- */

// // cara 1
// while(condition){
//     // code

// }

// // cara 2
// do {
//     // code
// } while (condition);





// var i = 1;

// while(i < 10){
//     console.log(i);
//     if(i == 7){
//         break;
//         //continue;
//     }
//     i++;
// }

/* -------------------------------------------------------------------------- */
/* javascript regular expression                                              */
/* -------------------------------------------------------------------------- */

// /pattern/modifiers

// or

// new RegExp(pattern,"modifier")

// /pattern/pattern/modifiers
// /name/ => case sensitive
// /name/1 => case insensitive
// /name/g => semua case sensitive
// /name/g => semua case insensitive

// regExp.text(input) => cek true or false

// form

// nama => required
// email => required + email valid
// password => required > 8
// no_telp => required harus angka yang bisa di ketik


// var kelas = "bahasa" // global variable (global scope)

// function setJumlah(){
//     var nama ="rudi" // local variable
// }

// setJumlah();

// console.log(nama);
// console.log(kelas);




// "use strict"; => mengantisipasi kesalahan

// x = 12 => // error

// var z = 12; // 12






// x = 9;

// var x; // 9




// var person = {
//     firstName: "jhon",
//     lastName:"doe",
//     fullName = function() {
//         return this.firstName + '' + this.lastName;
//     },
//     kels: {
//         vii: "IPA",
//         viii: "IPS",
//         semua: function(){
//             console.log(this);
//         }

//     }
// }

// this: variable object => mengacu kepada pemilik object terdejat (ES5)
// this: variable object => mengacu kepada windows (ES6)
// this: inline => mengacu kepada dirinya sendiri
// this: event => mengacu kepada pemilik function
// this: variable function es5 atau function => mengacu kepada window (ketika bukan user strict)
// 






// var buttonPopup = {
//     buttonPopup: document.getElementById(),
//     buttonClose: document.getElementById(),
//     popupWrapper: document.getElementById(),

//     open: function () {
//         handlePopup.popupWrapper.style.display = "block";
//     },
//     close: function () {
//         this.buttonClose.onclick = function (params) {
//             handlePopup.setStatus("none", false);
//         }
//         this.popupWrapper.onclick = function (params) {
//             handlePopup.setStatus("none", false);
//         }
//         this.popupBox.onclick = function (params) {
//             e.stopPropagation();
//         }
//         document.onkeydown = function (params) {
            
//         }
//         handlePopup.popupWrapper.style.display = "none";
//     },
// }


// /* -------------------------------------------------------------------------- */
// /* javascript json                                                            */
// /* -------------------------------------------------------------------------- */

// data.JSON.parse(data);

// data.JSON.stringify(data);


// class ClassName {
//     constructor() {

//     }
//     method1() {

//     }
//     medthod2() {

//     }
// }

// class handlePopup {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     fullname() {
//         return this.firstname + " " + this.lastname;
//     }
//     close() {
//         this.open(status);
//         this.close();
//     }
//     init(status) {

//     }
// }

// new handlePopup("jhon", "doe");


// /* -------------------------------------------------------------------------- */
// /* javascript math object                                                     */
// /* -------------------------------------------------------------------------- */

// Math.P1;
// Math.round(x)
// Math.pop(nx, ny)
// Math.sqrt(x)
// Math.abs(x)
// Math.cell(x)
// Math.floor(x)
// Math.min(n,n,n,n,n)
// Math.max(n,n,n,n,n)
// Math.sin()
// Math.cos()
// Math.tan()

// /* -------------------------------------------------------------------------- */
// /* javascript random                                                          */
// /* -------------------------------------------------------------------------- */

// Math.random();
// Math.random(Math.random() * 100);
// Math.random(Math.random() * 1000);
// Math.random(Math.random() * 10000);


/* -------------------------------------------------------------------------- */
/* object literal                                                             */
/* -------------------------------------------------------------------------- */

// var popup = {
//     open: () => {

//     },
//     show: () => {

//     }
// }

/* -------------------------------------------------------------------------- */
/* object class                                                               */
/* -------------------------------------------------------------------------- */

// Attrobute class
// - Constructor => method function yang pertama kali di jalankan
// - property => data yang di simpan kedalam object
// - class method => method class yang dimiliki object


// class Person {
//     constructor(fistname, fullname) {
//         this.namaDepan = firstName;
//         this.namaBelakang = lastName;
//     }
//     fullName() {
//         return this.namaDepan + " " + this.namaBelakang;
//     }
// }

// var namaLengkap = new person("jhon", "doe");

// console.log(namaLengkap.fullName);

// class Rumah extends Person {

// }

// var namaPemilik = new Person("sudirman", "andara");

// console.log(namaPemilik.fullName)







/*

JavaScript Style Guide
--
[1] Variable Names
  - Gunakan camelCase untuk nama variable dan nama function
  - Gunakan alhpabet di awal penamaan

[2] Spasi pada Operator
  - Tambahkan spasi sebelum dan sesudah simbol operator ( = + - * / )
  - Tambahkan spasi setelah koma pada array

[3] Code Indentation
  - Gunakan indentation 2 spasi

[4] Aturan Statement
  - selalu tutup dengan titik koma (;) pada akhir syntax (statement JS)
  [] Complex statement (function, loop, conditionals)
    - Tambahkan kurung kurawal buka di akhir baris
    - Tambahkan spasi sebelum kurung kurawal buka
    - Tempatkan kurung kurawal tutup di baris baru, tanpa spasi
    - Jangan menggunakan titik koma (;) di akhir syntax (statement JS) pada complex statement

[5] Aturan Penulisan Object
  - Tambahkan kurung kurawal buka di akhir baris sejajar dengan nama variable object
  - Gunakan titik dua (:) diantara key dan value, tambahkan spasi setelah titik dua
  - Gunakan tanda petik satu ('), atau petik dua (") jika value merupakan type data string
  - Jangan tambahkan koma setelah key dan value terakhir
  - Tempatkan kurung kurawal tutup di baris baru, tanpa spasi
  - Tambahkan titik koma (;) di akhir definisi object

[6] Aturan Penamaan
  - Gunakan camelCase pada nama variable dan nama function
  - Gunakan SCREAMING_SNAKE_CASE pada nama constant
  - Jangan gunakan kebab-case (hyp-hens) pada nama variable, function ataupun constant

  **
  kebab-case biasanya digunakan pada nama class
  snake_case biasanya digunakan pada SQL Database dan bahasa PHP
  PascalCase biasanya digunakan pada bahasa C, java, nama class javascript
  camelCase biasanya digunakan pada bahasa JavaScript untuk namaVariable, function

[7] Tempatkan JavaScript di bawah sebelum close tag body

[8] File Extensions
  - JavaScript menggunakan .js untuk extension file

[9] Nama File
  - Gunakan kebab-case/PascalCase/camelCase untuk nama file JS

JavaScript Best Practices
--
[] Hindari variable global
[] Selalu sertakan kata kunci var atau let untuk deklarasi variable
[] Deklarasi di atas
[] Inisiasi Variable
[] Jangan deklarasi number, string dan boolean sebagai object
[] Jangan gunakan kata new pada type data sederhana
[] Perhatikan konversi tipe data yang sebelumnya tipe data A ke tipe data B
[] Gunakan === atau !== perbandingan
[] Gunakan parameter default pada function, constructor
[] Tambahkan default pada akhir statement switch
[] Hindari menggunakan function eval()

JavaScript Common Mistakes
--

[] Penulisan operator sama dengan yang salah pada perbandingan
    var x = 10;
    var y = 12;

    // Wrong
    if (x = y) {
      console.log('benar');
    } else {
      console.log('salah');
    }

    // Correct
    if (x == y) {
      console.log('benar');
    } else {
      console.log('salah');
    }

    // Correct
    if (x === y) {
      console.log('benar');
    } else {
      console.log('salah');
    }

[] Perbandingan yang kurang ketat
    var x = 10;
    var y = "10";

    // Wrong
    if (x == y) {
      console.log('benar');
    } else {
      console.log('salah');
    }

    // Correct
    if (x === y) {
      console.log('benar');
    } else {
      console.log('salah');
    }

[] Kesalahan dalam operasi pertambahan matematika (number dan string)
    // Wrong
    var x = 10;
    var y = '10';
    var total = x + y;

    // Correct
    var total = x + Number(y);

    // Wrong
    var x = 10;
    var y = 10;
    var hasil = 'Hasil adalah ' + x + y;
    // Correct
    var hasil = 'Hasil adalah ' + (x + y);

[] Salah memahami penjumlahan decimal
    // Wrong
    var x = 0.1;
    var y = 0.2;
    var total = x + y;

    // Correct
    var x = 0.1;
    var y = 0.2;
    var total = ((x * 10) + (y*10)) / 10;

[] Penulisan string dengan baris baru
    // Wrong
    var kalimat = "Indonesia
    Merdeka";

    // Correct
    var kalimat =
    "Indonesia Merdeka";

    var kalimat = "Indonesia \
    Merdeka";
    var kalimat = "Indonesia "+
    "Merdeka";


[] Salah menempatkan titik koma/semicolon (;) 
    // Wrong
    function setNama(nama){;
      console.log(nama);
    }

    for (var i = 1; i < 10; i++) {;
      console.log(i);
    }

[] Akses array dengan nama indexnya
    var siswa = [];
    siswa[0] = 'Rudi';
    siswa[1] = 'Rendi';
    console.log(siswa[0]);

    var siswa = [];
    siswa['a'] = 'Rudi';
    siswa['b'] = 'Rendi';
    console.log(siswa['a']);

[] Penulisan koma di akhir array atau object

    // Wrong
    var siswa = ['Rudi','Roni','Riska',];

    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 40,
      }

    // Correct
    var siswa = ['Rudi','Roni','Riska'];

    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 40
      };

[] Undefined bukan sebuah null
    var x; // undefined
    var y = null; // object

    x == y // true
    x === y // false

*/

// Javascript performance
// --

// [ ] Reduce activity in Loops

//   // Bed
//   var siswa = ['Angga','Dendi','Erwan','Alpin'];

//   for (var i = 0; i < siswa.length i++) {
//     console.log(siswa[i]);
//   }

//   // Better
//   var siswa = ['Angga','Dendi','Erwan','Alpin'];
//   var banyakSiswa = siswa.length;

//   var i;
//   for (i = 0 ; i < banyakSiswa; i++) {
//     console.log(siswa[i]);
//   }

// [ ] Reduce DOM(Document Object Model) Access

//   // bed
//   document.getElementById("hitung").onclick = function () {}
//   document.getElementById("hitung").onblur = function () {}
//   document.getElementById("hitung").oninput = function () {}
//   document.getElementById("hasil").innerText = "Text";


//   // Better
//   var hasil = document.getElementById("hasil"),
//   hitung = document.getElementById("hitung");

//   hasil.onclick = function () {}
//   hasil.onblur = function () {}
//   hasil.oninput = function () {}
//   hitung.innerText = "Text";

// [ ] Avoid unecessary variables
//   var firstname = 'Jhon',
//   lastName = 'Doe';

//   // bad tidak digunakan berulang
//   var fullname = firstname + " " + lastName;
//   document.getElementById("demo").innerHTML = fullname;

//   // better tidak digunakan berulang
//   document.getElementById("demo").innerHTML = firstname + " " + lastName;

// [ ] Delay javascript loading
//   tambahkan attribute defer="true" pada tag Script
//   <script defer="true" src="assets/js/run.js"></script>

//   or

//   <script type="text/javascript">

//   window.onload = function () {
//     var element = document.createElement("script");
//     element.src = 'assets/js/run.js';
//     document.body.appendChild(element);
//   }
//   </script>

//   [ ] Avoid using with (hindari kata with)



//   Modern Browser

//   JS For in (return key)

//   var key;

//   for (key in object) {

//   }

//   JS For of (return value)

//   for (variables of iterable(array)) {

//   }



// Jquery

// Jquery features
// - 


// Jquery selector


// Jquery Event

// selector.event(function () {
  
// });

// selector.on("stringEvent", function () {
//   // do 
// });

// Mouse Events
//   - click
//   - dblclick
//   - mouseenter
//   - mouseleave

// Keyboards Events
//  - keypress
//  - keydown
//  - keyup

// Form Event
//  - submit
//  - change
//  - focus
//  - blur

// Docuemnet window Events
// - load
// - resize
// - scroll
// - unload



// // /*

// id => document.getElementById("value id");
// class => document.getElementsByClassName("value class")[index];
// tag => document.getElementsByTagName("tag")[index];
// name => document.getElementsByName("value name")[index];
// single selector => document.querySelector(".class | #id | tag | [attribute]);
// Multiple selector => document.querySelector(".class | #id | tag | [attribute]")[index];

// // Show Hide
// selector.hide(speed, callback);
// selector.show(speed, callback);
// selector.toggle(speed, callback);
// // Efek
// selector.fadeIn(speed, callback);
// selector.fadeOut(speed, callback);
// selector.fadeToggle(speed, callback);
// selector.fadeTo(speed, opacity, callback);
// // Slide
// selector.slideUp(speed, callback);
// selector.slideDown(speed, callback);
// selector.slideToggle(speed, callback);
// speed: milliseconds : 'slow', 'normal', 'fast'
// callback: function(){} or () => {}
// // Stop
// selector.stop();
// // animate
// selector.animate({params}, speed, callbacks);
// selector.animate({
//   wdith: '240px',
//   opacity: '0.5',
//   fontsize: '12px'
// }, 200);

// stop
// selector.stop()
// callbacks = yang running setelah proses utama selesai

// // chaining
// before chaining
// selector.method().slideDown(1000).slideUp();
// $(".popup").slideDown(1000);
// $(".popup").slideUp(1000);
// after chaining
// $(".popup").slideDown(1000).slideUp(1000);




// jQuery HTML

// Text
// selector.text();

// Tag
// selector.html()

// value input
// selector.value()

// value Attribute
// selector.attr("attribute-name");

// getAttribute

// single Attribute
// $("img").attr("src", "assets/img.png"});

// multiple Attribute
//   $("img").attr({
//     "src": "assets/img.png",
//     "alt": "slide src"
// });

// task
// callbacks fuunction
// selector.attr("attribute-name", function(index, originValue){

// })

// jQuery add Element

// selector.append();
// selector.prepend();
// selector.after(); add Element after tag selector
// selector.before(); add Element before tag selector
// selector.remove(); remove element berdasarkan selector 
// selector.removeAttr();

// deleget event
// $("body").on("click", ".js-remove-menu", function(e) {
//   $(this).parent().remove();
// })

// $("body").on("click", ".js-remove-menu", function(e) {
// }).on("click", function(){
//   $(this).parent().remove();
// });



// in JS
// selector.style.propertyName = value;
// // in JQuery
// selector.css(propertyName);
// selector.css(propertyName, value);
// // set multiple property
// selector.css({
//   'background-color': 'red',
//   'color': 'black'
// });

// var height = 0;
// $(".card-item").each(function(index, element){
//   if($(element).find(".card-box").outerHeight > _height){
//     _height = $(element).find(".card-box").outerHeight > _height;
//   }
// });

// $(".card-item").height(_height);






/* -------------------------------------------------------------------------- */
/* loop in jqeury                                                             */
/* -------------------------------------------------------------------------- */

// element html (class, element, attribute)
// selector.each(function(index, element){

// });

// array data
// $.each(arrayData, function(index, value){

// });