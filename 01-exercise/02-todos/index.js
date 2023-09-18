const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // form이 제출이 되면서 새로고침이 되어 아래의 console log를 볼 수 없다.
    // preventDefault를 통해서 새로고침을 막아 콘솔로그가 보이는 코드를 작성한다.
    
    if(input.value !== ``) {
        const li = document.createElement('li');
        li.innerText = input.value;
        ul.appendChild(li);

        // 입력내용을 submit 시 입력창이 다시 초기화되도록 하는 코드
        input.value = '';
    }
    
})