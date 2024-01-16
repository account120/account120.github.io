const wds = document.getElementsByTagName("B");
const text = document.getElementById("defpopup");
const ydistance = 30;
let game;
let ans;
let qnum;
const q = [
	["çocuk", "child.jpg", "What is in this picture?"], 
	["türkiye", "turkiye1.jpg", "What is the name of the country this flag comes from?"], 
	["türkçe", "turkiye1.jpg", "What is the language turkiye speaks?"],
	["an apple from the man", "apple1.jpg", "Translate this to English:\nAdamdan bir elma"],
	["Adam bir elma yer", "apple2.jpg", "Translate this to Turkish:\nThe man eats an apple"],
	["tan", "child1.jpg", "What is the correctly harmonized form of the ablative case marker for this word:\nçocuk"],
	["çocuğu", "child.jpg", "Write the accusative definite case of this word:\nçocuk"],
	["gitmeli", "leave.jpg", "Find the misspelled word in this sentence and respond with the corrected word(just put the word that was corrected and nothing else):\ngitmali miyim?"],
	["tavuğu yenildi", "chicken.jpg", "Translate this to Turkish:\nThe chicken was eaten"]
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
		fb.innerText = "Incorrect.";
		fb.style.display = "block";
	}
}

function accent(val) {
	const inp = document.getElementById("inp");
	inp.value += val;
}