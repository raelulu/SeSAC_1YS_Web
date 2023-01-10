import React from 'react'

export default function P5() {
    const title = "Hello World"
  return (
    <div>
        <h1 className='test'>{title}</h1>
        <div>아이디: <input className='inp'></input></div>
        <div>비밀번호: <input className='inp'></input></div>
    </div>
  )
}
