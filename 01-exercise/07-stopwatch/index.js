const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

// start, stop을 하기 위해 global 변수로 생성
let timerId;

let [msec, sec, min] = [0,0,0];

const displayTimer = () => { // 화면에 값 표시하는 함수
    const time = document.querySelector('.time');

    const fMin = min < 10 ? `0${min}` : min;
    const fSec = sec < 10 ? `0${sec}` : sec;
    const fMsec = msec < 10 ? `0${msec}` : msec;

    time.innerText = `${fMin} : ${fSec} : ${fMsec}`;
};

const timer = () => {
    msec++; // 0.01초씩 증가 

    if(msec === 100) { // milliSecond가 100이 되면 1초 
        msec = 0;
        sec++;
        if(sec === 60) { // 60초면 1분
            sec = 0;
            min++;
        }
    }
    console.log(min, sec, msec);
    displayTimer();
}


const start = () => {
    // Start 버튼 연타해도 계속해서 타이머가 생성되지 않게끔 조건문 추가
    if (!timerId) {
        timerId = setInterval(timer, 10);
    }
};


const stop = () => {
    clearInterval(timerId);    
};


const reset = () => {
    stop();
    [msec, sec, min] = [0, 0, 0];
    displayTimer();
};

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);


/* 구조 분해 할당(Destructuring_assignment)
    : 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
    
    let a, b, rest;
    [a, b] = [10, 20];

    console.log(a);
    // Expected output: 10

    console.log(b);
    // Expected output: 20

    [a, b, ...rest] = [10, 20, 30, 40, 50];

    console.log(rest);
    // Expected output: Array [30, 40, 50]

    참고사이트 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

*/