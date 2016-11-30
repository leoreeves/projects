// Prioritise last color selection
// Change line thickness slider
// Eraser
// Remove overflow
// Offset cursor position
// Add undo button
// Draw on click


// set canvas id to variable
var canvas = document.getElementById('draw');

// get canvas 2D context and set it to the correct sizeToContent
var ctx = canvas.getContext('2d');
resize();

// resize canvas when window is resized
function resize() {
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}

// add event listeners to specify when functions should be triggered
window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// last known position
var pos = {x: 0, y: 0};

// new position from mouse events
function setPosition(e){
	pos.x = e.clientX;
	pos.y = e.clientY;
}

function draw(e) {
	if (e.buttons !== 1) return; // if mouse is pressed
	
	var color = document.getElementById('hex').value || document.getElementById('color-picker').value;
	
	ctx.beginPath(); // begin the drawing path
	
	ctx.lineWidth = document.getElementById("myNumber").value; // width of lineHeight
	ctx.lineCap = 'round'; // round end cap
	ctx.strokeStyle = color; // color of line
	
	ctx.moveTo(pos.x, pos.y); // from position
	setPosition(e);
	ctx.lineTo(pos.x, pos.y); // to position
	
	ctx.stroke(); // draw it
}

// clear all
function clearAll() {
	var canvas=document.getElementById("draw");
    var context=canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
} 

// download as .png
var button = document.getElementById('btn-download');
button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});
