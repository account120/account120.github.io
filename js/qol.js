const wds = document.getElementsByTagName("B");
const text = document.getElementById("defpopup");
const ydistance = 30;
let game;
let ans;
let qnum;
let attempts = 0;
const q = [
	["çocuk", "child.jpg", "What is in this picture?", "Consult a Turkish dictionary."], 
	["türkiye", "turkiye1.jpg", "What is the name of the country this flag comes from?", "Consult a Turkish dictionary/"], 
	["türkçe", "turkiye1.jpg", "What is the language turkiye speaks?", "Check the consonant harmony page"],
	["an apple from the man", "apple1.jpg", "Translate this to English:\nAdamdan bir elma", "Check the noun cases and word order pages"],
	["Adam bir elma yer", "apple2.jpg", "Translate this to Turkish:\nThe man eats an apple", "Check the word order and conjugation pages"],
	["tan", "child1.jpg", "The ablative case marker for this word:\nçocuk", "Check the noun cases page"],
	["çocuğu", "child.jpg", "Write the accusative definite case of this word:\nçocuk", "check the noun cases and consonant harmony pages"],
	["gitmeli", "leave.jpg", "Correct the misspelling:\ngitmali miyim?", "check the moods page"],
	["tavuğu yenildi", "chicken.jpg", "Translate this to Turkish:\nThe chicken was eaten", "check the moods, consonant harmony, conjugation, and tenses pages"]
]

for (const wd of wds)
{
	wd.addEventListener("mouseover", () => {
		console.log("works");
		const rect = wd.getBoundingClientRect();
		const x = rect.left + window.scrollX;
		const y = rect.top + window.scrollY;
		text.style.display = "block";
		text.style.position = "absolute";
  		text.style.left = x+'px';
  		text.style.top = y+ydistance+'px';
  		text.innerText = wd.outerHTML.split("\"")[1];
		console.log(`X:${rect.left + window.scrollX} Y:${rect.top + window.scrollY}`);

	});
	wd.addEventListener("mouseout", () => {
		text.style.display = "none";
	});
}

function practice(val) {
	game = document.getElementById("game");
	const btns = document.getElementsByClassName("pbtn");
	const endbtn = document.getElementById("r");
	endbtn.id = `${val}1`;
	game.style.display = "block";
	
	for (const btn of btns)
	{
		btn.style.display = "none";
	}

	displayquestion(1);
}

function endpractice(val) {
	game = document.getElementById("game");
	const btn = document.getElementById(val.slice(0, -1));
	console.log(val.slice(-1));
	const endbtn = document.getElementById(val);
	endbtn.id = "r";
	btn.style.display = "block";
	game.style.display = "none";
	const fb = document.getElementById("fb");
	fb.style.display = "none";
	document.getElementById("inp").value = "";
}

function getgame() {
	return game;
}

function displayquestion(num) {
	const img = document.getElementById("pimg");
	let question = document.getElementById("question");
	qnum = num;

	ans = q[num-1][0];
	img.setAttribute("src", `images/${q[num-1][1]}`);
	question.innerText = `${q[num-1][2]}\n(Question#${qnum})`;
	attempts = 0;
}

function checkans() {
	const guess = document.getElementById("inp").value;
	const fb = document.getElementById("fb");
	console.log(ans);
	if (guess.toLowerCase() == ans.toLowerCase())
	{
		qnum += 1;
		if (q[qnum-1] != null)
		{
			displayquestion(qnum);
			fb.style.display = "none";
			document.getElementById("inp").value = "";
		}
		else {
			fb.style.display = "block";
			fb.innerText = "You finished the practice!";
		}
	}
	else {
		if (attempts >= 3)
		{
			fb.innerText = `Hint:${q[qnum-1][3]}`;
		}
		else {
			fb.innerText = "Incorrect.";
		}
		attempts += 1;
		fb.style.display = "block";
	}
}

function accent(val) {
	const inp = document.getElementById("inp");
	inp.value += val;
}