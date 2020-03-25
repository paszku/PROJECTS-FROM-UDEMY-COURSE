const div = document.querySelector('div');
div.style.left = 150 + "px";
div.style.top = 50 + 'px';
let drawActive = false;
let instertDivX;
let instertDivY;



div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = "gray";
    drawActive = true;
    instertDivX = e.offsetX;
    instertDivY = e.offsetY;


})

div.addEventListener('mousemove', (e) => {
    if (drawActive) {
        const x = e.clientX - instertDivX;
        const y = e.clientY - instertDivY;
        div.style.backgroundColor = "red";
        div.style.left = x + "px";
        div.style.top = y + "px";
        // div.style.transform = "translate(-50%, -50%)";
    }
})

div.addEventListener('mouseup', () => {
    drawActive = false;
    div.style.backgroundColor = "black";



})