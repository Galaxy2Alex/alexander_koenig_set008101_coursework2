function encypherRotButton() {
	var input = document.getElementById("decypheredRotText").value;
	var output = "";
	
	for (var i = 0; i < input.length; i++) {
		var casing;
		var letters = /[a-z]/i;
		
		if (letters.test(input.charAt(i))) {
			if (input.charAt(i) == input.charAt(i).toUpperCase()) {
				casing = false;
			} else {
				casing = true;
			}
			
			
			var x = getNumberFromLetter(input.charAt(i).toUpperCase()) + (document.getElementById("rotSelect").selectedIndex + 1);
			
			if (x > 26) {
				x = x - 26;
			}
			
			if (!casing) {
				output = output + getLetterFromNumber(x).toLowerCase(); 
			} else {
				output = output + getLetterFromNumber(x)
			}
		} else {
			output = output + input.charAt(i);
		}
	}
	document.getElementById("encypheredRotText").value = output;
}

function decypherRotButton() {
	var input = document.getElementById("encypheredRotText").value;
	var output = "";
	
	for (var i = 0; i < input.length; i++) {
		var casing;
		var letters = /[a-z]/i;
		
		if (letters.test(input.charAt(i))) {
			if (input.charAt(i) == input.charAt(i).toUpperCase()) {
				casing = true;
			} else {
				casing = false;
			}
			
			var x = getNumberFromLetter(input.charAt(i).toUpperCase()) - (document.getElementById("rotSelect").selectedIndex + 1);
			
			if (x < 1) {
				x = x + 26;
			}
			
			if (!casing) {
				output = output + getLetterFromNumber(x).toLowerCase(); 
			} else {
				output = output + getLetterFromNumber(x)
			}
		} else {
		output = output + input.charAt(i);
		}

	}
	document.getElementById("decypheredRotText").value = output;
}

function encypherKeyboardButton() {
	var input = document.getElementById("decypheredKeyboardText").value;
	var output = "";
	
	for (var i = 0; i < input.length; i++) {
		var casing;
		var letters = /[a-z]/i;
		var x = input.charAt(i);
		
		if (letters.test(input.charAt(i))) {
			if (input.charAt(i) == input.charAt(i).toUpperCase()) {
				casing = true;
			} else {
				casing = false;
			}
		}
		
		var row;
		if (/[QWERTYUIOP]/.test(input.charAt(i).toUpperCase())) {
			row = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
		} else if (/[ASDFGHJKL]/.test(input.charAt(i).toUpperCase())) {
			row = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
		} else if (/[ZXCVBNM]/.test(input.charAt(i).toUpperCase())) {
			row = ["Z", "X", "C", "V", "B", "N", "M"];
		} else {
			row = null;
		}
		
		if (row != null) {
			if (document.getElementById("keyboardSelect").selectedIndex == 0) {
				var grr = (row.indexOf(input.charAt(i).toUpperCase())) - 1;
				if (grr == -1) {
					x = row[row.length - 1];
				} else {
					x = row[(row.indexOf(input.charAt(i).toUpperCase())) - 1];
				}
			} else {
				var grr = (row.indexOf(input.charAt(i).toUpperCase())) + 1;
				if (grr == row.length) {
					x = row[0];
				} else {
					x = row[(row.indexOf(input.charAt(i).toUpperCase())) + 1];
				}
			}
			var letters = /[a-z]/i;
			if (!casing && typeof x == 'string') {
				output = output + x.toLowerCase(); 
			} else {
				output = output + x;
			}
		} else {
			output = output + x;
		}
	}
	
	document.getElementById("encypheredKeyboardText").value = output;
}

