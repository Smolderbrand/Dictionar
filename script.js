var words = [];

function clickSave() {
	var word = document.getElementById("NewWord").value;
	var wordsdisplay = "Words: ";
	words.push(word);
	for (var i = 0; i < words.length; ++i)
		wordsdisplay += words[i] + " ";
	document.getElementById("Words").textContent = wordsdisplay;
}

function clickSearch() {
	var fl = 0;
	var word = document.getElementById("SearchWord").value;
	for (var i = 0; i < words.length; ++i)
		if (words[i].toLowerCase() == word.toLowerCase())
			fl = 1;
	if (fl == 1) {
		document.getElementById("Answer").textContent = "Found in dictionary";
	} else {
		document.getElementById("Answer").textContent = "Not found in dictionary";
	}
}