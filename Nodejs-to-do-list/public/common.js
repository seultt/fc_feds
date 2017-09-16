function render({ target, templatePath, dataPath, queryFrom = document }) {
  // 템플릿 가져오기
  const templatePromise = axios.get(templatePath) //응답객체

  // 데이터 가져오기
  const dataPromise = axios.get(dataPath)

  // 둘다 완료되면...
  return Promise.all([templatePromise, dataPromise])
    .then(([templateRes, dataRes]) => {
      // 템플릿 렌더링하기
      const html = ejs.render(templateRes.data, {
        todos: dataRes.data
      })

      // 렌더링 결과를 문서에 주입하기
      const targetEl = queryFrom.querySelector(target)
      targetEl.innerHTML = html // html 이스케이핑 하는 경우(템플릿 엔진)에는 innerHTML을 사용해도 안전하다.
      return targetEl
    })

  // 위에서 Promise를 반환하고 있기 때문에 render 함수의 반환값에 `.then`을 이어붙일 수 있습니다.
}
