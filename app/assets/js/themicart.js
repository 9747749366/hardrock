jQuery(document).ready(function() {	

	'use strict';

	// Sidebar li hover 
	$('.sidebar-nav li').mouseover(function(e)
	{
		e.stopPropagation();
	    $(this).addClass('hovered');
	    $(this).parent().removeClass('hovered');
	});

	$('.sidebar-nav li').mouseout(function()
	{
	    $(this).removeClass('hovered');
	});

 	// Activate top home page car  ousel
	jQuery('#slider-fullwidth').carousel('cycle');

	// Clients carousel settings
	jQuery("#clients-carousel").slick({
		arrows: false,
		useTransform: true,
        cssEase: 'cubic-bezier(0.250, 0.250, 0.515, 0.975)',
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplaySpeed:500,
	  	autoplay:true,
        responsive: [
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 4,
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 3,
	          }
	        }
		]
	});

	// News carousel settings
	jQuery("#news-carousel").slick({
	    useTransform: true,
        cssEase: 'cubic-bezier(0.250, 0.250, 0.515, 0.975)',
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    swipeToSlide: true,
	    responsive: [
	        {
	          breakpoint: 1024,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2,
	            infinite: true,
	          }
	        },
	        {
	          breakpoint: 768,
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

	// Testimonials carousel settings
	jQuery("#testimonial-carousel").slick({
		useTransform: true,
        cssEase: 'cubic-bezier(0.250, 0.250, 0.515, 0.975)',
		slidesToShow: 2,
		speed: 300,
	    swipeToSlide: true,
	    responsive: [
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
		]
	   	});


	// Mobile nav button
	jQuery('#menu-btn').on("click", function() {
		if (jQuery(this).hasClass('toggled')) {
			jQuery(this).removeClass('toggled');
		} else {
			jQuery(this).addClass('toggled');
		}
	})

	// Mobile nav button mobile tap
	jQuery('#menu-btn').on("tap", function() {
		if (jQuery(this).hasClass('toggled')) {
			jQuery(this).removeClass('toggled');
		} else {
			jQuery(this).addClass('toggled');
		}
	})
	    
	// Gallery filters
	jQuery('#filters a').on('click', function() {
		var $this = jQuery(this);
		if ( $this.hasClass('selected') ) {
			return false;
		}
		jQuery(this).parent().parent().find('.selected').removeClass('selected');
		$this.addClass('selected');
	});

	var $container = jQuery('#gallery');
	$container.imagesLoaded( function(){
		$container.isotope({
			itemSelector: '.item',
			filter: '*'
		});
	});

	jQuery('#filters a').on("click", function() {
		var selector = jQuery(this).attr('data-filter');
		$container.isotope({ 
			filter: selector
		});
	return false;
	});
	
	$(window).on('resize', function(){
	    $container.isotope('layout');
	    $container.isotope('layout');

	});

});