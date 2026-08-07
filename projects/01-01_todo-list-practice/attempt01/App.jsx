import { useState } from 'react'
import '../src/styles/style.scss'
import '../../01-01_todo-list-practice/App.scss'
import TodoBoard from '../projects/01-01_todo-list-practice/attempt01/component/TodoBoard'

function App() {
  //state
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  //function
  const addItem = () => {
    setTodoList([...todoList, inputValue])
  }

  const removeItem = (index) => {
    setTodoList(todoList.filter((item, i) => {
      return i != index
    }))
  }

  return (
    <>
      <main>
        <div className="form-box">
          <input 
            type="text" 
            placeholder="할 일을 입력해주세요." 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addItem}>추가</button>
        </div>
        <TodoBoard
          todoList={todoList}
          removeItem={removeItem}
        />
      </main>
    </>
  )
}

export default App
