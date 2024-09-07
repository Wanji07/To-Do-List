const input = document.querySelector('#userInput');
const submit = document.querySelector('#btnSubmit');
const container = document.querySelector('.list');

submit.addEventListener('click', () => {
    let list = document.createElement('ul');
    let item = document.createElement('li');
    let clear = document.createElement('button');

    item.innerText = input.value;
    clear.innerText = "Remove";

    list.appendChild(item);
    list.appendChild(clear);


    clear.addEventListener('click', () => {
      list.removeChild(item);
      list.removeChild(clear);
    });

    container.appendChild(list);
});