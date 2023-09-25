// import products from "../products.json" assert {type: 'json'};
import products from "../products.js";

const button = document.querySelector('button');

const createItem = (product) => {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const div = document.createElement('div');

    li.id = product.id;
    h3.className = 'name';
    h3.innerText = product.name;

    const price = new Intl.NumberFormat('ko-KR', {// 포맷팅할 언어 태그
        style: 'currency',
        currency: 'KRW',
    }).format(product.price);

    
    div.className = 'price';
    div.innerText = price;


    li.append(h3, div);
    ul.append(li);
    /*
        <li id="1">
            <h3 class="name">Title</h3>
            <div class="price">15,000원</div>
        </li>
    */
};

/*
    map에서 어떤 배열에 있는 모든 요소들의 값을 변경해서 만든 새로운 배열을 써야할 때
    예로, 각 배열의 요소에 3을 곱해야할 때, 
    <for 루프 사용>
    let arr = [3, 4, 5, 6];

    for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] * 3;
    }

    console.log(arr); // [9, 12, 15, 18]

    <map() 메소드 사용>
    let arr = [3, 4, 5, 6];

    let modifiedArr = arr.map(function(element){
        return element *3;
    });

    console.log(modifiedArr); // [9, 12, 15, 18]

*/
const importData = () => {
    products.data.map((product) => {
        if(!document.getElementById(product.id)) {
            createItem(product);
        }
    });
};

button.addEventListener('click', importData)




