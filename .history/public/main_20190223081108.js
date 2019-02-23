var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
var deg = Math.PI / 180;
var spx, spy, x, y;
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
