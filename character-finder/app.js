const userInput = document.getElementById('user-input');
const characterNumber = document.getElementById('character-number');
const countOfCharacters = document.getElementById('count-of-characters');
const character = document.getElementById('character');
const success = document.getElementById('success');
const clipboard = new Clipboard('.copy-button');

function findCharacter() {
	var x = userInput.value;
	var y = characterNumber.value - 1;
	characterNumber.setAttribute('max', x.length);
	countOfCharacters.innerHTML = `<b> ${x.length} characters </b>`;
	if (y + 1 > x.length || y <= -1) {
		character.innerHTML = '&nbsp;';
	} else {
		character.innerHTML = x[y];
	}
}

// clipboard success
function confirmTextCopied() {
	success.style.visibility = '';
	success.classList.add('fadeOut');
	setTimeout(function() {
		success.style.visibility = 'hidden';
		success.classList.remove('fadeOut');
	}, 2000);
}

// switch to password
function secure() {
	if (userInput.type == 'password') {
		userInput.type = 'text';
	} else if (userInput.type == 'text') {
		userInput.type = 'password';
	}
}
