export default class Ajax {
  static getUsers(url){
    return new Promise((resolve, reject) => {

      let xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.send(null)
      xhr.onreadystatechange = function () {
        if(xhr.readyState === 4){
          if(xhr.status === 200) {
            resolve(xhr.responseText)
          }
          else{
            reject(req.statusText)
          }
        }
      }
    })
  }
}