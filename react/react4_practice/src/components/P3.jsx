import React from 'react'

export default function P3() {
    const count = "3+5==8 "
  return (
    <div>
    <span>
    {count ? '정답입니다!' : '오답입니다!'}
    </span>
    </div>
  )
}
