import React from 'react'
import { useRef } from 'react';


export default function RandomQuiz() {
    const firstRandmNumber = Math.floor(Math.random() * 10);
    const secondRandmNumber = Math.floor(Math.random() * 10);
    const arithmeticArr = ['+','-','x'];
    const arithmetic = Math.floor(Math.random() * 3);

    let answer = 0;
    if (arithmetic === 0) {
        answer = firstRandmNumber + secondRandmNumber;
    }else if (arithmetic === 1) {
        answer = firstRandmNumber - secondRandmNumber;
    }else {
        answer = firstRandmNumber * secondRandmNumber;
    }
    const answerInput = useRef();
    const [again, setAgain] = useRef(false);

    const checkAnswer = () => {
        if (answer === Number(answerInput.current.value)){
            alert('정답입니다!')
            answerInput.current.value='';
            answerInput.current.focus();
            setAgain(!again);
        }else {
            alert('틀렸습니다. 다시 입력해주세요!')
            answerInput.current.value='';
            answerInput.current.focus();
        }
    }

  return (
    <div>
        <h1>
            {firstRandmNumber} {arithmeticArr[arithmetic]} {secondRandmNumber}
            <input ref={answerInput}/>
            <button onClick={checkAnswer}>정답 제출</button>
        </h1>
    </div>
  )
}
