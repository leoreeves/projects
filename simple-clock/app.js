// Analog Clock
function moveHands() {
  const today = new Date();

  // 30 degrees hour
  const h = 30 * ((today.getHours() % 12) + (today.getMinutes() / 60));
  // 6 degrees every minute
  const m = 6 * today.getMinutes();
  // 6 degrees every second
  const s = 6 * today.getSeconds();

  // setting the rotate CSS attribute to those degree values
  document.getElementById('seconds').style.cssText = `-webkit-transform:rotate(${s}deg);`;
  document.getElementById('minutes').style.cssText = `-webkit-transform:rotate(${m}deg);`;
  document.getElementById('hours').style.cssText = `-webkit-transform:rotate(${h}deg);`;

  // calls the function every second
  setTimeout(moveHands, 10);
}

// make sure the function starts on load of webpage
window.onload = moveHands;

// Digital Clock
function setClock() {
  document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
}

window.setInterval(setClock, 10);

// Clock elements
const digital = document.getElementById('digital');
const analog = document.getElementById('analog');

function changeClock() {
  if (digital.style.display === 'block') {
    digital.style.display = 'none';
    analog.style.display = 'block';
  } else {
    digital.style.display = 'block';
    analog.style.display = 'none';
  }
}
