const button = document.querySelector(".button");

let body = document.querySelector('body');

var backgroundName = document.getElementById('#background-name');

var cont = 0

button.addEventListener('click', () => {
    body.classList.add('f2')
    document.getElementById("background-name").textContent = 'Background: #F2F2F2'
    cont += 1

    if(body.classList.contains('f2') && cont >= 2) {
        body.classList.replace('f2', 'c7')
        document.getElementById("background-name").textContent = 'Background: #C7C7C7'
    };

    if(body.classList.contains('c7') && cont >= 3) {
        body.classList.remove('c7')
        document.getElementById("background-name").textContent = 'Background: #292929'
        cont = 0
    };
});
