const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const dvdLogo = document.getElementById('dvdLogo');
ctx.height = window.innerHeight;
ctx.width = window.innerWidth;

let x = 0;
let y = 0;
let dx = 5;
let dy = 5;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(dvdLogo, x, y);
    x += dx;
    y += dy;
    if (x + dvdLogo.width >= canvas.width || x <= 0) {
        dx = -dx;
    }
    if (y + dvdLogo.height >= canvas.height || y <= 0) {
        dy = -dy;
    }
    requestAnimationFrame(draw);
}


draw();