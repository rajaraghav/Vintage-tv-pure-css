spx = 3;
spy = -3;
x = 300;
y = 150;
let colors = ["#a1ee", "#12d1f8", "#f7ff0b", "#e60004", "#14ff50"];
let currColor = 0;
let dvd = document.getElementById("dvd");
function move() {
    if (x >= 370 || x <= 1) {
        spx = -spx;
        dvd.style.color = colors[currColor];
    }
    if (y >= 200 || y <= 1) {
        spy = -spy;
        dvd.style.color = colors[currColor];
    }
    currColor = currColor === colors.length - 1 ? 0 : currColor + 1;
    x = x + spx;
    y = y + spy;
    dvd.style.top = x + "px";
    dvd.style.left = y + "px";
}
setInterval(() => move(), 50);
