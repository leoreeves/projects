function newItem() {
	const item = document.getElementById('input').value;
	const ul = document.getElementById("list");
	const li = document.createElement('li');
	li.appendChild(document.createTextNode("- " + item));
	ul.appendChild(li);
	document.getElementById('input').value = "";
	li.onclick = removeItem;
}
// create to-do on enter
document.body.onkeyup = function(e) {
	if (e.keyCode == 13 && (document.getElementById('input').value !== "")) // if input blank don't create to-do item
		newItem();
	};
// remove items
function removeItem(e) {
	e.target.parentElement.removeChild(e.target);
}
// focus input on page load
window.onload = function() {
	const input = document.getElementById("input").focus();
};