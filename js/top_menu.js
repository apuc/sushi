$(document).scroll(function() {
		var scr = $(document).scrollTop();
		var h = $('header').height() + 2;
		var top = h - scr;
		if (top < 0) {top = 0;}
		$('nav').css('top', top);
	});