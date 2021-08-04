const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;

const refs = {
    body: document.querySelector('.body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomBackgroundColor() {
    return colors[randomIntegerFromInterval(0, colors.length)]
};

function onStop() {    
    clearInterval(timerId);
    refs.startBtn.disabled = false;
};

function onStart() {
    refs.startBtn.disabled = true;
    timerId = setInterval(() => {        
        refs.body.style.backgroundColor = randomBackgroundColor();
    }, 1000);    
};


   


