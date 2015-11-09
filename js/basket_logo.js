$(document).ready(function() {
	var logo_top = $(window).height()/2 - 40;
	$('.basket_logo').css('top', logo_top);
});

$(document).scroll(function() {
		var logo_top = $(window).height()/2 - 40;
		$('.basket_logo').css('top', logo_top);
});