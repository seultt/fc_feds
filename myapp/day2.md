componunt 모듈화
export , import

componunt 재사용 propce 를 이용하여  props.children 


javascript 데이타 스크립쳐를 사용하여 array이를 이용한 
객체화

props는 해당 component는 값을 변경할 수 없다..

component = view를 생성하는 function

함수 내에서 함수의 입력값을 바꾸는 것
수동적인 종속적인 존재는 아니지만  

imutealbe을 강제로 되지는 않지만
component안의 this.state는 변경이 가능하다  setState를 사용하여 변경이 가능하다.

state를 올바르게 다루는 팁

- this.state를 직접바꾸지 말자
- this.statesms merge가 된다.

state는 해당 component에서만 사용이 될까?

하위 컴포넌트 props를 이용하여 다른component에서 child로 사용한다.


componunt에서 render 함수 는 꼭 있어야한다.
//stateless component 


onclick에서는 호출 함수를 넣어주면 안된다. call steck 만 계속 쌓임


git fetch -p

git branch

git checkout Add-Scoreboard-Practice


component는 생명주기가 있다?


HOOK을 제공
고리의 개념 !! 중요(=생명주기 함수)


constructer는 class가 만들어 질때만 실행된다.(= 생명주기 함수)

componentDidMount method  
componentWillUnmount method


warning : 

key  componunt 주석 처리


react => component 
      => Diff 알고리즘
        브라우저에서 웹페이지를 만들 때  수정 되는 부분만 찾아서 수정


        map 같은 경우에는 array 개수를 알 수 없어
        array rendering 할 경우에는 key 값을 넣어 줘야한다. 

console.log 순서?

conponent 안에서만 자급자급 햇지만
외부 API에 값을 넘겨주거나 아니면 받아올 수 있는데


실습
<clock />


LETS ADD RPUTING!!

REACT-ROUTER V4
이것이 작동하는 이유를 알자!!

window.location.pathname
window.location 브라우저 로케이션 위치


window.location.href = "http://www.google.com"
라우팅 을 자유 자제로 바꿀 수 있다.


react router DOM 을 이용하여 연결해 보자!!



/quizes/:quizName  quiz내에 props를 추가로 받아 올 수 있다.

quiz vkdlfdp 

componentDidMound  = () => {
  con
}