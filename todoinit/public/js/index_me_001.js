// 즉시 실행 함수로 모듈 패턴 / 전역에 공개가 되지 않는다. 
(function(window,document) {
  // JavaScript의 유연함을 엄격한 문법으로 적용 시킨다.
  'use strict';

  // 코드의 재사용
  function addListItem(e){
    if(!input.value.trim()) return; // 빈 문자열 방어 코드
    // 실행할 함수 이벤트가 두개 이므로  조건문을 실행하여 키보드값 13이거나 click 이면둘중 하나면 실행이 되도록 설정
    if((e.keyCode===13) || e.type === 'click') {
      todoList.insertAdjacentHTML('beforeend', '<li>' + input.value +'<button class="delete">삭제</button></li>') // 비동기 누를 때마다 스택이 싸여 콜스택으로 빠져나옴
      input.value = ''; // 
      var delBTN = document.querySelectorAll('.delete');
      // console.log('delBTN: ', delBTN[delBTN.length-1]);
      delBTN[delBTN.length-1].addEventListener('click', function() {
        todoList.removeChild(delBTN[delBTN.length-1].parentNode);      
      });
      input.focus(); // focus API함수로  추가 버튼으로 넘어가는 포커스를 인풋에 포커스가 가도록 유지하게 만든다.
    }
  }

  var input = document.querySelector('.input');
  // console.log('input:', input);
  var button = document.querySelector('.button');
  // console.log('button:', button);
  var todoList = document.querySelector('.todo-list'); 
  console.log('todoList:', todoList);

  // button에 event를 걸어준다.
  button.addEventListener('click', addListItem);
  // input에 event를 걸어준다. 
  input.addEventListener('keyup', addListItem);

  var xhr = new XMLHttpRequest();
  xhr.open('get', '/toDoList', true);
  xhr.send(null); // undefined(실수 일부러 구분 안감) null 명시적으로 일부러 그런것을 알수 있다.
  xhr.onreadystatechange = function() {
    console.log(xhr);
    if(this.readyState === 4) {
      if(this.status === 200) {
        console.log('this.responseText: ', this.responseText);
        // console.log(typeof this.responseText); //string
        var toDoItemList = JSON.parse(this.responseText); // data로 변경
        console.log('data :', toDoItemList);
        // 순회, 멈출수 없다. 
        toDoItemList.forEach(function(item){
          console.log('item.task: ', item.task);
        });
      } else{
        console.error('GET failde');
      }
    }
  }

})(window, document);