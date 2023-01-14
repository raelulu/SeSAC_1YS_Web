import React from 'react'

export default function Quiz() {
    function randomInt(min, max) {
        var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum;
      }
      const fourArithmeticOperations = ["+", "*", "-"];
      const fourArr =
        fourArithmeticOperations[
          Math.floor(Math.random() * fourArithmeticOperations.length)
        ];
      const answer = () => {
      };
      return (
        <div>
          <p> {randomInt(1, 10)}</p>
          <p>{fourArr}</p>
          <p> {randomInt(1, 10)}</p>
          <input />
          <br />
          <br />
          <button onClick={answer}>정답 제출</button>
        </div>
      )
}

