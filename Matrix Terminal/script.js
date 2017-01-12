typeWriter("#code","true", 50);

const code = document.getElementById('code');
const text = ['Wake up, Neo.', 'The Matrix has you.', 'Follow the white rabbit.', 'Knock, knock, Neo.', ''];
let counter = 0;

setInterval(changeText, 1000);

function changeText() {
	if (counter >= text.length) {
		counter = 4;
		code.innerHTML = '';
	}
	code.innerHTML = text[counter];
	typeWriter("#code","true", 50);
	code.innerHTML = '';
	counter++;
}