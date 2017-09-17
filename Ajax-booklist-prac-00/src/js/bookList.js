import Ajax from './ajax';
export default class BookList {
  constructor() {
    this.url = '/books';
    this.books = [];
  }

  static makeHtmlTableRow({ id, title, author, price, editable }) {
    let res = '';

    res = `<tr>
          <th>${id}</th>
          <td>${title}</td>
          <td>${author}</td>
          <td>${price}</td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-default">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button type="button" class="btn btn-default">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
              </button>
            </div>
          </td>
        </tr>`;
    return res;
  }

  // thbody in html
  bindBooksToDome() {
    const html = this.books.map(({ id, title, author, price, editable }) => BookList.makeHtmlTableRow({ id, title, author, price, editable })).join('');

    document.querySelector('tbody').innerHTML = html;
  }


  init() {
    Ajax.get(this.url)
      .then(data => {
        this.books = JSON.parse(data);
        this.bindBooksToDome();
      });
  };
}