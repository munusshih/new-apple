let name, big, bgRight;
let inputFirst, inputLast, sel;
let innerCanvas;
let a, b;
let button = 1;
let number = [];
let bgColor = ['#009944', '#00A0E9', '#920783', '#F39800']
let first, last;
let l_one, t_one, l_two, t_two;
let body

function preload() {
	Futura = loadFont('Futura-Med.otf');
}

function setup() {
	noCursor()
	pixelDensity(4.0);
	ellipseMode(RADIUS);
	ctx = canvas.drawingContext;
	noiseTexture = loadImage("noise.jpg")

	// input
	inputFirst = createInput("type")
	inputFirst.position(50, 50)
	inputFirst.size(130);

	ggg = createElement('h3', 'first name:');
	ggg.style("font-size", "12px")
	ggg.style("color", "#fff")
	ggg.style("font-family", "Helvetica, Arial, sans-serif")
	ggg.position(50, 20);

	inputLast = createInput("yours")
	inputLast.position(210, 50)
	inputLast.size(130);

	gb = createElement('h3', 'last name:');
	gb.style("font-size", "12px")
	gb.style("color", "#fff")
	gb.style("font-family", "Helvetica, Arial, sans-serif")
	gb.position(210, 20);

	// 	select
	sel = createSelect();
	sel.position(370, 50);
	sel.size(50);
	sel.option('1');
	sel.option('2');
	sel.option('3');
	sel.selected('1');
	sel.changed(changeMD);

	ga = createElement('h3', 'mode:');
	ga.style("font-size", "12px")
	ga.style("color", "#fff")
	ga.style("font-family", "Helvetica, Arial, sans-serif")
	ga.position(370, 20);

	// 	select
	bgg = createSelect();
	bgg.position(440, 50);
	bgg.size(80);
	bgg.option('blue');
	bgg.option('yellow');
	bgg.option('green');
	bgg.option('purple');
	bgg.option('random');
	bgg.selected('random');
	bgg.changed(changeBG);

	greeting = createElement('h3', 'bgColor:');
	greeting.style("font-size", "12px")
	greeting.style("color", "#fff")
	greeting.style("font-family", "Helvetica, Arial, sans-serif")
	greeting.position(440, 20);

	// 	instruction	
	ggggd = createElement('p', 'This is a postcard generator designed by Munus,\
		to welcome you to the BIG APPLE New York.<br>' +
		'Please type in your name above, And choose a mode that you like!\
<br>【←↑↓→】  can adjust the apples\' position, 【scroller / (-/+)】 can resize the apples,【enter】 can save the postcard!');
	ggggd.style("font-size", "12px")
	ggggd.style("color", "#fff")
	ggggd.style("font-family", "Helvetica, Arial, sans-serif")
	ggggd.position(50, 80);

	bbb = createButton('download');
	bbb.position(550, 50);
	bbb.mousePressed(download);

	randomizing()
	let cnv = createCanvas(600, 350);
	cnv.parent('mycanvas');

	frameRate(1);

	quotet = random(quote);
	leftter = [10, width - 10]
	topper = [10, height - 70]

	l_one = random(leftter)
	t_one = random(topper)
	l_two = random(leftter)
	t_two = random(topper)

	body = select('body');
}


function draw() {
	// 	input
	// background
	first = inputFirst.value().toLowerCase();
	last = inputLast.value().toLowerCase();
	innerDraw();
	body.style('background-color', bgRight);
}

function innerDraw() {
	background(bgRight);

	if (button == 1) {
		push()
		scale(1 + pos);
		translate(40, 20);
		translate(move_l, move_t);
		buttonOne();
		pop()
	}
	if (button == 2) {
		push()
		scale(1 + pos);
		translate(move_l, move_t);
		translate(265 - 50 * first.length, -20);
		drawMApple(first, 0);
		pop()
	}
	if (button == 3) {
		push()
		scale(1 + pos);
		translate(move_l, move_t);
		scale(5 / first.length)
		translate(10, -20);
		drawEApple(first, 0);
		pop()
	}

	putAddress();

	push()
	blendMode(LIGHTEST)
	image(noiseTexture, a, b, width, height)
	pop()
}