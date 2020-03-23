const btn = document.querySelector('button');
let click = 1;



btn.addEventListener("click", function () {

    const newLi = document.createElement('li');
    document.body.appendChild(newLi);
    newLi.innerText = `${click}`
    click += 2;

    if (click % 3 == 0) {
        newLi.classList.add('big');
    }

})