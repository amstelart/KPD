// Если на проекте jQuery
$( document ).ready(function() {

    $(".box-slider").owlCarousel({
      items: 1,
      nav: true,
      dots:true,
      loop: true,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
      center: true,
      responsive : {
        0 : {
          items: 1,
          nav: true,
          loop: true,
          center: true,
        },
        480 : {
          items: 1,
        },
        768 : {
          items: 1,
        },
        992 : {
          items: 1,
        },
        1200 : {
          items: 1,
        },
        1800 : {
          items: 1,
        }
      }
    });

});

$( document ).ready(function() {

  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': false
  });

  // Toggle button
  document.querySelector('.main-nav__open-button').addEventListener('click', function() {
    slideout.open();
  });
  document.querySelector('.main-nav__close-button').addEventListener('click', function() {
    slideout.close();
  });

});


// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
