// let subscriptionCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {

//     if (subscriptionCounter === 3 || hasSubscribed) { 
//         console.log('Stop interval');
//         clearInterval(intervalId);
//         return;
//     }
  

//     console.log('Subscribe');

//     subscriptionCounter += 1;
// }, 1000);


// const refs = {
//     notification: document.querySelector('.js-notification'),
// }

// let timeoutId = null;

// refs.notification.addEventListener('click', notificationClickHandler);

// function notificationClickHandler() { 
//     hideNotification();//для того, щоб при кліці на нотіфікашку, вона ховалась не чекаючи 3 сек
//     clearTimeout(timeoutId);//для того, шоб коли ми скрили кліком нотіфікашку вона не зареєстровувалась, тобто ми не будемо виконувати фкнуція закриття
// }

// function showNotification() { 
//     refs.notification.classList.add('is-visible'); //

//     setTimeout(hideNotification, 3000); //для того, щоб за 3 сек само сховалось
// }

// function hideNotification() {
//     refs.notification.classList.remove('is-visible');
// } //функція для сховання нотіфікашки

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

