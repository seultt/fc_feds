import Ajax from './ajax'

(function () {
  const getBtn = document.querySelector('#getBtn')
  const postBtn = document.querySelector('#postBtn')
  const putBtn = document.querySelector('#putBtn')
  const delBtn = document.querySelector('#delBtn')
  const viewer = document.querySelector('.viewer')
  
  

  // get btn
  getBtn.addEventListener('click', () => {
    const userid = document.querySelector('#user_id').value
    Ajax.getUsers(`/users/${userid}`)
    .then((res) => {
      console.log('responseText: ', res, typeof res)
      viewer.innerHTML = JSON.stringify(JSON.parse(res), null, 2)
    }).catch((e) =>console.log(e))
  })


  // post btn
  postBtn.addEventListener('click', () => {
    const userid = document.querySelector('#user_id').value
    const userpw = document.querySelector('#user_pw').value
    const userFirst = document.querySelector('#user_first').value
    const userLast = document.querySelector('#user_last').value
    const email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i


    if(!userid) {
      alert('이메일 입력하구!!')
    } else {
      if(email.test(userid)){
        let xhr = new XMLHttpRequest()
        xhr.open('POST', '/users')
        // request body에 담아 전송할 데이터의 MIME-type의 정보를 표현한다. applicatio 타입
        xhr.setRequestHeader('Content-type', 'application/json')

        const data = {userid: userid,
          password: userpw,
          firstname: userFirst,
          lastname: userLast}
        xhr.send(JSON.stringify(data))
      } else {
        alert('이메일 아니라고!!')
      }
    }
  })

/*
  // put btn
  putBtn.addEventListener('click', () => {
    let xhr = new XMLHttpRequest()
    const userid = document.querySelector('#user_id').value
    const userpw = document.querySelector('#user_pw').value
    const userFirst = document.querySelector('#user_first').value
    const userLast = document.querySelector('#user_last').value    
    xhr.open('PUT', `/users/${userid}`)
    xhr.setRequestHeader('content-type', 'application/json')

    let data = {userid: userid,
      password: userpw,
      firstname: userFirst,
      lastname: userLast}
    xhr.send(JSON.stringify(data))
  })

  delBtn.addEventListener('click', () => {
    const userid = document.querySelector('#user_id').value
    let xhr = new XMLHttpRequest()
    xhr.open('DELETE', `/users/${userid}`)
    xhr.send(null)
    xhr.onreadystatechange = function(){
      if(this.readyState === 4) {
        if(this.status === 200){
          console.log('this.responseText: ', xhr.responseText)
        }
      }
    }

  })*/
    
})()