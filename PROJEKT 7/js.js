const sign = document.querySelector('h1');
const body = document.querySelector('body');
// let cursorLeft = e.clientX;
// let cursorUp = e.clientY;
// console.log(cursorUp)


function makeSomeFun(e) {
    sign.innerText = e.pageX + " " + e.pageY;
    body.style.backgroundColor = `rgb(${e.pageY/10},85,85)`;





}


document.addEventListener('mousemove', makeSomeFun);