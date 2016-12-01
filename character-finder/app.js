function charFind(){
	var x = document.getElementById('change').value;
	var y = document.getElementById('num').value - 1;
	document.getElementById('num').setAttribute("max", x.length);
	document.getElementById('count').innerHTML = '<b>' + x.length + ' characters' + '</b>';
	if(y+1 > x.length || y <= -1) {
		document.getElementById('char').innerHTML = '&nbsp;';
		} else {
		document.getElementById('char').innerHTML = x[y];
	}
}

// clipboard button
var clipboard = new Clipboard('.copyBtn');

// clipboard success
function show(){
	document.getElementById('success').style.visibility = "";
	document.getElementById('success').classList.add("fadeOut");
	setTimeout(function(){
		document.getElementById('success').style.visibility = "hidden";
		document.getElementById('success').classList.remove("fadeOut");
	},2000);
}

// switch to password
function secure(){
	if (document.getElementById('change').type == 'password') {
		document.getElementById('change').type = 'text';
	} else if (document.getElementById('change').type == 'text') {
		document.getElementById('change').type = 'password';
	}
}
