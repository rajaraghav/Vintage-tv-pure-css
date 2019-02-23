spx = 0.5;
spy = -1;
x = 2;
y = 2;
let colors = ["#a1ee", "#12d1f8", "#f7ff0b", "#e60004", "#14ff50"];
let currColor = 0;
let dvd = document.getElementById("dvd");
function move() {
    if (x >= 300 || x <= 1) {
        spx = -spx;
        dvd.style.color = colors[currColor];
    }
    if (y >= 300 || y <= 1) {
        spy = -spy;
        dvd.style.color = colors[currColor];
    }
    currColor = currColor === colors.length - 1 ? 0 : currColor + 1;
    x = x + spx;
    y = y + spy;
    dvd.style.top = x + "px";
    dvd.style.left = y + "px";
}
setInterval(() => move(), 10);
