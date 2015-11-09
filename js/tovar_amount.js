$(document).ready(function() {
	$(document).on('click', '#less_amount', function(e) {
		e.preventDefault();
		var val = $('#tovar_amount').val();
		if (val > 1) {
			val--;
		}
		$('#tovar_amount').val(val);
	});
	$(document).on('click', '#more_amount', function(e) {
		e.preventDefault();
		var val = $('#tovar_amount').val();
		val++;
		$('#tovar_amount').val(val);
	});
});