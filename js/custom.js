$(document).ready(function() {

	//first vars
	navbar = $('#navbar');
	navbarToggle = $('#navbar-toggle');
	

	//first functions
	navbarCheck(navbar);
	



	//fade in effect
	$(".fader").each(function(i) {
	  	$(this).delay(i * 200).fadeIn();
	});


	//dropfade effect
	var elements = $(this).find('.dropfade');
	var index = 0;

	function dropHover() {
		var timer = setInterval(function () {
		    elements.eq(index).removeClass('dropfade');
		    elements.eq(index).addClass('')
		    index++;

		    if (index >= elements.length) {
	         	clearInterval(timer);
	     	}
		}, 100);
	};


	setTimeout(dropHover, 400);
	clearInterval(dropHover);




	// navbar transform on scroll
	$(window).scroll(function() {
			navbarAnimation(navbar, navbarToggle);
		}).scroll();

	function navbarCheck() {
		if (navbar.hasClass('navbar-transparent')) {
			navbarTrans = true;
		} else {
			navbarTrans = false;
		}
	}

	function navbarAnimation(navbar, navbarToggle) {
		var topScroll = $(window).scrollTop();
		if (navbarTrans === true) {
			if (topScroll >= 1) {
				navbar.removeClass('navbar-transparent');
				navbarToggle.removeClass('navbar-toggle-transparent');
			} else {
				navbar.addClass('navbar-transparent');
				navbarToggle.addClass('navbar-toggle-transparent')
			}
		}
	}
});



