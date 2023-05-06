// Если на проекте jQuery
$( document ).ready(function() {
  // code

  $("#main-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    center: false,
  });

  $("#portfolio-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    center: false,
  });

  $("#other-products").owlCarousel({
    items: 4,
    nav: true,
    margin: 20,
    loop: true,
    center: false,
    responsive : {
      0 : {
        items: 2,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 2,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 4,
      }
    }
  });

  $("#news-carousel").owlCarousel({
    items: 4,
    nav: true,
    margin: 20,
    loop: true,
    center: false,
    responsive : {
      0 : {
        items: 2,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 2,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 4,
      }
    }
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
