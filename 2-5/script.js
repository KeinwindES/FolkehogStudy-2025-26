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

let currentlyDrawing = false;
let lastPos = {x:0, y:0};

function GetPos(e){
    return {
        x: e.clientX,
        y: e.clientY
    };
}

canvas.addEventListener("pointerdown", (e) => {
    lastPos = GetPos(e);
    currentlyDrawing = true;
    canvas.setPointerCapture(e.pointerId);

});
canvas.addEventListener("pointermove", (e) => {
    if(!currentlyDrawing) return;
    let pos = GetPos(e);
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.closePath();
    lastPos = pos;

    console.log("pointermove");

});

canvas.addEventListener("pointerup", (e) => {
    currentlyDrawing = false;
    console.log("pointerup");
});

canvas.addEventListener("pointercancel", (e) => {
    currentlyDrawing = false;
    console.log("pointercancel");
    canvas.releasePointerCapture(e.pointerId);
});
