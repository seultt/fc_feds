
import BookList from './bookList'


(function () {
  

  const bookList = new BookList();

  const routes = {
    '': bookList,
    'service': bookList,
    'about': bookList

  };

  function router() {
    // url의 hash를 취득
    const hash = location.hash.replace('#', '');
    console.log(hash);
    (routes[hash] || routes.otherwise).init();
  }

  window.addEventListener('hashchange', router);
  window.addEventListener('DOMContentLoaded', router);
}())




// import BookList from './bookList'


// (function () {
//   const bookList = new BookList()
//   bookList.init()
// }())

