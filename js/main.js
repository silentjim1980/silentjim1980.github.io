(function($) {
	"use strict";	

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});
		
			$('.carousel').carousel({
		interval: false
	});

	// jQuery Stick menu		
	$(".navbar").sticky({
		topSpacing: 0,
	});


	$('.nav').singlePageNav({
        currentClass : 'current'
    });


    //Click event to scroll to top
	$('#scroll-to-content').on('click', function(e){
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $('.first-section').offset().top-70
        }, 600);
	});


	//Click event to scroll to top
	$('.go-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

})(jQuery);