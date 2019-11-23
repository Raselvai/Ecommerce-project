(function ($) {
"use strict";



// mainSlider
$('.slider-active').slick({
	dots: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay:true,
	autoplaySpeed:1000,
	prevArrow:'<span class="prev"><i class="fa fa-angle-left"></i></span>',
	nextArrow:'<span class="next"><i class="fa fa-angle-right"></i></span>',
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  });
  
  //tooltip active
  $('[data-toggle="tooltip"]').tooltip()

  //product slider
  $('.owl-carousel').owlCarousel({
    loop:true,
	nav:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);