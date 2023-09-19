const canvas = document.querySelector('canvas');
const color = document.querySelector('#color');
const width = document.querySelector('#width');
const clear = document.querySelector('.clear');
const save = document.querySelector('.save');

const ctx = canvas.getContext('2d'); // 2차원 렌더링 컨텍스트 생성
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isPainting = false; // 그림이 그려지는 중인지 아닌지
let lineWidth = 5;

save.addEventListener('click', () => {
    // 이미지로 저장
    canvas.toBlob((blob) => {
        const a = document.createElement('a');

        a.href = URL.createObjectURL(blob); // 특정 객체를 넣어주면 객체의 url을 생성해주는 메서드
        a.download = 'yeonjiJS.jpeg';
        a.click();
    })
})

clear.addEventListener('click', () => {
    ctx.clearRect(0,0, canvas.width, canvas.height); // 사각형 영역을 지우는 메소드(총 4개의 좌표 필요)
})

width.addEventListener('change', (event) => {
    lineWidth = event.target.value;
});

color.addEventListener('change', (event) => {
    ctx.strokeStyle = event.target.value; // 선의 색깔을 지정하는 속성
});

// mouseout : 해당 element 안에서 바깥으로 옮겼을 때 발생
canvas.addEventListener('mouseout', (event) => {
    isPainting = false;
})

// mousemove : 해당 element에서 마우스를 움직였을 때 발생
canvas.addEventListener('mousemove', (event) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(event.offsetX, event.offsetY); // 지정된 위치까지 선을 렌더링 하는 메소드(선이 그려지지는 않는다.)
    ctx.stroke();
});

// mousedown : 해당 element에서 마우스 버튼을 눌렀을 때 발생
canvas.addEventListener('mousedown', (event) => {
   isPainting = true; // 그림 그리는 중
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY); // 펜이 지정된 위치로 이동되게끔 이벤트 객체가 가지고 있는 값을 전달
});

// mouseup : 해당 element에서 눌렀던 마우스 버튼을 떼었을 때 발생
canvas.addEventListener('mouseup', () => {
    isPainting = false;
});

