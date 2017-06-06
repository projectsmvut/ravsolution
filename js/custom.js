/*Theme    : Narani
 * Author  : Design_mylife
 * Version : V1.1
 * 
 */

 $(document).on("submit", "form", function(event)
 {
   event.preventDefault();
   $('.sendingMail').show()     
   $('.sendMail').hide()     
   $.ajax({
     url: $(this).attr("action"),
     type: $(this).attr("method"),
     dataType: "JSON",
     data: new FormData(this),
     processData: false,
     contentType: false,
     success: function (data, status)
     {
      console.log(data);
      $('.mailForm').find("input[type=text],input[type=email], textarea").val("");
/*      $('.notification').show();

*/  $('.mailSent').show();     
    $('.mailSent').fadeOut(4000);
$('.sendMail').delay(4001).show(0);    
$('.sendingMail').hide();     
/*      $('.notification').fadeOut(5000);
*/    },
error: function (xhr, desc, err)
{}
});        
 });



 // transparent header on scroll 
 $(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.trans-before').addClass('trans-after');
  } else {
    $('.trans-before').removeClass('trans-after');
  }
});




    //auto close collapse on click
    function close_toggle() {
      if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function(){
          $('.navbar-collapse').collapse('hide');
        });
      }
      else {
       $('.navbar .navbar-default a').off('click');
     }
   }
   close_toggle();

   $(window).resize(close_toggle); 



/* ==============================================
Smooth Scroll To Anchor
=============================================== */

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('.navbar a,.btn').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 50
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

//parallax
$(window).stellar({
  horizontalScrolling: false,
    responsive: true/*,
     scrollProperty: 'scroll',
     parallaxElements: false,
     horizontalScrolling: false,
     horizontalOffset: 0,
     verticalOffset: 0*/
   });

//owl carousel for work
$(document).ready(function() {

  $("#work-carousel").owlCarousel({
      // Most important owl features
      items : 4,
      itemsCustom : false,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,3],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
      singleItem : false,
      startDragging : true
    });

});
//owl carousel for work
$(document).ready(function() {

  $("#work-carousel1").owlCarousel({
      // Most important owl features
      items : 5,
      itemsCustom : false,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,3],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
      singleItem : false,
      startDragging : true
    });

});


//owl carousel for testimonials
$(document).ready(function() {

  $("#testi-carousel").owlCarousel({
      // Most important owl features
      items : 1,
      itemsCustom : false,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
      singleItem : false,
      startDragging : true
    });

});

/* ==============================================
 Counter Up
 =============================================== */
 jQuery(document).ready(function($) {
  $('.counter').counterUp({
    delay: 100,
    time: 800
  });
});


/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */

 var wow = new WOW(
 {
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 150, // distance to the element when triggering the animation (default is 0)
            mobile: false        // trigger animations on mobile devices (true is default)
          }
          );
 wow.init();
 
 /*========tooltip and popovers====*/
 /*==========================*/
 $("[data-toggle=popover]").popover();

 $("[data-toggle=tooltip]").tooltip();



