import React from 'react'

function TodoBoard(props) {
  return (
    <div className="todo-board">
        <h1>TODO LIST</h1>
        <div>
            {
                props.todoList.map((item, index) => 
                    <div className="todo-item" key={index}>
                        <p>{item}</p>
                        <button onClick={()=> props.removeItem(index)}>삭제</button>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default TodoBoard
