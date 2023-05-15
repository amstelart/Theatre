// Если на проекте jQuery
$( document ).ready(function() {
  // code

  var mobileNav = new hcOffcanvasNav('#mobile-nav', {
    customToggle: $('.main-nav__toggler'),
    navTitle: 'Меню',
    insertClose: false,
    position: 'left'
  });

  $('.accordion-group').ariaAccordion({});

  $("#main-carousel").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    center: false,
  });

  $("#portfolio-carousel").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    center: false,
  });

  $("#other-products").owlCarousel({
    items: 4,
    nav: false,
    dots: true,
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
    nav: false,
    dots: true,
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
    nav: false,
    dots: true,
    margin: 20,
    loop: true,
    center: false,
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
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
}());

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

(function(){
  // image carousel 01
  const swiperImage01 = new Swiper(".image-slider-thumbnail--01", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchSlidesProgress: true,
  });
  const swiperImage012 = new Swiper(".image-slider--01", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiperImage01,
    },
  });
  // image carousel 02
  const swiperImage02 = new Swiper(".image-slider-thumbnail--02", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchSlidesProgress: true,
  });
  const swiperImage022 = new Swiper(".image-slider--02", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiperImage02,
    },
  });
  // image carousel 03
  const swiperImage03 = new Swiper(".image-slider-thumbnail--03", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    watchSlidesProgress: true,
  });
  const swiperImage032 = new Swiper(".image-slider--03", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiperImage03,
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
