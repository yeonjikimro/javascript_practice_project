const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');

const result = ['가위', '바위', '보'];

function show(user, computer, message) {
    computerChoice.innerText = computer;
    userChoice.innerText = user;
    winner.innerText = message;
}

function game(user, computer) {
    let message;

    if (user === computer) {
        message = '무승부';
    } else {
        switch (user + computer) { // 판단할 값(if())
            case '가위바위':
                case '바위보':
                    case '보가위':
                        message = '컴퓨터 승리!'; // 실행 내용
                        break;
                        case '가위보':
                            case '바위가위':
                                case '보바위':
                                    message = '당신 승리!'; // 실행 내용
                                    break;
        }
    }
    show(user, computer, message);
}

function play(event) {
    // console.log(event.target.innerText);
    const user = event.target.innerText;
    // 필요한 건 0,1,2 정수만 필요하기 때문에
    // Math.floor : 소수점 이하를 버림(정수)
    const randomIndex = Math.floor(Math.random() * 3); 
    const computer = result[randomIndex];
    game(user, computer);
}

buttons.forEach((button) => {
    button.addEventListener('click', play);
    
});


