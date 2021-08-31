const form = document.forms[0];
const input = form.querySelector('textarea');
const parent = document.querySelector('.choices');


input.addEventListener('keydown', handle);
let temp = false
let vue = true;
let alphabet = 'abcdefghijklmnopqrstuvwxyz,12365479/*-+.0!@#$%^&*()_+=~?><'
function handle(e) {
    if (temp) {
        parent.querySelectorAll('span').forEach(span => span.remove())
        temp = false
    }
    if (e.key == 'Enter') {
        randomChoice(e);
        return
    }
    if(e.key == "Backspace") {
        parent.lastElementChild.innerText = parent.lastElementChild.innerText.slice(0, parent.lastElementChild.innerText.length - 1)
    }
    if (!alphabet.includes((e.key).toLowerCase())) return;
    if (e.key == ',' && parent.firstElementChild != null) {
        vue = true
    }
    else if (vue) {
        let span = document.createElement('span');
        span.classList.add('choice');
        parent.appendChild(span);
        vue = false
    }
    if (e.key != ',') {
        parent.lastElementChild.innerText += e.key;
    }
}

function randomChoice(e) {
    e.preventDefault()
    input.value = '';
    let choices = parent.querySelectorAll('span');
    vue = true
    randomizer(choices)
    // choices.forEach(choice => choice.remove())
}


function randomizer(arr) {
    // Math.floor(Math.random() * (arr.length - 0 + 1) + 0);
    // arr[num].classList.add('active')
    let num = Math.floor(Math.random() * (arr.length - 1 - 0 + 1) + 0)
    function hz() {
        arr.forEach(item => item.classList.remove('active'))
        let num = Math.floor(Math.random() * (arr.length - 1 - 0 + 1) + 0)
        arr[num].classList.add('active');
    }
    let timerId = setInterval(hz, 100);

    setTimeout(() => clearInterval(timerId), arr.length * 500)


    temp = true


}