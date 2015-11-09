// function getNext(id) {
// 	if (id == $('.comments li').length-2) {
// 		id = 0;
// 	}
// 	else {
// 		id++;
// 	}
// 	return id;
// }
// function getPrev(id) {
// 	if (id == 0) {
// 		id = $('.comments li').length-2;
// 	}
// 	else {
// 		id--;
// 	}
// 	return id;
// }

// $(document).ready(function() {
// 	$('.comments li').each(function() {
// 		if (($(this).index()!=0)&&($(this).index()!=1)) {
// 			$(this).removeClass('vis');
// 		}
// 	});
//  	$('.comments .arrows').addClass('vis');
//  });

// 	$(document).on('click', '.arrow', function(e) {
// 		e.preventDefault();
// 		if ($(this).index()) {
// 			var id = $('.comments li.vis').index();			
// 			$('.comments li').eq(id).removeClass('vis');
// 			$('.comments li').eq(id).attr('style', 'display: none;');
// 			id = getNext(id);
// 			$('.comments li').eq(id).removeClass('vis');
// 			$('.comments li').eq(id).attr('style', 'display: none;');
// 			id = getNext(id);
// 			$('.comments li').eq(id).fadeIn();
// 			$('.comments li').eq(id).addClass('vis');
// 			id = getNext(id);
// 			$('.comments li').eq(id).fadeIn();
// 			$('.comments li').eq(id).addClass('vis');
// 		}
// 		else {
// 			var id = $('.comments li.vis').index();
// 			$('.comments li').eq(id).removeClass('vis');
// 			$('.comments li').eq(id).attr('style', 'display: none;');
// 			$('.comments li').eq(getNext(id)).removeClass('vis');
// 			$('.comments li').eq(getNext(id)).attr('style', 'display: none;');
// 			id = getPrev(id);
// 			$('.comments li').eq(id).fadeIn();
// 			$('.comments li').eq(id).addClass('vis');
// 			id = getPrev(id);
// 			$('.comments li').eq(id).fadeIn();
// 			$('.comments li').eq(id).addClass('vis');
// 		}
// 	});
// });

function getNext(id) {
	if(id == $('.comments li').length-1){
				id=0;
	}
	$('.comments li.comments-item').eq(id).addClass('vis');
	id = id+1;
	return id;	
}
function getPrev(id) {
	id = id-1;
	if(id == 0){
		id=$('.comments li').length-1;
	}
	id = id-1;
	if(id == 0){
				id=$('.comments li').length-1;
	}
	id = id-1;
	if(id == 0){
				id=$('.comments li').length-1;
	}
	id = id-1;
	$('.comments li.comments-item').eq(id).addClass('vis');
	if(id == 0){
		id=$('.comments li').length-1;
	}
	id = id-1;
	$('.comments li.comments-item').eq(id).addClass('vis');
	if(id == 0){
				id=$('.comments li').length-1;
	}
	id = id-1;
	$('.comments li.comments-item').eq(id).addClass('vis');
	if(id == 0){
				id=$('.comments li').length-1;
	}
	id = id+3;
	return id;	
}

$(document).ready(function() {
	var id = 3;
	$('.comments li').each(function() {
		if (($(this).index()!=0)&&($(this).index()!=1)&&($(this).index()!=2)) {
			$(this).removeClass('vis');
		}
	});
 	$('.comments .arrows').show();
	
	$(document).on('click', '.arrow', function(e) {
		e.preventDefault();
		if ($(this).index()) {
			$('.comments li.comments-item').removeClass('vis');
			id=getNext(id);
			id=getNext(id);
			id=getNext(id);
		}
		else{
			$('.comments li.comments-item').removeClass('vis');
			id=getPrev(id);
		}
	 });
 });

