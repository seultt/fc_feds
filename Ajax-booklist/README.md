1. 셋팅
  


2. 최대한 버그가 없는 상태에서 진행해야하면 중간에 test를 해야한다.

- 이미 어떤 포트가 사용중일 때 lsof -i tcp:3000 사용중인 port를 찾는 코드


```js
import Ajax from './ajax';
export default class BookList {
  // class 바디에는 메서드만 사용가능하다.
  constructor() {
    // class 안에서 전역 변수처럼 사용됨
    this.url = '/books'
    this.books = []
  }

  get lastBookId() {
    return !this.books.length ? 1 : Math.max(...this.books.map(({id}) => id)) +1
  }

  // html로 만들어주는 함수
  static makeHtmlTableRow({id, title, author, price, editable}) {
    let res = '';

    res = `html`
    return res
    
  }

  // 취득한 데이터를 바탕으로 html을 생성
  bindBooksToDom () {
      document.querySelector('tbody').innerHTML = const html = this.books.map(({id, title, author, price, editable}) => 
      BookList.makeHtmlTableRow({id, title, author, price, editable})).join('');
  }  

  init(){
    // booklist DB에서 데이터를 취득 후, 렌더링
    Ajax.get(this.url)
    .then(data => {
      this.books = JSON.parse(data) // 문자열을 객체화 시킴 // this.books에 담은 이유는 add를 할때 다시읽어 와서 푸시를 해야하기 때문에 booksdp ekasmsek.
      console.log(data)
      // this.makeHtmlTableRow(data)
      // 요소를 셋팅을 객체 디스럭쳐링화 한다. 객체의 프로퍼티 네임의 값으로 빼온다.
      
        console.log(this.books)
        this.bindBooksToDom()
        //bindEvent 실행
        this.bindEvent()
    })    
  }

  // 이벤트들을 포함하는 메서드들을 만든다.
  bindEvent() {
    // 이 node가 취득해야하는 타이밍에 넣으면 좋다. add 버튼은 항상 취득할 수 있는 곳이기 때문에 가능하다.
    document.getElementById('add').addEventListener('click' () => {
      console.log('add button click!') // 동작하는지 확인 시켜야한다.
      this.books.push({
        id: this.lastBookId,
        title: '',
        author: '',
        status: 'new', // new(post)와 갱신(post) 불러야할 API가 다르기 때문에 구분해 줘야한다. 
        editable: ture //input의 상태가 ture이다.
      }) 
      //books 배열을 가지고 다시 html로직을 생성한다.
      this.bindBooksToDom()
    })

    // edit 버튼
    cocument.querySelector('tbody').addEventListener('click', e => {
      // 조건(이벤트 타겟이 있어야하며 노드 name이 button이여야한다.)
      if (!e.target || e.target.nodeName !== 'BUTTON') return
      console.log(e)
      // 이벤트를 발생시킨 버튼이 소속된 book의 id
      const targetId = e.target.dataset.item * 1;  // 항상 string으로 가져오기 때문에 number로 바꿔줘야한다. 
      const { type } = e.target.dataset;

      console.log(targetId, type) // 1 "edit"

      switch (type) {
        //case가 edit이면 bokks의 row와 기존의 id값이 일치하는것을 book.editable  true로 변경 book.status = 'edited' 로 변경
        // 위의 조건을 가지고 인풋 박스로 변경된다.
        // calce이면 editable을 false로 변경 되며  bindbooks를 불러 다시 불른다.
        // save 일때 수정 버튼이냐  add냐에 따라 status를 변경 new = post  
        // delet 타겟 아이디를 가지고 books 배열을 지우고 db에서 지움 아니면 db에서 지우고 그 결과를 books에 넣어 준다..  
      }
    })
  }

}

```

