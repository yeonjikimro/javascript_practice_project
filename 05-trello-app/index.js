const form = document.querySelector('form');
const blocks = document.querySelectorAll('.list');

let from, to;

let todoList = [], doingList = [], doneList = [];

const lists = {
    todo: todoList,
    doing: doingList,
    done: doneList,
};

// 마우스가 지나는 부분들
const dragOver = (event) => {
    
    const {id:targetId} = event.target;
    const listIds = Object.keys(lists);
    console.log("id: ", targetId);
    if(listIds.includes(targetId)) {
        console.log("target:", targetId);
        to = targetId;
    }
    console.log(to);

}

// 드래그 시작(원래 데이터가 있는 부분)
const dragStart = (event) => {

   from = event.target.parentElement.id;
}
// 드래그 끝(옮겨지는 부분)
const dragEnd = (event) => {

    const {id} = event.target; 

    event.target.remove();
    lists[from].filter((todo) => {
        if(todo.id !== id) {
            return todo;
        }
    })
    createElement(to, todo);
    
}

const createElement = (listId, todo) => {
    const list = document.querySelector(`#${listId}`);
    const item = document.createElement('div');

    item.id = todo.id;
    item.innerText = todo.text;
    item.className = 'item';
    item.draggable = true;

    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);

    list.append(item);
    lists[listId].push(todo);
};

const createTodo = (event) => {
    // 새로고침이 되 않ㅔ
    event.preventDefault();

    const input = document.querySelector('input');
    // UUID 범용 공용식별자
    // https://cdnjs.com/libraries/uuid/8.3.2
    const id = uuidv4();

    const newTodo = {
        id,
        text: input.value,
    }

    createElement('todo', newTodo);
    input.value='';
};

form.addEventListener('submit', createTodo);
blocks.forEach((block) => {
    block.addEventListener('dragover', dragOver);
})