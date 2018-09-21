// Если на проекте jQuery
$(window).on('load',function(){
  $('#modal-start').modal('show');
});

$( document ).ready(function() {

    var boxSlider = $('.box-slider.owl-carousel');

    boxSlider.owlCarousel({
      items: 1,
      nav: true,
      dots:false,
      loop: false,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
      center: false,
      onInitialized: function(e) {
        $('.box-slider-counter').text('1 / ' + this.items().length)
        console.log();
      }
    });

    boxSlider.on('changed.owl.carousel', function(e) {
      $('.box-slider-counter').text(++e.item.index + ' / ' + e.item.count)
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

document.addEventListener('DOMContentLoaded', function(){

  // Открытие/закрытие блока с кодом
  var codeShowTriggers = document.querySelectorAll('.catalog__part-show-trigger');
  for (var i = 0; i < codeShowTriggers.length; i++) {
    codeShowTriggers[i].addEventListener('click', function(){
      this.closest('.catalog__part--dropdown').querySelector('.catalog__part-body').classList.toggle('catalog__part-body--shown');
      this.closest('.catalog__part--dropdown').querySelector('.catalog__part-show-trigger').classList.toggle('catalog__part-show-trigger--open');
      this.closest('.catalog__part--dropdown').querySelector('.catalog__part-show-text').textContent = this.textContent === 'Раскрыть' ? 'Скрыть' : 'Раскрыть';
    });
  }

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
