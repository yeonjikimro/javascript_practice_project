const form = document.querySelector('form');

const calculate = (weight, height) => {
    // bmi 계산식
    return (weight / (height * height)).toFixed(1);
};

const display = (bmi) => {
    const result = document.querySelector('.result');
    let group;

    if (bmi >= 30.0) {
        group = '중등도비만';
    } else if (bmi >= 25.0) {
        group = '경도비만';
    } else if (bmi >= 23.0) {
        group = '과체중';
    } else if (bmi >= 18.5) {
        group = '정상';
    } else {
        group = '저체중';
    }

    result.innerText = `${bmi} -> ${group} 입니다.`;
}

const formHandler = (event) => {
    event.preventDefault();

    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');

    if (weightInput.value !== '' && heightInput.value !== '') {
        const weight = weightInput.value;
        const height = heightInput.value / 100;
        const bmi = calculate(weight, height);
        console.log(bmi);

        display(bmi);
        heightInput.value = '';
        weightInput.value = '';
    }
};

form.addEventListener('submit', formHandler);