function decypherKeyboardButton() {
	var input = document.getElementById("encypheredKeyboardText").value;
	var output = "";
	
		for (var i = 0; i < input.length; i++) {
		var casing;
		var letters = /[a-z]/i;
		var x = input.charAt(i);
		
		if (letters.test(input.charAt(i))) {
			if (input.charAt(i) == input.charAt(i).toUpperCase()) {
				casing = true;
			} else {
				casing = false;
			}
		}
		
		var row;
		if (/[QWERTYUIOP]/.test(input.charAt(i).toUpperCase())) {
			row = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
		} else if (/[ASDFGHJKL]/.test(input.charAt(i).toUpperCase())) {
			row = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
		} else if (/[ZXCVBNM]/.test(input.charAt(i).toUpperCase())) {
			row = ["Z", "X", "C", "V", "B", "N", "M"];
		} else {
			row = null;
		}
		
		if (row != null) {
			if (document.getElementById("keyboardSelect").selectedIndex == 1) {
				var grr = (row.indexOf(input.charAt(i).toUpperCase())) - 1;
				if (grr == -1) {
					x = row[row.length - 1];
				} else {
					x = row[(row.indexOf(input.charAt(i).toUpperCase())) - 1];
				}
			} else {
				var grr = (row.indexOf(input.charAt(i).toUpperCase())) + 1;
				if (grr == row.length) {
					x = row[0];
				} else {
					x = row[(row.indexOf(input.charAt(i).toUpperCase())) + 1];
				}
			}
			var letters = /[a-z]/i;
			if (!casing && typeof x == 'string') {
				output = output + x.toLowerCase(); 
			} else {
				output = output + x;
			}
		} else {
			output = output + x;
		}
	}

	document.getElementById("decypheredKeyboardText").value = output;
}	

function encypherA1Z26Button () {
	var input = document.getElementById("decypheredA1Z26Text").value;
	var output = "";
	var letters = /[a-z]/i;
	
	for (var i = 0; i < input.length; i++) {
		if (letters.test(input.charAt(i))) {
			output = output + getNumberFromLetter(input.charAt(i).toUpperCase()) + "-";
		} else {
			output = output.slice(0, -1);
			output = output + " ";
		}
	}
	
	if (output[output.length - 1] == "-") {
		output = output.slice(0, -1);
	}
	
	document.getElementById("encypheredA1Z26Text").value = output;
}

function decypherA1Z26Button () {
	var input = document.getElementById("encypheredA1Z26Text").value;
	var spacing = input.split(" ");
	var output = "";
	
		for (var i = 0; i < spacing.length; i++) {
			var word = spacing[i];
			var delim = /[^0-9]/i;
			word = word.split(delim);
			for (var j = 0; j < word.length; j++) {
				output = output + getLetterFromNumber(word[j]);
			}		
			output = output + " ";
		}
		
	document.getElementById("decypheredA1Z26Text").value = output;
}

function encypherQwertyButton() {
	var input = document.getElementById("decypheredQwertyText").value;
	var output = "";
	var map = [["A", "Q"], ["B", "W"], ["C", "E"], ["D", "R"], ["E", "T"], ["F", "Y"], ["G", "U"], ["H", "I"], ["I", "O"], ["J", "P"], ["K", "A"], ["L", "S"],  ["M", "D"],  ["N", "F"],  ["O", "G"],  ["P", "H"],  ["Q", "J"],  ["R", "K"],  ["S", "L"],  ["T", "Z"],  ["U", "X"],  ["V", "C"],  ["W", "V"],  ["X", "B"],  ["Y", "N"],  ["Z", "M"]];
	
	for (var i = 0; i < input.length; i++) {
		var casing;
		var letters = /[a-z]/i;
		
		if (letters.test(input.charAt(i))) {
			if (input.charAt(i) == input.charAt(i).toUpperCase()) {
				casing = true;
			} else {
				casing = false;
			}
			var mapResult;
			for (var j = 0; j < map.length; j++) {
				if (map[j][0] == input.charAt(i).toUpperCase()) {
					
					mapResult = map[j];
					break;
				}
			}
			if (!casing) {
				output = output + mapResult[1].toLowerCase(); 
			} else {
				output = output + mapResult[1];
			}
		} else {
		output = output + input.charAt(i);
		}
	}
	
	document.getElementById("encypheredQwertyText").value = output;
}

