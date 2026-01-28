const canvas = document.getElementById('canvas');

canvas.height = 800;
canvas.width = 800;

const ctx = canvas.getContext('2d');
const background = '#000000';
const foreground = '#2e31e9';

clear();

function clear() {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function Point({x, y}, size) {
    ctx.fillStyle = foreground;
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
}

function screen({x,y}){
    x = (x + 1)*0.5 * canvas.width;
    y = (y + 1)*0.5 * canvas.height;
    return {x,y};
}

function Project({x, y, z}) {
    x /= z;
    y /= z;
    return {x, y};
}

const sq = [
  { x: 0.25, y: 0.25, z: 0.25 },
  { x: -0.25, y: 0.25, z: 0.25 },
  { x: -0.25, y: -0.25, z: 0.25 },
  { x: 0.25, y: -0.25, z: 0.25 },

  { x: 0.25, y: 0.25, z: -0.25 },
  { x: -0.25, y: 0.25, z: -0.25 },
  { x: -0.25, y: -0.25, z: -0.25 },
  { x: 0.25, y: -0.25, z: -0.25 },
]
const FPS = 60;
function frame(){
    clear();
    for(const v of sq){
        Point(screen(Project(v)), 100);
    }
    setTimeout(frame, 1000/FPS);
}

frame();
