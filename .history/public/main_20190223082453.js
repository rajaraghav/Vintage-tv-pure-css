spx = 3;
spy = -3;
x = 200;
y = 150;
let dvd = document.getElementById("dvd");
function move() {
    if (x >= 370 || x <= 1) spx = -spx;
    if (y >= 200 || y <= 1) spy = -spy;
    x = x + spx;
    y = y + spy;
    dvd.style.top = x + "px";
    dvd.style.left = y + "px";
    dvd.style.color = "#a1eeee";
}
setInterval(() => move(), 100);
