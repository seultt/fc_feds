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
