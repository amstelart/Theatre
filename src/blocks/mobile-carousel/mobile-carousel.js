// ---------------------------------------------------- //
// VISIBILITY CHECKING
// ---------------------------------------------------- //
var isVisible = function(element) {
  return $(element).is(':visible');
};

// ---------------------------------------------------- //
// BREAKPOINTS MANAGE
// ---------------------------------------------------- //
var breakpoints = function () {

  /*** Vars ***/
  var breakpoints = {},
      breakpoint_selector,
      breakpoint_isVisible;

  /*** Init ***/
  var init = function() {

    // First pass, loop on breakpoints
    $('.bp_checking').each(function() {
      manage( $(this).attr('id') );
    });

    // On resize, don't use DOM, loop on array
    $(window).on('resize', function(){
      $.each(breakpoints, function(breakpoint_id) {
        manage(breakpoint_id);
      });
    });
  };

  /*** Breakpoint testing ***/
  var is = function(breakpoint) {
    return breakpoints[breakpoint];
  };

  /*** Manage array ***/
  var manage = function(breakpoint_id) {
    breakpoint_selector = '#' + breakpoint_id;
    breakpoint_isVisible = isVisible(breakpoint_selector);
    breakpoints[breakpoint_id] = breakpoint_isVisible;
  };

  /*** Public methods ***/
  return {
    init: init,
    is: is
  };

}();

// Init
breakpoints.init();

// ---------------------------------------------------- //
// Mobile Carousel
// ---------------------------------------------------- //
var mobileCarousel = function() {

  /*** Vars ***/
  var gallery = '.mobile-carousel',
    slider = false;

  /*** Init ***/
  var init = function() {

    manage(); // On load (1*)

    $(window).on('resize', function(){ // On resize (2*)
      waitForFinalEvent(function(){
        manage();
      }, 200, "mobileCarousel");
    });

  };

  /*** Manage slider ***/
  var manage = function() {

    var isMobile = breakpoints.is('bp_mobile'); // Test breakpoint

    if( isMobile && !slider ) { // If mobile and slider not built yet = build
      build();
    }
    else if( !isMobile && slider ) { // Not mobile but slider built = destroy
      destroy();
    }

  };

  /*** Build slider ***/
  var build = function() {
    slider = $(gallery).addClass('owl-carousel'); // Add owl slider class (3*)
    slider.owlCarousel({ // Initialize slider
      items:1,
      // slideBy:1,
      merge:true,
      nav:false,
      margin: 15,
      autoWidth:false,
      loop:true,
      dots:false,
      responsive : {
        0 : {
          items:1,
          // autoWidth:true,
          // loop: true,
          // center: true,
          stagePadding: 50
        },
        420 : {
          items:2,
          stagePadding: 50
        },
        744 : {
          items:3,
          stagePadding: 70
        }
      }
    });
  };

  /*** Destroy slider ***/
  var destroy = function() {
    slider.trigger('destroy.owl.carousel'); // Trigger destroy event (4*)
    slider = false; // Reinit slider variable
    $(gallery).removeClass('owl-carousel'); // Remove owl slider class (3*)
  };

  /*** Public methods***/
  return {
    init: init
  };

}();

// ---------------------------------------------------- //
// PREVENT MULTIPLE CALLS
// ---------------------------------------------------- //
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();
