// Create canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
let bgReady = false;
const bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "img/background.png";

// Hero image
let heroReady = false;
const heroImage = new Image();
heroImage.onload = function() {
	heroReady = true;
};
heroImage.src = "img/hero.png";

// Monster image
let monsterReady = false;
const monsterImage = new Image();
monsterImage.onload = function() {
	monsterReady = true;
};
monsterImage.src = "img/monster.png";

// Game objects
const hero = {
	// pixels per second
	speed: 256,
	x: 0,
	y: 0
};

const monster = {
	x: 0,
	y: 0
};

let monstersCaught = 0;

// Handle keyboard controls
const keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster.
const reset = function() {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	
	// Put the monster somewhere on the screen randomly.
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
const update = function (modifier) {
	// Player holding up
	if (38 in keysDown) { 
		hero.y -= hero.speed * modifier;		
	}
	// Player holding down
	if (40 in keysDown) { 
		hero.y += hero.speed * modifier;
	}
	// Player holiding left
	if (37 in keysDown) {
		hero.x -= hero.speed * modifier;
	}
	// Player holding right
	if (39 in keysDown) { 
		hero.x += hero.speed * modifier;
	}
	
	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
		) {
			++monstersCaught;
			reset();
		}
	};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}
	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}
	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
	
	// Collision detection
	// http://stackoverflow.com/a/21482699/2588066

	if (hero.x + heroImage.width > canvas.width) {
		hero.x = canvas.width - heroImage.width;
	}
	if (hero.y + heroImage.height > canvas.height) {
    	hero.y = canvas.height - heroImage.height;
	}
	if (hero.x < 0) {
    	hero.x = 0;
	}
	if (hero.y < 0) {
		hero.y = 0;
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.texAling = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Monsters caught: " + monstersCaught, 32, 32);
};

// The main game loop

	const main = function () {
	const now = Date.now();
	const delta = now - then;
	
	update (delta / 1000);
	render();
	then = now;
	
	// Request to do this again ASAP.
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame.
const w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Start the game
let then = Date.now();
reset();
main();