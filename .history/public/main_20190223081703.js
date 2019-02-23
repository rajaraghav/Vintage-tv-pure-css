var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
var deg = Math.PI / 180;
var spx, spy, x, y;
var LinGrad = ctx.createLinearGradient(20, 20, 400, 230);
LinGrad.addColorStop(0, "rgb(15, 255, 140)");
LinGrad.addColorStop(0.33, "rgb(15, 240, 255)");
LinGrad.addColorStop(0.66, "rgb(250, 200, 20)");
LinGrad.addColorStop(1, "rgb(165, 20, 250)");
spx = 3;
spy = -3;
x = 200;
y = 150;
ctx.beginPath();
ctx.fillStyle = LinGrad;
ctx.closePath();
setInterval(DrawAll, 33);

function DrawAll() {
    ctx.beginPath();
    if (x >= 370 || x <= 29) spx = -spx;
    if (y >= 200 || y <= 29) spy = -spy;
    x = x + spx;
    y = y + spy;
    ctx.clearRect(0, 0, 400, 300);
    ctx.arc(x, y, 15, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.strokeRect(10, 10, 380, 210);
    ctx.closePath();
}
let dvd = document.getElementById("dvd");
dvd.style.top = "50px";
while (true) {
    if (x >= 370 || x <= 29) spx = -spx;
    if (y >= 200 || y <= 29) spy = -spy;
    x = x + spx;
    y = y + spy;
}
