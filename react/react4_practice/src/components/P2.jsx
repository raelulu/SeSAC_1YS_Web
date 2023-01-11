import React from 'react'

export default function P2() {
    const name =  "로이"
    const animal = "강아지"
  return (
    <div>
    <h2>제 반려 동물의 이름은 <span className='under'>{name}</span> 입니다.</h2>
    <h2> <span className='under'>{name}</span>는 <span className='under'>{animal}</span>입니다. </h2>
    </div>
  )
}
