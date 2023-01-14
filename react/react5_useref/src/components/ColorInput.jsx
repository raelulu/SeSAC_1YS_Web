import React from 'react'
import { useRef } from 'react'

export default function ColorInput() {
    const inputColor = useRef();
    const divColor = useRef();

    const changeColor = () => {
        divColor.current.style.backgroundColor = inputColor.current.value;
    };
    
  return (
    <div ref={divColor} >
        <input ref={inputColor}/>
        <br />
        <button onClick={changeColor}>색 적용</button>
    </div>
  )
}
