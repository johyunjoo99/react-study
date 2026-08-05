import React from 'react'

// 부모(TodoBoard)가 전달한 item과 deleteItem 사용
function TodoItem(props){
    return(
        <div className="todo-item">
            <p>{props.item}</p>
            <button 
                onClick={() => props.deleteItem(props.index)}
                //삭제는 TodoItem에서 버튼을 누르지만 실제 배열 변경은 App의 deletItem()이 수행함
            >삭제</button>
        </div>
    )
}

export default TodoItem

// 역할
// - Todo 한 개를 화면에 출력
// - 삭제 버튼 클릭 시 부모(App)에 삭제 요청