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

  $("#project-carousel").owlCarousel({
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
        items: 2,
      },
      992 : {
        items: 2,
      }
    }
  });
});

// Изоляция без jQuery
(function(){
  // code
  const swiper = new Swiper(".view-slider-thumbnail", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".view-slider", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
}());

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
