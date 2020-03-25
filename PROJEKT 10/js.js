const body = document.querySelector('body');


let red = 50;
let green = 50;
let blue = 50;


body.style.backgroundColor = `rgb(${red},${green},${blue})`;


window.addEventListener('keydown', (e) => {
    // if (e.keyCode == 38) {
    //     red++;
    //     green++;
    //     blue++;
    //     body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    // } else if (e.keyCode == 40) {
    //     red--;
    //     green--;
    //     blue--;
    //     body.style.backgroundColor = `rgb(${red},${green},${blue})`;

    // }
    switch (e.keyCode) {
        case 38:
            red++;
            green++;
            blue++;
            body.style.backgroundColor = `rgb(${red},${green},${blue})`
            // code block
            break;
        case 40:
            red--;
            green--;
            blue--;
            body.style.backgroundColor = `rgb(${red},${green},${blue})`

            // code block
            break;
        default:
            // code block
    }

})

// window.addEventListener('keyup', () => {
//     red++;
//     green++;
//     blue++;
//     body.style.backgroundColor = `rgb(${red},${green},${blue})`;


// })