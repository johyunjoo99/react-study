import React from 'react'
import TodoItem from './TodoItem'

// 부모(App)에게 받은 todoList를 출력
function TodoBoard(props){
    return(
        <div>
            <h1>Todo List</h1>
            {
                // todoList를 하나씩 꺼내 TodoItem 컴포넌트 생성
                // map() : 배열을 반복하면서 새로운 요소를 만듦
                props.todoList.map((item, index) => <TodoItem 
                    key={index} // React가 각 요소를 구분하기 위한 고유값
                    item={item}
                    index={index} deleteItem={props.deleteItem}
                />)
                }
        </div>
    )
}

export default TodoBoard

// 역할
// - todoList를 반복(map)하여 TodoItem을 생성
