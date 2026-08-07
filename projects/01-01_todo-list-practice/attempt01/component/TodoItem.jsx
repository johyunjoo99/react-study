import React from 'react'

function TodoItem(props){
    return (
        <div className="todo-item">
            <p>{props.item}</p>
            <button onClick={() => props.removeItem(props.index)}>삭제</button>
        </div>
    )
}

export default TodoItem
