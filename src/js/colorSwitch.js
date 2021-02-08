const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', startChangingColor);
refs.stopBtn.addEventListener('click', stopChangingColor);

let timerId = null;

function startChangingColor() { 
    refs.startBtn.disabled = true;

   timerId = setInterval(() => { 
        const randomIntegerFromInterval = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        const i = randomIntegerFromInterval(0, colors.length - 1)
       refs.body.style.backgroundColor = colors[i];
    }, 1000)

}

function stopChangingColor() { 
    clearInterval(timerId);
    refs.startBtn.disabled = false;
    // refs.body.style.background = null;
}

