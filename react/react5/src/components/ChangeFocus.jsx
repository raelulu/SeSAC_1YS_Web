import React from 'react'
import { useRef } from 'react'

export default function ChangeFocus() {
    const input1 = useRef();
    const input2 = useRef();
    
    const changFocusOne = () => {
        input1.current.focus();
    };
    const changFocusTwo = () => {
        input2.current.focus();
    };

  return (
    <div>
        <input ref={input1} />
        <input ref={input2} />
        <br/>
        <button onClick={changFocusOne}>1번</button>
        <button onClick={changFocusTwo}>2번</button>
    </div>
  )
}
