import { useState, useRef } from 'react'
import '../src/styles/style.scss'
import './App.scss'

function App() {
  const [stateCount, setStateCount] = useState(0);
  
  const refCount = useRef(0);
  // 변수처럼 값을 저장할 필요가 있는 변수
  // 단, UI 보일 필요 없는 것들에 사용
  
  let count = 0;

  return (
    <>
      <div>state: {stateCount}</div>
      <div>변수: {count}</div>
      <div>ref: {refCount.current}</div>
      <button onClick={() => setStateCount((prev) => prev + 1)}>state up</button>
      <button 
        onClick={() => {
            count++;
            console.log("변수", count);
          }
        }>변수 up</button>
      <button onClick={() => {
        refCount.current++;
        console.log("ref", refCount);
      }}>ref up</button>
    </>
  )
}

export default App
