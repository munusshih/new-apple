function drawApple(name, note) {
	number = getCharCodes(name);

	let spacing = 50;
	big = 50;
	let sum_distance = 100;
	for (let i = 0; i < number.length; i++) {
		apple(name, sum_distance, height / 2 - 50 + 120 * note, sizing(number[i]), i);
		sum_distance += sizing(number[i] + number[i + 1]) + spacing;
	}
}

function drawMApple(name, note) {
	number = getCharCodes(name);

	let spacing = 70;
	big = 40;
	let sum_distance = 115;
	for (let i = 0; i < number.length; i++) {
		mapple(name, sum_distance, height / 2 - 50 + 120 * note, sizing(number[i]), i, number);
		sum_distance += spacing;
	}
}

function drawEApple(name, note) {
	number = getCharCodes(name);

	let spacing = 100;
	big = 40;
	let sum_distance = 40;
	for (let i = 0; i < number.length; i++) {
		eapple(name, sum_distance, height / 2 - 50 + 120 * note, sizing(number[i]), i, number);
		sum_distance += spacing;
	}
}