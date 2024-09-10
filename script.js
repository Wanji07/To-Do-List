const input = document.querySelector('#userInput');
const submit = document.querySelector('#btnSubmit');
const container = document.querySelector('.list');
const errorMsg = document.querySelector('#error');
const noneMsg = document.querySelector('#noneMsg');
const list = document.querySelector('#list')

submit.addEventListener('click', () => {
  let item = document.createElement('li');
  let task = document.createElement('p');
  let buttonContainer = document.createElement('div');
  buttonContainer.classList.add("button-container");
  
  let clear = document.createElement('button');
  clear.classList.add("listButtons");
  
  let writeOut = document.createElement('button');
  writeOut.classList.add("listButtons");

  if (input.value == "") {
    errorMsg.innerText = "Please try again!";
  } else {
    errorMsg.innerText = "";
    task.innerText = input.value;
    item.appendChild(task);
    buttonContainer.appendChild(clear);
    buttonContainer.appendChild(writeOut);
    item.appendChild(buttonContainer);
    list.appendChild(item);
  }

  clear.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  writeOut.innerHTML = `<i class="fa-solid fa-pen"></i>`;

  noneMsg.style.cssText = "display: none;"

  writeOut.addEventListener('click', () => {
    task.style.cssText = "text-decoration: line-through; font-style: italic; opacity: 90%; color: grey;";
  });

  clear.addEventListener('click', () => {
    list.removeChild(item);
  });

  container.appendChild(list);
});