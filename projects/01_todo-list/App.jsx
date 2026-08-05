import { useState } from 'react'
import TodoBoard from "../projects/01_todo-list/component/TotoBoard"
import '../src/styles/style.scss'
import './App.css'

// ========================
// Todo 흐름
// 1. input 입력 → inputValue 저장
// 2. 추가 버튼 클릭 → todoList에 추가
// 3. App이 state를 변경
// 4. TodoBoard가 map()으로 목록 생성
// 5. TodoItem이 화면에 출력
// 6. 삭제 버튼 클릭 → App의 deleteItem() 실행
// ========================
function App() {
  // input에 입력한 값을 저장하는 state
  const [inputValue, setInputValue] = useState('');

  // Todo 목록을 저장하는 state
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    // 기존 배열을 복사(...)한 뒤 새로운 값을 추가
    // React에서는 기존 배열을 직접 수정하지 않고 복사해 새 배열을 만들어 state를 변경함
    setTodoList([...todoList, inputValue])
  };

  const deleteItem = (index) => {
    // 클릭한 index를 제외한 새로운 배열 생성
    // filter는 조건을 만족하는 요소만 새로운 배열로 반환함
    setTodoList(todoList.filter((item, i) => i !== index));
  };

  return (
    <>
     <main>
        <div className="form-box">
          <input type="text" 
            value={inputValue} 

            //입력할 때마다 state를 업데이트
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button onClick={addItem}>추가</button>
        </div>

        <div className="todo-list">
          <TodoBoard 
            todoList={todoList} 
            deleteItem={deleteItem}
          />
        </div>
      </main>
    </>
  )
}

export default App

// 역할
// - Todo 데이터를 관리하는 부모 컴포넌트
// - 추가/삭제 기능 담당
