let address = "new apple project\n204 W 109th St #5B,\nNew York, NY\n10025"
let quote = ["Don't swear off all the fruits\njust because you\nate one bad apple.\n- Tiffanie DeBartolo",
	"No one can afford to \nlive in New York.\nYet, eight million people do.\n- Fran Lebowitz",
	"People go to LA to \n\“find themselves\”, they come to New York\n to become someone new.\n- Lindsey Kelk"
]
let leftter = []
let topper = []

function putAddress() {

	if (l_two == l_one) {
		l_two = random(leftter)
	}
	if (t_two == t_one) {
		t_two = random(topper)
	}

	push()
	translate(0, 10)
	fill(255)
	if (l_one == width - 10) {
		textAlign(RIGHT);
	} else {
		textAlign(LEFT);
	}
	textFont(Futura);
	text(address, l_one, t_one)
	pop()

	push()
	translate(0, 10)
	fill(255)
	if (l_two == width - 10) {
		textAlign(RIGHT);
	} else {
		textAlign(LEFT);
	}
	textFont(Futura);
	text(quotet, l_two, t_two)
	pop()
}