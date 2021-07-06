//concatenation
var subject = concat("");

function concat(str) {
	if (str == "") {
		return "";
	}
	if (str == null) {
		return console.log(subject);
	}
	
	function add() {
		subject += str;
	}
	
	add(str);
}

concat("Hello");
concat("my");
concat(true);
concat("name");
concat("is");
concat(32);
concat();

