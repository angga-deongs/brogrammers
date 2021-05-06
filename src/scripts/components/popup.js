/* -------------------------------------------------------------------------- */
/* popup                                                                      */
/* -------------------------------------------------------------------------- */

$popup = {
  set: function() {
    var dataTeam = [
      {
        photo: 'assets/img/background/news-and-promo-4.jpg',
        name: 'Rudi Doe',
        position: 'UI Developer',
        description: 'Rudi Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        socialMedia: {
          facebook: 'http://fb.com',
          twitter: 'http://twt.com',
          instagram: 'http://inst.com'
        }
      },
      {
        photo: 'assets/img/background/news-and-promo-5.jpg',
        name: 'Jhon Doe',
        position: 'UX Developer',
        description: 'Jhon Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        socialMedia: {
          facebook: 'http://fb.com',
          twitter: 'http://twt.com',
          instagram: 'http://inst.com'
        }
      },
      {
        photo: 'assets/img/background/news-and-promo-6.jpg',
        name: 'Renny R',
        position: 'Frontend Developer',
        description: 'Renny Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        socialMedia: {
          facebook: 'http://fb.com',
          twitter: 'http://twt.com',
          instagram: 'http://inst.com'
        }
      },
      {
        photo: 'assets/img/background/news-and-promo-7.jpg',
        name: 'Gotham',
        position: 'Backend Developer',
        description: 'Gotham Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        socialMedia: {
          facebook: 'http://fb.com',
          twitter: 'http://twt.com',
          instagram: 'http://inst.com'
        }
      },
      {
        photo: 'assets/img/background/news-and-promo-2.jpg',
        name: 'Magnus',
        position: 'Fullstack Developer',
        description: 'Magnus Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        socialMedia: {
          facebook: 'http://fb.com',
          twitter: 'http://twt.com',
          instagram: 'http://inst.com'
        }
      },
      {
        photo: 'assets/img/background/news-and-promo-1.jpg',
        name: 'Hikaru',
        position: 'Android Developer',
        description: 'Hikaru Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        socialMedia: {
          facebook: 'http://fb.com',
          twitter: 'http://twt.com',
          instagram: 'http://inst.com'
        }
      },
      {
        photo: 'assets/img/background/home-block-about.jpg',
        name: 'Nakamura',
        position: 'IOS Developer',
        description: 'Nakamura Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        socialMedia: {
          facebook: 'http://fb.com',
          twitter: 'http://twt.com',
          instagram: 'http://inst.com'
        }
      },
      {
        photo: 'assets/img/background/home-block-ig-3.jpg',
        name: 'Carlsen',
        position: 'Analyst',
        description: 'Carlsen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        socialMedia: {
          facebook: 'http://fb.com',
          twitter: 'http://twt.com',
          instagram: 'http://inst.com'
        }
      },
    ]
    var content = '';
    dataTeam.forEach(function(v, i) {
      content +=  '<div class="team__item js-team-popup" data-description="'+ v.description +'" data-fb="'+ v.socialMedia.facebook +'" data-twt="'+ v.socialMedia.twitter +'" data-ig="'+ v.socialMedia.instagram +'">' +
                    '<div class="team__img">' +
                      '<img class="team__photo" src="'+ v.photo +'" alt="'+ v.name +'">' +
                    '</div>' +
                    '<div class="team__text">' +
                      '<h1 class="team__name">'+ v.name +'</h1>' +
                      '<p class="team__position">'+ v.position +'</p>' +
                    '</div>' +
                  '</div>';
    });
    $(".js-team").html(content);
  },
  event: function() {
    $("body").on("click", ".js-team-popup", function() {
      $(".js-popup-team").addClass("show");
      var name = $(this).find(".team__name").text(),
      position = $(this).find(".team__position").text(),
      photo = $(this).find(".team__photo").attr("src"),
      description = $(this).attr("data-description"),
      fb = $(this).attr("data-fb"),
      twt = $(this).attr("data-twt"),
      ig = $(this).attr("data-ig");
      $(".popup-team__img img").attr({
        src: photo,
        alt: name
      });
      $(".popup-team__name").text(name);
      $(".popup-team__position").text(position);
      $(".popup-team__text").text(description);
      socmed =  "<li><a href='"+ fb +"' target='_blank'>Facebook</li>" +
                "<li><a href='"+ twt +"' target='_blank'>Twitter</li>" +
                "<li><a href='"+ ig +"' target='_blank'>Instagram</li>";

      $(".popup-team__socmed").html(socmed);
    });
    $(".js-popup-team").on("click", function(e) {
      if($(e.target).is($(".js-popup-team, .js-close-team"))) {
        $(".js-popup-team").removeClass("show");
      }
    });
    $(document).on("keyup", function(e){
      if(e.which === 27){
        if($(".popup-team").hasClass("show")){
          $(".popup-team").removeClass("show");
        }
      }
    });
  },
  init: function() {
    $popup.set();
    $popup.event();
  }
}  