function decypherQwertyButton() {
	var input = document.getElementById("encypheredQwertyText").value;
	var output = "";
	var map = [["A", "Q"], ["B", "W"], ["C", "E"], ["D", "R"], ["E", "T"], ["F", "Y"], ["G", "U"], ["H", "I"], ["I", "O"], ["J", "P"], ["K", "A"], ["L", "S"],  ["M", "D"],  ["N", "F"],  ["O", "G"],  ["P", "H"],  ["Q", "J"],  ["R", "K"],  ["S", "L"],  ["T", "Z"],  ["U", "X"],  ["V", "C"],  ["W", "V"],  ["X", "B"],  ["Y", "N"],  ["Z", "M"]];
	
	for (var i = 0; i < input.length; i++) {
		var casing;
		var letters = /[a-z]/i;
		
		if (letters.test(input.charAt(i))) {
			if (input.charAt(i) == input.charAt(i).toUpperCase()) {
				casing = true;
			} else {
				casing = false;
			}
			var mapResult;
			for (var j = 0; j < map.length; j++) {
				if (map[j][1] == input.charAt(i).toUpperCase()) {
					
					mapResult = map[j];
					break;
				}
			}
			if (!casing) {
				output = output + mapResult[0].toLowerCase(); 
			} else {
				output = output + mapResult[0];
			}
		} else {
		output = output + input.charAt(i);
		}
	}
	document.getElementById("decypheredQwertyText").value = output;
}

function getNumberFromLetter (letter) {
	if (letter == "A") {
		return 1;
	} else if (letter == "B") {
		return 2;
	} else if (letter == "C") {
		return 3;
	} else if (letter == "D") {
		return 4;
	} else if (letter == "E") {
		return 5;
	} else if (letter == "F") {
		return 6;
	} else if (letter == "G") {
		return 7;
	} else if (letter == "H") {
		return 8;
	} else if (letter == "I") {
		return 9;
	} else if (letter == "J") {
		return 10;
	} else if (letter == "K") {
		return 11;
	} else if (letter == "L") {
		return 12;
	} else if (letter == "M") {
		return 13;
	} else if (letter == "N") {
		return 14;
	} else if (letter == "O") {
		return 15;
	} else if (letter == "P") {
		return 16;
	} else if (letter == "Q") {
		return 17;
	} else if (letter == "R") {
		return 18;
	} else if (letter == "S") {
		return 19;
	} else if (letter == "T") {
		return 20;
	} else if (letter == "U") {
		return 21;
	} else if (letter == "V") {
		return 22;
	} else if (letter == "W") {
		return 23;
	} else if (letter == "X") {
		return 24;
	} else if (letter == "Y") {
		return 25;
	} else if (letter == "Z") {
		return 26;
	} else {
		return letter;
	}
}

function getLetterFromNumber (number) {
	if (number == 1) {
		return "A";
	} else if (number == 2) {
		return "B";
	} else if (number == 3) {
		return "C";
	} else if (number == 4) {
		return "D";
	} else if (number == 5) {
		return "E";
	} else if (number == 6) {
		return "F";
	} else if (number == 7) {
		return "G";
	} else if (number == 8) {
		return "H";
	} else if (number == 9) {
		return "I";
	} else if (number == 10) {
		return "J";
	} else if (number == 11) {
		return "K";
	} else if (number == 12) {
		return "L";
	} else if (number == 13) {
		return "M";
	} else if (number == 14) {
		return "N";
	} else if (number == 15) {
		return "O";
	} else if (number == 16) {
		return "P";
	} else if (number == 17) {
		return "Q";
	} else if (number == 18) {
		return "R";
	} else if (number == 19) {
		return "S";
	} else if (number == 20) {
		return "T";
	} else if (number == 21) {
		return "U";
	} else if (number == 22) {
		return "V";
	} else if (number == 23) {
		return "W";
	} else if (number == 24) {
		return "X";
	} else if (number == 25) {
		return "Y";
	} else if (number == 26) {
		return "Z";
	} else {
		return number;
	}
}

function about() {
	document.getElementById("overlay").style.display = "flex";
	document.getElementById("overlay-text").innerHTML = 'This is a website for encyphering and decyphering messages in four different cyphers. The arrows next to the buttons indicate which way the text will go. For the Rot-N and the Keyboard Cypher, you can choose what way the cypher should work. Keep in mind that, the other way around, it will be reverse.';
}

function contactUs() {
	document.getElementById("overlay").style.display = "flex";
	document.getElementById("overlay-text").innerHTML = 'Alexander Koenig<br />Edinburgh Napier University, Merchiston Campus<br /><a href="mailto:40322645@live.napier.ac.uk">Send Email</a>';
}

function overlayOff() {
	document.getElementById("overlay").style.display = "none";
}