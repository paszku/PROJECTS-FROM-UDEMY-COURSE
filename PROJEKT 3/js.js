const square = document.querySelector(".makeMeBigger");

const body = document.querySelector('body');

let size = 10;






document.addEventListener('scroll', function () {
    let scroll = window.scrollY;
    if (scroll > 0 && scroll < 500) {
        size += 1;
        square.style.width = size + "vh";
        square.style.height = size + "vh";

    } else if (scroll > 500 && scroll < 1000) {
        size -= 1;
        square.style.width = size + "vh";
        square.style.height = size + "vh";

    } else if (scroll > 1000 && scroll < 1300) {
        size += 1;
        square.style.width = size + "vh";
        square.style.height = size + "vh";

    } else if (scroll > 1300 && scroll < 2500) {
        size += 1;
        square.style.width = size + "vh";
        square.style.height = size + "vh";

    } else {
        size -= 1;
        square.style.width = size + "vh";
        square.style.height = size + "vh";

    }
})