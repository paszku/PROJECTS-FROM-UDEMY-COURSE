let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    btn.innerText = "Dodaj 10 elementów listy";
    document.body.appendChild(btn)
    btn.addEventListener('click', createLiElements)
    const list = document.createElement('ul');
    document.body.appendChild(list)

}

const createLiElements = () => {
    let i = 0;
    for (i = 0; i < 10; i++) {
        const newLi = document.createElement('li');
        const list = document.querySelector('ul');
        list.appendChild(newLi);
        newLi.innerText = orderElement;
        orderElement++;
        newLi.style.fontSize = size + 'px';
        size++
    }
    i = 0;
}

init()