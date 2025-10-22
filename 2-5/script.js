const canvas = document.getElementById('drawing');
const ctx = canvas.getContext('2d');


// SETUP & RESIZE LOGIC
function Setup(){
    const DPI = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * DPI;
    canvas.height = window.innerHeight * DPI;
    
    ctx.setTransform(DPI, 0,0,DPI,0,0);
    ctx.lineWidth = 4;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000'

}
Setup();
window.addEventListener('resize', Setup);
ctx.beginPath();
ctx.moveTo(5, 20);
ctx.lineTo(5, 50);
ctx.stroke();
ctx.closePath();
// DRAWING LOGIC