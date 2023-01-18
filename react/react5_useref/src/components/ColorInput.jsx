import React from 'react';
import { useRef } from 'react';

export default function ColorInput() {
  const inputEl = useRef();
  const backColor = useRef();

  const changeColor = () => {
    backColor.current.style.backgroundColor = inputEl.current.value;
  };
  return (
    <div ref={backColor}>
      <input ref={inputEl} type="text" />
      <br />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
