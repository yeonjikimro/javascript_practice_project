const form = document.querySelector('form');

const createTodo = (event) => {
    event.preventDefault();

    const input = document.querySelector('input');
}

form.addEventListener('submit', createTodo);