import React from 'react'
import { useState, useRef } from 'react'

export default function TestRef() {
    const [text, setText] = useState('안녕하세요');

    const inputValue = useRef();

    function onChangeText() {
        console.log(inputValue);
        setText(inputValue.current.value);
    } 

  return (
    <div>
        <h1>{text}</h1>
        <input ref={inputValue} onChange={onChangeText} />
    </div>
  )
}
