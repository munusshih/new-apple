function apple(name, x, y, radius, i) {
	// apple part	
	push()
	noStroke();
	fill(random(230, 250), random(0, 20), random(0, 20));
	ellipse(x, y, radius);
	butt = random(20)
	ellipse(x + butt, y, radius);
	pop()

	let tx = x + butt / 2
	let ty = y - radius + 5
	let endr = random(10, 25);

	let mac = int(random(1.5));
	// leaves
	if (mac == 1) {
		push()
		fill(44, random(100, 125), 58);
		translate(tx, ty - random(20, 23))
		scale(random(2, 3))
		noStroke()
		beginShape()
		curveVertex(0, 3)
		curveVertex(0 + random(1), 3 + random(1))
		curveVertex(5 + random(1), 0 + random(1))
		curveVertex(13 - random(1), 2 - random(1))
		curveVertex(13, 2)
		curveVertex(5, 5)
		endShape(CLOSE)
		pop()
	}

	// yellow part
	push()
	noStroke();
	fill(random(250, 254), random(230, 250), random(190, 210));
	ellipse(tx, ty + 1, random(4, 6), random(1, 3));
	pop()

	// 	terries
	beginShape();
	noFill();
	strokeWeight(2.5);
	curveVertex(tx, ty);
	curveVertex(tx, ty);
	curveVertex(tx, ty - endr);
	curveVertex(tx, ty - endr);
	endShape();

	// 	name
	fill(255);
	textSize(10);
	textAlign(CENTER);
	textFont('Futura');
	text(name[i], tx, y + 5);
}

function mapple(name, x, y, radius, i, number) {
	push()
	translate(0, (height / 2 - number[i] * 10) / 2);

	radius = 30
	// apple part	
	push()
	noStroke();
	translate(0, -15);
	for (let j = 0; j < number[i]; j++) {
		fill(random(230, 250), random(0, 20), random(0, 20));
		ellipse(x, y + j * 10, 30, 15);
	}
	pop()

	let tx = x
	let ty = y - radius + 5
	let endr = random(10, 25);

	let mac = int(random(1.5));
	// leaves
	if (mac == 1) {
		push()
		fill(random(35, 54), random(100, 125), random(58, 80));
		translate(tx, ty - random(20, 23))
		scale(random(2, 3))
		noStroke()
		beginShape()
		curveVertex(0, 3)
		curveVertex(0 + random(1), 3 + random(2))
		curveVertex(5 + random(1), 0 + random(2))
		curveVertex(10 - random(1), 2 - random(1))
		curveVertex(10, 2)
		curveVertex(5, 5)
		endShape(CLOSE)
		pop()
	}

	// yellow part
	push()
	noStroke();
	fill(random(250, 254), random(230, 250), random(190, 210));
	ellipse(tx, ty + 1, random(4, 6), random(1, 3));
	pop()

	// 	terries
	beginShape();
	noFill();
	strokeWeight(2.5);
	curveVertex(tx, ty);
	curveVertex(tx, ty);
	curveVertex(tx, ty - endr);
	curveVertex(tx, ty - endr);
	endShape();

	// 	name
	fill(255);
	textSize(10);
	textAlign(CENTER);
	textFont('Futura');
	text(name[i], tx, y - 7);
	pop()
}

function eapple(name, x, y, radius, i, number) {
	push()
	translate(0, random(0,200));
	radius = 30
	// apple part	
	push()
	translate(0, 17);
	noStroke();
	fill(random(230, 250), random(0, 20), random(0, 20));
	ellipse(x, y, 50);

	for (let j = 0; j < number[i]-1; j++) {
		let rx = random(-32,32);
		let ry = random(-30,30);
		fill(bgRight);
		ellipse(x+rx-20, y+ry, 10);
	}
	pop()

	let tx = x
	let ty = y - radius + 5
	let endr = random(10, 25);

	let mac = int(random(1.5));
	// leaves
	if (mac == 1) {
		push()
		fill(random(35, 54), random(100, 125), random(58, 80));
		translate(tx, ty - random(20, 23))
		scale(random(2, 3))
		noStroke()
		beginShape()
		curveVertex(0, 3)
		curveVertex(0 + random(1), 3 + random(2))
		curveVertex(5 + random(1), 0 + random(2))
		curveVertex(10 - random(1), 2 - random(1))
		curveVertex(10, 2)
		curveVertex(5, 5)
		endShape(CLOSE)
		pop()
	}

	// yellow part
	push()
	noStroke();
	fill(random(250, 254), random(230, 250), random(190, 210));
	ellipse(tx, ty + 1, random(4, 6), random(1, 3));
	pop()

	// 	terries
	beginShape();
	noFill();
	strokeWeight(2.5);
	curveVertex(tx, ty);
	curveVertex(tx, ty);
	curveVertex(tx, ty - endr);
	curveVertex(tx, ty - endr);
	endShape();

	// 	name
	fill(255);
	textSize(10);
	textAlign(CENTER);
	textFont('Futura');
	text(name[i], tx, y - 7);
	pop()
}