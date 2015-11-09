$(document).ready(function(){
	$widthNewItem = $('.col_new').width();
	$('.col_new-item').width($widthNewItem);
	$('.col_new-wrap').css({'right' : $widthNewItem});
		setInterval (function(){
           var left_indent = parseInt($('.col_new-wrap').css('right')) - $widthNewItem;
           $('.col_new-wrap').animate({'right' : left_indent},500,function(){
                $('.col_new-wrap .col_new-item:first').before($('.col_new-wrap .col_new-item:last'));
                $('.col_new-wrap').css({'right' : $widthNewItem});
            });
		}, 5000);
	$widthPriceItem = $('.col_price').width();
	$('.col_price-item').width($widthPriceItem);
	setInterval (function(){

       var left_indent = parseInt($('.col_price-wrap').css('left')) - $widthNewItem;
        $('.col_price-wrap').animate({'left' : left_indent},500,function(){
            $('.col_price-wrap .col_price-item:last').after($('.col_price-wrap .col_price-item:first'));
            $('.col_price-wrap').css({'left' : '0'});
        });
	}, 5000);

});

$(window).resize(function(){
	$widthPriceItem = $('.col_price').width();
	$('.col_price-item').width($widthPriceItem);
	$widthNewItem = $('.col_new').width();
	$('.col_new-item').width($widthNewItem);
	$('.col_new-wrap').css({'right' : $widthNewItem});
}); 
