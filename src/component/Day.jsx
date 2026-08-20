import { useState, useEffect } from 'react'
import Word from '../component/Word'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const Day = () => {
    const day = useParams().day;
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    // const [words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res => {
    //       return res.json()
    //     })
    //     .then(data => {
    //         setWords(data);
    //     })
    // }, [day]);

  return (
    <>
        <div className="word_table">
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map((word, index) => 
                        <Word word={word} key={word.id} index={index}/>
                    )}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Day