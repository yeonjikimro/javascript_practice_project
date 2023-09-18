

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/*
  1. 삭제 버튼을 추가 
  2. 저장 되게끔
  3. 삭제 버튼 -> 저장된 데이터 업데이트
*/

let todos = []; // delItem에서 다시 todos 배열에 값을 넣엉 변경해야하기 때문에 const(상수)가 아닌 let으로 객체 생성

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos)); // 자바스크립트 객체를 json 문자열로 변환
}


const delItem = (event) => {
  const target = event.target.parentElement;

  todos = todos.filter((todo) => todo.id !== parseInt(target.id)); // 지우려는 요소들이 아닌 것들만 모아서 todos 배열에 다시 넣기
  /*  todos = todos.filter((todo) => todo.id !== target.id);
      target.id는 html에서 가져온 거라 String, todo.id는 number 타입이다.
      따라서 !==로 조건을 둘 경우 타입이 맞지 않아 조건이 맞지 않는다.
      1. !==가 아닌 !=로 변경
      2. parseInt로 변환
   */
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== '') {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    span.innerText = todo.text;
    button.innerText = '삭제';
    button.addEventListener('click', delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};


const handler = (event) => {
  event.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo);
  addItem(todo);
  save();

  input.value = '';
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem('todos'));
  
  if(userTodos) {
      userTodos.forEach((todo) => {
      addItem(todo); // 새로고침을 해도 화면에서 사라지지 않게
    });
  }
}

init();
form.addEventListener('submit', handler);
