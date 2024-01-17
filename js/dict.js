const items = [
    [
        "çocuk(ğ)", "child", "The word for child in Turkish.", 
        ["Çocuğu", "Çocukleri", "Çocuğa", "Çocuklere", "Çocukta", "Çocuklerde", "Çocuktan", "Çocuklerden", "Çocuğun", "Çocuklerin", "Çocukle", "Çocuklerle"],
        "noun"
    ],
    [
        "Adam", "man", "Adam is the word for man in Turkish.", 
        ["Adamı", "Adamları", "Adama", "Adamlara", "Adamda", "Adamlarda", "Adamdan", "Adamlardan", "Adamın", "Adamların", "Adamla", "Adamlarla"],
        "noun"
    ],
    [
        "Yemek", "to eat", "To eat or consume\nYemek's base verb is 'ye' which frequently loses the 'e' to other vowels in markers. This is the verb version of Yemek, which is also a noun for 'food.'", 
        [
            "Yerim", "Yiyorum", "Yedim", "Yiyordum", "Yiyeceğim", 
            "Yersin", "Yiyorsun", "Yedin", "Yiyordun", "Yiyeceksin", 
            "Yer", "Yiyor", "Yedi", "Yiyordu", "Yiyecek",
            "Yeriz", "Yiyoruz", "Yedik", "Yiyorduk", "Yiyeceğiz",
            "Yersiniz", "Yiyorsunuz", "Yediniz", "Yiyordunuz", "Yiyeceksiniz",
            "Yerler", "Yiyorlar", "Yediler", "Yiyorlardı or Yiyordılar", "Yiyecekler",
        ],
        "verb"
    ],
    [
        "Yemek(ğ)", "food", "1. Food\n2. Dinner\nThis is the noun version of Yemek, which is also the verb for 'to eat.'", 
        ["Yemeği", "Yemekleri", "Yemeğe", "Yemeklere", "Yemekta", "Yemeklerde", "Yemektan", "Yemeklerden", "Yemeğin", "Yemeklerin", "Yemekle", "Yemeklerle"],
        "noun"
    ],
];

let found = [];
let iamt = 0;
let itemnum = 1;

function search(val, num) {
    const searchresult = document.getElementById("result");
    const msg = document.getElementById("noresults");
    const nx = document.getElementById("nx");

    if (val == "" || val == " ")
    {
        searchresult.style.display = "none";
        nx.style.display = "none";
        return;
    }

    num = parseInt(num);

    let results = false;
    iamt = 0;
    found = [];
    for (const item of items) {
        if (item[0].toLowerCase().includes(val.toLowerCase()) || item[1].toLowerCase().includes(val.toLowerCase()))
        {
            if (!found.includes(item))
            {
                found.push(item);
            }
            results = true;
            msg.style.display = "none";
            iamt++;
        }
    }

    if (iamt <= 1)
    {
        nx.style.display = "none";
    }
    else {
        nx.style.display = "block";
    }

    if (!results)
    {
        msg.style.display = "block";
        msg.innerText = `Sorry, no results were found for "${val}"`;
        searchresult.style.display = "none";
    }
    else if (results && val != "" || results && val != " ") {
        displayresult(num);
    }
}

function displayresult(num) {
    const item = found[num-1];

    const searchresult = document.getElementById("result");
    searchresult.style.display = "block";

    const pgamt = document.getElementById("amt");
    pgamt.innerText = `Result #${itemnum} of ${iamt}`;
    
    document.getElementById("sname").innerText = item[0][0].toUpperCase() + item[0].slice(1);
    document.getElementById("sdesc").innerText = item[2];

    document.getElementById("verb").style.display = "none";
    document.getElementById("noun").style.display = "none";
    document.getElementById(item[4]).style.display = "inline";
    document.getElementById("pos").innerText = ` (${item[4]})`;

    if (item[4] == "noun")
    {
        for (let i = 0; i < item[3].length; i++) { 
            document.getElementById(`a${i+1}`).innerText = item[3][i]; 
        }
    }
    else if (item[4] == "verb")
    {
        for (let i = 0; i < item[3].length; i++) { 
            document.getElementById(`b${i+1}`).innerText = item[3][i]; 
        }
    }
}

function next() {
    if (found.length != itemnum)
    {
        itemnum++;
    }
    else {
        itemnum = 1;
    }
    displayresult(itemnum);
}