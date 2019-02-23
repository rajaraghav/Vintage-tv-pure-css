let dvd = document.getElementById("dvd");
function move() {
    if (x >= 370 || x <= 29) spx = -spx;
    if (y >= 200 || y <= 29) spy = -spy;
    x = x + spx;
    y = y + spy;
    dvd.style.top = x + "px";
    dvd.style.left = y + "px";
}
setInterval(() => move(), 100);
