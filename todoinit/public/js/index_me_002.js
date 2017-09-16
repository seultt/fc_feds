(function(window, document){
  'use strict';
  function addListItem(e){
    if(!input.value.trim()) return ;
    // enter가 들어왔을 경우 또는 클릭이벤트일 경우
    if((e.keyCode === 13) || e.type === 'click'){
      itemPost(input.value); // itemPost(input에 입력된 값을 인자로)
      input.value = '';
      input.focus();
    }
  }
  function deleteListItem(index) {
    var xhr = new XMLHttpRequest();
    xhr.open('delete', '/toDoList/' + index, true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
      if(){
        if(){
          console.log('this.responseText: ', )
        }
      }
    }
  }
  function itemPost(str){
    // XMLHttpRequest 객체의 생성
    var xhr = new XMLHttpRequest(); //?
    xhr.open('post', '/toDoList', true); // 비동기 방식으로 Request를 오픈한다
    xhr.setRequestHeader('Content-type', 'application/json'); // HTTP에 보낼 데이터를 header에 알려주는 것, application/json data로 전송하겠다.
    var data = {
      task: str // 인자가 된 input  입력 값을 프로퍼티 값으로 넣어준 객체를 data 변수로 선언 
    };
    xhr.send(JSON.stringify(data)); // 변수 data(객체)를 문자열 JSON 형태로 보내라 
    xhr.onreadystatechange = function() {
      if(this.readyState === 4) {
        if(this.status === 201) {
          console.log(this.responseText);
          var data = JSON.parse(this.responseText); // jason에서 돌려 받은 값을 pasing한다.
          insertItem(todoList, data.task); // todoList가 지정한 태그, data의 task의 값을 insertItem  인자로!!
        }
      }
    }
  }
  function insertItem(element, str){
    element.insertAdjacentHTML('beforeend', '<li class="todo-item">' + str + '<button class="delete">삭제</button></li>');
    deletBindItem();
  }
  function deletBindItem(){
    var delButton = document.querySelectorAll('.delete');
    console.log('delButton: ', delButton[delButton.length-1]);
    delButton[delButton.length-1].addEventListener('click', function(){
      todoList.removeChild(this.parentNode);
    });
  }

  var input = document.querySelector('.input');
  console.log('input: ', input);
  var button = document.querySelector('.button');
  console.log('button: ', button);
  var todoList = document.querySelector('.todo-list');
  console.log('todoList: ', todoList);
  
  button.addEventListener('click', addListItem);
  input.addEventListener('keyup', addListItem);
  // CRUD create, read, update, delete
  // HTTP method post, get, put, delete
  var xhr = new XMLHttpRequest();
  xhr.open('get', '/toDoList', true);
  xhr.send(null);
  xhr.onreadystatechange = function(){
    if(this.readyState === 4){
      if(this.status === 200){
        console.log('this.responseText: ', this.responseText);
        var toDoItemList = JSON.parse(this.responseText);
        console.log('toDoItemList: ', toDoItemList);
        toDoItemList.forEach(function(item){
          console.log('item.task: ', item.task);
          insertItem(todoList, item.task, item.id);
        });
      }
      else{
        console.error('GET failed');
      }
    }
  }
})(window, document);