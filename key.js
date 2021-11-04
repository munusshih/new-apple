let move_l = 0;
let move_t = 0;
let pos = 0;

function keyPressed() {
	if (key == '1') {
		move_l = 0;
		move_t = 0;
		button = 1;
		randomizing()
	} else if (key == '2') {
		move_l = 0;
		move_t = 0;
		button = 2;
		randomizing()
	} else if (key == '3') {
		move_l = 0;
		move_t = 0;
		button = 3;
		randomizing()
	}

	if (keyCode == LEFT_ARROW) {
		move_l -= 15;
	} else if (keyCode == RIGHT_ARROW) {
		move_l += 15;
	} else if (keyCode == UP_ARROW) {
		move_t -= 15;
	} else if (keyCode == DOWN_ARROW) {
		move_t += 15;
	}
	
	if(keyCode == ENTER){
		let fileName = first + '_' + last
	save(fileName+".jpg"); // give file name
	}
	
	if(key == "="){
	pos += 0.1;
	}else if(key == "-"){
	pos -= 0.1}
}

function download(){
		let fileName = first + '_' + last
	save(fileName+".jpg"); // give file name
}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  pos += 0.01*(-event.delta);
  //uncomment to block page scrolling
  //return false;
}

function randomizing(){
	bgRight = random(bgColor)
	a = random(200);
	b = random(200);
}

function buttonOne() {
	scale(3.5 / first.length);

	push()
	translate(350 / first.length, 0);
	drawApple(first, 0);
	pop()

	push()
	translate(-60, 0);
	translate(350 / last.length, 0);
	drawApple(last, 1);
	pop()
}