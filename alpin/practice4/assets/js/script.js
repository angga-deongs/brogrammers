var dataTeam = [
                {
                  photo: 'assets/img/1.jpeg',
                  name: 'Alexander Smith',
                  position: 'UI Developer',
                  description: 'Alexander Smith Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: 'assets/img/2.jpeg',
                  name: 'Jhon Smith',
                  position: 'UX Developer',
                  description: 'Jhon Smith Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: 'assets/img/3.jpeg',
                  name: 'Adam Smith',
                  position: 'Front End Developer',
                  description: 'Adam Smith Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: 'assets/img/4.jpg',
                  name: 'Asep Smith',
                  position: 'UI Developer',
                  description: 'Asep Smith Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: 'assets/img/5.jpg',
                  name: 'Lisa Alexander',
                  position: 'Back End Developer',
                  description: 'Lisa Alexander Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: 'assets/img/6.jpg',
                  name: 'Steve Jhon',
                  position: 'UI Developer',
                  description: 'Steve Jhon Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: 'assets/img/7.jpg',
                  name: 'Chika Amanda',
                  position: 'UX Developer',
                  description: 'Chika Amanda Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
                {
                  photo: 'assets/img/8.jpg',
                  name: 'Peter Parkour',
                  position: 'UI Developer',
                  description: 'Peter Parkour Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officia quos aperiam modi commodi nisi fuga, sunt dolorem.',
                  socialMedia: {
                    facebook: 'http://facebook.com',
                    twitter: 'http://twitter.com',
                    instagram: 'http://instagram.com'
                  }
                },
              ];

var Main = {

  jsSetData: function() {
    var content = '';
    dataTeam.forEach(function(v, i) {
      content +=  '<div class="col-4">' +
                    '<div class="team-item js-popup" data-name="' + v.name +'" data-photo="' + v.photo +'" data-position="' + v.position +'" data-desc="' + v.description +'" data-facebook="' + v.socialMedia.facebook +' "data-instagram="' + v.socialMedia.instagram +'" data-twitter="' + v.socialMedia.twitter +'">' +
                      '<div class="team-img">' +
                        '<img src="' + v.photo + '" alt="' + v.name + '">' +
                      '</div>' +
                      '<div class="team-text">' +
                        '<h3 class="team-name">' + v.name + '</h3>' +
                        '<p class="team-position">' + v.position + '</p>' +
                      '</div>' +
                    '</div>' +
                  '</div>';
    });
    $('.js-list').html(content);
  },

  jsOpenModal: function() {
    $('body').on('click', '.js-popup', function() {
      // Set Data Popup
      $('.popup-img').find('img').attr('src', $(this).data('photo'));
      $('.popup-img').find('img').attr('alt', $(this).data('name'));
      $('.popup-name').text($(this).data('name'));
      $('.popup-position').text($(this).data('position'));
      $('.popup-desc').text($(this).data('desc'));
      $('.facebook').attr('href', $(this).data('facebook'));
      $('.twitter').attr('href', $(this).data('twitter'));
      $('.instagram').attr('href', $(this).data('instagram'));
      // Function Open Popup
      $('body').css('overflow', 'hidden');
      $(".js-popup-modal").fadeIn(300);
    });
  },

  jsCloseModal: function() {
    $('body').on('click', function() {
      $('.js-popup-modal').fadeOut(300);
    });

    $('body').on('click', '.js-popup', function(e) {
      e.stopPropagation();
    });

    $('body').on('click', '.js-close', function() {
      $('body').css('overflow', 'auto');
      $(".js-popup-modal").fadeOut(300);
    });

    $('body').on('keyup', function(e) {
      if (e.which === 27) {
        $('.js-popup-modal').fadeOut(300);
      }
    });

  },

  init: function() {
    Main.jsSetData();
    Main.jsOpenModal();
    Main.jsCloseModal();
  }
}

Main.init();
