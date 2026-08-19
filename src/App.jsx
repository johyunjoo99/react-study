import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../src/styles/style.scss'
import './App.scss'

import Header from './component/Header'
import DayList from './component/DayList'
import Day from './component/Day'
import EmptyPage from './component/EmptyPage'

function App() {
  // BrowserRouter = 앱 전체에서 React Router를 사용할 수 있게 감싸는 최상위 영역
  //Routes = 현재 URL에 맞는 Route를 찾아서 해당 컴포넌트로 바꿔주는 영역
  
  return (
    <>
    <BrowserRouter>
      <Header/>
      <div className="wrap">
        <Routes>
          <Route path="/" element={<DayList/>}/>
          <Route path="/day/:day" element={<Day/>}/>
          <Route path="*" element={<EmptyPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
