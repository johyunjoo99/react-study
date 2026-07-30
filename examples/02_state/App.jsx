import { useState } from 'react'
import '../src/styles/style.scss'
import '../../src/App.css'

function App() {
  let count = 0

  // useState() = 값을 저장할 수 있게 해주는 React 기능 (함수)
  // count2 = 현재 저장되어 있는 값 (즉, useState(0)의 초기값은 0)
  // setCount2 = count2 값을 변경하는 함수
  // 즉, useState()는 [현재 값, 변경 함수] 형태의 배열을 반환함
  const [count2, setCount2] = useState(0);

  const increase = () => {
    // 일반 변수 방식
    // - 값을 변경해도 화면에 바로 반영되지 않음
    // - App 함수가 다시 실행되면 값이 초기화됨
    count = count + 1;
    
    // state 방식
    // - 값을 저장하고 변경할 수 있음
    // - 변경된 값은 React가 적용한 후 화면에 반영됨
    // - 따라서 console에는 반영 전 값이 출력됨
    setCount2(count2 + 1);
    
    console.log("count work?", count, "/ state Count2: ", count2);

    // 일반 변수
    // - 잠깐 사용하는 값을 저장할 때 사용

    // state
    // - 컴포넌트에서 관리해야 하는 값을 저장하는 방식
    // - state 값이 변경되면 React가 화면을 다시 업데이트함
    // - setState 직후에는 이전 값이 출력될 수 있음
  }

  return (
    <>
     <main>
      <div>{count}</div>
      <div>state: {count2}</div>
      <button onClick={increase}>증가</button>
     </main>
    </>
  )
}

export default App
