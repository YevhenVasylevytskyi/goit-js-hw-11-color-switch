const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let timerId = null;

// const min = 1;
// const max = colors.length;
const refs = {
    body: document.querySelector('.body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

function onStop() {
    console.log("Клик на Стоп");
    clearInterval(timerId);
};

function onStart() {
    timerId = setInterval(() => {
        console.log("Клик на Старт")
        // body.style.backgroundColor = colors[randomIntegerFromInterval];
    
    }, 1000);    
};



// const min = 1;
// const max = colors.length;
    
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// // };

// randomIntegerFromInterval(1, colors.length);
// const randomColor = () => {
//     return colors[randomIntegerFromInterval(min, max)];
// };

// console.log(randomColor);
// const randomColors = colors[randomIntegerFromInterval(min, max)];
// console.log(randomColors);
// body.style.backgroundColor = colors[randomIntegerFromInterval];


// stop.addEventListener('click', clickStop);
   


