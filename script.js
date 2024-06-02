var words = [];

function clickSave() {
	var word = document.getElementById("new_word").value;
	var wordsdisplay = "Words: ";
	words.push(word);
	for (var i = 0; i < words.length; ++i) {
		wordsdisplay += words[i] + " ";
	}
	document.getElementById("Words").textContent = wordsdisplay;
}

function clickSearch() {
	var flag = 0;
	var word = document.getElementById("search_word").value;
	for (var i = 0; i < words.length; ++i) {
		if (words[i].toLowerCase() == word.toLowerCase()) {
			flag = 1;
		}
	}
	if (flag == 1) {
		document.getElementById("Answer").textContent = "Found in dictionary";
	} else {
		document.getElementById("Answer").textContent = "Not found in dictionary";
	}
}