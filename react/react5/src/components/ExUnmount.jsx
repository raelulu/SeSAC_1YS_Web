import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import PracticeTimer from './PracticeTimer';

export default function ExUnmount() {
    const [show, setShow] = useState(false);
    const buttonChoice = useRef();
    const ChangeFocus = () => {
        buttonChoice.current.focus();
    }
  return (
    <div>
        {show && <PracticeTimer />}
         <button onClick={()=>{ setShow(!show); ChangeFocus();}}>보이기</button>
    </div>
  )
}
