import React from 'react'
import dummy from '../db/data.json'
import { useParams } from 'react-router-dom'

const Day = () => {
    const day = useParams().day;
    const wordList = dummy.words.filter(word => word.day === Number(day))

    //console.log(wordList);

  return (
    <>
        <div className="word_table">
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map((word, index) => 
                        <tr key={word.id}>
                            <th>{index + 1}</th>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Day