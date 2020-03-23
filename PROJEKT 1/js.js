const button = document.querySelector('button');

let clicks = 0;
const body = document.querySelector('body');

button.addEventListener("click", function () {

    const newDiv = document.createElement('div');
    // newDiv.classList.add("element");
    document.body.appendChild(newDiv)

    clicks += 1;
    if (clicks % 10 == 0) {
        newDiv.classList.add("fifth");

    } else if (clicks % 5 == 0) {
        newDiv.classList.add("tenth");
    } else {

    }
    newDiv.innerText = `${clicks}`;
})