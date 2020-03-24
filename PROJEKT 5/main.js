const btn = document.querySelector('button');
let i = 0;

const elements = document.querySelectorAll("li");
let size = 10



// btn.addEventListener('click', function () {
//     for (i = 1; i < 11;) {
//         let newLi = document.querySelector(`li:nth-child(${i})`)
//         newLi.style.display = "block";
//         newLi.style.fontSize = size + "px";

//         i++
//     }


//     size += 1;
// })

btn.addEventListener('click', () => {
    elements.forEach((elements) => {
        elements.style.display = "block";
        elements.style.fontSize = size + "px";
    })
    size++;
})