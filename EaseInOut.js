function easeOutCubic(x) {
	return sqrt(1 - pow(x - 1, 2));
}

function sizing(a) {
	a = map(a, 0, 26, 0, 1);
	if(button==1){a = easeOutCubic(a) * big;}
	return a;
}