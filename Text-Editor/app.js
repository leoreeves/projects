document.getElementById('heading').innerHTML = localStorage['title'] || 'Just Write'; // default text
document.getElementById('content').innerHTML = localStorage['text'] || 'This text is automatically saved every second'; // default text

setInterval(function() { // function that is saving the innerHTML of the div
	localStorage['title'] = document.getElementById('heading').innerHTML; // heading div
	localStorage['text'] = document.getElementById('content').innerHTML; // content div
}, 1000);

function clearFunction() {
	document.getElementById('heading').innerHTML = 'Just Write';
	document.getElementById('content').innerHTML = 'This text is automatically saved every second';
}

function download(){
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = document.getElementById('heading').innerHTML + ".html";
    a.href = "data:text/html," + '<body style="font-family:Helvetica,sans-serif;color:#333;font-weight:100;max-width:50em;margin:0 auto;">' + '<div style="font-size: 48px; padding-top: 30px;">' + document.getElementById('heading').innerHTML + '</div>' 
	+ '<div style="padding-top: 10px;font-size: 24px;">' + document.getElementById("content").innerHTML + '</div>' + '</body>';
    a.click();
}