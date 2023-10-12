// fact

  

  function animateCounter(element, targetValue, duration) {
    let currentValue = 0;
    const increment = targetValue / duration;
    const counterElement = document.getElementById(element);
    const h5Element = counterElement.querySelector('h5'); // Get the h5 element

    const interval = setInterval(function () {
      currentValue += increment;
      counterElement.querySelector('.counter-value').textContent = Math.floor(currentValue);

      if (currentValue >= targetValue) {
        clearInterval(interval);
        counterElement.querySelector('.counter-value').textContent = targetValue;
        h5Element.style.visibility = 'visible'; // Show the h5 element
      }
    }, 1);
  }

  // Trigger the counter animations when the page is loaded
  window.addEventListener('DOMContentLoaded', function () {
    animateCounter('fact1', 60, 1000); // Example: 60 is the target value, and 2000 is the duration in milliseconds
    animateCounter('fact2', 3, 200);  // Example: 3 is the target value, and 2000 is the duration in milliseconds
    animateCounter('fact3', 30, 1000); // Example: 30 is the target value, and 2000 is the duration in milliseconds
    animateCounter('fact4', 5, 200);  // Example: 5 is the target value, and 2000 is the duration in milliseconds
  });


// blog movement

  $(document).ready(function () {
    $("#blog-carousel").owlCarousel({
      items: 1, // Display one item at a time (this is needed for the carousel structure)
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        768: {
          items: 3, // Display three items in a row on screens wider than 768px
        }
      }
    });
  });


// testimonial


  $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      center: true,
      dots: true,
      loop: true,
      margin: 0,
      nav : true,
      navText: false,
      responsiveClass: true,
      responsive: {
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  });




// team carousel 

  $(".team-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: false,
      dots: false,
      loop: true,
      margin: 50,
      nav : true,
      navText : [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>'
      ],
      responsiveClass: true,
      responsive: {
          0:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  });


//back to top

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
  } else {
      $('.back-to-top').fadeOut('slow');
  }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });




// spinner 


  (function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
      setTimeout(function () {
          if ($('#spinner').length > 0) {
              $('#spinner').removeClass('show');
          }
      }, 1000); // Use 1000 milliseconds (1 second) delay instead of 1
  };
  spinner();
})(jQuery); // Ensure to pass jQuery to the function

