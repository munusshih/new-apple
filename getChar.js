let code

function getCharCodes(s) {
	let charCodeArr = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] == " ") {
			code = 0;
		} else {
			code = s.charCodeAt(i) - 96;
		}
		charCodeArr.push(code);
	}

	return charCodeArr;
}

function changeMD() {
	button = sel.value();
}

function changeBG() {
	if (bgg.value() == 'green') {
		bgRight = "#009944"
	} else if (bgg.value() == 'blue') {
		bgRight = '#00A0E9'
	} else if (bgg.value() == 'purple') {
		bgRight = '#920783'
	} else if (bgg.value() == 'yellow') {
		bgRight = '#F39800'
	} else if (bgg.value() == 'random') {
		bgRight = random(bgColor)
	}
}