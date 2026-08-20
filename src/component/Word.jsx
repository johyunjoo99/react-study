import { useState } from 'react'

const Word = ({ word, index }) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow(){
    setIsShow(!isShow);
  }

  function toggleDone(){
    setIsDone(!isDone);
  }

  return (
    <tr className={isDone ? 'off': ""}>
        {/* <th className="s">{index + 1}</th> */}
        <td className="s">
            <input type="checkbox" checked={isDone} onChange={toggleDone}/>
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
            <div className="btns">
                <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
                <button className="delete">삭제</button>
            </div>
        </td>
    </tr>
  )
}

export default Word