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

function translate_z({x, y, z}, distance){
    return {x, y, z: z + distance};
}

function rotate_xy({ x, y, z }, angle) {
  const c = Math.cos(angle)
  const s = Math.sin(angle)

  return {
    x: x * c - z * s,
    y,
    z: x * s + z * c
  }
} 

const FPS = 60;
let time = 0

function frame(){
    const delta_time = 1000 / FPS;
    time += delta_time;
    clear();
    for(const v of sq){
       Point(screen(Project(translate_z(rotate_xy(v, time/1000),1))), 100);
    }
    setTimeout(frame, 1000/FPS);
}

frame();
