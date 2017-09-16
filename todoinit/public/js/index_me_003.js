(function (window, document) {
  'use strict';

  // Get select
  const input = document.querySelector('.input');
  const button = document.querySelector('.button');
  const todoList = document.querySelector('.todo-list');
  
  // List item을 추가하는 함수
  function addListItem(e) {
    if (!input.value.trim()) return;
    if((e.keyCode === 13) || e.type === 'click') {
      itemPost(input.value);
      input.value = '';
      input.focus();
    }
  }

  // DB로 부터 List item list를 get method를 통해 가져오는 함수
  function getListItem() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', '/toDoList', true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if(this.readyState === 4) {
        if(this.status === 200) {
          console.log('this.respnseText: ', this.respnseText);
          let toDoItemList = JSON.parse(this.responseText);
          console.log('toDoItemList: ', toDoItemList);
          // 통신이 성공했을 경우 각각의 item을 list에 추가
          toDoItemList.forEach(function(item){
            console.log('item.task: ', item.task);
            insertItem(todoList, item.task, item.id);
          });
        }
        else { console.error('GET failed');}
      }
    }
  }

  // List item을 post method로 등록하는 함수
  function itemPost(task) {
    let xhr = new XMLHttpRequest();
    xhr.open('post', '/toDoList', true);
    // HTTP 통신패킷의 header 속성을 바꿔주는 API content-type을 application/json으로 변경시켜줌
    xhr.setRequestHeader('Content-type', 'application/json');
    let data = {task};
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function (){
      if(this.readyState === 4){
        if(this.status === 201){
          console.log(this.responseText);
          // 통신이 성공했을 경우 해당 List item을 DOM에 추가
          let item = JSON.parse(this.responseText);
          insertItem(todoList, item.task, item.id);
        }
      }
    }
  }

  // List item을 delete method로 제거하는 함수
  function deleteListItem(id, target){
    let xhr = new XMLHttpRequest();
    xhr.open('delete', '/toDoList/' + id, true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
      if(this.readyState === 4){
        if(this.status === 200){
          console.log('this.responseText: ', this.respnseText);
          todoList.removeChild(target.parentNode);
        }
      }
    }
  }

  // List item 추가해주는 함수
  function insertItem(element, task, id) {
    element.insertAdjacentHTML('beforeend', `<li class = "todo-item">${task}<button class="delete">삭제</button></li>`);
    bindDeleteButton(id);
  }

  // deleteButton을 바인딩 시켜주는 함수
  function bindDeleteButton(id) {
    const delButton = document.querySelectorAll('.delete');
    console.log(delButton);

    delButton[delButton.length-1].addEventListener('click',function() { 
      deleteListItem(id, this); 
    });
    
  }


  // Event handeling;
  button.addEventListener('click', addListItem);
  input.addEventListener('keyup', addListItem);

  getListItem();
})(window, document);