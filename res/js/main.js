let pizza = 0;
let clicker = 0;
let clickerupgradevari = 0;
let upgrade_pas = 50;
let autoupgrade = 100;
let autoClickLevel = 0;
let interva

/*----------------------------------------------------*/

function updatePizzaDisplay() {
    document.getElementById("score").innerHTML = "Sežral si jich: " + pizza;
}

function get() {
    if (clickerupgradevari === 0) {
        pizza += 1;
    } else if (clickerupgradevari === 1) {
        pizza += 1 + clicker;
    }
    updatePizzaDisplay();
}

function autoClick() {
    pizza += autoClickLevel;
    updatePizzaDisplay();
}

function upgrade() {
    if (pizza >= autoupgrade) {
        pizza -= autoupgrade;
        updatePizzaDisplay();
        clearInterval(interval);
        interval = setInterval(autoClick, 10);
        autoupgrade += 100;
        autoClickLevel++;
        document.getElementById("AClick").innerText = "Kamarád taky rád: " + autoupgrade;
    } else {
        alert("Jseš ještě moc hubenej");
    }
}

function clickerupgrade() {
    if (pizza >= upgrade_pas) {
        pizza -= upgrade_pas;
        clicker += 1;
        clickerupgradevari = 1;
        upgrade_pas += 50; // Zvýšení ceny dalšího upgrade o 50
        updatePizzaDisplay();
        document.getElementById("Click").innerText = "Lepší pizza: " + upgrade_pas;

    } else {
        alert("Jseš ještě moc hubenej");
    }

}