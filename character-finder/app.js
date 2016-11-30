function charFind(){
	var x = document.getElementById('change').value;
	var y = document.getElementById('num').value - 1;
	document.getElementById('num').setAttribute("max", x.length);
	document.getElementById('count').innerHTML = '<b>' + x.length + ' characters' + '</b>';
	if(document.getElementById('num').value) {
		document.getElementById('char').innerHTML = x[y];
	}
}

// clipboard button
var clipboard = new Clipboard('.copyBtn');

document.getElementsByClassName('.copyBtn').addEventListener("click", show);

function show() {
	document.getElementById('success').style.display = "block";
}

