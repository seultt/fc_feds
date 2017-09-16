import Ajax from './ajax';
export default class BookList {
  // class 바디에는 메서드만 사용가능하다.
  constructor() {
    // class 안에서 전역 변수처럼 사용됨
    this.url = '/books';
    this.books = [];
  };

  // DOM 그려주기
  static makeHtmlTableRow ({id, title, author, price, editable}) {
    let res = '';
    const isEditable = editable || (editable === 'true');

    if(isEditable) {
      console.log(res)
      res = `<tr class="row-${id}">
        <th>${id}</th>
        <td><input type="text" class="form-control" id="title" name="title" value="${title}"></td>
        <td><input type="text" class="form-control" id="author" name="author" value="${author}"></td>
        <td><input type="text" class="form-control" id="price" name="price" value="${price}"></td>
        <td>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" data-item="${id}" data-type="save">
              <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <button type="button" class="btn btn-default" data-item="${id}" data-type="cancel">
              <i class="fa fa-ban" aria-hidden="true"></i>
            </button>
            <button type="button" class="btn btn-default" data-item="${id}" data-type="delete">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </div>
        </td>
      </tr>`;
    } else {
      res = `<tr class="row-${id}">
        <th>${id}</th>
        <td>${title}</td>
        <td>${author}</td>
        <td>${(price * 1).toLocaleString()}</td>
        <td>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" data-item="${id}" data-type="edit">
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button type="button" class="btn btn-default" data-item="${id}" data-type="delete">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </div>
        </td>
      </tr>`;
    }
    
    return res;
  };

  //
  bindBooksToDom(){
    const html = this.books.map(({ id, title, author, price, editable }) => BookList.makeHtmlTableRow({ id, title, author, price, editable })).join('');
    // console.log(html);
    document.querySelector('tbody').innerHTML = html;
  }


  // bookList view 초기화
  init(){
    console.log(this)
    Ajax.get(this.url)
    .then(data => {
      // console.log(data, typeof data);
      this.books = JSON.parse(data);
      this.bindBooksToDom();
      this.bindEvent();
    });
  };


  bindEvent(){
    document.querySelector('#btn-add').addEventListener('click', (e) => {
      // console.log('add Event onlead')
      this.books.push({
        id: !this.books.length ? 1 : Math.max(...this.books.map(({id})=>id)) +1, // id가 제일 큰 값을 가져와 +1 시킨다.
        title:'',
        author:'',
        price: '',
        editable: true,
        status: 'new'
      });
      this.bindBooksToDom();
    });

    document.querySelector('tbody').addEventListener('click', (e) => {
      // console.log(!e.target || e.target.nodeName !== 'BUTTON' )
      if( !e.target || e.target.nodeName !== 'BUTTON' ) return
      const targetId = parseInt(e.target.dataset.item)  
      // console.log(targetId) // bug 발견ㅋㅋ i태그를 클릭시 이벤트가 발생하지 않는다. 위 조건을 빼면 NaN으로 나옴
      const { type } = e.target.dataset;
      switch (type) {
        
        case 'edit':{
          this.books.forEach( item => {
            if(item.id === targetId){
              item.editable = true;
              item.status = "edited";
            }      
          });
          this.bindBooksToDom();
          // console.log(`[EDIT: ${targetId}]`, this.books)
          break;
        }

        case 'save':{
          let title = document.querySelector('#title').value;
          let author= document.querySelector('#author').value;
          let price= document.querySelector('#price').value;

          if(!title) { console.log('??'); return document.querySelector('#title').setAttribute('placeholder', 'title을 입력하세요')}
          
          this.books.forEach(item => {
            if(item.id === targetId){
              

              const addData = { id: Math.max(...this.books.map(({id}) => id)), title:title, author:author, price:price, editable: false, status: '' } ;
              const editData = { id:item.id, title:title, author:author, price:price, editable: false, status:''};

              if(item.status === 'new') {
                console.log('new');

                Ajax.post(this.url, addData)
                .then(data => {
                  this.books = JSON.parse(data);
                  console.log(this.books);
                  this.bindBooksToDom();
                });
              } else if (item.status === 'edited') {
                console.log('edited');
                Ajax.put(this.url, item.id, editData)
                .then( data => {
                  console.log(data)
                  this.books =JSON.parse(data);
                  this.bindBooksToDom();
                })
              }

            };
          });
          break;
        }

        case 'delete':{
          const targetId = parseInt(e.target.dataset.item)

          Ajax.delete(this.url, targetId )
          .then(data =>{
            this.books = JSON.parse(data);
            console.log(this.books);
            this.bindBooksToDom();
          });
          break;
        }

        case 'cancel':{
          Ajax.get(this.url)
          .then(data => {
            // console.log(data, typeof data);
            this.books = JSON.parse(data);
            this.bindBooksToDom();
          });
        }

        
        default:{ break; }
          
      };

    });
  };
 
  
};