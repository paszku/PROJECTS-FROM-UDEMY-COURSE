const nav = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(nav)
size = 10;
nav.style.height = size + 'px';
let check = true






const makeSomeFun = function () {
    if (check) {
        size += 1;
        nav.style.height = size + 'px';
    } else if (check == false) {
        size -= 1;
        nav.style.height = size + 'px';
    }
    if (size > window.innerHeight / 2) {
        check = false
        nav.style.backgroundColor = "red";
    } else if (size < 4) {
        check = true;
        nav.style.backgroundColor = "green";
    }

}

document.addEventListener('scroll', makeSomeFun)