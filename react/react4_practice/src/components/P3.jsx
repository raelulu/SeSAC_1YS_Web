import React from 'react'
import { useState } from 'react'

export default function P3() {
  const [add, setAdd] =useState(0)

  function result(e){
    if (e.target.value==='') setAdd('')
    else e.target.value==='8'? setAdd('정답입니다!') : setAdd('오답입니다!')    
  }
  return (
    <div>
      3+5=
      <input type="text" onChange={result}/>
    <span>
      <div>{add}</div>
    </span>
    </div>
  )
}

