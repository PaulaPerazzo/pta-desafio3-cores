const button = document.querySelector(".button");

let changeBody = document.querySelector('body');

var backgroundName = document.getElementById('#background-name');

button.addEventListener('click', () => {
    // changeBody.classList.toggle('f2');
    changeBody.classList.replace('body', 'f2');
});

