const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');

const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#EAF4DB', '#067420', '#538B04', '#E41BE2', '#1357D4', '#0FED3A', '#ED0F8C', '#E6F706']
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event =>
{
    if (event.target.classList.contains('time-btn'));
        {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
        }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
})


function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
                current = `0${current}`;
            }
        setTime(current);
            }

}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}


function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`;
}


function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getrandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getrandomNumber(0, width - size);
    const y = getrandomNumber(0, height - size );;

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    setColor(circle);
    board.append(circle);

}

function getrandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.border = `2px dashed #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}