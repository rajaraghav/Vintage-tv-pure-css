spx = 3;
spy = -3;
x = 200;
y = 150;
let colors = ["#a1ee", "#a1eeee"];
let dvd = document.getElementById("dvd");
function move() {
    if (x >= 370 || x <= 1) {
        spx = -spx;
        dvd.style.color = "#a1eeee";
    }
    if (y >= 200 || y <= 1) {
        spy = -spy;
        dvd.style.color = "#a1eeee";
    }
    x = x + spx;
    y = y + spy;
    dvd.style.top = x + "px";
    dvd.style.left = y + "px";
}
setInterval(() => move(), 50);
