$(document).scroll(function() {
		var scr = $(document).scrollTop();
		var h = $('header').height() + 2;
		var top = h - scr;
		if (top < 0) {
			top = 0;
			$('nav').css('min-height', '63px');
			$('.navbar-brand').show();
			$('nav ul').css('width', 'auto');
			$('nav ul').css('margin-top', '10px');
			$('.navbar-header button').css('margin-top', '14px');
		}
		else {
			$('nav').css('min-height', 'auto');
			$('.navbar-brand').css('display', 'none');
			$('nav ul').css('width', '100%');
			$('nav ul').css('margin-top', '0px');
			$('.navbar-header button').css('margin-top', '3px');
		}
		$('nav').css('top', top);
		var logo_top = $(window).height()/2 - 40;
		$('.basket_logo').css('top', logo_top);
});