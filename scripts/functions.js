//add

function add(a, b) {
	return parseFloat(a) + parseFloat(b);
	}

//substract

function subtract (a, b) {
	return parseFloat(a) - parseFloat(b);
	}

//tax

function tax (subtotal, tax) {
	return parseFloat(subtotal) * parseFloat(tax/100);
}

//StringLenght

function stringLength (string) {
		if (string.length<5) {
			return 'short string';
		} else if (string.length >=5 && string.length<=10) {
			return 'medium string';
		} else if (string.length >10) {
			return 'long string';
		}
}

//startsWith

function startsWith (string) {
	if (string [0] .toLowerCase() ==='a') {
		return 'starts with A'
	}
	if (string [0] .toLowerCase() ==='b') {
		return 'starts with B'
	}
	if (string [0] .toLowerCase() ==='c') {
		return 'starts with C'
	}
	if (string [0] .toLowerCase() ==='d') {
		return 'starts with D'
	}
	if (string [0] .toLowerCase() ==='e') {
		return 'starts with E'
	}
	else {
		return 'starts with something else'
	}
}

//stringRepeat

function stringRepeat(s, n) {
	n = parseFloat(n);
	return Array((n)+1).join(s);
}

//nSum

function nSum (n) {
	var total = 0;
	n = parseFloat(n);
	for (var i = 1; i < n+1; i++) {
		total = total + i;
	}
	return total;
}

function join 















