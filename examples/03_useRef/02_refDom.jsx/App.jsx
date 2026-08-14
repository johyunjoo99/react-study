import { useState, useRef } from 'react'
import '../src/styles/style.scss'
import './App.scss'

function App() {
  const inputEl = useRef(null);
  const topRef = useRef(null);
  console.log(inputEl);

  function ScrollToTop(){
    if(topRef.current){
      topRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <div>
        <input type="text" ref={inputEl}/>
        <button onClick={() => inputEl.current.focus()}>검색</button>
      </div>
      <div ref={topRef} style={{ height: "50vh", background: "lightblue" }}></div>
      <div style={{ height: "100vh", background: "lightpink" }}></div>
      <button onClick={ScrollToTop}>상단으로 스크롤</button>
    </>
  )
}

export default App
