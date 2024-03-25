

const headerNavNames = [
    "Plant pots",
    "Ceramics",
    "Tables",
    "Chairs",
    "Crockery",
    "Tableware",
    "Cutlery",
]

const ulNav = document.getElementById("h-nav")
ulNav.innerHTML = headerNavNames.map(el => `<li>${el}</li>`).join("")

