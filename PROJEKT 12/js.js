const btn = document.querySelector('button');
const table = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const remakeTable = table.map(item => item.toUpperCase());
const codesNumber = 100;
const charsNumber = 8;


// const newPasswords = passwords.map(item => item.toLowerCase());


btn.addEventListener('click', () => {
    for (let i = 0; i < codesNumber; i++) {

        const div = document.createElement('div');
        document.body.appendChild(div)
        const goodArray = [];

        for (let z = 0; z < charsNumber; z++) {
            const i = Math.floor(Math.random() * remakeTable.length)
            goodArray.push(remakeTable[i])


        }
        let str = goodArray.join([, ]);
        div.textContent = str;
    }

})