import React from 'react'
// React(Vite + React 17 이후)는 JSX 변환 방식이 바뀌어서 없어도 됨.
// 이전에는 필수였음

function Box(props){
    const ClickMe = () => {
        alert("리액트 강의를 마쳤습니다!");
    }
    
    return(
        <div className='box'>
          Box{props.num}
          <br />
          {props.name}  
          <button onClick={ClickMe}>Click!</button>
        </div>
    )
}

export default Box