import React from 'react'
import TodoItem from './TodoItem'

function TodoBoard(props){
    return (
        <div className="todo-board">
            <h1>TODO LIST</h1>
            <div className="todo-list">
                {
                    props.todoList.map((item, index) => {
                        return <TodoItem key={index} index={index} item={item} removeItem={props.removeItem}/>
                    })
                }
            </div>
        </div>
    )
}

export default TodoBoard