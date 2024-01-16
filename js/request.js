fetch("https://justarandomaccountt.github.io/")
    .then(response => response.text())
    .then(code => {
        console.log("Not here...");
    })
    .catch(error => console.error(error));

function checkans() {
    const cont = document.getElementById("cont");
    const txt = document.getElementById("inp").value;
    if (txt.includes("kazand"))
    {
        cont.style.display = "block";
    }
}