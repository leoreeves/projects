$(document).ready(function(){
	$('.submit').click(function(){
		var x = document.getElementById("user-input").value;
		var vatRate = document.getElementById("VAT-rate").value;
		if (document.getElementById("user-input").value === '') {
			alert('Please enter an amount');
		}
		if (document.getElementById("add").checked && (document.getElementById("user-input").value !== '')) {
			document.getElementById('exclude-VAT').style.display = 'none';
			document.getElementById('add-VAT').style.display = 'block';
			document.getElementById("plus-net").innerHTML = '£' + parseFloat(x).toFixed(2);
			document.getElementById("plus-VAT").innerHTML = '£' + (x * vatRate - x).toFixed(2);
			document.getElementById("plus-gross").innerHTML = '£' + (x * vatRate).toFixed(2);
		} else if (document.getElementById("exclude").checked && (document.getElementById("user-input").value !== '')) {
			document.getElementById('add-VAT').style.display = 'none';
			document.getElementById('exclude-VAT').style.display = 'block';
			document.getElementById("minus-net").innerHTML = '£' + parseFloat(x).toFixed(2);
			document.getElementById("minus-VAT").innerHTML = '£' + (x - (x / vatRate)).toFixed(2);
			document.getElementById("minus-gross").innerHTML = '£' + (x / vatRate).toFixed(2);
		}
	});
	$('#add-VAT-select').change(function() {
		if ($("#add-VAT-select").val() === 0) {
			$("#copy").attr('data-clipboard-target',"#plus-net");
			console.log('0');
		} else if ($("#add-VAT-select").val() == 1) {
			$("#copy").attr('data-clipboard-target',"#plus-VAT");
			console.log('1');
		} else if ($("#add-VAT-select").val() == 2) {
			$("#copy").attr('data-clipboard-target',"#plus-gross");
			console.log('2');
		} 
	});
	$('#minus-VAT-select').change(function() {
		if ($("#minus-VAT-select").val() === 0) {
			$("#m-copy").attr('data-clipboard-target',"#minus-net");
			console.log('0');
		} else if ($("#minus-VAT-select").val() == 1) {
			$("#m-copy").attr('data-clipboard-target',"#minus-VAT");
			console.log('1');
		} else if ($("#minus-VAT-select").val() == 2) {
			$("#m-copy").attr('data-clipboard-target',"#minus-gross");
			console.log('2');
		} 
	});
	var clipboard = new Clipboard('.copyButton');
	clipboard.on('success', function(e) {
		console.log('one');
		console.info('Action:', e.action);
		console.info('Text:', e.text);
		console.info('Trigger:', e.trigger);
		e.clearSelection();
	});
	clipboard.on('error', function(e) {
		console.error('Action:', e.action);
		console.error('Trigger:', e.trigger);
	});
		
	$('#add-VAT-select option').each(function() {
    if($("one").is(':selected')) {
		console.log('one');
	}});
		
});
