spx = 3;
spy = -3;
x = 300;
y = 150;
let colors = ["#a1ee", "#12d1f8", "#f7ff0b", "#e60004", "#14ff50"];
let dvd = document.getElementById("dvd");
function move() {
    if (x >= 370 || x <= 1) {
        spx = -spx;
        dvd.style.color = color[currColor++];
    }
    if (y >= 200 || y <= 1) {
        spy = -spy;
        dvd.style.color = color[currColor++];
    }
    if (currColor === color.length) currColor = 0;
    x = x + spx;
    y = y + spy;
    dvd.style.top = x + "px";
    dvd.style.left = y + "px";
}
setInterval(() => move(), 50);
